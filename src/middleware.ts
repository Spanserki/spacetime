import { NextRequest, NextResponse } from "next/server"
import { systemConfigs } from "./utils/config"

const signIn = `${systemConfigs.UrlGitHubAuth}/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token_client_github')?.value
    if (!token) {
        return NextResponse.redirect(signIn, {
            headers: {
                'Set-Cookie': `redirectTo=${req.url}; Path=/; HttpOnly; max-age=20;`
            }
        })
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/memories/:path*'
}