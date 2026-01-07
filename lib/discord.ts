interface DiscordMessage {
  content: string
  username?: string
  avatar_url?: string
}

export function generateOrderId(): string {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase()
  return `PP-${timestamp}-${randomStr}`
}

export async function sendDiscordMessage(message: string): Promise<boolean> {
  // Reemplaza esta URL con tu webhook de Discord
  const DISCORD_WEBHOOK_URL =
    process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || "https://discord.com/api/webhooks/1458454347351461890/DiJ7KfDtpO5eITg1X7qHqYLgiTNuXHw0XXUXfGhVO0fMytzJ0NE5Dry5sffRLHLqzEe_"

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

export async function sendOrderNotification(orderDetails: {
  items: Array<{ name: string; quantity: number; price: number }>
  total: number
  customerName?: string // Added customer name parameter
  orderId?: string // Added order ID parameter
}): Promise<boolean> {
  const gamesList = orderDetails.items
    .map(
      (item) =>
        `• ${item.name} ${item.quantity > 1 ? `(x${item.quantity})` : ""} - £${(item.price * item.quantity).toFixed(2)}`,
    )
    .join("\n")

  const message = `🎮 **New Order Received!** 🎮

🆔 **Order ID:** ${orderDetails.orderId || "N/A"}
👤 **Customer:** ${orderDetails.customerName || "Anonymous"}

📋 **Order Details:**
${gamesList}

💰 **Total:** £${orderDetails.total.toFixed(2)}

🏆 PeachyPlatinums - Platinum Trophy Experts`

  return sendDiscordMessage(message)
}
