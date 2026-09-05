"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newlyAddedGames = [
    {
        id: "330",
        name: "Gotham Knights (+DLC) PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 150,
        category: "ps5",
        image: "images/games/330.jpeg",
    },
    {
        id: "331",
        name: "Sleeping Dogs (+DLC) PS3 Platinum Trophy Service",
        description: "Action RPG",
        price: 100,
        category: "ps3",
        image: "images/games/331.jpeg",
    },
    {
        id: "332",
        name: "Sleeping Dogs Definitive Edition (+DLC) PS4 🇺🇸🇪🇺 Platinum Trophy Service",
        description: "Action RPG",
        price: 100,
        category: "ps4",
        image: "images/games/332.jpeg",
    },
    {
        id: "333",
        name: "Batman: Arkham Origins Blackgate PS3 Platinum Trophy Service",
        description: "Action RPG",
        price: 80,
        category: "ps3",
        image: "images/games/333.jpeg",
    },
    {
        id: "334",
        name: "Color Guardians PS4 Platinum Trophy Service",
        description: "Platformer",
        price: 25,
        category: "ps4",
        image: "images/games/334.jpeg",
    },
    {
        id: "335",
        name: "Silent Hill 2 HD PS3 Platinum Trophy Service",
        description: "Survival horror",
        price: 180,
        category: "ps3",
        image: "images/games/335.jpeg",
    },
    {
        id: "336",
        name: "Silent Hill 3 HD PS3 Platinum Trophy Service",
        description: "Survival horror",
        price: 50,
        category: "ps3",
        image: "images/games/335.jpeg",
    },
    {
        id: "337",
        name: "Silent Hill 2 PS5 Platinum Trophy Service",
        description: "Survival horror",
        price: 75,
        category: "ps5",
        image: "images/games/337.jpeg",
    },
    {
        id: "338",
        name: "Silent Hill f PS5 Platinum Trophy Service",
        description: "Survival horror",
        price: 150,
        category: "ps5",
        image: "images/games/338.jpeg",
    },
    {
        id: "339",
        name: "Lies of P (+DLC) PS4 Platinum Trophy Service",
        description: "Action RPG",
        price: 170,
        category: "ps4",
        image: "images/games/339.jpeg",
    },
    {
        id: "340",
        name: "Lies of P (+DLC) PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 170,
        category: "ps5",
        image: "images/games/340.jpeg",
    },
    {
        id: "341",
        name: "Black Myth: Wukong PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 180,
        category: "ps5",
        image: "images/games/341.jpeg",
    },
    {
        id: "342",
        name: "Army of ruin PS4 Platinum Trophy Service",
        description: "Action RPG",
        price: 75,
        category: "ps4",
        image: "images/games/342.jpeg",
    },
    {
        id: "343",
        name: "Army of ruin PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 75,
        category: "ps5",
        image: "images/games/343.jpeg",
    },
    {
        id: "344",
        name: "Tails of Iron (+DLC) PS4 Platinum Trophy Service",
        description: "Action RPG",
        price: 125,
        category: "ps4",
        image: "images/games/344.jpeg",
    },
    {
        id: "345",
        name: "Tails of Iron (+DLC) PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 125,
        category: "ps5",
        image: "images/games/345.jpeg",
    },
    {
        id: "346",
        name: "Evil West PS4 Platinum Trophy Service",
        description: "Action RPG",
        price: 85,
        category: "ps4",
        image: "images/games/346.jpeg",
    },
    {
        id: "347",
        name: "Evil West PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 85,
        category: "ps5",
        image: "images/games/347.jpeg",
    },
    {
        id: "348",
        name: "Mortal Kombat 1 PS5 Platinum Trophy Service",
        description: "Fighting",
        price: 150,
        category: "ps5",
        image: "images/games/348.jpeg",
    },
    {
        id: "349",
        name: "Callisto Protocol (+DLC) PS4 🇪🇺🇺🇸 Platinum Trophy Service",
        description: "Survival horror",
        price: 200,
        category: "ps4",
        image: "images/games/349.jpeg",
    },
    {
        id: "350",
        name: "Callisto Protocol (+DLC) PS5 Platinum Trophy Service",
        description: "Survival horror",
        price: 200,
        category: "ps5",
        image: "images/games/350.jpeg",
    },
    {
        id: "351",
        name: "Split/Second: Velocity PS3 Platinum Trophy Service",
        description: "Racing",
        price: 100,
        category: "ps3",
        image: "images/games/351.jpeg",
    },
    {
        id: "352",
        name: "Batman: The Enemy Within PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 30,
        category: "ps4",
        image: "images/games/352.jpeg",
    },
    {
        id: "353",
        name: "The Walking Dead: Michonne PS3 Platinum Trophy Service",
        description: "Adventure",
        price: 20,
        category: "ps3",
        image: "images/games/353.jpeg",
    },
    {
        id: "354",
        name: "The Walking Dead: Michonne PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 20,
        category: "ps4",
        image: "images/games/354.jpeg",
    },
    {
        id: "355",
        name: "The Walking Dead: A New Frontier PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 20,
        category: "ps4",
        image: "images/games/355.jpeg",
    },
    {
        id: "358",
        name: "The Walking Dead: The Final Season (Digital) PS4 🇪🇺🇺🇸 Platinum Trophy Service",
        description: "Adventure",
        price: 35,
        category: "ps4",
        image: "images/games/358.jpeg",
    },
    {
        id: "359",
        name: "The Walking Dead: The Telltale Definitive Series PS4 🇪🇺🇺🇸 Platinum Trophy Service",
        description: "Adventure",
        price: 130,
        category: "ps4",
        image: "images/games/359.jpeg",
    },
    {
        id: "360",
        name: "Marvel’s Guardians of the Galaxy: The Telltale Series Platinum Trophy Service",
        description: "Adventure",
        price: 30,
        category: "other",
        image: "images/games/360.jpeg",
    },
    {
        id: "361",
        name: "Tales from the Borderlands DG PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 25,
        category: "ps4",
        image: "images/games/361.jpeg",
    },
    {
        id: "362",
        name: "Tales from the Borderlands PS3 Platinum Trophy Service",
        description: "Adventure",
        price: 25,
        category: "ps3",
        image: "images/games/362.jpeg",
    },
    {
        id: "363",
        name: "Mafia: Definitive Edition PS5 Platinum Trophy Service",
        description: "Action Adventure",
        price: 85,
        category: "ps5",
        image: "images/games/363.jpeg",
    },
    {
        id: "364",
        name: "Poker Night at the Inventory 2 PS3 Platinum Trophy Service",
        description: "Card game",
        price: 50,
        category: "ps3",
        image: "images/games/364.jpeg",
    },
    {
        id: "365",
        name: "Grand Theft Auto: San Andreas PS3 Platinum Trophy Service",
        description: "Action Adventure",
        price: 75,
        category: "ps3",
        image: "images/games/365.jpeg",
    },
    {
        id: "366",
        name: "Grand Theft Auto: San Andreas PS4 Platinum Trophy Service",
        description: "Action Adventure",
        price: 100,
        category: "ps4",
        image: "images/games/366.jpeg",
    },
    {
        id: "367",
        name: "Uncharted: The Lost Legacy PS4 Platinum Trophy Service",
        description: "Action Adventure",
        price: 60,
        category: "ps4",
        image: "images/games/367.jpeg",
    },
    {
        id: "368",
        name: "Beyond: Two Souls PS3 Platinum Trophy Service",
        description: "Adventure",
        price: 80,
        category: "ps3",
        image: "images/games/368.jpeg",
    },
    {
        id: "369",
        name: "Beyond: Two Souls PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 90,
        category: "ps4",
        image: "images/games/369.jpeg",
    },
    {
        id: "370",
        name: "Heavy Rain PS3 Platinum Trophy Service",
        description: "Adventure",
        price: 90,
        category: "ps3",
        image: "images/games/370.jpeg",
    },
    {
        id: "371",
        name: "Heavy Rain PS4 Platinum Trophy Service",
        description: "Adventure",
        price: 90,
        category: "ps4",
        image: "images/games/371.jpeg",
    },
    {
        id: "372",
        name: "Deadpool PS3 Platinum Trophy Service",
        description: "Action Adventure",
        price: 60,
        category: "ps3",
        image: "images/games/372.jpg",
    },
    {
        id: "373",
        name: "Yakuza Kiwami 3 & Dark Ties PS4 Platinum Trophy Service",
        description: "Action RPG",
        price: 100,
        category: "ps4",
        image: "images/games/373.jpeg",
    },
    {
        id: "374",
        name: "Yakuza Kiwami 3 & Dark Ties PS5 Platinum Trophy Service",
        description: "Action RPG",
        price: 100,
        category: "ps5",
        image: "images/games/374.jpeg",
    },
    {
        id: "375",
        name: "Deadly Premonition PS3 Platinum Trophy Service",
        description: "Survival horror",
        price: 100,
        category: "ps3",
        image: "images/games/375.jpeg",
    },
    {
        id: "376",
        name: "Puss in Boots PS3 Platinum Trophy Service",
        description: "Action Adventure",
        price: 45,
        category: "ps3",
        image: "images/games/376.jpeg",
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
