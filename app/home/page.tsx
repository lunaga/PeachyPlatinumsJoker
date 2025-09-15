"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactButtons } from "@/components/contact-buttons"
import { Cart } from "@/components/cart"
import { ReviewsSection } from "@/components/reviews-section"
import { DealOfMonth } from "@/components/deal-of-month"
import { Trophy, Shield, Zap, Users, Award } from "lucide-react"

export default function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 from-purple-50 via-pink-50 to-purple-100">
        <Header />

        {/* Add padding-top to account for fixed header */}
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-4 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <div
                className={`mb-8 transition-all duration-1000 transform ${
                    isLoaded ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
                }`}
                >
                <div className="relative group flex justify-center mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500 animate-pulse"></div>
                    <div className="relative">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl shadow-purple-500/50 ring-4 ring-purple-500/30 group-hover:ring-purple-400/60 transition-all duration-500 group-hover:scale-105 mx-auto">
                        <Image
                        src="/images/games/logo.webp"
                        alt="PeachyPlatinums Logo"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        priority
                        />
                    </div>
                    </div>
                </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                About PeachyPlatinums
                </h1>
                <p className="text-xl md:text-2xl text-purple-200 dark:text-purple-200 text-purple-700 mb-8 font-light">
                Your Trusted PlayStation Trophy Experts Since 2020
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
            </div>
            </section>

            {/* About Content */}
            <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-6">
                    Who We Are
                    </h2>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-lg leading-relaxed mb-6">
                    PeachyPlatinums is a professional PlayStation trophy completion service founded by passionate gamers
                    who understand the dedication required to achieve platinum trophies. With over 4 years of experience,
                    we've helped thousands of gamers complete their most challenging trophy lists.
                    </p>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-lg leading-relaxed mb-6">
                    Our team consists of expert trophy hunters who have mastered the most difficult PlayStation games
                    across PS3, PS4, and PS5 platforms. From SoulsLike games to complex RPGs, we handle every challenge
                    with professionalism and skill.
                    </p>
                    <Link href="/store">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 text-lg">
                        View Our Services
                    </Button>
                    </Link>
                </div>
                <div className="relative">
                    <Card className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 border-purple-500/30 backdrop-blur-sm p-8">
                    <CardContent className="text-center">
                        <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-4">
                        2500+ Platinum Trophies
                        </h3>
                        <p className="text-purple-300 dark:text-purple-300 text-purple-600">
                        Successfully completed across all PlayStation platforms
                        </p>
                    </CardContent>
                    </Card>
                </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 border-purple-500/30 backdrop-blur-sm p-6 text-center">
                    <CardContent>
                    <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-3">
                        100% Safe & Secure
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600">
                        No hacks, cheats, or exploits. Only legitimate gameplay methods to protect your account.
                    </p>
                    </CardContent>
                </Card>

                <Card className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 border-purple-500/30 backdrop-blur-sm p-6 text-center">
                    <CardContent>
                    <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-3">
                        Fast Completion
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600">
                        Most platinum trophies completed within 1-2 weeks with regular progress updates.
                    </p>
                    </CardContent>
                </Card>

                <Card className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 border-purple-500/30 backdrop-blur-sm p-6 text-center">
                    <CardContent>
                    <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-3">
                        Expert Team
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600">
                        Professional gamers specialized in the most challenging PlayStation games.
                    </p>
                    </CardContent>
                </Card>
                </div>

                {/* Stats Section */}
                <div className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 mb-16">
                <h2 className="text-3xl font-bold text-center text-purple-100 dark:text-purple-100 text-purple-800 mb-8">
                    Our Achievements
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-purple-300 dark:text-purple-300 text-purple-600 font-medium">
                        Games Completed
                    </div>
                    </div>
                    <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
                    <div className="text-purple-300 dark:text-purple-300 text-purple-600 font-medium">
                        Happy Customers
                    </div>
                    </div>
                    <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2500+</div>
                    <div className="text-purple-300 dark:text-purple-300 text-purple-600 font-medium">
                        Platinum Trophies
                    </div>
                    </div>
                    <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                    <div className="text-purple-300 dark:text-purple-300 text-purple-600 font-medium">Success Rate</div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Deal of the Month */}
            <DealOfMonth />

            {/* Reviews Section */}
            <ReviewsSection />

            {/* CTA Section */}
            <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <Card className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm border-purple-500/30 p-8">
                <CardContent>
                    <Award className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-6">
                    Ready to Get Your Platinum Trophies?
                    </h2>
                    <p className="text-xl text-purple-300 dark:text-purple-300 text-purple-600 mb-8">
                    Join thousands of satisfied gamers who trust PeachyPlatinums for their trophy completion needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/store">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 text-lg">
                        Browse Games
                        </Button>
                    </Link>
                    <a href="https://discord.com/users/peachyplatinums" target="_blank" rel="noopener noreferrer">
                        <Button
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 dark:text-purple-300 text-purple-700 hover:bg-purple-500/20 py-3 px-8 text-lg bg-transparent"
                        >
                        Contact Us
                        </Button>
                    </a>
                    </div>
                </CardContent>
                </Card>
            </div>
            </section>
        </div>

        <Footer />
        <ContactButtons />
        <Cart />
        </div>
    )
}
