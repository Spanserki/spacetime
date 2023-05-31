'use client'

import { Camera } from "lucide-react";
import { MediaPicker } from "./MediaPicker";
import { FormEvent } from "react";

export default function NewMemoryForm() {
    function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        console.log(Array.from(formData.entries()))
    }
    return (
        <form
            onSubmit={handleCreateMemory}
            className="flex flex-col flex-1 gap-2"
        >
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label
                        htmlFor="media"
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
                </div>
                <MediaPicker />
            </div>
            <textarea
                name="content"
                className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
                placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
            />
            <button
                type="submit"
                className="
                    bg-green-600 
                    text-black 
                    font-bold 
                    leading-relaxed 
                    self-end 
                    rounded-full 
                    px-4 
                    py-1
                    transition-colors
                    hover:bg-green-700
                "
            >
                Salvar
            </button>
        </form >
    )
}