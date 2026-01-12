"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, ShoppingCart, CheckCircle2, Ticket } from "lucide-react"

export function DiscordGuide() {
    return (
        <section className="py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-sm border-purple-500/30 overflow-hidden">
            <CardContent className="p-4 md:p-12">
                <div className="text-center mb-6 md:mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-500/20 mb-3 md:mb-6">
                    <MessageSquare className="h-7 w-7 md:h-8 md:w-8 text-purple-300" />
                </div>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 leading-tight">
                    Join our Discord and shop securely
                </h2>
                <p className="text-sm md:text-xl text-purple-200 mb-2 md:mb-6">
                    Did you purchase a service from Peachy Platinums?
                </p>
                <p className="text-xs md:text-lg text-purple-100 mb-4 md:mb-8 px-2">
                    Our Discord is our main support channel for managing orders quickly and efficiently
                </p>
                <a href="https://discord.gg/9ycQPSCdAZ" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 md:py-6 px-6 md:px-10 text-sm md:text-lg rounded-full shadow-lg shadow-purple-500/50">
                    Join Discord Server
                    </Button>
                </a>
                </div>

                <div className="bg-black/30 rounded-xl md:rounded-2xl p-3 md:p-8 mb-4 md:mb-8">
                <h3 className="text-base md:text-2xl font-bold text-white mb-3 md:mb-6 flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4 md:h-6 md:w-6 text-purple-400 flex-shrink-0" />
                    <span className="leading-tight">How to buy and generate your ticket</span>
                </h3>

                <div className="space-y-3 md:space-y-6">
                    <div className="bg-purple-500/10 rounded-lg p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-4 mb-2">
                        <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs md:text-base">
                        1
                        </div>
                        <h4 className="text-sm md:text-lg font-semibold text-white pt-0.5">Buy on our website</h4>
                    </div>
                    <ul className="text-xs md:text-base text-purple-200 space-y-0.5 ml-9 md:ml-14">
                        <li>• Go to our website</li>
                        <li>• Add products to cart</li>
                        <li>• Proceed to checkout</li>
                    </ul>
                    </div>

                    <div className="bg-purple-500/10 rounded-lg p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-4 mb-2">
                        <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs md:text-base">
                        2
                        </div>
                        <h4 className="text-sm md:text-lg font-semibold text-white pt-0.5 leading-tight">
                        Choose your contact method
                        </h4>
                    </div>
                    <div className="ml-9 md:ml-14">
                        <ul className="text-xs md:text-base text-purple-200 space-y-0.5 mb-2">
                        <li>✔ WhatsApp</li>
                        <li>✔ Email</li>
                        <li className="text-pink-400 font-semibold">👉 Discord (RECOMMENDED)</li>
                        </ul>
                        <p className="text-xs md:text-base text-purple-300 mt-1">Select Discord as your contact method</p>
                    </div>
                    </div>

                    <div className="bg-purple-500/10 rounded-lg p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-4 mb-2">
                        <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs md:text-base">
                        3
                        </div>
                        <h4 className="text-sm md:text-lg font-semibold text-white pt-0.5 leading-tight">
                        Enter your Discord username
                        </h4>
                    </div>
                    <div className="ml-9 md:ml-14 text-xs md:text-base text-purple-200 space-y-1">
                        <p>Example: Username#1234</p>
                        <p className="text-purple-300">Complete your purchase</p>
                    </div>
                    </div>

                    <div className="bg-purple-500/10 rounded-lg p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-4 mb-2">
                        <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs md:text-base">
                        4
                        </div>
                        <h4 className="text-sm md:text-lg font-semibold text-white pt-0.5 leading-tight">
                        You will receive an order number
                        </h4>
                    </div>
                    <div className="ml-9 md:ml-14">
                        <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-2 md:p-4">
                        <p className="text-xs md:text-base text-pink-300 font-semibold mb-1">📌 Order number</p>
                        <p className="text-xs md:text-base text-purple-200 mb-2">👉 Example: #PP-0045</p>
                        <p className="text-xs md:text-base text-pink-300 font-bold mb-1">⚠ IMPORTANT:</p>
                        <ul className="text-xs md:text-base text-purple-200 space-y-0.5">
                            <li>• Copy the number</li>
                            <li>• Or take a screenshot</li>
                            <li>• You'll need it for the ticket</li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="bg-purple-500/10 rounded-lg p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-4 mb-2">
                        <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs md:text-base">
                        5
                        </div>
                        <h4 className="text-sm md:text-lg font-semibold text-white pt-0.5 leading-tight">
                        Join Discord and find
                        </h4>
                    </div>
                    <div className="ml-9 md:ml-14">
                        <p className="text-xs md:text-base text-purple-100 bg-purple-500/30 px-2 md:px-4 py-1.5 md:py-2 rounded-lg inline-block">
                        📂 SUPPORT & ORDERS
                        </p>
                    </div>
                    </div>

                    <div className="bg-purple-500/10 rounded-lg p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-4 mb-2">
                        <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs md:text-base">
                        6
                        </div>
                        <h4 className="text-sm md:text-lg font-semibold text-white pt-0.5 leading-tight">
                        Enter the channel
                        </h4>
                    </div>
                    <div className="ml-9 md:ml-14">
                        <p className="text-xs md:text-base text-purple-100 bg-purple-500/30 px-2 md:px-4 py-1.5 md:py-2 rounded-lg inline-block mb-2">
                        🎫 #open-ticket
                        </p>
                        <ul className="text-xs md:text-base text-purple-200 space-y-0.5">
                        <li>• Click on it</li>
                        <li>• Bot will ask for info</li>
                        <li>• Paste order number</li>
                        <li>• Attach screenshot if possible</li>
                        </ul>
                    </div>
                    </div>

                    <div className="bg-purple-500/10 rounded-lg p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-4 mb-2">
                        <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs md:text-base">
                        7
                        </div>
                        <h4 className="text-sm md:text-lg font-semibold text-white pt-0.5 leading-tight">
                        Our team will assist you
                        </h4>
                    </div>
                    <ul className="ml-9 md:ml-14 text-xs md:text-base text-pink-400 space-y-0.5">
                        <li>✅ Staff will take your ticket</li>
                        <li>✅ We confirm your order</li>
                        <li>✅ We begin the service</li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl p-3 md:p-8 mb-4 md:mb-8">
                <h3 className="text-base md:text-2xl font-bold text-white mb-3 md:mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 md:h-6 md:w-6 text-pink-400 flex-shrink-0" />
                    <span>Why use Discord?</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <div className="flex items-center gap-2 text-xs md:text-base text-purple-100 bg-purple-500/10 p-2 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-pink-400 flex-shrink-0" />
                    <span>Faster response</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-base text-purple-100 bg-purple-500/10 p-2 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-pink-400 flex-shrink-0" />
                    <span>Professional follow-up</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-base text-purple-100 bg-purple-500/10 p-2 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-pink-400 flex-shrink-0" />
                    <span>Secure purchase</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-base text-purple-100 bg-purple-500/10 p-2 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-pink-400 flex-shrink-0" />
                    <span>24/7 support</span>
                    </div>
                </div>
                </div>

                <div className="bg-black/40 rounded-xl md:rounded-2xl p-3 md:p-6 text-center">
                <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-4 flex items-center justify-center gap-2">
                    <Ticket className="h-4 w-4 md:h-6 md:w-6 text-purple-400 flex-shrink-0" />
                    <span>Summary</span>
                </h3>
                <p className="text-xs md:text-lg text-purple-200 leading-relaxed">
                    Purchase → Select Discord → Get Order ID → Join Discord → Open ticket
                </p>
                </div>
            </CardContent>
            </Card>
        </div>
        </section>
    )
}
