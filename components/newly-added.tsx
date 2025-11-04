"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newlyAddedGames = [
    {
        id: "204",
        name: "AI Limit PS5 Platinum Trophy Service",
        description: "Action-adventure, futuristic RPG",
        price: 100,
        category: "newly-added",
        image: "images/games/204.jpg",
    },
    {
        id: "205",
        name: "Coffee Talk PS4 Platinum Trophy Service",
        description: "Visual novel, relaxing simulation",
        price: 15,
        category: "newly-added",
        image: "images/games/205.jpg",
    },
    {
        id: "206",
        name: "Coffee Talk: Episode 2 Hibiscus & Butterflies PS4 Platinum Trophy Service",
        description: "Visual novel, relaxing simulation",
        price: 35,
        category: "newly-added",
        image: "images/games/206.jpg",
    },
    {
        id: "207",
        name: "Coffee Talk PS5 Platinum Trophy Service",
        description: "Visual novel, relaxing simulation",
        price: 15,
        category: "newly-added",
        image: "images/games/207.jpg",
    },
    {
        id: "208",
        name: "Coffee Talk: Episode 2 Hibiscus & Butterflies PS5 Platinum Trophy Service",
        description: "Visual novel, relaxing simulation",
        price: 35,
        category: "newly-added",
        image: "images/games/208.jpg",
    },
    {
        id: "209",
        name: "Ghost of Yōtei PS5 Platinum Trophy Service",
        description: "Action-adventure, samurai open world",
        price: 150,
        category: "newly-added",
        image: "images/games/209.jpg",
    },
    {
        id: "210",
        name: "Maneater (+DLC) PS4 Platinum Trophy Service",
        description: "Action RPG, open world shark mayhem",
        price: 60,
        category: "newly-added",
        image: "images/games/210.jpg",
    },
    {
        id: "211",
        name: "Maneater (+DLC) PS5 Platinum Trophy Service",
        description: "Action RPG, open world shark mayhem",
        price: 60,
        category: "newly-added",
        image: "images/games/211.jpg",
    },
    {
        id: "212",
        name: "Mortal Kombat Legacy Kollection PS4 Platinum Trophy Service",
        description: "Fighting, classic arcade action",
        price: 85,
        category: "newly-added",
        image: "images/games/212.jpg",
    },
    {
        id: "213",
        name: "Mortal Kombat Legacy Kollection PS5 Platinum Trophy Service",
        description: "Fighting, classic arcade action",
        price: 90,
        category: "newly-added",
        image: "images/games/213.jpg",
    },
    {
        id: "214",
        name: "Patapon 1-2 Replay PS5 Platinum Trophy Service",
        description: "Rhythm strategy, classic remaster",
        price: 90,
        category: "newly-added",
        image: "images/games/214.jpg",
    },
    {
        id: "215",
        name: "Plants vs Zombies: Garden Warfare PS3 Platinum Trophy Service",
        description: "Third-person shooter, tower defense",
        price: 85,
        category: "newly-added",
        image: "images/games/215.jpg",
    },
    {
        id: "216",
        name: "Plants vs Zombies: Garden Warfare PS4 Platinum Trophy Service",
        description: "Third-person shooter, tower defense",
        price: 85,
        category: "newly-added",
        image: "images/games/216.jpg",
    },
    {
        id: "217",
        name: "Resident Evil 0 PS4 Platinum Trophy Service",
        description: "Survival horror, classic Resident Evil",
        price: 65,
        category: "newly-added",
        image: "images/games/217.jpg",
    },
    {
        id: "218",
        name: "Resident Evil Origins Bundle Platinum Trophy Service",
        description: "Survival horror, classic remasters",
        price: 105,
        category: "newly-added",
        image: "images/games/218.jpg",
    },
    {
        id: "219",
        name: "Sonic X Shadow Generations PS5 Platinum Trophy Service",
        description: "Platformer, action-adventure",
        price: 90,
        category: "newly-added",
        image: "images/games/219.jpg",
    },
    ]

    export function NewlyAdded() {
    return (
        <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-8 w-8 text-yellow-400" />
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Newly Added Games
                </h2>
                <Sparkles className="h-8 w-8 text-yellow-400" />
            </div>
            <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-lg">
                Check out our latest trophy services
            </p>
            </div>

            <div className="relative">
            <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-6 px-2" style={{ width: "max-content" }}>
                {newlyAddedGames.map((game) => (
                    <Card
                    key={game.id}
                    className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm border-purple-500/30 overflow-hidden group hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 w-[200px] flex-shrink-0"
                    >
                    <CardContent className="p-0">
                        <div className="relative aspect-[3/4] overflow-hidden">
                        <Badge className="absolute top-2 left-2 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                            NEW
                        </Badge>
                        <Image
                            src={`/${game.image}`}
                            alt={game.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        </div>
                        <div className="p-4">
                        <h3 className="font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-2 line-clamp-2 text-sm">
                            {game.name}
                        </h3>
                        <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-xs mb-3 line-clamp-1">
                            {game.description}
                        </p>
                        <div className="flex items-center justify-center">
                            <span className="text-2xl font-bold text-purple-400">£{game.price.toFixed(2)}</span>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
            </div>

            <div className="text-center mt-8">
            <Link href="/store">
                <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg"
                >
                See More Games
                </Button>
            </Link>
            </div>
        </div>
        </section>
    )
}
