import type { Conversation, Message } from "@/types/chat"

export const fakeConversations: Conversation[] = [
    {
        id: "conv-1",
        contactName: "John Smith",
        lastMessage: "Sounds good, let's do 3pm",
        lastMessageAt: "2026-05-31T14:32:00Z",
        availablePlatforms: ["slack", "discord", "telegram"],
    },
    {
        id: "conv-2",
        contactName: "Sarah Chen",
        lastMessage: "Can you send me the design link?",
        lastMessageAt: "2026-05-31T13:15:00Z",
        availablePlatforms: ["slack", "email"],
    },
    {
        id: "conv-3",
        contactName: "Marketing Team",
        lastMessage: "Q3 numbers look great",
        lastMessageAt: "2026-05-30T18:00:00Z",
        availablePlatforms: ["slack"],
    },
]

export const fakeMessages: Record<string, Message[]> = {
    "conv-1": [
        {
            id: "msg-1",
            conversationId: "conv-1",
            senderId: "john",
            senderName: "John Smith",
            content: "Hey, are we still on for the demo today?",
            platform: "slack",
            sentAt: "2026-05-31T14:28:00Z",
            isMine: false,
        },
        {
            id: "msg-2",
            conversationId: "conv-1",
            senderId: "me",
            senderName: "Me",
            content: "Yes! What time works best for you?",
            platform: "slack",
            sentAt: "2026-05-31T14:30:00Z",
            isMine: true,
        },
        {
            id: "msg-3",
            conversationId: "conv-1",
            senderId: "john",
            senderName: "John Smith",
            content: "Sounds good, let's do 3pm",
            platform: "slack",
            sentAt: "2026-05-31T14:32:00Z",
            isMine: false,
        },
    ],
    "conv-2": [
        {
            id: "msg-4",
            conversationId: "conv-2",
            senderId: "sarah",
            senderName: "Sarah Chen",
            content: "Can you send me the design link?",
            platform: "slack",
            sentAt: "2026-05-31T13:15:00Z",
            isMine: false,
        },
    ],
    "conv-3": [
        {
            id: "msg-5",
            conversationId: "conv-3",
            senderId: "team",
            senderName: "Marketing Team",
            content: "Q3 numbers look great",
            platform: "slack",
            sentAt: "2026-05-30T18:00:00Z",
            isMine: false,
        },
    ],
}