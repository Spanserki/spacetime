"use client"

import Loading from "@/app/loading";
import ReadMoreMemories from "@/components/ReadMoreMemories";
import { api } from "@/lib/api";
import { useParams } from "next/navigation";
import { Suspense } from "react";

export default async function Detalhes() {
    const params = useParams();
    const { id } = params;
    if (!id) {
        return
    }
    const { data } = await api.get(`/memories/details`, {
        params: { id }
    })
    return (
        <Suspense fallback={<Loading />}>
            <ReadMoreMemories
                coverUrl={data.coverUrl}
                content={data.content}
                createdAt={data.createdAt}
            />
        </Suspense>
    )
}