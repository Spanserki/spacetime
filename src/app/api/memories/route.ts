import { NextRequest } from "next/server"
import { prisma } from "../../../lib/prisma";

export async function GET(req: NextRequest) {
    const memories = await prisma.memory.findMany({
        orderBy: {
            createdAt: 'asc'
        }
    });
    if (!memories) {
        return new Response(JSON.stringify({ message: 'Memórias não encontradas' }), { status: 400 })
    }
    return new Response(JSON.stringify(memories), { status: 200 })
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { coverUrl, content, userId } = body;
    const createMemory = await prisma.memory.create({
        data: {
            coverUrl,
            content,
            user: {
                connect: { id: userId }
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