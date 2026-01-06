"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newlyAddedGames = [
    {
    id: "242",
    name: "Color Guardians PS4 Platinum Trophy Service",
    description: "Action platformer",
    price: 25,
    category: "ps4",
    image: "images/games/242.jpg",
    },
    {
    id: "243",
    name: "Final Fantasy VII PS4 Platinum Trophy Service",
    description: "Classic JRPG remaster",
    price: 65,
    category: "ps4",
    image: "images/games/243.jpg",
    },
    {
    id: "244",
    name: "Final Fantasy IX PS4 Platinum Trophy Service",
    description: "Classic JRPG remaster",
    price: 125,
    category: "ps4",
    image: "images/games/244.jpg",
    },
    {
    id: "245",
    name: "Hotline Miami PS4 Platinum Trophy Service",
    description: "Fast-paced action, neon style",
    price: 45,
    category: "ps4",
    image: "images/games/245.jpg",
    },
    {
    id: "246",
    name: "Hotline Miami PS5 Platinum Trophy Service",
    description: "Fast-paced action, neon style",
    price: 45,
    category: "ps5",
    image: "images/games/246.jpg",
    },
    {
    id: "247",
    name: "Hyperdimension Neptunia Re;Birth1+ PS4 Platinum Trophy Service",
    description: "JRPG, Neptunia series",
    price: 85,
    category: "ps4",
    image: "images/games/247.jpg",
    },
    {
    id: "248",
    name: "Hyperdimension Neptunia Re;Birth2 SISTERS GENERATION PS4 Platinum Trophy Service",
    description: "JRPG, Neptunia series",
    price: 100,
    category: "ps4",
    image: "images/games/248.jpg",
    },
    {
    id: "249",
    name: "Hyperdimension Neptunia Re;Birth3 V GENERATION PS4 Platinum Trophy Service",
    description: "JRPG, Neptunia series",
    price: 80,
    category: "ps4",
    image: "images/games/249.jpg",
    },
    {
    id: "250",
    name: "Plants vs. Zombies PS3 Platinum Trophy Service",
    description: "Tower defense classic",
    price: 60,
    category: "ps3",
    image: "images/games/250.jpg",
    },
    {
    id: "251",
    name: "Marvel’s Spider-Man (+DLC) PS4 Platinum Trophy Service",
    description: "Open-world action, superhero",
    price: 75,
    category: "ps4",
    image: "images/games/251.jpg",
    },
    {
    id: "252",
    name: "Marvel’s Spider-Man Remastered (+DLC) PS5 Platinum Trophy Service",
    description: "Enhanced open-world action",
    price: 75,
    category: "ps5",
    image: "images/games/252.jpg",
    },
    {
    id: "253",
    name: "Marvel’s Spider-Man 2 (+DLC) PS5 Platinum Trophy Service",
    description: "Next-gen superhero action",
    price: 90,
    category: "ps5",
    image: "images/games/253.jpg",
    },
    {
    id: "254",
    name: "Neptunia Game Maker R:Evolution PS4 Platinum Trophy Service",
    description: "Action RPG, Neptunia series",
    price: 90,
    category: "ps4",
    image: "images/games/254.jpg",
    },
    {
    id: "255",
    name: "Neptunia Game Maker R:Evolution PS5 Platinum Trophy Service",
    description: "Action RPG, Neptunia series",
    price: 90,
    category: "ps5",
    image: "images/games/255.jpg",
    },
    {
    id: "256",
    name: "Neptunia ReVerse PS5 Platinum Trophy Service",
    description: "JRPG remake, Neptunia series",
    price: 90,
    category: "ps5",
    image: "images/games/256.jpg",
    },
    {
    id: "257",
    name: "Neptunia Riders VS Dogoos PS4 Platinum Trophy Service",
    description: "Arcade racing, Neptunia spin-off",
    price: 20,
    category: "ps4",
    image: "images/games/257.jpg",
    },
    {
    id: "258",
    name: "Neptunia Riders VS Dogoos PS5 Platinum Trophy Service",
    description: "Arcade racing, Neptunia spin-off",
    price: 20,
    category: "ps5",
    image: "images/games/258.jpg",
    },
    {
    id: "259",
    name: "Neptunia: Sisters vs Sisters PS4 Platinum Trophy Service",
    description: "Action RPG, Neptunia series",
    price: 50,
    category: "ps4",
    image: "images/games/259.jpg",
    },
    {
    id: "260",
    name: "Neptunia: Sisters vs Sisters PS5 Platinum Trophy Service",
    description: "Action RPG, Neptunia series",
    price: 50,
    category: "ps5",
    image: "images/games/260.jpg",
    },
    {
    id: "261",
    name: "Twisted Metal PS4 Platinum Trophy Service",
    description: "Vehicular combat classic",
    price: 18,
    category: "ps4",
    image: "images/games/261.jpg",
    },
    {
    id: "262",
    name: "Twisted Metal PS5 Platinum Trophy Service",
    description: "Vehicular combat classic",
    price: 18,
    category: "ps5",
    image: "images/games/262.jpg",
    },
    {
    id: "263",
    name: "Twisted Metal 2 PS4 Platinum Trophy Service",
    description: "Vehicular combat sequel",
    price: 18,
    category: "ps4",
    image: "images/games/263.jpg",
    },
    {
    id: "264",
    name: "Twisted Metal 2 PS5 Platinum Trophy Service",
    description: "Vehicular combat sequel",
    price: 18,
    category: "ps5",
    image: "images/games/264.jpg",
    },
    {
    id: "265",
    name: "Twisted Metal 3 PS4 Platinum Trophy Service",
    description: "Vehicular combat sequel",
    price: 18,
    category: "ps4",
    image: "images/games/265.jpg",
    },
    {
    id: "266",
    name: "Twisted Metal 3 PS5 Platinum Trophy Service",
    description: "Vehicular combat sequel",
    price: 18,
    category: "ps5",
    image: "images/games/266.jpg",
    },
    {
    id: "267",
    name: "Twisted Metal 4 PS4 Platinum Trophy Service",
    description: "Vehicular combat sequel",
    price: 18,
    category: "ps4",
    image: "images/games/267.jpg",
    },
    {
    id: "268",
    name: "Twisted Metal 4 PS5 Platinum Trophy Service",
    description: "Vehicular combat sequel",
    price: 18,
    category: "ps5",
    image: "images/games/268.jpg",
    },
    {
    id: "269",
    name: "Yakuza 0: Director’s Cut PS5 Platinum Trophy Service",
    description: "Action RPG, crime drama",
    price: 250,
    category: "ps5",
    image: "images/games/269.jpg",
    },
    {
    id: "270",
    name: "Yakuza Kiwami PS5 Platinum Trophy Service",
    description: "Action RPG remake",
    price: 175,
    category: "ps5",
    image: "images/games/270.jpg",
    },
    {
    id: "271",
    name: "Yakuza Kiwami 2 PS5 Platinum Trophy Service",
    description: "Action RPG remake",
    price: 175,
    category: "ps5",
    image: "images/games/271.jpg",
    },
    {
    id: "272",
    name: "Yakuza 20th Anniversary Bundle Platinum Trophy Service",
    description: "Complete Yakuza collection",
    price: 520,
    category: "ps5",
    image: "images/games/272.jpg",
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
