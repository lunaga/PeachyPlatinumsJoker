"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newlyAddedGames = [
    {
        id: "274",
        name: "Resident Evil: Requiem PS5 Platinum Trophy Service",
        description: "Survival horror",
        price: 90,
        category: "ps5",
        image: "images/games/274.jpg",
    },
    {
        id: "275",
        name: "Bye Sweet Carole PS5 Platinum Trophy Service",
        description: "Horror Adventure",
        price: 50,
        category: "ps5",
        image: "images/games/275.jpg",
    },
    {
        id: "276",
        name: "Capcom Fighting Collection 2 PS4 Platinum Trophy Service",
        description: "Fighting",
        price: 50,
        category: "ps4",
        image: "images/games/276.jpg",
    },
    {
        id: "277",
        name: "Rayman 30th Anniversary Edition PS5 Platinum Trophy Service",
        description: "Platformer",
        price: 80,
        category: "ps5",
        image: "images/games/277.jpg",
    },
    {
        id: "278",
        name: "God of War Sons of Sparta PS5 Platinum Trophy Service",
        description: "Action Adventure",
        price: 85,
        category: "ps5",
        image: "images/games/278.jpg",
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
