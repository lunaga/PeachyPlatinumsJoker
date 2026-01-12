"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, ShoppingCart, CheckCircle2, Ticket } from "lucide-react"

export function DiscordGuide() {
    return (
        <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-sm border-purple-500/30 overflow-hidden">
            <CardContent className="p-8 md:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-6">
                    <MessageSquare className="h-8 w-8 text-purple-300" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join our Discord and shop securely</h2>
                <p className="text-xl text-purple-200 mb-6">Did you purchase a service from Peachy Platinums?</p>
                <p className="text-lg text-purple-100 mb-8">
                    Our Discord is our main support channel for managing orders quickly and efficiently
                </p>
                <a href="https://discord.gg/9ycQPSCdAZ" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 px-10 text-lg rounded-full shadow-lg shadow-purple-500/50">
                    Join Discord Server
                    </Button>
                </a>
                </div>

                {/* How to Buy Section */}
                <div className="bg-black/30 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <ShoppingCart className="h-6 w-6 text-purple-400" />
                    How to buy and generate your ticket (Step by step)
                </h3>

                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                        1
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Buy on our website</h4>
                        <ul className="text-purple-200 space-y-1 ml-4">
                        <li>• Go to our website</li>
                        <li>• Add the products to your cart</li>
                        <li>• Proceed to checkout</li>
                        </ul>
                    </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                        2
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">At checkout, you'll have 3 options:</h4>
                        <ul className="text-purple-200 space-y-1 ml-4">
                        <li>✔ WhatsApp</li>
                        <li>✔ Email</li>
                        <li className="text-pink-400 font-semibold">👉 Discord (RECOMMENDED)</li>
                        </ul>
                        <p className="text-purple-200 mt-2">Select Discord as your contact method.</p>
                    </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                        3
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Enter your Discord username correctly</h4>
                        <p className="text-purple-200">Example: Username#1234</p>
                        <p className="text-purple-200">Complete your purchase</p>
                    </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                        4
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">After payment, you will receive:</h4>
                        <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4 mt-3">
                        <p className="text-pink-300 font-semibold mb-2">📌 Order number</p>
                        <p className="text-purple-200">👉 Example: #PP-0045</p>
                        <p className="text-pink-300 font-bold mt-4">⚠ IMPORTANT:</p>
                        <ul className="text-purple-200 mt-2 space-y-1">
                            <li>• Copy the number</li>
                            <li>• Or take a screenshot</li>
                            <li>• You will need it for the ticket</li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                        5
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                        Join our Discord and look for this category:
                        </h4>
                        <p className="text-purple-100 bg-purple-500/20 px-4 py-2 rounded-lg inline-block">
                        📂 SUPPORT & ORDERS
                        </p>
                    </div>
                    </div>

                    {/* Step 6 */}
                    <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                        6
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Enter the channel:</h4>
                        <p className="text-purple-100 bg-purple-500/20 px-4 py-2 rounded-lg inline-block mb-3">
                        🎫 #open-ticket
                        </p>
                        <ul className="text-purple-200 space-y-1">
                        <li>• Click</li>
                        <li>• The bot will ask for information</li>
                        <li>• Paste your order number</li>
                        <li>• Attach a screenshot if possible</li>
                        </ul>
                    </div>
                    </div>

                    {/* Step 7 */}
                    <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                        7
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Our team will assist you</h4>
                        <ul className="text-pink-400 space-y-1">
                        <li>✅ A staff member will take your ticket</li>
                        <li>✅ We will confirm your order</li>
                        <li>✅ We will begin the service</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>

                {/* Why Discord Section */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-pink-400" />
                    Why use Discord?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-purple-100">
                    <CheckCircle2 className="h-5 w-5 text-pink-400 flex-shrink-0" />
                    <span>Faster response</span>
                    </div>
                    <div className="flex items-center gap-3 text-purple-100">
                    <CheckCircle2 className="h-5 w-5 text-pink-400 flex-shrink-0" />
                    <span>Professional follow-up</span>
                    </div>
                    <div className="flex items-center gap-3 text-purple-100">
                    <CheckCircle2 className="h-5 w-5 text-pink-400 flex-shrink-0" />
                    <span>Secure purchase</span>
                    </div>
                    <div className="flex items-center gap-3 text-purple-100">
                    <CheckCircle2 className="h-5 w-5 text-pink-400 flex-shrink-0" />
                    <span>24/7 support</span>
                    </div>
                </div>
                </div>

                {/* Summary */}
                <div className="bg-black/40 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                    <Ticket className="h-6 w-6 text-purple-400" />
                    Summary
                </h3>
                <p className="text-purple-200 text-lg">
                    Purchase → Select Discord → Get your Order ID → Join the Discord server → Open a ticket
                </p>
                </div>
            </CardContent>
            </Card>
        </div>
        </section>
    )
}
