import { NextRequest } from "next/server"
import { prisma } from "../../../lib/prisma";
import { getUser } from "@/lib/authCookies";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const memories = await prisma.memory.findMany({
        where: {
            user: {
                githubId: Number(id)
            },
            isPublic: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    if (!memories) {
        return new Response(JSON.stringify({ message: 'Memórias não encontradas' }), { status: 400 })
    }
    return new Response(JSON.stringify(memories), { status: 200 })
}

export async function POST(req: NextRequest) {
    const { sub } = getUser();
    const body = await req.json()
    const { coverUrl, content, isPublic } = body;
    const createMemory = await prisma.memory.create({
        data: {
            coverUrl,
            content,
            isPublic: Boolean(isPublic),
            user: {
                connect: { githubId: Number(sub) }
            }
        }
    })
    if (!createMemory) {
        return new Response(JSON.stringify({ message: 'Algo deu errado, tente novamemte mais tarde!' }))
    }
    return new Response(JSON.stringify({ message: 'Memória criada com sucesso!' }))
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const { coverUrl, content, memoryId } = body;
    const updateMemory = await prisma.memory.update({
        where: {
            id: memoryId
        },
        data: {
            coverUrl,
            content
        }
    })
    if (!updateMemory) {
        return new Response(JSON.stringify({ message: 'Algo deu errado, tente novamemte mais tarde!' }))
    }
    return new Response(JSON.stringify({ message: 'Memória atualizada com sucesso!' }))
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const memoryId = searchParams.get('memoryId');
    const deleteMemory = await prisma.memory.delete({
        where: {
            id: String(memoryId)
        }
    })
    if (!deleteMemory) {
        return new Response(JSON.stringify({ message: 'Algo deu errado, tente novamemte mais tarde!' }))
    }
    return new Response(JSON.stringify({ message: 'Exclusão feita com sucesso!' }))
}