"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newlyAddedGames = [
    
    {
        id: "279",
        name: "Spongebob Squarepants: Battle for Bikini Bottom PS4 Platinum Trophy Service",
        description: "Platformer",
        price: 30,
        category: "ps4",
        image: "images/games/279.jpg",
    },
    {
        id: "280",
        name: "Gravity Rush Remastered (+DLC) PS4 Platinum Trophy Service",
        description: "Action adventure",
        price: 85,
        category: "ps4",
        image: "images/games/280.jpg",
    },
    {
        id: "281",
        name: "Rayman Origins PS3 Platinum Trophy Service",
        description: "Platformer",
        price: 120,
        category: "ps3",
        image: "images/games/281.jpg",
    },
    {
        id: "282",
        name: "Rayman Legends PS4 Platinum Trophy Service",
        description: "Platformer",
        price: 250,
        category: "ps4",
        image: "images/games/282.jpg",
    },
    {
        id: "283",
        name: "Atelier Ryza: Ever Darkness & the Secret Hideout PS4 DX Platinum Trophy Service",
        description: "JRPG",
        price: 75,
        category: "ps4",
        image: "images/games/283.jpg",
    },
    {
        id: "284",
        name: "Atelier Ryza: Ever Darkness & the Secret Hideout PS5 DX Platinum Trophy Service",
        description: "JRPG",
        price: 75,
        category: "ps5",
        image: "images/games/284.jpg",
    },
    {
        id: "285",
        name: "Atelier Ryza: Lost Legends & The Secret Fairy PS4 DX Platinum Trophy Service",
        description: "JRPG",
        price: 85,
        category: "ps4",
        image: "images/games/285.jpg",
    },
    {
        id: "286",
        name: "Atelier Ryza: Lost Legends & The Secret Fairy PS5 DX Platinum Trophy Service",
        description: "JRPG",
        price: 85,
        category: "ps5",
        image: "images/games/286.jpg",
    },
    {
        id: "287",
        name: "Atelier Ryza: Alchemist of the End & The Secret Key PS4 DX Platinum Trophy Service",
        description: "JRPG",
        price: 80,
        category: "ps4",
        image: "images/games/287.jpg",
    },
    {
        id: "288",
        name: "Atelier Ryza: Alchemist of the End & The Secret Key PS5 DX Platinum Trophy Service",
        description: "JRPG",
        price: 80,
        category: "ps5",
        image: "images/games/288.jpg",
    },
    {
        id: "289",
        name: "Horizon Call of the Mountain PS5 Platinum Trophy Service",
        description: "Action adventure",
        price: 55,
        category: "ps5",
        image: "images/games/289.jpg",
    },
    {
        id: "290",
        name: "Horizon Zero Dawn (+DLC) PS4 Platinum Trophy Service",
        description: "Action RPG",
        price: 150,
        category: "ps4",
        image: "images/games/290.jpg",
    },
    {
        id: "291",
        name: "Horizon Zero Dawn (+DLC) PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 150,
        category: "ps5",
        image: "images/games/291.jpg",
    },
    {
        id: "292",
        name: "Horizon Forbidden West (+DLC) PS4 Platinum Trophy Service",
        description: "Action RPG",
        price: 150,
        category: "ps4",
        image: "images/games/292.jpg",
    },
    {
        id: "293",
        name: "Horizon Forbidden West (+DLC) PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 150,
        category: "ps5",
        image: "images/games/293.jpg",
    },
    {
        id: "294",
        name: "Death end re;Quest PS4 Platinum Trophy Service",
        description: "JRPG",
        price: 100,
        category: "ps4",
        image: "images/games/294.jpg",
    },
    {
        id: "295",
        name: "Mortal Kombat Arcade Kollection PS3 Platinum Trophy Service",
        description: "Fighting",
        price: 75,
        category: "ps3",
        image: "images/games/295.jpg",
    },
    {
        id: "296",
        name: "Grand Theft Auto III Definitive Edition PS4 Platinum Trophy Service",
        description: "Open world",
        price: 85,
        category: "ps4",
        image: "images/games/296.jpg",
    },
    {
        id: "297",
        name: "Grand Theft Auto III Definitive Edition PS5 Platinum Trophy Service",
        description: "Open world",
        price: 85,
        category: "ps5",
        image: "images/games/297.jpg",
    },
    {
        id: "298",
        name: "Grand Theft Auto Vice City Definitive Edition PS4 Platinum Trophy Service",
        description: "Open world",
        price: 85,
        category: "ps4",
        image: "images/games/298.jpg",
    },
    {
        id: "299",
        name: "Grand Theft Auto Vice City Definitive Edition PS5 Platinum Trophy Service",
        description: "Open world",
        price: 85,
        category: "ps5",
        image: "images/games/299.jpg",
    },
    {
        id: "300",
        name: "Grand Theft Auto San Andreas Definitive Edition PS4 Platinum Trophy Service",
        description: "Open world",
        price: 100,
        category: "ps4",
        image: "images/games/300.jpg",
    },
    {
        id: "301",
        name: "Grand Theft Auto San Andreas Definitive Edition PS5 Platinum Trophy Service",
        description: "Open world",
        price: 100,
        category: "ps5",
        image: "images/games/301.jpg",
    },
    {
        id: "302",
        name: "Grand Theft Auto Definitive Edition Trilogy Bundle PS4 / PS5 Platinum Trophy Service",
        description: "Open world bundle",
        price: 230,
        category: "bundles",
        image: "images/games/302.jpg",
    },
    {
        id: "303",
        name: "Atelier Ryza DX Trilogy Bundle PS4 / PS5 Platinum Trophy Service",
        description: "JRPG bundle",
        price: 205,
        category: "bundles",
        image: "images/games/303.jpg",
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
