"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, X, MessageSquare, ShoppingBag, Mail, Gamepad2 } from "lucide-react"

export function ContactButtons() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-6 left-6 z-40">
        {/* Contact Options */}
        {isOpen && (
            <div className="mb-4 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
            {/* Discord */}
            <a
                href="https://discord.com/users/peachyplatinums"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">Discord</span>
            </a>

            {/* Email */}
            <a
                href="mailto:Peachyplatinums@hotmail.com"
                className="flex items-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
                <Mail className="h-5 w-5" />
                <span className="font-medium">Email</span>
            </a>

            {/* WhatsApp */}
            <a
                href="https://wa.me/5491164716955"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
                <Phone className="h-5 w-5" />
                <span className="font-medium">WhatsApp</span>
            </a>

            {/* PSN Profile */}
            <a
                href="https://psnprofiles.com/PeachyPlatinums"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
                <Gamepad2 className="h-5 w-5" />
                <span className="font-medium">PSN Profile</span>
            </a>

            {/* eBay */}
            <a
                href="https://www.ebay.com/str/peachyplatinums?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=YiIVhmFMRyC&sssrc=3418065&ssuid=v792cyonree&stype=1&widget_ver=artemis&media=WHATS_APP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
                <ShoppingBag className="h-5 w-5" />
                <span className="font-medium">eBay Store</span>
            </a>
            </div>
        )}

        {/* Toggle Button */}
        <Button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-full p-4 shadow-2xl transition-all duration-300 ${
            isOpen
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            }`}
        >
            {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
        </div>
    )
}


