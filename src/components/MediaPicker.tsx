'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker() {
    const [preview, setPreview] = useState<string | null>(null)
    function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.target
        if (!files) {
            return
        }
        const previuUrl = URL.createObjectURL(files[0])
        setPreview(previuUrl)
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
                <img
                    src={preview}
                    alt=""
                    className="aspect-video w-96 rounded-lg object-cover mr-2 bg-gray-600"
                />
            )}
        </div>
    )
} 