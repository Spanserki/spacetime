import EmptyMemories from "@/components/EmptyMemories"
import { api } from "@/lib/api";
import { Suspense } from "react";
import Loading from "./loading";
import FullMemories from "@/components/FullMemories";

export default async function Home() {
  const res = await api.get('/memories');
  return (
    <Suspense fallback={<Loading />}>
      {!!res ? (
        <FullMemories />
      ) : (
        <EmptyMemories />
      )}
    </Suspense>
  )
}
