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
    id: "9",
    name: "Resident Evil Village PS5 (+DLC) Platinum Trophy Service",
    description: "Survival horror",
    originalPrice: 75,
    salePrice: 67.5,
    discount: 10,
    category: "ps5",
    image: "images/games/9.webp",
},

{
    id: "17",
    name: "Resident Evil Village (+DLC) PS4 Platinum Trophy Service",
    description: "Survival horror",
    originalPrice: 75,
    salePrice: 67.5,
    discount: 10,
    category: "ps4",
    image: "images/games/17.webp",
},

{
    id: "34",
    name: "Dark Souls III PS4 Platinum Trophy Service",
    description: "Souls-like / action RPG",
    originalPrice: 90,
    salePrice: 81,
    discount: 10,
    category: "ps4",
    image: "images/games/34.webp",
},

{
    id: "110",
    name: "InFamous: First Light PS4 Platinum Trophy Service",
    description: "Standalone superhero expansion, open-world",
    originalPrice: 35,
    salePrice: 29.75,
    discount: 15,
    category: "ps4",
    image: "images/games/110.webp",
},

{
    id: "101",
    name: "DRAGON BALL: Sparking! ZERO PS5 Platinum Trophy Service",
    description: "Dragon Ball arena fighter",
    originalPrice: 100,
    salePrice: 85,
    discount: 15,
    category: "ps5",
    image: "images/games/101.webp",
},

{
    id: "5",
    name: "Mortal Kombat 11 PS5 Platinum Trophy Service",
    description: "Fighting game",
    originalPrice: 100,
    salePrice: 85,
    discount: 15,
    category: "ps5",
    image: "images/games/5.webp",
},

{
    id: "26",
    name: "Mortal Kombat 11 PS4 Platinum Trophy Service",
    description: "Fighting game",
    originalPrice: 100,
    salePrice: 85,
    discount: 15,
    category: "ps4",
    image: "images/games/26.webp",
},

{
    id: "130",
    name: "Overcooked! All You Can Eat PS5 Platinum Trophy Service",
    description: "Chaotic co-op cooking game bundle",
    originalPrice: 35,
    salePrice: 28,
    discount: 20,
    category: "ps5",
    image: "images/games/130.webp",
},

{
    id: "172",
    name: "Overcooked! All you can eat PS4 Platinum Trophy Service",
    description: "Co-op cooking chaos",
    originalPrice: 35,
    salePrice: 28,
    discount: 20,
    category: "ps4",
    image: "images/games/172.webp",
},

{
    id: "52",
    name: "CTR Nitro Fueled PS4 Platinum Trophy Service",
    description: "Kart racing",
    originalPrice: 100,
    salePrice: 95,
    discount: 5,
    category: "ps4",
    image: "images/games/52.webp",
},

{
    id: "123",
    name: "Patapon Remastered PS4 Platinum Trophy Service",
    description: "Rhythm strategy, stylized 2D visuals",
    originalPrice: 55,
    salePrice: 49.5,
    discount: 10,
    category: "ps4",
    image: "images/games/123.webp",
},

{
    id: "80",
    name: "DmC: Devil May Cry (+DLC) PS3 Platinum Trophy Service",
    description: "Reboot action game with DLC",
    originalPrice: 115,
    salePrice: 103.5,
    discount: 10,
    category: "ps3",
    image: "images/games/80.webp",
},
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
