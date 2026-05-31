import type { Platform } from "@/types/chat"

interface PlatformDotsProps {
    platforms: Platform[]
}

const platformColors: Record<Platform, string> = {
    slack: "bg-purple-500",
    discord: "bg-indigo-500",
    telegram: "bg-sky-500",
    email: "bg-amber-500",
    sms: "bg-emerald-500",
}

const platformLabels: Record<Platform, string> = {
    slack: "Slack",
    discord: "Discord",
    telegram: "Telegram",
    email: "Email",
    sms: "SMS",
}

export default function PlatformDots({ platforms }: PlatformDotsProps) {
    return (
        <div className="flex gap-1">
            {platforms.map((platform) => (
                <div
                    key={platform}
                    className={`h-2 w-2 rounded-full ${platformColors[platform]}`}
                    title={platformLabels[platform]}
                />
            ))}
        </div>
    )
}