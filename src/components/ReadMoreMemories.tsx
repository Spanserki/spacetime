import { MemoriesProps } from "@/@types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReadMoreMemories({ coverUrl, content, createdAt }: MemoriesProps) {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Image
                src={coverUrl}
                alt=""
                width={900}
                height={100}
                className="w-full h-72 object-cover rounded"
            />
            <p>
                {content}
            </p>
            <Link
                href={`/`}
                className="flex max-w-fit items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
                <ArrowLeft size={16} />
                Voltar as memórias
            </Link>
        </div>
    )
}