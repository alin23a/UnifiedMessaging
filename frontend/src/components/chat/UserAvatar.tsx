import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface UserAvatarProps {
    name: string
    size?: "sm" | "md"
}

// Stable color from name — same name always gets same color
function colorFromName(name: string): string {
    const colors = [
        "bg-rose-600",
        "bg-amber-600",
        "bg-emerald-600",
        "bg-sky-600",
        "bg-violet-600",
        "bg-pink-600",
        "bg-teal-600",
        "bg-orange-600",
    ]

    let hash = 0
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return colors[Math.abs(hash) % colors.length]
}

function initialsFromName(name: string): string {
    const parts = name.trim().split(/\s+/)
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function UserAvatar({ name, size = "md" }: UserAvatarProps) {
    const sizeClasses = size === "sm" ? "h-8 w-8 text-xs" : "h-10 w-10 text-sm"

    return (
        <Avatar className={sizeClasses}>
            <AvatarFallback className={`${colorFromName(name)} text-white font-medium`}>
                {initialsFromName(name)}
            </AvatarFallback>
        </Avatar>
    )
}