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
    salePrice: 63.75,
    discount: 15,
    category: "ps5",
    image: "images/games/9.webp",
},
{
    id: "4",
    name: "Resident Evil 2 remake (+DLC) PS4 Platinum Trophy Service",
    description: "Survival horror",
    originalPrice: 70,
    salePrice: 63,
    discount: 10,
    category: "ps4",
    image: "images/games/4.webp",
},
{
    id: "54",
    name: "Resident Evil Revelations 2 PS4 Platinum Trophy Service",
    description: "Survival horror",
    originalPrice: 85,
    salePrice: 72.25,
    discount: 15,
    category: "ps4",
    image: "images/games/54.webp",
},
{
    id: "27",
    name: "Shenmue III PS4 (+DLC) Platinum Trophy Service",
    description: "Adventure / story-driven",
    originalPrice: 95,
    salePrice: 85.5,
    discount: 10,
    category: "ps4",
    image: "images/games/27.webp",
},
{
    id: "105",
    name: "Dark Souls PS3 Platinum Trophy Service",
    description: "Challenging action RPG, Souls-like",
    originalPrice: 65,
    salePrice: 52,
    discount: 20,
    category: "ps3",
    image: "images/games/105.webp",
},
{
    id: "5",
    name: "Mortal Kombat 11 PS5 Platinum Trophy Service",
    description: "Fighting game",
    originalPrice: 85,
    salePrice: 76.5,
    discount: 10,
    category: "ps5",
    image: "images/games/5.webp",
},
{
    id: "91",
    name: "InFamous 2 PS3 Platinum Trophy Service",
    description: "Superpowered open world",
    originalPrice: 65,
    salePrice: 58.5,
    discount: 10,
    category: "ps3",
    image: "images/games/187.jpeg",
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
