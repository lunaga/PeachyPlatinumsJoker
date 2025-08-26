"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Sparkles, Zap, Trophy } from "lucide-react"

export default function LandingPage() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

    useEffect(() => {
        setIsLoaded(true)

        // Generate floating particles
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        }))
        setParticles(newParticles)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 from-purple-50 via-pink-50 to-purple-100 overflow-hidden relative">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
            <div
                key={particle.id}
                className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse"
                style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                }}
            />
            ))}
        </div>

        {/* Floating Gaming Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
            className="absolute top-20 left-10 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
            >
            <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 opacity-70" />
            </div>
            <div
            className="absolute top-32 right-16 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
            >
            <Sparkles className="h-5 w-5 sm:h-7 sm:w-7 text-pink-400 opacity-70" />
            </div>
            <div
            className="absolute bottom-32 left-20 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3.5s" }}
            >
            <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 opacity-70" />
            </div>
            <div
            className="absolute bottom-20 right-10 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
            >
            <Trophy className="h-5 w-5 sm:h-7 sm:w-7 text-cyan-400 opacity-70" />
            </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
            {/* Logo Container - Improved Mobile Responsiveness */}
            <div
            className={`mb-6 sm:mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 transform ${
                isLoaded ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
            }`}
            >
            <div className="relative group flex justify-center">
                {/* Glow Effect */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500 animate-pulse"></div>

                {/* Logo */}
                <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden shadow-2xl shadow-purple-500/50 ring-2 sm:ring-4 ring-purple-500/30 group-hover:ring-purple-400/60 transition-all duration-500 group-hover:scale-105 mx-auto">
                    <Image
                    src="/images/games/logo.webp"
                    alt="PeachyPlatinums Logo"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                    />
                </div>

                {/* Rotating Ring */}
                <div
                    className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin"
                    style={{ animationDuration: "3s" }}
                ></div>
                </div>
            </div>
            </div>

            {/* Welcome Message - Improved Mobile */}
            <div
            className={`text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 delay-300 transform ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent leading-tight px-2">
                Welcome to PeachyPlatinums
            </h1>

            <div className="relative">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-purple-200 dark:text-purple-200 text-purple-700 font-light mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4 leading-relaxed max-w-4xl mx-auto">
                Your Ultimate Destination for Professional PlayStation Trophy Services
                </p>

                {/* Animated Underline */}
                <div className="w-16 sm:w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50 animate-pulse"></div>
            </div>

            {/* Gaming Tagline - Better Mobile Spacing */}
            <div
                className={`mt-4 sm:mt-6 md:mt-8 transition-all duration-1000 delay-500 transform ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-purple-300 dark:text-purple-300 text-purple-600 font-medium px-3 sm:px-4 max-w-2xl mx-auto leading-relaxed">
                🏆 Expert Trophy Hunters • 🎮 PS3, PS4 & PS5 • ⚡ Fast & Secure • 💯 Guaranteed Results
                </p>
            </div>
            </div>

            {/* Start Button */}
            <div
            className={`transition-all duration-1000 delay-700 transform ${
                isLoaded ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
            }`}
            >
            <Link href="/store">
                <Button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 sm:py-5 md:py-6 px-8 sm:px-10 md:px-12 text-lg sm:text-xl md:text-2xl rounded-xl sm:rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-500 hover:scale-105 border-2 border-purple-400/30 hover:border-purple-300/50">
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>

                {/* Button Content */}
                <div className="relative flex items-center space-x-3 sm:space-x-4">
                    <Play className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 transition-transform duration-300 group-hover:scale-110" />
                    <span className="tracking-wider">START</span>
                    <div className="absolute -right-2 -top-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </Button>
            </Link>
            </div>

            {/* Gaming Stats - Improved Mobile Grid */}
            <div
            className={`mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 delay-1000 transform ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto px-2">
                {[
                { label: "Games Completed", value: "500+", icon: "🎮" },
                { label: "Happy Gamers", value: "1000+", icon: "😊" },
                { label: "Platinum Trophies", value: "2500+", icon: "🏆" },
                { label: "Success Rate", value: "100%", icon: "✅" },
                ].map((stat, index) => (
                <div
                    key={index}
                    className="text-center p-2 sm:p-3 md:p-4 bg-gray-900/30 dark:bg-gray-900/30 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                    <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-purple-200 dark:text-purple-200 text-purple-700 mb-1">
                    {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-purple-300 dark:text-purple-300 text-purple-600 font-medium leading-tight">
                    {stat.label}
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Scroll Indicator */}
            <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            >
            <div className="flex flex-col items-center space-y-2 animate-bounce">
                <div className="text-purple-400 dark:text-purple-400 text-purple-600 text-sm font-medium">
                Ready to Start?
                </div>
                <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
            </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
            @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
            }
            
            @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
            50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
            }
            
            .animate-float {
            animation: float 3s ease-in-out infinite;
            }
            
            .animate-glow {
            animation: glow 2s ease-in-out infinite;
            }
        `}</style>
        </div>
    )
}

