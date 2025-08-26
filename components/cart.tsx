"use client"

import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, X, Plus, Minus, Phone } from "lucide-react"
import Image from "next/image"
// Importar el componente OrderPreview
import { OrderPreview } from "@/components/order-preview"

export function Cart() {
    const { state, removeItem, updateQuantity, clearCart, sendOrderToWhatsApp } = useCart()
    const [isOpen, setIsOpen] = useState(false)

    const handleFinalizePurchase = () => {
        if (state.items.length === 0) {
        alert("Your cart is empty. Please add some games first.")
        return
        }

        try {
        // Enviar orden a WhatsApp
        sendOrderToWhatsApp()

        // Mostrar confirmación
        alert("✅ Redirecting to WhatsApp!\n📱 Your order details will be sent to PeachyPlatinums.")

        // Limpiar carrito después de un pequeño delay para que el usuario vea la confirmación
        setTimeout(() => {
            clearCart()
            setIsOpen(false)
        }, 1000)
        } catch (error) {
        console.error("Error opening WhatsApp:", error)
        alert("❌ Error opening WhatsApp. Please make sure WhatsApp is installed on your device.")
        }
    }

    if (state.itemCount === 0 && !isOpen) {
        return (
        <Button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full p-4 shadow-2xl shadow-purple-500/50"
        >
            <ShoppingCart className="h-6 w-6" />
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white border-0 min-w-[20px] h-5 flex items-center justify-center text-xs">
            0
            </Badge>
        </Button>
        )
    }

    return (
        <>
        {/* Cart Button */}
        <Button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full p-4 shadow-2xl shadow-purple-500/50"
        >
            <ShoppingCart className="h-6 w-6" />
            {state.itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white border-0 min-w-[20px] h-5 flex items-center justify-center text-xs">
                {state.itemCount}
            </Badge>
            )}
        </Button>

        {/* Cart Sidebar */}
        {isOpen && (
            <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            {/* Cart Panel - Improved for mobile */}
            <div className="ml-auto w-full max-w-md bg-gray-900/95 backdrop-blur-md border-l border-purple-500/30 shadow-2xl flex flex-col h-full">
                {/* Fixed Header */}
                <CardHeader className="border-b border-purple-500/30 flex-shrink-0">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-purple-100">Shopping Cart</CardTitle>
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

                {/* Scrollable Content */}
                <CardContent className="flex-1 overflow-y-auto p-4 min-h-0">
                {state.items.length === 0 ? (
                    <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <p className="text-purple-300">Your cart is empty</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                    {state.items.map((item) => (
                        <div key={item.id} className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20">
                        <div className="flex items-start space-x-3">
                            <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-purple-100 line-clamp-2 mb-1">{item.name}</h4>
                            <p className="text-xs text-purple-300 mb-3">${item.price.toFixed(2)} each</p>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="h-6 w-6 border-purple-500/50 text-purple-300 bg-transparent hover:bg-purple-500/20"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                    <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-purple-100 font-semibold min-w-[20px] text-center text-sm">
                                    {item.quantity}
                                </span>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="h-6 w-6 border-purple-500/50 text-purple-300 bg-transparent hover:bg-purple-500/20"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    <Plus className="h-3 w-3" />
                                </Button>
                                </div>

                                <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-purple-100">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-6 w-6 text-red-400 hover:text-red-300 hover:bg-red-500/20"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <X className="h-3 w-3" />
                                </Button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                )}
                </CardContent>

                {/* Fixed Footer with Total and Actions */}
                {state.items.length > 0 && (
                <div className="border-t border-purple-500/30 p-4 space-y-4 flex-shrink-0 bg-gray-900/95">
                    {/* Total */}
                    <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-purple-100">Total:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        ${state.total.toFixed(2)}
                    </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                    {/* Preview Button */}
                    <div className="flex justify-center">
                        <OrderPreview />
                    </div>

                    {/* Purchase Button */}
                    <Button
                        onClick={handleFinalizePurchase}
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
                    >
                        <Phone className="h-4 w-4 mr-2" />
                        Complete Purchase via WhatsApp
                    </Button>

                    {/* Clear Cart Button */}
                    <Button
                        onClick={clearCart}
                        variant="outline"
                        className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/20 bg-transparent transition-all duration-300"
                    >
                        Clear Cart
                    </Button>
                    </div>

                    {/* Info Message */}
                    <div className="text-center text-xs text-purple-400 bg-purple-900/20 rounded-lg p-3 border border-purple-500/20">
                    <p>📱 Clicking "Complete Purchase" will open WhatsApp with your order details</p>
                    </div>
                </div>
                )}
            </div>
            </div>
        )}
        </>
    )
}

