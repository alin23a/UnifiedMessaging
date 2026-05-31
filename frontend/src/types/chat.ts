export type Platform = "slack" | "discord" | "telegram" | "email" | "sms"

export interface Message {
    id: string
    conversationId: string
    senderId: string
    senderName: string
    content: string
    platform: Platform
    sentAt: string  // ISO timestamp
    isMine: boolean
}

export interface Conversation {
    id: string
    contactName: string
    lastMessage: string
    lastMessageAt: string
    availablePlatforms: Platform[]
}