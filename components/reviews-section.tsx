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
        name: "godsized00",
        rating: 4,
        date: "sept 14, 2025",
        review:
        "Very happy everything was as described great communication ⭐",
        game: "Resident Evil 7 (+DLC) PS4 Platinum Trophy Service (#167715358935)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 2,
        name: "craighibbert1988",
        rating: 4,
        date: "Sept 12, 2025",
        review:
        "Very reasonable and respected seller,quickly responded to my messages and questions,and they got me the platinum trophy for elden ring ps5 version within 3 to 5 days of starting, I definitely recommend this seller 💯% legit,again thank you for your hard work and dedication to getting me that platinum trophy.",
        game: "EIden Ring PS5 Platinum Trophy Service (#167281894033)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 3,
        name: "smolbeen",
        rating: 5,
        date: "Sept 10, 2025",
        review:
        "Everything was great! The sellers are professional, giving me updates on time, along with any other specifics I'd like them to do. The overall service was topnotch, achieved in the quoted time. Would definitely recommend!",
        game: "Devil May Cry 5 PS4 (+DLC) Platinum Trophy Service (#167241614941)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 4,
        name: "mariaplatinums",
        rating: 5,
        date: "Aug 27, 2025",
        review:
        "🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆 🏆Good service and 3 days for platinum🏆 🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆",
        game: "CTR Nitro Fueled PS4 Platinum Trophy Service (#166815284643)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 5,
        name: "ewig7177",
        rating: 5,
        date: "Aug 17, 2025",
        review:
        "I am a casual player but for Elden ring I wanted to get platinum I did play the game but I did mess a lot of stuff but these guys got me the platinum I’m grateful these guys are one the best to get some platinum 😁",
        game: "EIden Ring PS5 Platinum Trophy Service (#167281894033)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 6,
        name: "fairy3333",
        rating: 5,
        date: "Jul 30, 2025",
        review:
        "I couldn’t be happier with my experience using this service! From start to finish, the team was incredibly professional, communicative, and efficient. They handled my account with the utmost care and respect, keeping me updated throughout the entire process. As someone with severe anxiety, I found myself feeling comfortable with my account being in another person’s hands due to their constant communicat",
        game: "Resident Evil HD Remaster PS4 Platinum Trophy Service (#166875031084)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 7,
        name: "mariaplatinums",
        rating: 5,
        date: "Jul 28, 2025",
        review:
        "Base game & all 4 DLC's 100% Trustworthy and will be back 😊 Tyous",
        game: "Batman: Arkham City (+DLC) PS3 Platinum Trophy Service (#167234194989)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 8,
        name: "unleashedcrayon",
        rating: 4,
        date: "Jul 28, 2025",
        review:
        "An absolute pleasure to work with. They answered all my questions and were so professional. I couldn't recommend them more.",
        game: "Devil May Cry 5 PS4 (+DLC) Platinum Trophy Service (#167241614941)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 9,
        name: "chahea27",
        rating: 4,
        date: "Jul 16, 2025",
        review:
        "Amazing communication from start to finish! Helped me with concerns when I had them, would highly recommend!",
        game: " Ratchet & Clank: Rift Apart PS5 Platinum Trophy Service (#167484298738)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 10,
        name: "oftw5639",
        rating: 5,
        date: "Jun 22, 2025",
        review:
        "Had a injury that has severely limited my upper bodies mobility, can still play and enjoy games. Even get Platinums on various games, however 100% on games like Devil May Cry, games that require swift reaction times, it's near impossible. With this kind of service having great communication and being a reassuring service is key. Happy to state Peachy Platinums is a welcome and very professional service. Would recommend within a heartbeat. Aim to hit them up again in the near future.",
        game: "Devil May Cry 4 PS4 Platinum Trophy Service (#166933195957)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 11,
        name: "lWJlj-zWRta@Deleted",
        rating: 4,
        date: "Jun 20, 2025",
        review:
        "🌟 Absolute Perfection – The Best Platinum Service Out There! 🌟 I cannot emphasize enough how incredible this platinum trophy service was! From start to finish, the entire process was seamless, professional, and downright impressive. Communication was top-tier—fast responses, clear updates, and an overall sense of transparency that immediately put my mind at ease. Every step of the way, I was kept in the loop with progress updates. I wholeheartedly recommend this service to anyone!",
        game: "Resident Evil Village PS5 (+DLC) Platinum Trophy Service (Legit/No Hacks) (#166896212461)",
        verified: true,
        ebayFeedback: "Positive",
    },
    {
        id: 12,
        name: "khalid_alyami",
        rating: 5,
        date: "Jun 18, 2025",
        review:
        "Those guys are one of the greatest trophy service providers on ebay, very professional, great communication skills, and get what you asked for timely. For me sure I will deal with them again and again. They deserves A+++++ ranking 🫡🙏🏻🥰🫶🏻💕💐 Thanks to you all 🙏🏻🙏🏻🙏🏻",
        game: "Shenmue 1+2 PS4 Platinum Trophy Service (#166817235972)",
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
