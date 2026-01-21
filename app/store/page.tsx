"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ProductCardMobile } from "@/components/product-card-mobile"
import { SearchBar } from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { Cart } from "@/components/cart"
import { ContactButtons } from "@/components/contact-buttons"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
// Move all the products array here
const products = [
    // PS5 Games (31 games)
    {
        id: "1",
        name: "Final Fantasy VII Remake (EU) (+DLC) PS5 Platinum Trophy Service",
        description: "RPG game",
        price: 120,
        category: "ps5",
        image: "images/games/1.webp",
    },
    {
        id: "5",
        name: "Mortal Kombat 11 PS5 Platinum Trophy Service",
        description: "Fighting game",
        price: 100,
        category: "ps5",
        image: "images/games/5.webp",
    },
    {
        id: "8",
        name: "Sifu (+DLC) PS5 Platinum Trophy Service",
        description: "Action / fighting game",
        price: 150,
        category: "ps5",
        image: "images/games/8.webp",
    },
    {
        id: "9",
        name: "Resident Evil Village PS5 (+DLC) Platinum Trophy Service",
        description: "Survival horror",
        price: 75,
        category: "ps5",
        image: "images/games/9.webp",
    },
    {
        id: "14",
        name: "Resident Evil 7 (+DLC) PS5 Platinum Trophy Service",
        description: "Survival horror",
        price: 125,
        category: "ps5",
        image: "images/games/14.webp",
    },
    {
        id: "19",
        name: "Elden Ring PS5 Platinum Trophy Service",
        description: "Souls-like / open-world RPG",
        price: 85,
        category: "ps5",
        image: "images/games/19.webp",
    },
    {
        id: "23",
        name: "Castlevania Dominus Collection PS5 Platinum Trophy Service",
        description: "Action / metroidvania collection",
        price: 60,
        category: "ps5",
        image: "images/games/23.webp",
    },
    {
        id: "29",
        name: "Resident Evil 2 remake (+DLC) PS5 Platinum Trophy Service",
        description: "Survival horror",
        price: 70,
        category: "ps5",
        image: "images/games/29.webp",
    },
    {
        id: "30",
        name: "Devil May Cry 5 PS5 Platinum Trophy Service",
        description: "Hack and slash",
        price: 225,
        category: "ps5",
        image: "images/games/30.webp",
    },
    {
        id: "41",
        name: "Resident Evil 3 Remake PS5 Platinum Trophy Service",
        description: "Survival horror",
        price: 30,
        category: "ps5",
        image: "images/games/41.webp",
    },
    {
        id: "56",
        name: "Tomb Raider: Legend PS5 Platinum Trophy Service",
        description: "Action / adventure",
        price: 30,
        category: "ps5",
        image: "images/games/56.webp",
    },
    {
        id: "81",
        name: "Human Fall Flat PS5 (+20 DLC) Platinum Trophy Service",
        description: "Puzzle platformer, DLC included",
        price: 100,
        category: "ps5",
        image: "images/games/81.webp",
    },
    {
        id: "82",
        name: "Furi PS5 Platinum Trophy Service",
        description: "Boss-rush action game, indie",
        price: 75,
        category: "ps5",
        image: "images/games/82.webp",
    },
    {
        id: "95",
        name: "Atelier Ryza 2 PS5 Platinum Trophy Service",
        description: "Anime JRPG, crafting and alchemy",
        price: 85,
        category: "ps5",
        image: "images/games/95.webp",
    },
    {
        id: "101",
        name: "DRAGON BALL: Sparking! ZERO PS5 Platinum Trophy Service",
        description: "Dragon Ball arena fighter",
        price: 100,
        category: "ps5",
        image: "images/games/101.webp",
    },
    {
        id: "102",
        name: "Atelier Ryza 3 PS5 Platinum Trophy Service",
        description: "Anime-style JRPG, crafting & alchemy",
        price: 80,
        category: "ps5",
        image: "images/games/102.webp",
    },
    {
        id: "107",
        name: "Superliminal (+DLC) PS5 Platinum Trophy Service",
        description: "First-person puzzle, perspective-based gameplay",
        price: 35,
        category: "ps5",
        image: "images/games/107.webp",
    },
    {
        id: "121",
        name: "Shadow Warrior 3 PS5 (EU/NA) Platinum Trophy Service",
        description: "First-person shooter, fast-paced action",
        price: 25,
        category: "ps5",
        image: "images/games/121.webp",
    },
    {
        id: "122",
        name: "KeyWe PS5 (EU/NA) Platinum Trophy Service",
        description: "Co-op puzzle postal adventure",
        price: 55,
        category: "ps5",
        image: "images/games/122.webp",
    },
    {
        id: "128",
        name: "Suicide Squad: KTJL PS5 Platinum Trophy Service",
        description: "Supervillain action, DC universe",
        price: 125,
        category: "ps5",
        image: "images/games/128.webp",
    },
    {
        id: "130",
        name: "Overcooked! All You Can Eat PS5 Platinum Trophy Service",
        description: "Chaotic co-op cooking game bundle",
        price: 35,
        category: "ps5",
        image: "images/games/130.webp",
    },
    {
        id: "134",
        name: "Ratchet & Clank: Rift Apart PS5 Platinum Trophy Service",
        description: "Interdimensional platform shooter",
        price: 30,
        category: "ps5",
        image: "images/games/134.webp",
    },
    {
        id: "138",
        name: "Ape Escape PS5 Platinum Trophy Service",
        description: "Platformer classic, modern remaster",
        price: 30,
        category: "ps5",
        image: "images/games/138.webp",
    },
    {
        id: "139",
        name: "Dragon Ball Z: Kakarot PS5 Platinum Trophy Service",
        description: "Anime RPG retelling of DBZ saga",
        price: 60,
        category: "ps5",
        image: "images/games/139.webp",
    },
    {
        id: "140",
        name: "Spongebob Squarepants: The Cosmic Shake PS5 Platinum Trophy Service",
        description: "3D platformer in Bikini Bottom",
        price: 30,
        category: "ps5",
        image: "images/games/140.webp",
    },
    {
        id: "143",
        name: "Cat Quest III PS5 Platinum Trophy Service",
        description: "Fantasy feline RPG, third entry",
        price: 20,
        category: "ps5",
        image: "images/games/143.webp",
    },
    {
        id: "144",
        name: "Robocop: Rogue City PS5 Platinum Trophy Service",
        description: "Cinematic shooter as Robocop",
        price: 35,
        category: "ps5",
        image: "images/games/144.webp",
    },
    {
        id: "181",
        name: "God of War: Ragnarok (+DLC) PS5 Platinum Trophy Service",
        description: "Action adventure",
        price: 100,
        category: "ps5",
        image: "images/games/181.webp",
    },
    {
        id: "182",
        name: "Jak & Daxter: The Precursor Legacy PS5 Platinum Trophy Service",
        description: "Platforming adventure",
        price: 30,
        category: "ps5",
        image: "images/games/129.webp",
    },
    {
        id: "184",
        name: "The Jumping Flash PS5 Platinum Trophy Service",
        description: "3D platformer classic",
        price: 10,
        category: "ps5",
        image: "images/games/184.jpeg",
    },
    {
        id: "1901",
        name: "Death Stranding PS5 Platinum Trophy Service",
        description: "Action adventure",
        price: 120,
        category: "ps5",
        image: "images/games/186.jpeg",
    },
    {
        id: "199",
        name: "It Takes Two PS5 Platinum Trophy Service",
        description: "Adventure platformer",
        price: 35,
        category: "ps5",
        image: "images/games/199.jpeg",
    },


    // PS4 Games (85 games) - Include all PS4 games from the original list
    {
        id: "2",
        name: "Final Fantasy 7 Remake PS4 Platinum Trophy Service",
        description: "RPG game",
        price: 100,
        category: "ps4",
        image: "images/games/2.webp",
    },
    {
        id: "3",
        name: "Resident Evil 5 (+DLC) PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 110,
        category: "ps4",
        image: "images/games/3.webp",
    },
    {
        id: "4",
        name: "Resident Evil 2 remake (+DLC) PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 70,
        category: "ps4",
        image: "images/games/4.webp",
    },
    {
        id: "6",
        name: "Bloodborne (+DLC) PS4 Platinum Trophy Service",
        description: "Souls-like / action RPG",
        price: 70,
        category: "ps4",
        image: "images/games/6.webp",
    },
    {
        id: "7",
        name: "Bloodstained: ROTN (+DLC) EU/NA PS4 Platinum Trophy Service",
        description: "Metroidvania game",
        price: 85,
        category: "ps4",
        image: "images/games/7.webp",
    },
    {
        id: "10",
        name: "Devil May Cry 5 PS4 (+DLC) Platinum Trophy Service",
        description: "Hack and slash",
        price: 225,
        category: "ps4",
        image: "images/games/10.webp",
    },
    {
        id: "11",
        name: "Batman: Arkham City (+DLC) PS4 Platinum Trophy Service",
        description: "Action adventure",
        price: 125,
        category: "ps4",
        image: "images/games/11.webp",
    },
    {
        id: "12",
        name: "Tomb Raider: Legend PS4 Platinum Trophy Service",
        description: "Action / adventure",
        price: 30,
        category: "ps4",
        image: "images/games/12.webp",
    },
    {
        id: "13",
        name: "Bully PS4 Platinum Trophy Service",
        description: "Action / school life",
        price: 50,
        category: "ps4",
        image: "images/games/13.webp",
    },
    {
        id: "15",
        name: "Crash Bandicoot N'Sane Trilogy (+DLC) PS4 Platinum Trophy Service",
        description: "Platformer",
        price: 150,
        category: "ps4",
        image: "images/games/15.webp",
    },
    {
        id: "16",
        name: "Elden Ring PS4 Platinum Trophy Service",
        description: "Souls-like / open-world RPG",
        price: 85,
        category: "ps4",
        image: "images/games/16.webp",
    },
    {
        id: "17",
        name: "Resident Evil Village (+DLC) PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 75,
        category: "ps4",
        image: "images/games/17.webp",
    },
    {
        id: "18",
        name: "Hollow knight (EU/NA) PS4 Platinum Trophy Service",
        description: "Metroidvania / indie action",
        price: 70,
        category: "ps4",
        image: "images/games/18.webp",
    },
    {
        id: "21",
        name: "Dragon Ball Z: Kakarot PS4 Platinum Trophy Service",
        description: "Anime / action RPG",
        price: 60,
        category: "ps4",
        image: "images/games/21.webp",
    },
    {
        id: "22",
        name: "Batman Arkham Knight (+DLC) PS4 Platinum Trophy Service",
        description: "Action adventure",
        price: 125,
        category: "ps4",
        image: "images/games/22.webp",
    },
    {
        id: "25",
        name: "House Flipper (+DLC) EU/NA PS4 Platinum Trophy Service",
        description: "Simulation / renovation game",
        price: 95,
        category: "ps4",
        image: "images/games/25.webp",
    },
    {
        id: "26",
        name: "Mortal Kombat 11 PS4 Platinum Trophy Service",
        description: "Fighting game",
        price: 100,
        category: "ps4",
        image: "images/games/26.webp",
    },
    {
        id: "27",
        name: "Shenmue III PS4 (+DLC) Platinum Trophy Service",
        description: "Adventure / story-driven",
        price: 95,
        category: "ps4",
        image: "images/games/27.webp",
    },
    {
        id: "28",
        name: "Horizon Chase Turbo (+DLC) PS4 Platinum Trophy Service",
        description: "Arcade racing",
        price: 80,
        category: "ps4",
        image: "images/games/28.webp",
    },
    {
        id: "31",
        name: "Resident Evil 3 Remake PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 30,
        category: "ps4",
        image: "images/games/31.webp",
    },
    {
        id: "32",
        name: "Megadimension Neptunia VII PS4 Platinum Trophy Service",
        description: "JRPG / anime-style",
        price: 80,
        category: "ps4",
        image: "images/games/32.webp",
    },
    {
        id: "33",
        name: "Resident Evil HD Remaster PS4 Platinum Trophy Service",
        description: "Classic survival horror remaster",
        price: 60,
        category: "ps4",
        image: "images/games/33.webp",
    },
    {
        id: "34",
        name: "Dark Souls III PS4 Platinum Trophy Service",
        description: "Souls-like / action RPG",
        price: 90,
        category: "ps4",
        image: "images/games/34.webp",
    },
    {
        id: "35",
        name: "Overcooked! 2 PS4 (+DLC) Platinum Trophy Service",
        description: "Co-op / cooking game",
        price: 75,
        category: "ps4",
        image: "images/games/35.webp",
    },
    {
        id: "36",
        name: "DmC: Devil May Cry PS4 Platinum Trophy Service",
        description: "Hack and slash",
        price: 90,
        category: "ps4",
        image: "images/games/36.webp",
    },
    {
        id: "43",
        name: "Megadimension Neptunia VIIR PS4 Platinum Trophy Service",
        description: "JRPG / anime-style",
        price: 75,
        category: "ps4",
        image: "images/games/43.webp",
    },
    {
        id: "47",
        name: "Yu-Gi-Oh! Legacy of the Duelist: Link evolution Platinum Trophy Service",
        description: "Card battle game",
        price: 100,
        category: "ps4",
        image: "images/games/47.webp",
    },
    {
        id: "48",
        name: "L.A. Noire PS4 (+DLC)  Platinum Trophy Service",
        description: "Detective / noir game",
        price: 75,
        category: "ps4",
        image: "images/games/48.webp",
    },
    {
        id: "51",
        name: "Danganronpa 1-2 Reload PS4 Platinum Trophy Service",
        description: "Visual novel / mystery",
        price: 90,
        category: "ps4",
        image: "images/games/51.webp",
    },
    {
        id: "52",
        name: "CTR Nitro Fueled PS4 Platinum Trophy Service",
        description: "Kart racing",
        price: 100,
        category: "ps4",
        image: "images/games/52.webp",
    },
    {
        id: "53",
        name: "Devil May Cry 3 HD PS4 Platinum Trophy Service",
        description: "Hack and slash",
        price: 100,
        category: "ps4",
        image: "images/games/53.webp",
    },
    {
        id: "54",
        name: "Resident Evil Revelations 2 PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 85,
        category: "ps4",
        image: "images/games/54.webp",
    },
    {
        id: "55",
        name: "Devil May Cry 4 PS4 Platinum Trophy Service",
        description: "Hack and slash",
        price: 135,
        category: "ps4",
        image: "images/games/55.webp",
    },
    {
        id: "58",
        name: "Undertale PS4 Platinum Trophy Service",
        description: "Indie RPG",
        price: 20,
        category: "ps4",
        image: "images/games/58.webp",
    },
    {
        id: "59",
        name: "The Wolf Among Us PS4 Platinum Trophy Service",
        description: "Narrative / episodic adventure",
        price: 25,
        category: "ps4",
        image: "images/games/59.webp",
    },
    {
        id: "60",
        name: "Superliminal (+DLC) (EU/NA) PS4 Platinum Trophy Service",
        description: "Puzzle / perspective-based game",
        price: 35,
        category: "ps4",
        image: "images/games/60.webp",
    },
    {
        id: "62",
        name: "Human Fall Flat PS4 (+20 DLC) Platinum Trophy Service",
        description: "Puzzle platformer, DLC included",
        price: 100,
        category: "ps4",
        image: "images/games/62.webp",
    },
    {
        id: "65",
        name: "Darksiders: Warmastered Edition PS4 Platinum Trophy Service",
        description: "Action-adventure, apocalyptic world",
        price: 60,
        category: "ps4",
        image: "images/games/65.webp",
    },
    {
        id: "69",
        name: "Resident Evil 6 (+DLC) PS4 Platinum Trophy Service",
        description: "Survival horror, co-op action",
        price: 115,
        category: "ps4",
        image: "images/games/69.webp",
    },
    {
        id: "72",
        name: "Dark Souls Remastered PS4 Platinum Trophy Service",
        description: "Soulslike, action RPG",
        price: 50,
        category: "ps4",
        image: "images/games/72.webp",
    },
    {
        id: "73",
        name: "Sekiro: Shadows Die Twice PS4 Platinum Trophy",
        description: "Adventure game, SoulsLike game",
        price: 75,
        category: "ps4",
        image: "images/games/73.webp",
    },
    {
        id: "77",
        name: "Melty Blood: Type Lumina PS4 Platinum Trophy Service",
        description: "Anime fighting game",
        price: 65,
        category: "ps4",
        image: "images/games/77.webp",
    },
    {
        id: "83",
        name: "Cyberdimension Neptunia: 4 Goddess Online PS4 Platinum Trophy Service",
        description: "Anime-style RPG, Neptunia series",
        price: 55,
        category: "ps4",
        image: "images/games/83.webp",
    },
    {
        id: "84",
        name: "The Walking Dead (+DLC) PS4 Platinum Trophy Service",
        description: "Narrative adventure, Telltale series",
        price: 25,
        category: "ps4",
        image: "images/games/84.webp",
    },
    {
        id: "85",
        name: "InFamous: Second Son PS4 Platinum Trophy Service",
        description: "Open-world superhero action",
        price: 45,
        category: "ps4",
        image: "images/games/85.webp",
    },
    {
        id: "88",
        name: "Devil May Cry 2 HD PS4 Platinum Trophy Service",
        description: "Stylized hack-and-slash action",
        price: 45,
        category: "ps4",
        image: "images/games/88.jpeg",
    },
    {
        id: "89",
        name: "Dragon Quest Builders 2 PS4 Platinum Trophy Service",
        description: "Building RPG, Dragon Quest spin-off",
        price: 85,
        category: "ps4",
        image: "images/games/892.webp",
    },
    {
        id: "90",
        name: "Spyro Reignited Trilogy PS4 Platinum Trophy Service",
        description: "Remastered classic platformers",
        price: 65,
        category: "ps4",
        image: "images/games/91.webp",
    },
    {
        id: "93",
        name: "Sifu (+DLC) PS4 Platinum Trophy Service",
        description: "Kung fu action roguelike",
        price: 150,
        category: "ps4",
        image: "images/games/93.webp",
    },
    {
        id: "96",
        name: "Trine 2: Complete Story PS4 Platinum Trophy Service",
        description: "Puzzle-platformer with co-op",
        price: 85,
        category: "ps4",
        image: "images/games/96.webp",
    },
    {
        id: "97",
        name: "Patapon 2 PS4 Platinum Trophy Service",
        description: "Rhythm strategy remaster",
        price: 50,
        category: "ps4",
        image: "images/games/97.webp",
    },
    {
        id: "98",
        name: "Super Neptunia RPG PS4 Platinum Trophy Service",
        description: "Side-scrolling JRPG, anime-style",
        price: 55,
        category: "ps4",
        image: "images/games/98.webp",
    },
    {
        id: "99",
        name: "Dragon Quest Builders PS4 Platinum Trophy Service",
        description: "Sandbox building RPG",
        price: 65,
        category: "ps4",
        image: "images/games/99.webp",
    },
    {
        id: "103",
        name: "KeyWe PS4 (EU/NA) Platinum Trophy Service",
        description: "Co-op puzzle postal adventure",
        price: 55,
        category: "ps4",
        image: "images/games/103.webp",
    },
    {
        id: "108",
        name: "Neptunia x Senran Kagura (EU/NA) PS4 Platinum Trophy Service",
        description: "Anime crossover, action RPG",
        price: 75,
        category: "ps4",
        image: "images/games/108.webp",
    },
    {
        id: "109",
        name: "Detroit: Become Human PS4 Platinum Trophy Service",
        description: "Interactive narrative, futuristic thriller",
        price: 45,
        category: "ps4",
        image: "images/games/109.webp",
    },
    {
        id: "110",
        name: "InFamous: First Light PS4 Platinum Trophy Service",
        description: "Standalone superhero expansion, open-world",
        price: 35,
        category: "ps4",
        image: "images/games/110.webp",
    },
    {
        id: "111",
        name: "Atelier Ryza 1 PS4 Platinum Trophy Service",
        description: "JRPG, crafting, slice-of-life fantasy",
        price: 75,
        category: "ps4",
        image: "images/games/111.webp",
    },
    {
        id: "112",
        name: "God Of War III Remastered PS4 Platinum Trophy Service",
        description: "Epic action-adventure, Greek mythology",
        price: 50,
        category: "ps4",
        image: "images/games/112.webp",
    },
    {
        id: "115",
        name: "Resident Evil 4 (2005) PS4 Trophy Service",
        description: "Survival horror classic, third-person shooter",
        price: 50,
        category: "ps4",
        image: "images/games/115.webp",
    },
    {
        id: "117",
        name: "Cat Quest II PS4 Platinum Trophy Service",
        description: "Action RPG with cats and dogs",
        price: 25,
        category: "ps4",
        image: "images/games/117.webp",
    },
    {
        id: "123",
        name: "Patapon Remastered PS4 Platinum Trophy Service",
        description: "Rhythm strategy, stylized 2D visuals",
        price: 55,
        category: "ps4",
        image: "images/games/123.webp",
    },
    {
        id: "125",
        name: "Cat Quest III PS4 Platinum Trophy Service",
        description: "Open-world action RPG with cats",
        price: 20,
        category: "ps4",
        image: "images/games/125.webp",
    },
    {
        id: "126",
        name: "Cat Quest PS4 Platinum Trophy Service",
        description: "Charming feline-themed RPG",
        price: 25,
        category: "ps4",
        image: "images/games/126.webp",
    },
    {
        id: "127",
        name: "Ape Escape PS4 Platinum Trophy Service",
        description: "Classic platformer remastered",
        price: 30,
        category: "ps4",
        image: "images/games/127.webp",
    },
    {
        id: "131",
        name: "Yakuza Kiwami PS4 Platinum Trophy Service",
        description: "Crime drama, beat-em-up remake",
        price: 175,
        category: "ps4",
        image: "images/games/131.webp",
    },
    {
        id: "133",
        name: "Shadow Warrior 3 PS4 Platinum Trophy Service",
        description: "Fast-paced FPS, demon-slaying chaos",
        price: 25,
        category: "ps4",
        image: "images/games/133.webp",
    },
    {
        id: "135",
        name: "The Walking Dead: A New Frontier PS4 Platinum Trophy Service",
        description: "Telltale narrative zombie drama",
        price: 25,
        category: "ps4",
        image: "images/games/135.webp",
    },
    {
        id: "136",
        name: "Ape Escape: On The Loose PS4/PS5 Platinum Trophy Service",
        description: "Remake of classic PSP platformer",
        price: 35,
        category: "ps4",
        image: "images/games/193.jpeg",
    },
    {
        id: "137",
        name: "Spongebob Squarepants: The Cosmic Shake PS4 Platinum Trophy Service",
        description: "Cartoon platforming with Spongebob",
        price: 30,
        category: "ps4",
        image: "images/games/137.webp",
    },
    {
        id: "141",
        name: "The Jumping Flash PS4 Platinum Trophy Service",
        description: "Retro first-person platforming action",
        price: 10,
        category: "ps4",
        image: "images/games/141.webp",
    },
    {
        id: "154",
        name: "Atelier Ryza 2 PS4 Platinum Trophy Service",
        description: "Retro first-person platforming action",
        price: 85,
        category: "ps4",
        image: "images/games/154.webp",
    },
    {
        id: "155",
        name: "Batman: Arkham City (+DLC) PS4 Platinum Trophy Service",
        description: "Action adventure",
        price: 125,
        category: "ps4",
        image: "images/games/155.webp",
    },
    {
        id: "156",
        name: "Celeste PS4 Platinum Trophy Service",
        description: "Platforming action",
        price: 35,
        category: "ps4",
        image: "images/games/156.webp",
    },

    {
        id: "157",
        name: "Crash Bandicoot (+DLC) PS4 Platinum Trophy Service",
        description: "Platforming action",
        price: 60,
        category: "ps4",
        image: "images/games/15.webp",
    },
    {
        id: "158",
        name: "Crash Bandicoot 2 Cortex Strikes Back PS4 Platinum Trophy Service",
        description: "Platforming action",
        price: 55,
        category: "ps4",
        image: "images/games/15.webp",
    },
    {
        id: "159",
        name: "Crash Bandicoot: Warped PS4 Platinum Trophy Service",
        description: "Platforming action",
        price: 55,
        category: "ps4",
        image: "images/games/15.webp",
    },
    {
        id: "160",
        name: "Dark Souls II: Scholar Of The First Sin PS4 Platinum Trophy Service",
        description: "Action RPG",
        price: 75,
        category: "ps4",
        image: "images/games/160.webp",
    },
    {
        id: "161",
        name: "Death Stranding PS4 Platinum Trophy Service",
        description: "Action adventure",
        price: 120,
        category: "ps4",
        image: "images/games/189.jpeg",
    },
    {
        id: "162",
        name: "Far Cry 3: Classic Edition PS4 Platinum Trophy Service",
        description: "First-person shooter",
        price: 50,
        category: "ps4",
        image: "images/games/162.webp",
    },
    {
        id: "163",
        name: "Furi PS4 Platinum Trophy Service",
        description: "Boss rush action",
        price: 75,
        category: "ps4",
        image: "images/games/163.webp",
    },
    {
        id: "164",
        name: "God of War (2018) PS4 Platinum Trophy Service",
        description: "Action adventure",
        price: 70,
        category: "ps4",
        image: "images/games/164.webp",
    },
    {
        id: "165",
        name: "God of War: Ragnarok (+DLC) Platinum Trophy Service",
        description: "Action adventure",
        price: 100,
        category: "ps4",
        image: "images/games/165.webp",
    },
    {
        id: "166",
        name: "Jak & Daxter: The Precursor Legacy PS4 Platinum Trophy Service",
        description: "Platforming adventure",
        price: 30,
        category: "ps4",
        image: "images/games/129.webp",
    },
    {
        id: "167",
        name: "J-Stars Victory Vs PS4 Platinum Trophy Service",
        description: "Fighting anime crossover",
        price: 85,
        category: "ps4",
        image: "images/games/195.jpeg",
    },
    {
        id: "168",
        name: "Mafia: Definitive Edition PS4 Platinum Trophy Service",
        description: "Action crime story",
        price: 65,
        category: "ps4",
        image: "images/games/197.jpeg",
    },
    {
        id: "169",
        name: "NieR Automata PS4 Platinum Trophy Service",
        description: "Action RPG",
        price: 65,
        category: "ps4",
        image: "images/games/190.jpeg",
    },
    {
        id: "170",
        name: "Onechanbara ORIGIN PS4 Platinum Trophy Service",
        description: "Hack and slash action",
        price: 50,
        category: "ps4",
        image: "images/games/170.webp",
    },
    {
        id: "171",
        name: "Overcooked PS4 Platinum Trophy Service",
        description: "Co-op cooking chaos",
        price: 25,
        category: "ps4",
        image: "images/games/188.jpeg",
    },
    {
        id: "172",
        name: "Overcooked! All you can eat PS4 Platinum Trophy Service",
        description: "Co-op cooking chaos",
        price: 35,
        category: "ps4",
        image: "images/games/172.webp",
    },
    {
        id: "173",
        name: "PaRappa the Rapper: Remastered PS4 Platinum Trophy Service",
        description: "Rhythm music game",
        price: 20,
        category: "ps4",
        image: "images/games/198.jpeg",
    },
    {
        id: "174",
        name: "The Quintessential Quintuplets PS4 Platinum Trophy Service",
        description: "Visual novel",
        price: 55,
        category: "ps4",
        image: "images/games/191.jpeg",
    },
    {
        id: "175",
        name: "Resident Evil 4 Remake (+DLC) PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 100,
        category: "ps4",
        image: "images/games/185.jpeg",
    },
    {
        id: "176",
        name: "Shenmue PS4 Platinum Trophy Service",
        description: "Adventure simulation",
        price: 40,
        category: "ps4",
        image: "images/games/176.jpeg",
    },
    {
        id: "177",
        name: "Shenmue II PS4 Platinum Trophy Service",
        description: "Adventure simulation",
        price: 45,
        category: "ps4",
        image: "images/games/177.jpeg",
    },
    {
        id: "178",
        name: "Yakuza 0 PS4 Platinum Trophy Service",
        description: "Action drama",
        price: 250,
        category: "ps4",
        image: "images/games/192.jpeg",
    },
    {
        id: "179",
        name: "Yakuza Kiwami 2 PS4 Platinum Trophy Service",
        description: "Action drama",
        price: 175,
        category: "ps4",
        image: "images/games/194.jpeg",
    },
    {
        id: "183",
        name: "Resident Evil 7 (+DLC) PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 100,
        category: "ps4",
        image: "images/games/199.webp",
    },
    {
        id: "200",
        name: "It Takes Two PS4 Platinum Trophy Service",
        description: "Adventure plataformr",
        price: 35,
        category: "ps4",
        image: "images/games/200.jpeg",
    },
    {
        id: "203",
        name: "A Way Out PS4 Platinum Trophy Service",
        description: "Stori Aventure",
        price: 20,
        category: "ps4",
        image: "images/games/203.jpeg",
    },
    {
        id: "201",
        name: "Game Of Thrones PS4 Platinum Trophy Service",
        description: "Series game",
        price: 25,
        category: "ps4",
        image: "images/games/201.jpeg",
    },

    // PS3 Games (25 games) - Include all PS3 games from the original list
    {
        id: "40",
        name: "Resident Evil: Revelations 2 PS3 Platinum Trophy Service",
        description: "Survival horror",
        price: 85,
        category: "ps3",
        image: "images/games/40.webp",
    },
    {
        id: "44",
        name: "Batman: Arkham City (+DLC) PS3 Platinum Trophy Service",
        description: "Action adventure",
        price: 125,
        category: "ps3",
        image: "images/games/44.webp",
    },
    {
        id: "61",
        name: "Silent Hill: Downpour PS3 Platinum Trophy Service",
        description: "Horror game, PS3 service",
        price: 65,
        category: "ps3",
        image: "images/games/61.webp",
    },
    {
        id: "63",
        name: "Dark Souls II PS3 Platinum Trophy Service",
        description: "Action RPG, Soulslike",
        price: 75,
        category: "ps3",
        image: "images/games/63.webp",
    },
    {
        id: "64",
        name: "God of War: Ascension PS3 Platinum Trophy Service",
        description: "Action adventure, God of War series",
        price: 55,
        category: "ps3",
        image: "images/games/64.webp",
    },
    {
        id: "70",
        name: "Resident Evil 6 PS3 Platinum Trophy Service",
        description: "Survival horror, PS3 edition",
        price: 60,
        category: "ps3",
        image: "images/games/70.webp",
    },
    {
        id: "79",
        name: "Resident Evil 4 (2005) PS3 Trophy Service",
        description: "Classic horror trophy service",
        price: 50,
        category: "ps3",
        image: "images/games/79.webp",
    },
    {
        id: "80",
        name: "DmC: Devil May Cry (+DLC) PS3 Platinum Trophy Service",
        description: "Reboot action game with DLC",
        price: 115,
        category: "ps3",
        image: "images/games/80.webp",
    },
    {
        id: "86",
        name: "Resident Evil 5 PS3 Platinum Trophy Service",
        description: "Action horror, Resident Evil franchise",
        price: 50,
        category: "ps3",
        image: "images/games/86.webp",
    },
    {
        id: "87",
        name: "LEGO Star Wars III: The Clone Wars PS3 Platinum Trophy Service",
        description: "LEGO adventure, co-op",
        price:50 ,
        category: "ps3",
        image: "images/games/87.webp",
    },
    {
        id: "91",
        name: "InFamous 2 PS3 Platinum Trophy Service",
        description: "Superpowered open world",
        price: 65,
        category: "ps3",
        image: "images/games/187.jpeg",
    },
    {
        id: "92",
        name: "Tomb Raider: Anniversary PS3 Platinum Trophy Service",
        description: "Classic Lara Croft action-adventure",
        price: 50,
        category: "ps3",
        image: "images/games/150.webp",
    },
    {
        id: "100",
        name: "Tomb Raider: Underworld PS3 Platinum Trophy Service",
        description: "Lara Croft classic platform adventure",
        price: 50,
        category: "ps3",
        image: "images/games/100.webp",
    },
    {
        id: "104",
        name: "DarkSiders PS3 Platinum Trophy Service",
        description: "Action-adventure, apocalyptic hack and slash",
        price: 75,
        category: "ps3",
        image: "images/games/104.webp",
    },
    {
        id: "105",
        name: "Dark Souls PS3 Platinum Trophy Service",
        description: "Challenging action RPG, Souls-like",
        price: 65,
        category: "ps3",
        image: "images/games/105.webp",
    },
    {
        id: "106",
        name: "L.A. Noire (+DLC) PS3 Platinum Trophy Service",
        description: "Detective thriller, open world, Rockstar Games",
        price: 75,
        category: "ps3",
        image: "images/games/106.webp",
    },
    {
        id: "113",
        name: "Devil May Cry 3 HD PS3 Platinum Trophy Service",
        description: "Fast-paced hack and slash, prequel",
        price: 100,
        category: "ps3",
        image: "images/games/113.webp",
    },
    {
        id: "114",
        name: "Saint Seiya: Sanctuary Battle PS3 Platinum Trophy Service",
        description: "Anime action, Saint Seiya franchise",
        price: 75,
        category: "ps3",
        image: "images/games/114.webp",
    },
    {
        id: "116",
        name: "Devil May Cry 2 HD PS3 Platinum Trophy Service",
        description: "Stylish demon-slaying action",
        price: 45,
        category: "ps3",
        image: "images/games/116.webp",
    },
    {
        id: "118",
        name: "The Walking Dead (+DLC) PS3 Platinum Trophy Service",
        description: "Telltale adventure, zombie survival",
        price: 25,
        category: "ps3",
        image: "images/games/118.webp",
    },
    {
        id: "119",
        name: "Batman: Arkham Asylum PS3 Platinum Trophy Service",
        description: "Superhero stealth-action, Arkham series",
        price: 35,
        category: "ps3",
        image: "images/games/119.webp",
    },
    {
        id: "120",
        name: "Devil May Cry 1 HD PS3 Platinum Trophy Service",
        description: "Original demon hunter action game",
        price: 65,
        category: "ps3",
        image: "images/games/120.webp",
    },
    {
        id: "124",
        name: "God of War III PS3 Platinum Trophy Service",
        description: "Epic action-adventure, Greek mythology",
        price: 50,
        category: "ps3",
        image: "images/games/124.webp",
    },
    {
        id: "129",
        name: "Jak & Daxter: The Precursor Legacy PS3 Platinum Trophy",
        description: "Classic 3D platformer adventure",
        price: 35,
        category: "ps3",
        image: "images/games/129.webp",
    },
    {
        id: "132",
        name: "Tomb Raider: Legend PS3 Platinum Trophy Service",
        description: "Lara Croft action-adventure reboot",
        price: 35,
        category: "ps3",
        image: "images/games/132.webp",
    },
    {
        id: "142",
        name: "The Wolf Among Us PS3 Platinum Trophy Service",
        description: "Gritty fairy tale noir by Telltale",
        price: 25,
        category: "ps3",
        image: "images/games/142.webp",
    },
    {
        id: "145",
        name: "Alice: Madness Returns PS3 (+DLC) Platinum Trophy",
        description: "Survival horror",
        price: 65,
        category: "ps3",
        image: "images/games/196.jpeg",
    },
        {
        id: "146",
        name: "God of War: Chains of Olympus PS3 Platinum Trophy Service",
        description: "Epic action-adventure, Greek mythology",
        price: 35,
        category: "ps3",
        image: "images/games/146.webp",
    },
    {
        id: "147",
        name: "God of War: Ghost of Sparta PS3 Platinum Trophy Service",
        description: "Epic action-adventure, Greek mythology",
        price: 35,
        category: "ps3",
        image: "images/games/146.webp",
    },
    {
        id: "148",
        name: "Tomb Raider: Anniversary PS3 Platinum Trophy Service",
        description: "Action / adventure",
        price: 50,
        category: "ps3",
        image: "images/games/148.webp",
    },
        {
        id: "149",
        name: "InFamous PS3 Platinum Trophy Service",
        description: "Open-world superhero action",
        price: 55,
        category: "ps3",
        image: "images/games/149.webp",
    },
    {
        id: "202",
        name: "Game Of Thrones PS4 Platinum Trophy Service",
        description: "Series game",
        price: 25,
        category: "ps3",
        image: "images/games/202.jpeg",
    },

    // Bundles (9 bundles) - Include all bundles from the original list
    {
        id: "20",
        name: "Devil May Cry Trilogy Bundle PS3 or PS4 Platinum Trophy Service",
        description: "Hack and slash bundle",
        price: 180,
        category: "bundles",
        image: "images/games/20.webp",
    },
    {
        id: "24",
        name: "Resident Evil Remake Bundle PS4 or PS5 Platinum Trophy Service",
        description: "Horror remake bundle",
        price: 170,
        category: "bundles",
        image: "images/games/24.webp",
    },
    {
        id: "38",
        name: "Tomb Raider Trilogy Bundle PS3 Platinum Trophy Service",
        description: "Action adventure trilogy",
        price: 115,
        category: "bundles",
        image: "images/games/38.webp",
    },
    {
        id: "39",
        name: "Dark Souls Trilogy Bundle PS4 Platinum Trophy Service",
        description: "Souls-like trilogy",
        price: 180,
        category: "bundles",
        image: "images/games/39.webp",
    },
    {
        id: "45",
        name: "Batman Arkham Bundle PS4 Platinum Trophy Service",
        description: "Action adventure bundle",
        price: 240,
        category: "bundles",
        image: "images/games/45.webp",
    },
    {
        id: "46",
        name: "Spyro + Crash Bundle PS4 Platinum Trophy Service",
        description: "Platformer bundle",
        price: 200,
        category: "bundles",
        image: "images/games/46.webp",
    },
    {
        id: "150",
        name: "Cat Quest Trilogy Bundle PS4 Platinum Trophy Service",
        description: "Classic platformers",
        price: 60,
        category: "bundles",
        image: "images/games/1501.webp",
    },
    {
        id: "151",
        name: "God of War Origins Collection Bundle PS3 Platinum Trophy Service",
        description: "Epic action-adventure, Greek mythology",
        price: 60,
        category: "bundles",
        image: "images/games/151.webp",
    },
    {
        id: "152",
        name: "God of War Trilogy Bundle PS3 Platinum Trophy Service",
        description: "Epic action-adventure, Greek mythology",
        price: 95,
        category: "bundles",
        image: "images/games/152.webp",
    },
    {
        id: "78",
        name: "Shenmue 1+2 PS4 Platinum Trophy Service",
        description: "Open world, action-adventure",
        price: 80,
        category: "bundles",
        image: "images/games/78.webp",
    },
        {
        id: "218",
        name: "Resident Evil Origins Bundle Platinum Trophy Service",
        description: "Survival horror, classic remasters",
        price: 105,
        category: "bundles",
        image: "images/games/218.jpg",
    },
    // Newly Added (16 added)
    {
        id: "204",
        name: "AI Limit PS5 Platinum Trophy Service",
        description: "Action-adventure, futuristic RPG",
        price: 100,
        category: "ps5",
        image: "images/games/204.jpg",
    },
    {
        id: "205",
        name: "Coffee Talk PS4 Platinum Trophy Service",
        description: "Visual novel, relaxing simulation",
        price: 15,
        category: "ps4",
        image: "images/games/205.jpg",
    },
    {
        id: "206",
        name: "Coffee Talk: Episode 2 Hibiscus & Butterflies PS4 Platinum Trophy Service",
        description: "Visual novel, relaxing simulation",
        price: 35,
        category: "ps4",
        image: "images/games/206.jpg",
    },
    {
        id: "207",
        name: "Coffee Talk PS5 Platinum Trophy Service",
        description: "Visual novel, relaxing simulation",
        price: 15,
        category: "ps5",
        image: "images/games/207.jpg",
    },
    {
        id: "208",
        name: "Coffee Talk: Episode 2 Hibiscus & Butterflies PS5 Platinum Trophy Service",
        description: "Visual novel, relaxing simulation",
        price: 35,
        category: "ps5",
        image: "images/games/208.jpg",
    },
    {
        id: "209",
        name: "Ghost of Yōtei PS5 Platinum Trophy Service",
        description: "Action-adventure, samurai open world",
        price: 150,
        category: "ps5",
        image: "images/games/209.jpg",
    },
    {
        id: "210",
        name: "Maneater (+DLC) PS4 Platinum Trophy Service",
        description: "Action RPG, open world shark mayhem",
        price: 60,
        category: "ps4",
        image: "images/games/210.jpg",
    },
    {
        id: "211",
        name: "Maneater (+DLC) PS5 Platinum Trophy Service",
        description: "Action RPG, open world shark mayhem",
        price: 60,
        category: "ps5",
        image: "images/games/211.jpg",
    },
    {
        id: "212",
        name: "Mortal Kombat Legacy Kollection PS4 Platinum Trophy Service",
        description: "Fighting, classic arcade action",
        price: 90,
        category: "ps4",
        image: "images/games/212.jpg",
    },
    {
        id: "213",
        name: "Mortal Kombat Legacy Kollection PS5 Platinum Trophy Service",
        description: "Fighting, classic arcade action",
        price: 90,
        category: "ps5",
        image: "images/games/213.jpg",
    },
    {
        id: "214",
        name: "Patapon 1-2 Replay PS5 Platinum Trophy Service",
        description: "Rhythm strategy, classic remaster",
        price: 90,
        category: "ps5",
        image: "images/games/214.jpg",
    },
    {
        id: "215",
        name: "Plants vs Zombies: Garden Warfare PS3 Platinum Trophy Service",
        description: "Third-person shooter, tower defense",
        price: 85,
        category: "ps3",
        image: "images/games/215.jpg",
    },
    {
        id: "216",
        name: "Plants vs Zombies: Garden Warfare PS4 Platinum Trophy Service",
        description: "Third-person shooter, tower defense",
        price: 85,
        category: "ps4",
        image: "images/games/216.jpg",
    },
    {
        id: "217",
        name: "Resident Evil 0 PS4 Platinum Trophy Service",
        description: "Survival horror, classic Resident Evil",
        price: 65,
        category: "ps4",
        image: "images/games/217.jpg",
    },
    {
        id: "219",
        name: "Sonic X Shadow Generations PS5 Platinum Trophy Service",
        description: "Platformer, action-adventure",
        price: 80,
        category: "ps5",
        image: "images/games/219.jpg",
    },
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
    },
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
        category: "bundles",
        image: "images/games/272.jpg",
    },
]

