"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Eye, X } from "lucide-react"
import { useState } from "react"

export function OrderPreview() {
    const { state, generateWhatsAppMessage } = useCart()
    const [isOpen, setIsOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    if (state.items.length === 0) return null

    const handleCopyMessage = async () => {
        try {
        await navigator.clipboard.writeText(generateWhatsAppMessage())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        } catch (error) {
        console.error("Failed to copy message:", error)
        }
    }

    return (
        <>
        {/* Preview Button */}
        <Button
            onClick={() => setIsOpen(true)}
            variant="outline"
            size="sm"
            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 bg-transparent"
        >
            <Eye className="h-4 w-4 mr-2" />
            Preview Message
        </Button>

        {/* Preview Modal */}
        {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            {/* Modal */}
            <Card className="relative w-full max-w-md bg-gray-900/95 backdrop-blur-md border border-purple-500/30 shadow-2xl">
                <CardHeader className="border-b border-purple-500/30">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-purple-100">WhatsApp Message Preview</CardTitle>
                    <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-purple-200 hover:text-purple-100"
                    >
                    <X className="h-5 w-5" />
                    </Button>
                </div>
                </CardHeader>

                <CardContent className="p-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20 mb-4">
                    <pre className="text-sm text-purple-100 whitespace-pre-wrap font-mono leading-relaxed">
                    {generateWhatsAppMessage()}
                    </pre>
                </div>

                <div className="flex space-x-2">
                    <Button
                    onClick={handleCopyMessage}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                    <Copy className="h-4 w-4 mr-2" />
                    {copied ? "Copied!" : "Copy Message"}
                    </Button>
                </div>

                <p className="text-xs text-purple-400 text-center mt-3">
                    This message will be sent to: +54 9 11 6471-6955
                </p>
                </CardContent>
            </Card>
            </div>
        )}
        </>
    )
}



