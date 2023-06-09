import { MemoriesProps } from "@/@types";
import { FormatDate } from "@/utils/formatDate";
import { FormatDistanceDate } from "@/utils/formatDistanceDate";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FullMemories({ id, coverUrl, content, createdAt }: MemoriesProps) {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <p
                className="text-sm"
                title={FormatDate(createdAt)}
            >
                {FormatDistanceDate(createdAt)}
            </p>
            <Image
                src={coverUrl}
                alt=""
                width={900}
                height={100}
                className="w-full h-72 object-cover rounded"
            />
            <p className="line-clamp-2">
                {content}
            </p>
            <Link
                href={`/memorias/${id}`}
                className="flex max-w-fit items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
                Leia mais
                <ArrowRight size={16} />
            </Link>
        </div>
    )
}