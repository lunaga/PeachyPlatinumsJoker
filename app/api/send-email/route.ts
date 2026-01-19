import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const { customerName, customerEmail, items, total } = await request.json()

        // Construct email HTML
        const itemsList = items
        .map(
            (item: any) =>
            `<tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${item.name}</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">£${item.price}</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">£${(item.price * item.quantity).toFixed(2)}</td>
            </tr>`,
        )
        .join("")

        const emailHtml = `
        <!DOCTYPE html>
        <html>
            <head>
            <meta charset="utf-8">
            <title>New Order - PeachyPlatinums</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0;">🍑 New Order Received!</h1>
            </div>
            
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2 style="color: #a855f7; margin-top: 0;">Customer Information</h2>
                <p><strong>Name:</strong> ${customerName}</p>
                <p><strong>Email:</strong> ${customerEmail}</p>
                
                <h2 style="color: #a855f7; margin-top: 30px;">Order Details</h2>
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
                <thead>
                    <tr style="background: #a855f7; color: white;">
                    <th style="padding: 12px; text-align: left;">Game</th>
                    <th style="padding: 12px; text-align: center;">Qty</th>
                    <th style="padding: 12px; text-align: right;">Price</th>
                    <th style="padding: 12px; text-align: right;">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsList}
                </tbody>
                </table>
                
                <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; text-align: right;">
                <h2 style="color: #a855f7; margin: 0;">Total: £${total}</h2>
                </div>
                
                <p style="margin-top: 30px; font-size: 14px; color: #6b7280;">
                This order was placed through PeachyPlatinums.com. Please contact the customer at ${customerEmail} to confirm and process the order.
                </p>
            </div>
            </body>
        </html>
        `

        // Use Resend API
        const resendApiKey = process.env.RESEND_API_KEY

        if (!resendApiKey) {
        console.error("[v0] RESEND_API_KEY is not configured")
        return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
        }

        const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: "PeachyPlatinums <onboarding@resend.dev>",
            to: ["PeachyPlatinums@hotmail.com"],
            reply_to: customerEmail,
            subject: `New Order from ${customerName} - £${total}`,
            html: emailHtml,
        }),
        })

        if (!response.ok) {
        const error = await response.text()
        console.error("[v0] Resend API error:", error)
        return NextResponse.json({ error: "Failed to send email" }, { status: response.status })
        }

        const data = await response.json()
        return NextResponse.json({ success: true, id: data.id })
    } catch (error) {
        console.error("[v0] Error sending email:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
