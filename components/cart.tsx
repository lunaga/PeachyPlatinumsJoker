"use client";

import { useState } from "react";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, X, Plus, Minus, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Cart() {
    const {
    state,
    removeItem,
    updateQuantity,
    clearCart,
    generateDiscordMessage,
    } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const handleFinalizePurchase = () => {
        const message = generateDiscordMessage();
        const encodedMessage = encodeURIComponent(message);

    // Reemplaza 'YOUR_DISCORD_USERNAME' con tu nombre de usuario de Discord
    const discordUrl = `https://discord.com/channels/@me`;

    // Copia el mensaje al portapapeles
    navigator.clipboard.writeText(message).then(() => {
        alert("¡Mensaje copiado al portapapeles! Pégalo en Discord.");
    });

    // Abre Discord
    window.open(discordUrl, "_blank");

    // Limpia el carrito después de finalizar
    clearCart();
    setIsOpen(false);
    };

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
    );
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
            <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            />

          {/* Cart Panel */}
            <div className="ml-auto w-full max-w-md bg-gray-900/95 backdrop-blur-md border-l border-purple-500/30 shadow-2xl">
            <Card className="h-full bg-transparent border-0 rounded-none">
                <CardHeader className="border-b border-purple-500/30">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-purple-100">
                    Carrito de Compras
                    </CardTitle>
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

                <CardContent className="flex-1 overflow-y-auto p-4">
                {state.items.length === 0 ? (
                    <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <p className="text-purple-300">Tu carrito está vacío</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                    {state.items.map((item) => (
                        <div
                        key={item.id}
                        className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20"
                        >
                        <div className="flex items-start space-x-3">
                            <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover"
                            />
                            <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-purple-100 line-clamp-2">
                                {item.name}
                            </h4>
                            <p className="text-xs text-purple-300 mt-1">
                                ${item.price.toFixed(2)} c/u
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center space-x-2">
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="h-6 w-6 border-purple-500/50 text-purple-300 bg-transparent"
                                    onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                    }
                                >
                                    <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-purple-100 font-semibold min-w-[20px] text-center">
                                    {item.quantity}
                                </span>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="h-6 w-6 border-purple-500/50 text-purple-300 bg-transparent"
                                    onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                    }
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
                                    className="h-6 w-6 text-red-400 hover:text-red-300"
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

                {state.items.length > 0 && (
                <div className="border-t border-purple-500/30 p-4 space-y-4">
                    <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-purple-100">
                        Total:
                    </span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        ${state.total.toFixed(2)}
                    </span>
                    </div>

                    <div className="space-y-2">
                    <Button
                        onClick={handleFinalizePurchase}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
                    >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Finalizar Compra en Discord
                    </Button>

                    <Button
                        onClick={clearCart}
                        variant="outline"
                        className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/20 bg-transparent"
                    >
                        Limpiar Carrito
                    </Button>
                    </div>
                </div>
                )}
            </Card>
            </div>
        </div>
        )}
        </>
    );
}
