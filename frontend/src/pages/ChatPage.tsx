import { useState } from "react"
import { fakeConversations } from "@/data/fakeData"
import ConversationList from "@/components/chat/ConversationList"
import MessageThread from "@/components/chat/MessageThread"

export default function ChatPage() {
    const [selectedConversationId, setSelectedConversationId] = useState<string | null>(
        fakeConversations[0]?.id ?? null
    )

    return (
        <div className="flex h-screen bg-slate-950 text-slate-100">
            {/* Sidebar — fixed width, full height */}
            <aside className="w-80 border-r border-slate-800 flex flex-col">
                <ConversationList
                    conversations={fakeConversations}
                    selectedId={selectedConversationId}
                    onSelect={setSelectedConversationId}
                />
            </aside>

            {/* Thread — fills the remaining width */}
            <main className="flex-1 flex flex-col">
                <MessageThread conversationId={selectedConversationId} />
            </main>
        </div>
    )
}