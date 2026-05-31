import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface MessageComposerProps {
    conversationId: string
}

export default function MessageComposer({ conversationId }: MessageComposerProps) {
    const [draft, setDraft] = useState("")

    function handleSend(event: React.FormEvent) {
        event.preventDefault()

        const trimmed = draft.trim()
        if (!trimmed) return

        // Fake send for now — just log it. Real Kafka publish comes later.
        console.log("Sending message:", {
            conversationId,
            content: trimmed,
        })

        setDraft("")
    }

    return (
        <form
            onSubmit={handleSend}
            className="border-t border-slate-800 px-4 py-3 flex gap-2"
        >
            <Input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
                autoComplete="off"
            />
            <Button type="submit" disabled={!draft.trim()}>
                Send
            </Button>
        </form>
    )
}