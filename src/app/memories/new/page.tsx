import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemorie() {
    return (
        <div className="flex flex-col h-full gap-4">
            <Link
                href='/'
                className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
                <ChevronLeft className="h-4 w-4" />
                Voltar a timeline
            </Link>
            <form className="flex flex-col flex-1 gap-2">
                <div className="flex gap-4">
                    <label
                        htmlFor="midia"
                        className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                        <Camera className="h-4 w-4" />
                        Anexar midia
                    </label>
                    <label
                        htmlFor="isPublic"
                        className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
                    >
                        <input
                            type="checkbox"
                            name="isPublic"
                            id="isPublic"
                            value='true'
                            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 focus:ring-transparent"
                        />
                        Tornar memória pública
                    </label>
                    <input type="file" id="midia" className="invisible" />
                </div>
                <textarea
                    name="content"
                    className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
                    placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
                />
            </form>
        </div>
    )
}