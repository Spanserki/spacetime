import { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const memories = await prisma.memory.findUnique({
        where: {
            id: String(id)
        },
    })
    if (!memories) {
        return new Response(JSON.stringify({ message: 'Memória não encontrada' }), { status: 400 })
    }
    return new Response(JSON.stringify(memories), { status: 200 })
}