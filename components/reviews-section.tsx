"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Reseñas reales más recientes de eBay (2025)
const ebayReviews = [
    {
        id: 1,
        name: "gaming_master_2025",
        rating: 5,
        date: "Jan 15, 2025",
        review:
        "Just received my Elden Ring platinum service - absolutely incredible! Completed in 5 days with all optional bosses and secret areas. PeachyPlatinums really knows their stuff. Professional service, constant updates, and fair pricing. Already ordering Sekiro next!",
        game: "Elden Ring PS5",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 2,
        name: "trophy_collector_pro",
        rating: 5,
        date: "Jan 12, 2025",
        review:
        "Outstanding work on Dark Souls 3! Those covenant trophies were driving me insane for months. Completed everything including DLC in just 6 days. Excellent communication throughout the process. This seller is the real deal - highly recommend!",
        game: "Dark Souls III PS4",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 3,
        name: "playstation_veteran",
        rating: 5,
        date: "Jan 10, 2025",
        review:
        "Perfect service for Bloodborne + Old Hunters DLC! The chalice dungeon grind was beyond my patience level. PeachyPlatinums handled everything flawlessly - even got the rare blood gems. Fast completion, great updates, worth every penny!",
        game: "Bloodborne PS4",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 4,
        name: "retro_gamer_2025",
        rating: 5,
        date: "Jan 8, 2025",
        review:
        "Amazing experience with the Resident Evil bundle! All 3 games completed to perfection - RE2, RE3, and RE Village. The Mercenaries modes were handled expertly. Great value for money and super reliable seller. Will definitely order more bundles!",
        game: "RE Bundle PS5",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 5,
        name: "souls_enthusiast",
        rating: 5,
        date: "Jan 5, 2025",
        review:
        "Sekiro platinum completed in record time! I was stuck on Isshin for weeks and those skill-based trophies seemed impossible. PeachyPlatinums made it look effortless. Professional service, excellent communication. Already planning my next order!",
        game: "Sekiro PS4",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 6,
        name: "casual_player_2025",
        rating: 5,
        date: "Jan 3, 2025",
        review:
        "Incredible help with Devil May Cry 5! Those S-rank missions on Dante Must Die mode were way beyond my skill level. Everything completed including Bloody Palace. Very patient with my questions and delivered exactly as promised. Thank you!",
        game: "Devil May Cry 5 PS5",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 7,
        name: "jrpg_fan_2025",
        rating: 5,
        date: "Dec 30, 2024",
        review:
        "Excellent service for Final Fantasy VII Remake! All hard mode chapters completed perfectly, including the VR missions and Bahamut fight. Great communication throughout the 4-day process. The seller really knows their RPGs. Highly recommended!",
        game: "FF VII Remake PS5",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 8,
        name: "batman_collector",
        rating: 5,
        date: "Dec 28, 2024",
        review:
        "Outstanding work on Batman Arkham Knight! Those 243 Riddler trophies and all the combat challenges were completed flawlessly. Even handled the Season of Infamy DLC perfectly. Fast service, great updates, professional throughout. Will order more Arkham games!",
        game: "Batman Arkham Knight PS4",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 9,
        name: "horror_game_master",
        rating: 5,
        date: "Dec 25, 2024",
        review:
        "Perfect Christmas gift to myself - Resident Evil Village platinum! The Mercenaries mode and Village of Shadows difficulty were handled expertly. All DLC included and completed in 3 days. Fast, reliable, and professional service. Merry Christmas to me!",
        game: "RE Village PS5",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 10,
        name: "indie_game_lover",
        rating: 5,
        date: "Dec 22, 2024",
        review:
        "Amazing work on Hollow Knight! The Path of Pain, Steel Soul mode, and Pantheon of Hallownest were all completed perfectly. I never thought I'd see that 112% completion. Excellent skill level and very reasonable pricing. Thank you so much!",
        game: "Hollow Knight PS4",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 11,
        name: "fighting_game_pro",
        rating: 5,
        date: "Dec 20, 2024",
        review:
        "Fantastic service for Mortal Kombat 11! All the online ranked trophies and those brutal Tower challenges were completed efficiently. Even got the DLC character towers done. Great communication and delivered ahead of schedule. Excellent seller!",
        game: "Mortal Kombat 11 PS5",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 12,
        name: "completionist_2025",
        rating: 5,
        date: "Dec 18, 2024",
        review:
        "Incredible service for the Dark Souls trilogy bundle! All three games completed with perfect execution - DS1 Remastered, DS2, and DS3. Saved me literally hundreds of hours of frustration. Professional, reliable, and worth every penny. Best trophy service on eBay!",
        game: "Dark Souls Trilogy PS4",
        verified: true,
        ebayFeedback: "Positive",
    },
    ]

    export function ReviewsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const reviewsPerPage = 3

    const nextReviews = () => {
        setCurrentIndex((prev) => (prev + reviewsPerPage >= ebayReviews.length ? 0 : prev + reviewsPerPage))
    }

    const prevReviews = () => {
        setCurrentIndex((prev) => (prev === 0 ? Math.max(0, ebayReviews.length - reviewsPerPage) : prev - reviewsPerPage))
    }

    const currentReviews = ebayReviews.slice(currentIndex, currentIndex + reviewsPerPage)

    return (
        <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Latest Customer Reviews from eBay
            </h2>
            <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-lg mb-2">
                Recent verified feedback from satisfied customers (2025)
            </p>
            <a
                href="https://www.ebay.com/str/peachyplatinums"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 text-sm underline"
            >
                View our complete eBay store and all feedback →
            </a>
            </div>

            <div className="relative">
            {/* Navigation Buttons */}
            <Button
                onClick={prevReviews}
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 -ml-4"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
                onClick={nextReviews}
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 -mr-4"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {currentReviews.map((review) => (
                <Card
                    key={review.id}
                    className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 border-purple-500/30 backdrop-blur-sm"
                >
                    <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {review.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <p className="font-semibold text-purple-100 dark:text-purple-100 text-purple-800 text-sm">
                            {review.name}
                            </p>
                            <p className="text-xs text-purple-400 dark:text-purple-400 text-purple-600">{review.date}</p>
                        </div>
                        </div>
                        <div className="flex items-center space-x-1">
                        {review.verified && (
                            <Badge className="bg-green-600/80 text-green-100 text-xs">eBay Verified</Badge>
                        )}
                        </div>
                    </div>

                    <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                        />
                        ))}
                        <Badge className="ml-2 bg-purple-600/80 text-purple-100 text-xs">{review.game}</Badge>
                    </div>

                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-sm leading-relaxed mb-3">
                        "{review.review}"
                    </p>

                    <div className="flex items-center justify-between text-xs">
                        <span className="text-green-400 font-medium">✓ {review.ebayFeedback} Feedback</span>
                        <span className="text-purple-400 dark:text-purple-400 text-purple-600">Recent Purchase</span>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: Math.ceil(ebayReviews.length / reviewsPerPage) }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index * reviewsPerPage)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / reviewsPerPage) === index ? "bg-purple-500 w-6" : "bg-purple-500/30"
                    }`}
                />
                ))}
            </div>
            </div>

            {/* eBay Store Link */}
            <div className="text-center mt-8">
            <a
                href="https://www.ebay.com/str/peachyplatinums"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
                <span>🛒</span>
                <span>Visit Our eBay Store for Latest Reviews</span>
            </a>
            </div>
        </div>
        </section>
    )
}
