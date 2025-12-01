"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newlyAddedGames = [
    {
        id: "220",
        name: "Ghostrunner (+DLC) PS4 Platinum Trophy Service",
        description: "Cyber action, fast-paced parkour",
        price: 80,
        category: "ps4",
        image: "images/games/220.jpeg",
    },
    {
        id: "221",
        name: "Ghostrunner (+DLC) PS5 Platinum Trophy Service",
        description: "Cyber action, fast-paced parkour",
        price: 80,
        category: "ps5",
        image: "images/games/221.jpeg",
    },
    {
        id: "222",
        name: "Batman The Telltale Series PS3 Platinum Trophy Service",
        description: "Narrative adventure, episodic story",
        price: 25,
        category: "ps3",
        image: "images/games/222.jpeg",
    },
    {
        id: "223",
        name: "Batman The Telltale Series PS4 Platinum Trophy Service",
        description: "Narrative adventure, episodic story",
        price: 25,
        category: "ps4",
        image: "images/games/223.jpeg",
    },
    {
        id: "224",
        name: "BioShock (+DLC) PS3 Platinum Trophy Service",
        description: "Atmospheric FPS, immersive sim",
        price: 100,
        category: "ps3",
        image: "images/games/224.jpeg",
    },
    {
        id: "225",
        name: "BioShock (+DLC) PS4 Platinum Trophy Service",
        description: "Atmospheric FPS, immersive sim",
        price: 70,
        category: "ps4",
        image: "images/games/225.jpeg",
    },
    {
        id: "226",
        name: "BioShock 2 (+DLC) PS4 Platinum Trophy Service",
        description: "Underwater FPS, story-driven",
        price: 70,
        category: "ps4",
        image: "images/games/226.jpeg",
    },
    {
        id: "227",
        name: "BioShock Infinite (+DLC) PS3 Platinum Trophy Service",
        description: "Sky-city FPS, narrative focus",
        price: 85,
        category: "ps3",
        image: "images/games/227.jpeg",
    },
    {
        id: "228",
        name: "BioShock Infinite (+DLC) PS4 Platinum Trophy Service",
        description: "Sky-city FPS, narrative focus",
        price: 85,
        category: "ps4",
        image: "images/games/228.jpeg",
    },
    {
        id: "229",
        name: "BioShock Collection Bundle PS4 Platinum Trophy Service",
        description: "Complete BioShock trilogy bundle",
        price: 115,
        category: "bundles",
        image: "images/games/229.jpeg",
    },
    {
        id: "230",
        name: "Resident Evil Code: Veronica X PS3 Platinum Trophy Service",
        description: "Survival horror classic",
        price: 60,
        category: "ps3",
        image: "images/games/230.jpeg",
    },
    {
        id: "231",
        name: "Resident Evil Code: Veronica X PS4 Platinum Trophy Service",
        description: "Survival horror classic",
        price: 60,
        category: "ps4",
        image: "images/games/231.jpeg",
    },
    {
        id: "232",
        name: "Demon’s Souls PS3 Platinum Trophy Service",
        description: "Dark fantasy, original Souls experience",
        price: 85,
        category: "ps3",
        image: "images/games/232.jpeg",
    },
    {
        id: "233",
        name: "Demon’s Souls PS5 Platinum Trophy Service",
        description: "Dark fantasy remake, next-gen visuals",
        price: 85,
        category: "ps5",
        image: "images/games/233.jpeg",
    },
    {
        id: "234",
        name: "Death Stranding 2: On The Beach PS5 Platinum Trophy Service",
        description: "Cinematic open-world, exploration",
        price: 180,
        category: "ps5",
        image: "images/games/234.jpeg",
    },
    {
        id: "235",
        name: "Discounty PS4 Platinum Trophy Service",
        description: "Action adventure indie",
        price: 50,
        category: "ps4",
        image: "images/games/235.jpeg",
    },
    {
        id: "236",
        name: "Discounty PS5 Platinum Trophy Service",
        description: "Action adventure indie",
        price: 50,
        category: "ps5",
        image: "images/games/236.jpeg",
    },
    {
        id: "237",
        name: "Clair Obscur: Expedition 33 PS5 Platinum Trophy Service",
        description: "Turn-based RPG, painterly aesthetic",
        price: 95,
        category: "ps5",
        image: "images/games/237.jpeg",
    },
    {
        id: "238",
        name: "The Elder Scrolls IV: Oblivion (+DLC) PS5 Platinum Trophy Service",
        description: "Open-world RPG classic remaster",
        price: 145,
        category: "ps5",
        image: "images/games/238.jpeg",
    },
    {
        id: "239",
        name: "Stellar Blade (+DLC) PS5 Platinum Trophy Service",
        description: "Stylish action, sci-fi adventure",
        price: 120,
        category: "ps5",
        image: "images/games/239.jpeg",
    },
    {
        id: "240",
        name: "Tomb Raider: Anniversary PS4 Platinum Trophy Service",
        description: "Classic adventure remaster",
        price: 45,
        category: "ps4",
        image: "images/games/240.jpeg",
    },
    {
        id: "241",
        name: "Tomb Raider: Anniversary PS5 Platinum Trophy Service",
        description: "Classic adventure remaster",
        price: 45,
        category: "ps5",
        image: "images/games/241.jpeg",
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
