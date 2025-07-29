interface DiscordMessage {
  content: string
  username?: string
  avatar_url?: string
}

export async function sendDiscordMessage(message: string): Promise<boolean> {
  // Reemplaza esta URL con tu webhook de Discord
    const DISCORD_WEBHOOK_URL =
    process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || "https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN"

    const payload: DiscordMessage = {
    content: message,
    username: "PeachyPlatinums Store",
    avatar_url: "https://cdn.discordapp.com/emojis/🎮.png",
    }

    try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })

    if (response.ok) {
        console.log("Message sent to Discord successfully")
        return true
    } else {
        console.error("Failed to send message to Discord:", response.statusText)
        return false
    }
    } catch (error) {
    console.error("Error sending message to Discord:", error)
    return false
    }
}

// Función alternativa para enviar mensaje directo al usuario peachyplatinums
export async function sendDirectMessageToUser(message: string): Promise<boolean> {
  // Esta función requiere un bot de Discord con permisos
  // Por ahora usaremos webhook como alternativa más simple
    return sendDiscordMessage(`@peachyplatinums ${message}`)
}