export default function StorePage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all")
    const [searchTerm, setSearchTerm] = useState<string>("")
    const { addToCart } = useCart()

    const newlyAddedGames = [
        products.find((p) => p.id === "242"),
        products.find((p) => p.id === "243"),
        products.find((p) => p.id === "244"),
        products.find((p) => p.id === "245"),
        products.find((p) => p.id === "246"),
        products.find((p) => p.id === "247"),
        products.find((p) => p.id === "248"),
        products.find((p) => p.id === "249"),
        products.find((p) => p.id === "250"),
        products.find((p) => p.id === "251"),
        products.find((p) => p.id === "252"),
        products.find((p) => p.id === "253"),
        products.find((p) => p.id === "254"),
        products.find((p) => p.id === "255"),
        products.find((p) => p.id === "256"),
        products.find((p) => p.id === "257"),
        products.find((p) => p.id === "258"),
        products.find((p) => p.id === "259"),
        products.find((p) => p.id === "260"),
        products.find((p) => p.id === "261"),
        products.find((p) => p.id === "262"),
        products.find((p) => p.id === "263"),
        products.find((p) => p.id === "264"),
        products.find((p) => p.id === "265"),
        products.find((p) => p.id === "266"),
        products.find((p) => p.id === "267"),
        products.find((p) => p.id === "268"),
        products.find((p) => p.id === "269"),
        products.find((p) => p.id === "270"),
        products.find((p) => p.id === "271"),
    ].filter(Boolean)

    const newlyAddedIds = newlyAddedGames.map((game) => game.id)

    const filteredProducts = useMemo(() => {
        let filtered = products

        if (selectedCategory !== "all") {
        if (selectedCategory === "newly-added") {
            filtered = filtered.filter((product) => newlyAddedIds.includes(product.id))
        } else {
            filtered = filtered.filter((product) => product.category === selectedCategory)
        }
        }

        // Filter by search term
        if (searchTerm) {
        filtered = filtered.filter(
            (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        }

        return filtered
    }, [selectedCategory, searchTerm, newlyAddedIds])

    const categories = [
        { id: "all", name: "All Games", count: products.length, icon: "🎮" },
        { id: "newly-added", name: "Newly Added", count: newlyAddedGames.length, icon: "✨" },
        { id: "ps5", name: "PlayStation 5", count: products.filter((p) => p.category === "ps5").length, icon: "🎮" },
        { id: "ps4", name: "PlayStation 4", count: products.filter((p) => p.category === "ps4").length, icon: "🎮" },
        { id: "ps3", name: "PlayStation 3", count: products.filter((p) => p.category === "ps3").length, icon: "🎮" },
        { id: "bundles", name: "Game Bundles", count: products.filter((p) => p.category === "bundles").length, icon: "📦" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 from-purple-50 via-pink-50 to-purple-100 overflow-x-hidden">
        <Header />

        {/* Add padding-top to account for fixed header */}
        <div className="pt-20">
            <main>
            {/* Hero Section */}
            <section className="relative py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 dark:from-purple-600/20 dark:to-pink-600/20 from-purple-200/40 to-pink-200/40 blur-3xl"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent px-2">
                    Trophy Store
                </h1>
                <p className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 dark:text-purple-200 text-purple-700 mb-6 sm:mb-8 font-light px-4">
                    Professional PlayStation Platinum Trophy Services
                </p>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>

                {/* SEO Content */}
                <div className="mt-8 max-w-3xl mx-auto text-center">
                    <h2 className="text-lg sm:text-xl font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                    Expert PlayStation Trophy Completion Services
                    </h2>
                    <p className="text-sm sm:text-base text-purple-300 dark:text-purple-300 text-purple-600 leading-relaxed">
                    Get your PlayStation platinum trophies completed by professional gamers. We specialize in PS3, PS4,
                    and PS5 trophy services including the most challenging games like Dark Souls, Sekiro, Elden Ring, and
                    more. Fast, safe, and reliable trophy boosting with 100% completion guarantee.
                    </p>
                </div>
                </div>
            </section>

            {/* Search Bar */}
            <section className="py-6 sm:py-8 px-3 sm:px-4" aria-label="Game Search">
                <div className="max-w-6xl mx-auto">
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} placeholder="Search for games..." />
                </div>
            </section>

            <section className="py-8 px-3 sm:px-4" aria-label="Newly Added Games">
                <div className="max-w-7xl mx-auto">
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 sm:py-8 px-3 sm:px-4" aria-label="Game Categories">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-center text-purple-200 dark:text-purple-200 text-purple-700 mb-6">
                    Choose Your Category
                </h2>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
                    {categories.map((category) => (
                    <Button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        className={`
                        px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 border-2 text-xs sm:text-sm
                        ${
                            selectedCategory === category.id
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500 text-white shadow-lg shadow-purple-500/50"
                            : "border-purple-500/50 text-purple-300 dark:text-purple-300 text-purple-700 hover:border-purple-400 hover:text-purple-200 dark:hover:text-purple-200 hover:text-purple-600 hover:shadow-md hover:shadow-purple-500/25"
                        }
                        `}
                    >
                        <span className="mr-1 sm:mr-2">{category.icon}</span>
                        <span className="hidden sm:inline">{category.name}</span>
                        <span className="sm:hidden">
                        {category.name.replace("PlayStation ", "PS").replace("Game ", "")}
                        </span>
                        <span className="ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 sm:py-1 text-xs rounded-full bg-purple-500/30">
                        {category.count}
                        </span>
                    </Button>
                    ))}
                </div>
                </div>
            </section>

            {/* Results Info */}
            {(searchTerm || selectedCategory !== "all") && (
                <section className="px-3 sm:px-4 pb-4" aria-label="Search Results">
                <div className="max-w-7xl mx-auto">
                    <p className="text-center text-purple-300 dark:text-purple-300 text-purple-600 text-sm sm:text-base">
                    {filteredProducts.length === 0
                        ? "No games found matching your criteria"
                        : `Showing ${filteredProducts.length} game${filteredProducts.length !== 1 ? "s" : ""}`}
                    {searchTerm && ` for "${searchTerm}"`}
                    {selectedCategory !== "all" && ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
                    </p>
                </div>
                </section>
            )}

            {/* Products Grid */}
            <section className="py-6 sm:py-8 px-3 sm:px-4" aria-label="Available Trophy Services">
                <div className="max-w-7xl mx-auto">
                {/* Category-specific titles */}
                {selectedCategory !== "all" && filteredProducts.length > 0 && (
                    <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                        {selectedCategory === "bundles" && "🎁 Special Game Bundles"}
                        {selectedCategory === "ps5" && "🎮 PlayStation 5 Trophy Services"}
                        {selectedCategory === "ps4" && "🎮 PlayStation 4 Trophy Services"}
                        {selectedCategory === "ps3" && "🎮 PlayStation 3 Trophy Services"}
                        {selectedCategory === "newly-added" && "✨ Newly Added Trophy Services"}
                    </h2>
                    {selectedCategory === "bundles" && (
                        <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-sm sm:text-base max-w-2xl mx-auto">
                        Save money with our specially curated game bundles! Get multiple platinum trophies at discounted
                        prices.
                        </p>
                    )}
                    {selectedCategory === "newly-added" && (
                        <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-sm sm:text-base max-w-2xl mx-auto">
                        Check out our latest trophy services! Fresh additions to our catalog.
                        </p>
                    )}
                    </div>
                )}

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-12 sm:py-16">
                    <div className="text-4xl sm:text-6xl mb-4">🎮</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-purple-200 dark:text-purple-200 text-purple-700 mb-2">
                        No games found
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 mb-6 text-sm sm:text-base px-4">
                        Try adjusting your search or category filter
                    </p>
                    <Button
                        onClick={() => {
                        setSearchTerm("")
                        setSelectedCategory("all")
                        }}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                        Clear Filters
                    </Button>
                    </div>
                ) : (
                    <>
                    {/* Mobile Grid (2x2) */}
                    <div className="grid grid-cols-2 gap-3 sm:hidden">
                        {filteredProducts.map((product) => (
                        <ProductCardMobile key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    </>
                )}
                </div>
            </section>

            {/* Bundle Benefits Section */}
            {selectedCategory === "bundles" && filteredProducts.length > 0 && (
                <section className="py-8 px-3 sm:px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-purple-200 dark:text-purple-200 text-purple-700 mb-6 text-center">
                        🎁 Why Choose Game Bundles?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                        <div className="text-3xl mb-3">💰</div>
                        <h4 className="font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-2">
                            Save Money
                        </h4>
                        <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-sm">
                            Get multiple games at discounted bundle prices
                        </p>
                        </div>
                        <div className="text-center">
                        <div className="text-3xl mb-3">⚡</div>
                        <h4 className="font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-2">
                            Faster Service
                        </h4>
                        <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-sm">
                            Optimized completion order for maximum efficiency
                        </p>
                        </div>
                        <div className="text-center">
                        <div className="text-3xl mb-3">🏆</div>
                        <h4 className="font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-2">
                            Complete Series
                        </h4>
                        <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-sm">
                            Get entire game series or themed collections
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            )}
            </main>
        </div>

        <Footer />
        <ContactButtons />
        <Cart />
        </div>
    )
}