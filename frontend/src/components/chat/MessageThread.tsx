import { useEffect, useRef } from "react"
import { fakeMessages, fakeConversations } from "@/data/fakeData"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessagesSquare } from "lucide-react"
import MessageComposer from "@/components/chat/MessageComposer"
import UserAvatar from "@/components/chat/UserAvatar"

interface MessageThreadProps {
    conversationId: string | null
}

export default function MessageThread({ conversationId }: MessageThreadProps) {
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "auto" })
    }, [conversationId])

    if (!conversationId) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <div className="rounded-full bg-slate-800 p-6 mb-4">
                    <MessagesSquare className="h-12 w-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200">
                    Pick up where you left off
                </h3>
                <p className="text-sm text-slate-400 mt-2 max-w-sm">
                    Choose a conversation from the sidebar. Your message will route to
                    whichever platform they're available on.
                </p>
            </div>
        )
    }

    const conversation = fakeConversations.find((c) => c.id === conversationId)
    const messages = fakeMessages[conversationId] ?? []

    return (
        <>
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center gap-3">
                {conversation && <UserAvatar name={conversation.contactName} size="md" />}
                <div>
                    <h2 className="text-lg font-semibold">{conversation?.contactName}</h2>
                    <div className="text-xs text-slate-400">
                        Available on: {conversation?.availablePlatforms.join(", ")}
                    </div>
                </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 px-6 py-4">
                <div className="flex flex-col gap-3">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex items-end gap-2 ${
                                msg.isMine ? "justify-end" : "justify-start"
                            }`}
                        >
                            {!msg.isMine && <UserAvatar name={msg.senderName} size="sm" />}
                            <div
                                className={`max-w-md px-4 py-2 rounded-2xl ${
                                    msg.isMine
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-800 text-slate-100"
                                }`}
                            >
                                <div className="text-sm">{msg.content}</div>
                                <div className="text-xs opacity-60 mt-1">
                                    {new Date(msg.sentAt).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}{" "}
                                    · {msg.platform}
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Invisible anchor at the bottom — we scroll this into view */}
                    <div ref={bottomRef} />
                </div>
            </ScrollArea>

            {/* Composer */}
            <MessageComposer conversationId={conversationId} />
        </>
    )
}