import EmptyMemories from "@/components/EmptyMemories"
import { api } from "@/lib/api";
import { Suspense } from "react";
import Loading from "./loading";
import FullMemories from "@/components/FullMemories";
import { MemoriesProps } from "@/@types";
import { cookies } from "next/dist/client/components/headers";
import { getUser } from "@/lib/authCookies";

export default async function Home() {
  const IsAuthorization = cookies().has('token_client_github')
  if (!!IsAuthorization) {
    const { sub } = getUser();
    const { data } = await api.get(`/memories`, {
      params: { sub }
    });
    return (
      <Suspense fallback={<Loading />}>
        {!!data && !!IsAuthorization ? (
          data.map((memorie: MemoriesProps) => {
            return (
              <FullMemories
                key={memorie.id}
                id={memorie.id}
                coverUrl={memorie.coverUrl}
                content={memorie.content}
                createdAt={memorie.createdAt}
              />
            )
          })
        ) : (
          <></>
        )}
      </Suspense>
    )
  }
  if (!IsAuthorization) {
    return (
      <EmptyMemories />
    )
  }
}
