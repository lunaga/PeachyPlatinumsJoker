"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, ShoppingCart, ChevronLeft, ChevronRight, Flame } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const dealProducts = [
    {
        id: "140",
        name: "Spongebob Squarepants: The Cosmic Shake PS5 Platinum Trophy Service",
        description: "3D platformer in Bikini Bottom",
        originalPrice: 30,
        salePrice: 24,
        discount: 20,
        category: "ps5",
        image: "images/games/140.webp",
    },
    {
        id: "83",
        name: "Cuphead (+DLC) PS5 Platinum Trophy Service",
        description: "Classic run & gun, boss battles",
        originalPrice: 35,
        salePrice: 28,
        discount: 20,
        category: "ps5",
        image: "images/games/83.webp",
    },
    {
        id: "129",
        name: "Jak & Daxter: The Precursor Legacy PS4 Platinum Trophy Service",
        description: "Platforming adventure",
        originalPrice: 30,
        salePrice: 25,
        discount: 17,
        category: "ps4",
        image: "images/games/129.webp",
    },
    {
        id: "78",
        name: "Shenmue 1+2 PS4 Platinum Trophy Service",
        description: "Open world, action-adventure",
        originalPrice: 80,
        salePrice: 64,
        discount: 20,
        category: "ps4",
        image: "images/games/78.webp",
    },
    {
        id: "151",
        name: "God of War Origins Collection Bundle PS3 Platinum Trophy Service",
        description: "Epic action-adventure, Greek mythology",
        originalPrice: 60,
        salePrice: 48,
        discount: 20,
        category: "ps3",
        image: "images/games/151.webp",
    }
    ]

    export function DealOfMonth() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const { addItem } = useCart()

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % dealProducts.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % dealProducts.length)
        setIsAutoPlaying(false)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + dealProducts.length) % dealProducts.length)
        setIsAutoPlaying(false)
    }

    const currentProduct = dealProducts[currentIndex]

    const handleAddToCart = () => {
        addItem({
        ...currentProduct,
        price: currentProduct.salePrice,
        })
    }

    return (
        <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
                <Flame className="h-8 w-8 text-orange-500" />
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Deal of the Month
                </h2>
                <Flame className="h-8 w-8 text-orange-500" />
            </div>
            <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-lg">
                Limited time offers on popular trophy services
            </p>
            </div>

            <div className="relative">
            {/* Navigation Buttons */}
            <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 -ml-4"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 -mr-4"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Main Card */}
            <Card className="group bg-gray-900/50 backdrop-blur-sm border-orange-500/40 hover:border-orange-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden">
                <div className="relative overflow-hidden">
                <Image
                    src={currentProduct.image || "/placeholder.svg"}
                    alt={currentProduct.name}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Discount Badge */}
                <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg font-bold text-lg px-3 py-1">
                    -{currentProduct.discount}%
                    </Badge>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                    <Badge
                    className={`border-0 shadow-lg font-bold ${
                        currentProduct.category === "bundles"
                        ? "bg-gradient-to-r from-orange-600 to-red-600 text-white"
                        : currentProduct.category === "ps5"
                            ? "bg-pink-600/80 text-pink-100"
                            : "bg-purple-600/80 text-purple-100"
                    }`}
                    >
                    {currentProduct.category === "bundles" ? "BUNDLE" : currentProduct.category.toUpperCase()}
                    </Badge>
                </div>

                {/* Special Offer Indicator */}
                <div className="absolute top-0 right-0 bg-gradient-to-l from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-bl-lg">
                    LIMITED TIME
                </div>

                {/* Trophy Icon */}
                <div className="absolute bottom-4 left-4">
                    <div className="backdrop-blur-sm rounded-full p-2 bg-black/70">
                    <Trophy className="h-5 w-5 text-yellow-400" />
                    </div>
                </div>
                </div>

                <CardContent className="p-6">
                <h3 className="font-bold text-xl text-purple-100 dark:text-purple-100 text-purple-800 mb-3 line-clamp-2 group-hover:text-purple-50 transition-colors duration-300">
                    {currentProduct.name}
                </h3>
                <p className="text-purple-300 dark:text-purple-300 text-purple-600 mb-4 line-clamp-2">
                    {currentProduct.description}
                </p>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        £{currentProduct.salePrice.toFixed(2)}
                    </span>
                    <span className="text-lg text-purple-400 dark:text-purple-400 text-purple-500 line-through">
                        £{currentProduct.originalPrice.toFixed(2)}
                    </span>
                    </div>
                    <span className="text-sm text-orange-300 font-semibold bg-orange-500/20 px-3 py-1 rounded-full">
                    SAVE £{(currentProduct.originalPrice - currentProduct.salePrice).toFixed(2)}
                    </span>
                </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                <Button
                    onClick={handleAddToCart}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
                >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add Deal to Cart
                </Button>
                </CardFooter>
            </Card>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
                {dealProducts.map((_, index) => (
                <button
                    key={index}
                    onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-orange-500 w-6" : "bg-orange-500/30"
                    }`}
                />
                ))}
            </div>
            </div>
        </div>
        </section>
    )
}
