"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newlyAddedGames = [
    {
        id: "305",
        name: "LEGO Batman 2: DC Super Heroes PS3 Platinum Trophy Service",
        description: "Action Adventure",
        price: 50,
        category: "ps3",
        image: "images/games/305.jpg",
    },
    {
        id: "306",
        name: "LEGO Batman: Legacy of The Dark Knight PS5 Platinum Trophy Service",
        description: "Action Adventure",
        price: 60,
        category: "ps5",
        image: "images/games/306.jpg",
    },
    {
        id: "307",
        name: "007 First Light PS5 Platinum Trophy Service",
        description: "Action Adventure",
        price: 80,
        category: "ps5",
        image: "images/games/307.jpg",
    },
    {
        id: "308",
        name: "Life is Strange: Before the Storm PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 22,
        category: "ps4",
        image: "images/games/308.jpg",
    },
    {
        id: "309",
        name: "Life is Strange: True Colors PS5 Platinum Trophy Service",
        description: "Adventure",
        price: 30,
        category: "ps5",
        image: "images/games/309.jpg",
    },
    {
        id: "310",
        name: "Life is Strange 2 PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 35,
        category: "ps4",
        image: "images/games/310.jpg",
    },
    {
        id: "311",
        name: "Star Wars Outlaws (+DLC) PS5 Platinum Trophy Service",
        description: "Open World",
        price: 150,
        category: "ps5",
        image: "images/games/311.jpg",
    },
    {
        id: "312",
        name: "Life is Strange: True Colors PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 30,
        category: "ps4",
        image: "images/games/312.jpg",
    },
    {
        id: "313",
        name: "Hollow Knight PS5 Platinum Trophy Service",
        description: "Platformer",
        price: 165,
        category: "ps5",
        image: "images/games/313.jpg",
    },
    {
        id: "314",
        name: "LEGO DC Super-Villains (+DLC) PS4 Platinum Trophy Service",
        description: "Action Adventure",
        price: 60,
        category: "ps4",
        image: "images/games/314.jpg",
    },
    {
        id: "315",
        name: "Astro Bot (+DLC) PS5 Platinum Trophy Service",
        description: "Platformer",
        price: 70,
        category: "ps5",
        image: "images/games/315.jpg",
    },
    {
        id: "316",
        name: "Life is Strange PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 30,
        category: "ps4",
        image: "images/games/316.jpg",
    },
    {
        id: "317",
        name: "LEGO Batman 3: Beyond Gotham (+DLC) PS3 Platinum Trophy Service",
        description: "Action Adventure",
        price: 60,
        category: "ps3",
        image: "images/games/317.jpg",
    },
    {
        id: "318",
        name: "Red Dead Redemption PS5 Platinum Trophy Service",
        description: "Open World",
        price: 180,
        category: "ps5",
        image: "images/games/318.jpg",
    },
    {
        id: "319",
        name: "Life is Strange Remastered PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 30,
        category: "ps4",
        image: "images/games/319.jpg",
    },
    {
        id: "320",
        name: "LEGO Batman 3: Beyond Gotham (+DLC) PS4 Platinum Trophy Service",
        description: "Action Adventure",
        price: 60,
        category: "ps4",
        image: "images/games/320.jpg",
    },
    {
        id: "321",
        name: "Red Dead Redemption PS4 Platinum Trophy Service",
        description: "Open World",
        price: 180,
        category: "ps4",
        image: "images/games/321.jpg",
    },
    {
        id: "322",
        name: "Life is Strange: Double Exposure (+DLC) PS5 Platinum Trophy Service",
        description: "Adventure",
        price: 40,
        category: "ps5",
        image: "images/games/322.jpg",
    },
    {
        id: "323",
        name: "Pragmata PS5 Platinum Trophy Service",
        description: "Sci-Fi Adventure",
        price: 80,
        category: "ps5",
        image: "images/games/323.jpg",
    },
    {
        id: "324",
        name: "Life is Strange: Reunion PS5 Platinum Trophy Service",
        description: "Adventure",
        price: 60,
        category: "ps5",
        image: "images/games/324.jpg",
    },
    {
        id: "325",
        name: "Saros PS5 Platinum Trophy Service",
        description: "Action Adventure",
        price: 75,
        category: "ps5",
        image: "images/games/325.jpg",
    },
    {
        id: "326",
        name: "Wuchang: Fallen Feathers PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 100,
        category: "ps5",
        image: "images/games/326.jpg",
    },
    {
        id: "327",
        name: "Life is Strange PS3 Platinum Trophy Service",
        description: "Adventure",
        price: 30,
        category: "ps3",
        image: "images/games/327.jpg",
    },
    {
        id: "328",
        name: "Life is Strange: Before the Storm Remastered PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 22,
        category: "ps4",
        image: "images/games/328.jpg",
    },
    {
        id: "329",
        name: "Vampire Crawlers (+DLC) PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 60,
        category: "ps5",
        image: "images/games/329.jpg",
    }
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
