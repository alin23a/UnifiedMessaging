import type { Conversation } from "@/types/chat"
import { formatDistanceToNow } from "date-fns"
import { ScrollArea } from "@/components/ui/scroll-area"
import UserAvatar from "@/components/chat/UserAvatar"
import PlatformDots from "@/components/chat/PlatformDots"

interface ConversationListProps {
    conversations: Conversation[]
    selectedId: string | null
    onSelect: (id: string) => void
}

export default function ConversationList({
                                             conversations,
                                             selectedId,
                                             onSelect,
                                         }: ConversationListProps) {
    return (
        <>
            <div className="p-4 border-b border-slate-800">
                <h2 className="text-lg font-semibold">Messages</h2>
            </div>

            <ScrollArea className="flex-1">
                <ul>
                    {conversations.map((conv) => (
                        <li key={conv.id}>
                            <button
                                onClick={() => onSelect(conv.id)}
                                className={`w-full text-left px-4 py-3 border-b border-slate-800 hover:bg-slate-800 transition-colors flex items-center gap-3 ${
                                    selectedId === conv.id ? "bg-slate-800" : ""
                                }`}
                            >
                                <UserAvatar name={conv.contactName} size="sm" />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium truncate">{conv.contactName}</span>
                                        <PlatformDots platforms={conv.availablePlatforms} />
                                        <span className="ml-auto text-xs text-slate-500 shrink-0">
                      {formatDistanceToNow(new Date(conv.lastMessageAt), {
                          addSuffix: false,
                      })}
                    </span>
                                    </div>
                                    <div className="text-sm text-slate-400 truncate">
                                        {conv.lastMessage}
                                    </div>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </ScrollArea>
        </>
    )
}