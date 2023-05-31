import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FullMemories() {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Image
                src='https://img.freepik.com/fotos-gratis/montanhas-nevadas-nos-papeis-de-parede-de-inverno_1340-25657.jpg?size=626&ext=jpg&uid=R102329856&ga=GA1.1.1528655848.1682381681'
                alt=""
                width={900}
                height={100}
                className="w-full h-72 object-cover rounded"
            />
            <p className="line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt commodi beatae repudiandae labore, aut ad natus reprehenderit eaque, officia nulla. Perspiciatis eum labore, illum error impedit molestiae? Corporis, provident.

            </p>
            <Link
                href={`/memories}`}
                className="flex max-w-fit items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
                Leia mais
                <ArrowRight size={16} />
            </Link>
        </div>
    )
}