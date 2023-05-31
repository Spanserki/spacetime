'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker() {
    const [preview, setPreview] = useState<string[]>([])
    function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.target
        if (!files) {
            return
        }
        const previuUrl = URL.createObjectURL(files[0])
        setPreview(previusState => [...previusState, previuUrl])
    }
    return (
        <div className="flex py-2 overflow-x-auto">
            <input
                onChange={onFileSelected}
                type="file"
                name="coverUrl"
                id="media"
                accept="image/*"
                className="invisible h-0 w-0"
            />
            {!!preview && (
                preview.map(img => {
                    return (
                        <img
                            key={img}
                            src={img}
                            alt=""
                            className="aspect-video w-32 rounded-lg object-cover mr-2 bg-gray-600"
                        />
                    )
                })
            )}
        </div>
    )
} 