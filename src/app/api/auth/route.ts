import { prisma } from '@/lib/prisma';
import { systemConfigs } from '@/utils/config';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code')
    const redirectTo = req.cookies.get('redirectTo')?.value
    //Enviamos os parametros criados no oAuth do GitHub
    const accessTokenResponse = await axios.post(`${systemConfigs.UrlGitHubAuth}/access_token`, null, {
        params: {
            client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
            client_secret: process.env.NEXT_PRIVATE_GITHUB_CLIENT_SECRET_ID,
            code
        },
        headers: {
            Accept: 'application/json'
        }
    })
    const { access_token } = await accessTokenResponse.data; //extraimos o token de dentro da resposta  
    //Enviamos o token criado para a API de autenticação do GitHUb, ela nos retornara os dados do usuário
    const userResponse = await axios.get(`${systemConfigs.UrlGitHubUser}`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    //Cadastrar o usuário no banco
    const { id, login, name, avatar_url } = userResponse.data;
    let getUser = await prisma.user.findUnique({
        where: {
            githubId: id
        }
    })
    if (!getUser) {
        await prisma.user.create({
            data: {
                githubId: id,
                name,
                login,
                avatarUrl: avatar_url,
            }
        })
    }
    const token = jwt.sign({ name, avatar_url }, `${process.env.JWT_SECRET_CLIENT}`, {
        subject: String(id),
        expiresIn: '30 days'
    })
    const redirectUrl = redirectTo ?? new URL('/', req.url);
    const cookiesExpiresSeconds = 60 * 60 * 24 * 30;
    return NextResponse.redirect(redirectUrl, {
        headers: {
            'Set-Cookie': `token_client_github=${token}; Path=/; max-age=${cookiesExpiresSeconds};`
        }
    })
}

//Auth Mobile
export async function POST(req: NextRequest) {
    const body = await req.json();
    const { code } = body;
    console.log(code)
    //Enviamos os parametros criados no oAuth do GitHub
    const accessTokenResponse = await axios.post(`${systemConfigs.UrlGitHubAuth}/access_token`, null, {
        params: {
            client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID_MOBILE,
            client_secret: process.env.NEXT_PRIVATE_GITHUB_CLIENT_SECRET_ID_MOBILE,
            code
        },
        headers: {
            Accept: 'application/json'
        }
    })
    const { access_token } = await accessTokenResponse.data; //extraimos o token de dentro da resposta  
    //Enviamos o token criado para a API de autenticação do GitHUb, ela nos retornara os dados do usuário
    const userResponse = await axios.get(`${systemConfigs.UrlGitHubUser}`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    //Cadastrar o usuário no banco
    const { id, login, name, avatar_url } = userResponse.data;
    let getUser = await prisma.user.findUnique({
        where: {
            githubId: id
        }
    })
    if (!getUser) {
        await prisma.user.create({
            data: {
                githubId: id,
                name,
                login,
                avatarUrl: avatar_url,
            }
        })
    }
    const token = jwt.sign({ name, avatar_url }, `${process.env.JWT_SECRET_CLIENT}`, {
        subject: String(id),
        expiresIn: '30 days'
    })
    return new Response(JSON.stringify(token))
}