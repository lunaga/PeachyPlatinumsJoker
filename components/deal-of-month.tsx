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
        id: "301",
        name: "Grand Theft Auto San Andreas Definitive Edition PS5 Platinum Trophy Service",
        description: "Open world",
        originalPrice: 100,
        salePrice: 90,
        discount: 10,
        category: "ps5",
        image: "images/games/301.jpg",
    },
    {
        id: "281",
        name: "Rayman Origins PS3 Platinum Trophy Service",
        description: "Platformer",
        originalPrice: 120,
        salePrice: 108,
        discount: 10,
        category: "ps3",
        image: "images/games/281.jpg",
    },
    {
        id: "274",
        name: "Resident Evil: Requiem PS5 Platinum Trophy Service",
        description: "Survival horror",
        originalPrice: 90,
        salePrice: 67.5,
        discount: 25,
        category: "ps5",
        image: "images/games/274.jpg",
    },
    {
        id: "6",
        name: "Bloodborne (+DLC) PS4 Platinum Trophy Service",
        description: "Souls-like / action RPG",
        originalPrice: 70,
        salePrice: 56,
        discount: 20,
        category: "ps4",
        image: "images/games/6.webp",
    },
    {
        id: "128",
        name: "Suicide Squad: KTJL PS5 Platinum Trophy Service",
        description: "Supervillain action, DC universe",
        originalPrice: 125,
        salePrice: 112.5,
        discount: 10,
        category: "ps5",
        image: "images/games/128.webp",
    },
    {
        id: "211",
        name: "Maneater (+DLC) PS5 Platinum Trophy Service",
        description: "Action RPG, open world shark mayhem",
        originalPrice: 60,
        salePrice: 51,
        discount: 15,
        category: "ps5",
        image: "images/games/211.jpg",
    },
    {
        id: "19",
        name: "Elden Ring PS5 Platinum Trophy Service",
        description: "Souls-like / open-world RPG",
        originalPrice: 85,
        salePrice: 72.25,
        discount: 15,
        category: "ps5",
        image: "images/games/19.webp",
    },
    {
        id: "52",
        name: "CTR Nitro Fueled PS4 Platinum Trophy Service",
        description: "Kart racing",
        originalPrice: 100,
        salePrice: 85,
        discount: 15,
        category: "ps4",
        image: "images/games/52.webp",
    }
]

export function DealOfMonth() {
    const { addItem } = useCart()

    const handleAddToCart = (product) => {
        addItem({
        ...product,
        price: product.salePrice,
        })
    }

    return (
        <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">

            {/* Title */}
            <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
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

            {/* Horizontal Scroll */}
            <div className="relative">
            <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-6 px-2" style={{ width: "max-content" }}>
                {dealProducts.map((product) => (
                    <Card
                    key={product.id}
                    className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm border-orange-500/30 overflow-hidden group hover:border-orange-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 w-[200px] flex-shrink-0"
                    >
                    <CardContent className="p-0">

                        <div className="relative aspect-[3/4] overflow-hidden">

                        {/* Discount Badge */}
                        <Badge className="absolute top-2 left-2 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                            -{product.discount}%
                        </Badge>

                        {/* Category */}
                        <Badge className="absolute top-2 right-2 z-10 bg-black/70 text-white border-0">
                            {product.category.toUpperCase()}
                        </Badge>

                        <Image
                            src={`/${product.image}`}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        </div>

                        <div className="p-4">

                        <h3 className="font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-2 line-clamp-2 text-sm">
                            {product.name}
                        </h3>

                        <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-xs mb-2 line-clamp-1">
                            {product.description}
                        </p>

                        {/* Prices */}
                        <div className="flex flex-col items-center gap-1 mb-3">
                            <span className="text-lg font-bold text-orange-400">
                            £{product.salePrice.toFixed(2)}
                            </span>

                            <span className="text-xs text-purple-400 line-through">
                            £{product.originalPrice.toFixed(2)}
                            </span>
                        </div>

                        <Button
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-xs"
                        >
                            <ShoppingCart className="h-3 w-3 mr-2" />
                            Add
                        </Button>

                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
            </div>

        </div>
        </section>
    )
}
