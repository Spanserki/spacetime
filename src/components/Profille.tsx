import { getUser } from "@/lib/authCookies";
import Image from "next/image";

export default function Profille() {
    const { name, avatar_url } = getUser();
    return (
        <div className="flex items-center gap-4">
            <Image
                src={avatar_url}
                alt="Foto perfil"
                width={40}
                height={40}
                className="w-14 h-14 rounded-full"
            />
            <p className="max-w-[140px] text-sm leading-snug">
                {name}
                <a href="/api/auth/logout" className="block text-red-400 transition-colors hover:text-red-300">
                    Quero sair
                </a>
            </p>
        </div>
    )
}