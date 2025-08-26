import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Package, Trophy } from "lucide-react"
import { ContactButtons } from "@/components/contact-buttons"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Complete Games List - All Available Trophy Services | PeachyPlatinums",
    description:
        "Complete alphabetical list of all 144+ PlayStation trophy services available for PS3, PS4, PS5, and special bundles. Professional trophy completion by expert gamers.",
    keywords: [
        "PlayStation games list",
        "trophy services",
        "PS4 games",
        "PS5 games",
        "PS3 games",
        "game bundles",
        "trophy completion",
        "platinum trophies",
    ],
    }

    const products = [
    // PS5 Games (31 games)
    {
        id: "1",
        name: "Final Fantasy VII Remake (EU) (+DLC) PS5 Platinum Trophy Service",
        description: "RPG game",
        price: 181,
        category: "ps5",
    },
    {
        id: "5",
        name: "Mortal Kombat 11 PS5 Platinum Trophy Service",
        description: "Fighting game",
        price: 147,
        category: "ps5",
    },
    {
        id: "8",
        name: "Sifu (+DLC) PS5 Platinum Trophy Service",
        description: "Action / fighting game",
        price: 161,
        category: "ps5",
    },
    {
        id: "9",
        name: "Resident Evil Village PS5 (+DLC) Platinum Trophy Service",
        description: "Survival horror",
        price: 107,
        category: "ps5",
    },
    {
        id: "14",
        name: "Resident Evil 7 (+DLC) PS5 Platinum Trophy Service",
        description: "Survival horror",
        price: 147,
        category: "ps5",
    },
    {
        id: "19",
        name: "Elden Ring PS5 Platinum Trophy Service",
        description: "Souls-like / open-world RPG",
        price: 101,
        category: "ps5",
    },
    {
        id: "23",
        name: "Castlevania Dominus Collection PS5 Platinum Trophy Service",
        description: "Action / metroidvania collection",
        price: 81,
        category: "ps5",
    },
    {
        id: "29",
        name: "Resident Evil 2 remake (+DLC) PS5 Platinum Trophy Service",
        description: "Survival horror",
        price: 94,
        category: "ps5",
    },
    {
        id: "30",
        name: "Devil May Cry 5 PS5 Platinum Trophy Service",
        description: "Hack and slash",
        price: 248,
        category: "ps5",
    },
    {
        id: "41",
        name: "Resident Evil 3 Remake PS5 Platinum Trophy Service",
        description: "Survival horror",
        price: 47,
        category: "ps5",
    },
    {
        id: "50",
        name: "Human Fall Flat PS5 (+20 DLC) Platinum Trophy Service",
        description: "Physics puzzle platformer",
        price: 114,
        category: "ps5",
    },
    {
        id: "56",
        name: "Tomb Raider: Legend PS5 Platinum Trophy Service",
        description: "Action / adventure",
        price: 41,
        category: "ps5",
    },
    {
        id: "66",
        name: "Sifu (+DLC) PS5 Platinum Trophy Service",
        description: "Martial arts action, roguelike",
        price: 161,
        category: "ps5",
    },
    {
        id: "68",
        name: "Resident Evil 7 (+DLC) PS5 Platinum Trophy Service",
        description: "Horror FPS, Resident Evil franchise",
        price: 147,
        category: "ps5",
    },
    {
        id: "74",
        name: "Devil May Cry 5 PS5 Platinum Trophy Service",
        description: "Stylish action, demon slaying",
        price: 248,
        category: "ps5",
    },
    {
        id: "81",
        name: "Human Fall Flat PS5 (+20 DLC) Platinum Trophy Service",
        description: "Puzzle platformer, DLC included",
        price: 114,
        category: "ps5",
    },
    {
        id: "82",
        name: "Furi PS5 Platinum Trophy Service",
        description: "Boss-rush action game, indie",
        price: 81,
        category: "ps5",
    },
    {
        id: "95",
        name: "Atelier Ryza 2 PS5 Platinum Trophy Service",
        description: "Anime JRPG, crafting and alchemy",
        price: 101,
        category: "ps5",
    },
    {
        id: "101",
        name: "DRAGON BALL: Sparking! ZERO PS5 Platinum Trophy Service",
        description: "Dragon Ball arena fighter",
        price: 134,
        category: "ps5",
    },
    {
        id: "102",
        name: "Atelier Ryza 3 PS5 Platinum Trophy Service",
        description: "Anime-style JRPG, crafting & alchemy",
        price: 101,
        category: "ps5",
    },
    {
        id: "107",
        name: "Superliminal (+DLC) PS5 Platinum Trophy Service",
        description: "First-person puzzle, perspective-based gameplay",
        price: 47,
        category: "ps5",
    },
    {
        id: "121",
        name: "Shadow Warrior 3 PS5 (EU/NA) Platinum Trophy Service",
        description: "First-person shooter, fast-paced action",
        price: 34,
        category: "ps5",
    },
    {
        id: "122",
        name: "KeyWe PS5 (EU/NA) Platinum Trophy Service",
        description: "Co-op puzzle postal adventure",
        price: 87,
        category: "ps5",
    },
    {
        id: "128",
        name: "Suicide Squad: KTJL PS5 Platinum Trophy Service",
        description: "Supervillain action, DC universe",
        price: 181,
        category: "ps5",
    },
    {
        id: "130",
        name: "Overcooked! All You Can Eat PS5 Platinum Trophy Service",
        description: "Chaotic co-op cooking game bundle",
        price: 47,
        category: "ps5",
    },
    {
        id: "134",
        name: "Ratchet & Clank: Rift Apart PS5 Platinum Trophy Service",
        description: "Interdimensional platform shooter",
        price: 47,
        category: "ps5",
    },
    {
        id: "138",
        name: "Ape Escape PS5 Platinum Trophy Service",
        description: "Platformer classic, modern remaster",
        price: 27,
        category: "ps5",
    },
    {
        id: "139",
        name: "Dragon Ball Z: Kakarot PS5 Platinum Trophy Service",
        description: "Anime RPG retelling of DBZ saga",
        price: 61,
        category: "ps5",
    },
    {
        id: "140",
        name: "Spongebob Squarepants: The Cosmic Shake PS5 Platinum Trophy Service",
        description: "3D platformer in Bikini Bottom",
        price: 47,
        category: "ps5",
    },
    {
        id: "143",
        name: "Cat Quest III PS5 Platinum Trophy Service",
        description: "Fantasy feline RPG, third entry",
        price: 34,
        category: "ps5",
    },
    {
        id: "144",
        name: "Robocop: Rogue City PS5 Platinum Trophy Service",
        description: "Cinematic shooter as Robocop",
        price: 54,
        category: "ps5",
    },

    // PS4 Games (85 games)
    {
        id: "2",
        name: "Final Fantasy 7 Remake PS4 Platinum Trophy Service",
        description: "RPG game",
        price: 134,
        category: "ps4",
    },
    {
        id: "3",
        name: "Resident Evil 5 (+DLC) PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 167,
        category: "ps4",
    },
    {
        id: "4",
        name: "Resident Evil 2 remake (+DLC) PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 94,
        category: "ps4",
    },
    {
        id: "6",
        name: "Bloodborne (+DLC) PS4 Platinum Trophy Service",
        description: "Souls-like / action RPG",
        price: 101,
        category: "ps4",
    },
    {
        id: "7",
        name: "Bloodstained: ROTN (+DLC) EU/NA PS4 Platinum Trophy Service",
        description: "Metroidvania game",
        price: 114,
        category: "ps4",
    },
    {
        id: "10",
        name: "Devil May Cry 5 PS4 (+DLC) Platinum Trophy Service",
        description: "Hack and slash",
        price: 248,
        category: "ps4",
    },
    {
        id: "11",
        name: "Batman: Arkham City (+DLC) PS4 Platinum Trophy Service",
        description: "Action adventure",
        price: 161,
        category: "ps4",
    },
    {
        id: "12",
        name: "Tomb Raider: Legend PS4 Platinum Trophy Service",
        description: "Action / adventure",
        price: 41,
        category: "ps4",
    },
    {
        id: "13",
        name: "Bully PS4 Platinum Trophy Service",
        description: "Action / school life",
        price: 67,
        category: "ps4",
    },
    {
        id: "15",
        name: "Crash Bandicoot N'Sane Trilogy (+DLC) PS4 Platinum Trophy Service",
        description: "Platformer",
        price: 201,
        category: "ps4",
    },
    {
        id: "16",
        name: "Elden Ring PS4 Platinum Trophy Service",
        description: "Souls-like / open-world RPG",
        price: 101,
        category: "ps4",
    },
    {
        id: "17",
        name: "Resident Evil Village (+DLC) PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 107,
        category: "ps4",
    },
    {
        id: "18",
        name: "Hollow knight (EU/NA) PS4 Platinum Trophy Service",
        description: "Metroidvania / indie action",
        price: 81,
        category: "ps4",
    },
    {
        id: "21",
        name: "Kakarot PS4 Platinum Trophy Service",
        description: "Anime / action RPG",
        price: 61,
        category: "ps4",
    },
    {
        id: "22",
        name: "Batman Arkham Knight (+DLC) PS4 Platinum Trophy Service",
        description: "Action adventure",
        price: 147,
        category: "ps4",
    },
    {
        id: "25",
        name: "House Flipper (+DLC) EU/NA PS4 Platinum Trophy Service",
        description: "Simulation / renovation game",
        price: 121,
        category: "ps4",
    },
    {
        id: "26",
        name: "Mortal Kombat 11 PS4 Platinum Trophy Service",
        description: "Fighting game",
        price: 147,
        category: "ps4",
    },
    {
        id: "27",
        name: "Shenmue III PS4 (+DLC) Platinum Trophy Service",
        description: "Adventure / story-driven",
        price: 107,
        category: "ps4",
    },
    {
        id: "28",
        name: "Horizon Chase Turbo (+DLC) PS4 Platinum Trophy Service",
        description: "Arcade racing",
        price: 107,
        category: "ps4",
    },
    {
        id: "31",
        name: "Resident Evil 3 Remake PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 47,
        category: "ps4",
    },
    {
        id: "32",
        name: "Megadimension Neptunia VII PS4 Platinum Trophy Service",
        description: "JRPG / anime-style",
        price: 107,
        category: "ps4",
    },
    {
        id: "33",
        name: "Resident Evil HD Remaster PS4 Platinum Trophy Service",
        description: "Classic survival horror remaster",
        price: 67,
        category: "ps4",
    },
    {
        id: "34",
        name: "Dark Souls III PS4 Platinum Trophy Service",
        description: "Souls-like / action RPG",
        price: 121,
        category: "ps4",
    },
    {
        id: "35",
        name: "Overcooked! 2 PS4 (+DLC) Platinum Trophy Service",
        description: "Co-op / cooking game",
        price: 87,
        category: "ps4",
    },
    {
        id: "36",
        name: "DmC: Devil May Cry PS4 Platinum Trophy Service",
        description: "Hack and slash",
        price: 107,
        category: "ps4",
    },
    {
        id: "37",
        name: "Sifu (+DLC) PS4 Platinum Trophy Service",
        description: "Action / fighting game",
        price: 161,
        category: "ps4",
    },
    {
        id: "42",
        name: "Resident Evil 6 (+DLC) PS4 Platinum Trophy Service",
        description: "Action / survival horror",
        price: 167,
        category: "ps4",
    },
    {
        id: "43",
        name: "Megadimension Neptunia VIIR PS4 Platinum Trophy Service",
        description: "JRPG / anime-style",
        price: 94,
        category: "ps4",
    },
    {
        id: "47",
        name: "Yu-Gi-Oh! Legacy of the Duelist: Link evolution Platinum Trophy Service",
        description: "Card battle game",
        price: 134,
        category: "ps4",
    },
    {
        id: "48",
        name: "LA: Noire (+DLC) PS4 Platinum Trophy Service",
        description: "Detective / noir game",
        price: 83,
        category: "ps4",
    },
    {
        id: "49",
        name: "Melty Blood: Type Lumina PS4 Platinum Trophy Service",
        description: "2D fighting game",
        price: 87,
        category: "ps4",
    },
    {
        id: "51",
        name: "Danganronpa 1-2 Reload PS4 Platinum Trophy Service",
        description: "Visual novel / mystery",
        price: 134,
        category: "ps4",
    },
    {
        id: "52",
        name: "CTR Nitro Fueled PS4 Platinum Trophy Service",
        description: "Kart racing",
        price: 101,
        category: "ps4",
    },
    {
        id: "53",
        name: "Devil May Cry 3 HD PS4 Platinum Trophy Service",
        description: "Hack and slash",
        price: 101,
        category: "ps4",
    },
    {
        id: "54",
        name: "Resident Evil Revelations 2 PS4 Platinum Trophy Service",
        description: "Survival horror",
        price: 107,
        category: "ps4",
    },
    {
        id: "55",
        name: "Devil May Cry 4 PS4 Platinum Trophy Service",
        description: "Hack and slash",
        price: 174,
        category: "ps4",
    },
    {
        id: "57",
        name: "Human Fall Flat PS4 (+20 DLC) Platinum Trophy Service",
        description: "Physics puzzle platformer",
        price: 107,
        category: "ps4",
    },
    {
        id: "58",
        name: "Undertale PS4 Platinum Trophy Service",
        description: "Indie RPG",
        price: 27,
        category: "ps4",
    },
    {
        id: "59",
        name: "The Wolf Among Us PS4 Platinum Trophy Service",
        description: "Narrative / episodic adventure",
        price: 41,
        category: "ps4",
    },
    {
        id: "60",
        name: "Superliminal (+DLC) (EU/NA) PS4 Platinum Trophy Service",
        description: "Puzzle / perspective-based game",
        price: 47,
        category: "ps4",
    },
    {
        id: "62",
        name: "Human Fall Flat PS4 (+20 DLC) Platinum Trophy Service",
        description: "Puzzle platformer, DLC included",
        price: 107,
        category: "ps4",
    },
    {
        id: "65",
        name: "Darksiders: Warmastered Edition PS4 Platinum Trophy Service",
        description: "Action-adventure, apocalyptic world",
        price: 81,
        category: "ps4",
    },
    {
        id: "69",
        name: "Resident Evil 6 (+DLC) PS4 Platinum Trophy Service",
        description: "Survival horror, co-op action",
        price: 167,
        category: "ps4",
    },
    {
        id: "72",
        name: "Dark Souls Remastered PS4 Platinum Trophy Service",
        description: "Soulslike, action RPG",
        price: 67,
        category: "ps4",
    },
    {
        id: "73",
        name: "Sekiro: Shadows Die Twice PS4 Platinum Trophy",
        description: "Adventure game, SoulsLike game",
        price: 101,
        category: "ps4",
    },
    {
        id: "76",
        name: "Danganronpa 1-2 Reload PS4 Platinum Trophy Service",
        description: "Visual novel, mystery game",
        price: 134,
        category: "ps4",
    },
    {
        id: "77",
        name: "Melty Blood: Type Lumina PS4 Platinum Trophy Service",
        description: "Anime fighting game",
        price: 87,
        category: "ps4",
    },
    {
        id: "78",
        name: "Shenmue 1+2 PS4 Platinum Trophy Service",
        description: "Open world, action-adventure",
        price: 67,
        category: "ps4",
    },
    {
        id: "83",
        name: "Cyberdimension Neptunia: 4 Goddess Online PS4 Platinum Trophy Service",
        description: "Anime-style RPG, Neptunia series",
        price: 81,
        category: "ps4",
    },
    {
        id: "84",
        name: "The Walking Dead (+DLC) PS4 Platinum Trophy Service",
        description: "Narrative adventure, Telltale series",
        price: 41,
        category: "ps4",
    },
    {
        id: "85",
        name: "InFamous: Second Son PS4 Platinum Trophy Service",
        description: "Open-world superhero action",
        price: 47,
        category: "ps4",
    },
    {
        id: "88",
        name: "Devil May Cry 2 HD PS4 Platinum Trophy Service",
        description: "Stylized hack-and-slash action",
        price: 61,
        category: "ps4",
    },
    {
        id: "89",
        name: "Dragon Quest Builders 2 PS4 Platinum Trophy Service",
        description: "Building RPG, Dragon Quest spin-off",
        price: 114,
        category: "ps4",
    },
    {
        id: "90",
        name: "Spyro Reignited Trilogy PS4 Platinum Trophy Service",
        description: "Remastered classic platformers",
        price: 81,
        category: "ps4",
    },
    {
        id: "93",
        name: "Sifu (+DLC) PS4 Platinum Trophy Service",
        description: "Kung fu action roguelike",
        price: 161,
        category: "ps4",
    },
    {
        id: "94",
        name: "Devil May Cry 4 PS4 Platinum Trophy Service",
        description: "Hack-and-slash action sequel",
        price: 174,
        category: "ps4",
    },
    {
        id: "96",
        name: "Trine 2: Complete Story PS4 Platinum Trophy Service",
        description: "Puzzle-platformer with co-op",
        price: 87,
        category: "ps4",
    },
    {
        id: "97",
        name: "Patapon 2 PS4 Platinum Trophy Service",
        description: "Rhythm strategy remaster",
        price: 67,
        category: "ps4",
    },
    {
        id: "98",
        name: "Super Neptunia RPG PS4 Platinum Trophy Service",
        description: "Side-scrolling JRPG, anime-style",
        price: 81,
        category: "ps4",
    },
    {
        id: "99",
        name: "Dragon Quest Builders PS4 Platinum Trophy Service",
        description: "Sandbox building RPG",
        price: 67,
        category: "ps4",
    },
    {
        id: "103",
        name: "KeyWe PS4 (EU/NA) Platinum Trophy Service",
        description: "Co-op puzzle postal adventure",
        price: 87,
        category: "ps4",
    },
    {
        id: "108",
        name: "Neptunia x Senran Kagura (EU/NA) PS4 Platinum Trophy Service",
        description: "Anime crossover, action RPG",
        price: 67,
        category: "ps4",
    },
    {
        id: "109",
        name: "Detroit: Become Human PS4 Platinum Trophy Service",
        description: "Interactive narrative, futuristic thriller",
        price: 61,
        category: "ps4",
    },
    {
        id: "110",
        name: "InFamous: First Light PS4 Platinum Trophy Service",
        description: "Standalone superhero expansion, open-world",
        price: 41,
        category: "ps4",
    },
    {
        id: "111",
        name: "Atelier Ryza 1 PS4 Platinum Trophy Service",
        description: "JRPG, crafting, slice-of-life fantasy",
        price: 101,
        category: "ps4",
    },
    {
        id: "112",
        name: "God Of War III Remastered PS4 Platinum Trophy Service",
        description: "Epic action-adventure, Greek mythology",
        price: 41,
        category: "ps4",
    },
    {
        id: "115",
        name: "Resident Evil 4 (2005) PS4 Trophy Service",
        description: "Survival horror classic, third-person shooter",
        price: 67,
        category: "ps4",
    },
    {
        id: "117",
        name: "Cat Quest II PS4 Platinum Trophy Service",
        description: "Action RPG with cats and dogs",
        price: 41,
        category: "ps4",
    },
    {
        id: "123",
        name: "Patapon Remastered PS4 Platinum Trophy Service",
        description: "Rhythm strategy, stylized 2D visuals",
        price: 67,
        category: "ps4",
    },
    {
        id: "125",
        name: "Cat Quest III PS4 Platinum Trophy Service",
        description: "Open-world action RPG with cats",
        price: 34,
        category: "ps4",
    },
    {
        id: "126",
        name: "Cat Quest PS4 Platinum Trophy Service",
        description: "Charming feline-themed RPG",
        price: 34,
        category: "ps4",
    },
    {
        id: "127",
        name: "Ape Escape PS4 Platinum Trophy Service",
        description: "Classic platformer remastered",
        price: 27,
        category: "ps4",
    },
    {
        id: "131",
        name: "Yakuza Kiwami PS4 Platinum Trophy Service",
        description: "Crime drama, beat-em-up remake",
        price: 161,
        category: "ps4",
    },
    {
        id: "133",
        name: "Shadow Warrior 3 PS4 Platinum Trophy Service",
        description: "Fast-paced FPS, demon-slaying chaos",
        price: 34,
        category: "ps4",
    },
    {
        id: "135",
        name: "The Walking Dead: A New Frontier PS4 Platinum Trophy Service",
        description: "Telltale narrative zombie drama",
        price: 34,
        category: "ps4",
    },
    {
        id: "136",
        name: "Ape Escape: On The Loose PS4/PS5 Platinum Trophy Service",
        description: "Remake of classic PSP platformer",
        price: 41,
        category: "ps4",
    },
    {
        id: "137",
        name: "Spongebob Squarepants: The Cosmic Shake PS4 Platinum Trophy Service",
        description: "Cartoon platforming with Spongebob",
        price: 47,
        category: "ps4",
    },
    {
        id: "141",
        name: "The Jumping Flash PS4 Platinum Trophy Service",
        description: "Retro first-person platforming action",
        price: 21,
        category: "ps4",
    },

    // PS3 Games (25 games)
    {
        id: "40",
        name: "Resident Evil: Revelations 2 PS3 Platinum Trophy Service",
        description: "Survival horror",
        price: 107,
        category: "ps3",
    },
    {
        id: "44",
        name: "Batman: Arkham City (+DLC) PS3 Platinum Trophy Service",
        description: "Action adventure",
        price: 161,
        category: "ps3",
    },
    {
        id: "61",
        name: "Silent Hill: Downpour PS3 Platinum Trophy Service",
        description: "Horror game, PS3 service",
        price: 87,
        category: "ps3",
    },
    {
        id: "63",
        name: "Dark Souls II PS3 Platinum Trophy Service",
        description: "Action RPG, Soulslike",
        price: 81,
        category: "ps3",
    },
    {
        id: "64",
        name: "God of War: Ascension PS3 Platinum Trophy Service",
        description: "Action adventure, God of War series",
        price: 101,
        category: "ps3",
    },
    {
        id: "70",
        name: "Resident Evil 6 PS3 Platinum Trophy Service",
        description: "Survival horror, PS3 edition",
        price: 81,
        category: "ps3",
    },
    {
        id: "79",
        name: "Resident Evil 4 (2005) PS3 Trophy Service",
        description: "Classic horror trophy service",
        price: 67,
        category: "ps3",
    },
    {
        id: "80",
        name: "DmC: Devil May Cry (+DLC) PS3 Platinum Trophy Service",
        description: "Reboot action game with DLC",
        price: 127,
        category: "ps3",
    },
    {
        id: "86",
        name: "Resident Evil 5 PS3 Platinum Trophy Service",
        description: "Action horror, Resident Evil franchise",
        price: 67,
        category: "ps3",
    },
    {
        id: "87",
        name: "LEGO Star Wars III: The Clone Wars PS3 Platinum Trophy Service",
        description: "LEGO adventure, co-op",
        price: 67,
        category: "ps3",
    },
    {
        id: "91",
        name: "InFamous PS3 Platinum Trophy Service",
        description: "Superpowered open world",
        price: 67,
        category: "ps3",
    },
    {
        id: "92",
        name: "Tomb Raider: Anniversary PS3 Platinum Trophy Service",
        description: "Classic Lara Croft action-adventure",
        price: 67,
        category: "ps3",
    },
    {
        id: "100",
        name: "Tomb Raider: Underworld PS3 Platinum Trophy Service",
        description: "Lara Croft classic platform adventure",
        price: 47,
        category: "ps3",
    },
    {
        id: "104",
        name: "DarkSiders PS3 Platinum Trophy Service",
        description: "Action-adventure, apocalyptic hack and slash",
        price: 101,
        category: "ps3",
    },
    {
        id: "105",
        name: "Dark Souls PS3 Platinum Trophy Service",
        description: "Challenging action RPG, Souls-like",
        price: 81,
        category: "ps3",
    },
    {
        id: "106",
        name: "L.A. Noire (+DLC) PS3 Platinum Trophy Service",
        description: "Detective thriller, open world, Rockstar Games",
        price: 83,
        category: "ps3",
    },
    {
        id: "113",
        name: "Devil May Cry 3 HD PS3 Platinum Trophy Service",
        description: "Fast-paced hack and slash, prequel",
        price: 101,
        category: "ps3",
    },
    {
        id: "114",
        name: "Saint Seiya: Sanctuary Battle PS3 Platinum Trophy Service",
        description: "Anime action, Saint Seiya franchise",
        price: 107,
        category: "ps3",
    },
    {
        id: "116",
        name: "Devil May Cry 2 HD PS3 Platinum Trophy Service",
        description: "Stylish demon-slaying action",
        price: 61,
        category: "ps3",
    },
    {
        id: "118",
        name: "The Walking Dead (+DLC) PS3 Platinum Trophy Service",
        description: "Telltale adventure, zombie survival",
        price: 41,
        category: "ps3",
    },
    {
        id: "119",
        name: "Batman: Arkham Asylum PS3 Platinum Trophy Service",
        description: "Superhero stealth-action, Arkham series",
        price: 41,
        category: "ps3",
    },
    {
        id: "120",
        name: "Devil May Cry 1 HD PS3 Platinum Trophy Service",
        description: "Original demon hunter action game",
        price: 94,
        category: "ps3",
    },
    {
        id: "124",
        name: "God of War III PS3 Platinum Trophy Service",
        description: "Epic action-adventure, Greek mythology",
        price: 41,
        category: "ps3",
    },
    {
        id: "129",
        name: "Jak & Daxter: The Precursor Legacy PS3 Platinum Trophy",
        description: "Classic 3D platformer adventure",
        price: 41,
        category: "ps3",
    },
    {
        id: "132",
        name: "Tomb Raider: Legend PS3 Platinum Trophy Service",
        description: "Lara Croft action-adventure reboot",
        price: 47,
        category: "ps3",
    },
    {
        id: "142",
        name: "The Wolf Among Us PS3 Platinum Trophy Service",
        description: "Gritty fairy tale noir by Telltale",
        price: 41,
        category: "ps3",
    },

    // Bundles (9 bundles)
    {
        id: "20",
        name: "Devil May Cry Trilogy Bundle PS3 or PS4 Platinum Trophy Service",
        description: "Hack and slash bundle",
        price: 214,
        category: "bundles",
    },
    {
        id: "24",
        name: "Resident Evil Remake Bundle PS4 or PS5 Platinum Trophy Service",
        description: "Horror remake bundle",
        price: 241,
        category: "bundles",
    },
    {
        id: "38",
        name: "Tomb Raider Trilogy Bundle PS3 Platinum Trophy Service",
        description: "Action adventure trilogy",
        price: 134,
        category: "bundles",
    },
    {
        id: "39",
        name: "Dark Souls Trilogy Bundle PS4 Platinum Trophy Service",
        description: "Souls-like trilogy",
        price: 228,
        category: "bundles",
    },
    {
        id: "45",
        name: "Batman Arkham Bundle PS4 Platinum Trophy Service",
        description: "Action adventure bundle",
        price: 294,
        category: "bundles",
    },
    {
        id: "46",
        name: "Spyro + Crash Bundle PS4 Platinum Trophy Service",
        description: "Platformer bundle",
        price: 241,
        category: "bundles",
    },
    {
        id: "67",
        name: "Dark Souls Trilogy Bundle PS4 Platinum Trophy Service",
        description: "Full Soulsborne experience",
        price: 228,
        category: "bundles",
    },
    {
        id: "71",
        name: "Resident Evil Remake Bundle PS4 or PS5 Platinum Trophy Service",
        description: "Remastered Resident Evil classics",
        price: 241,
        category: "bundles",
    },
    {
        id: "75",
        name: "Spyro + Crash Bundle PS4 Platinum Trophy Service",
        description: "Classic platformers remastered",
        price: 241,
        category: "bundles",
    },
    ]

    // Sort products alphabetically
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name))

    function getCategoryBadge(category: string) {
    const badges = {
        ps3: {
        label: "PS3",
        color: "bg-blue-600/80 text-blue-100 dark:bg-blue-600/80 dark:text-blue-100 bg-blue-200 text-blue-800",
        icon: Trophy,
        },
        ps4: {
        label: "PS4",
        color:
            "bg-purple-600/80 text-purple-100 dark:bg-purple-600/80 dark:text-purple-100 bg-purple-200 text-purple-800",
        icon: Trophy,
        },
        ps5: {
        label: "PS5",
        color: "bg-pink-600/80 text-pink-100 dark:bg-pink-600/80 dark:text-pink-100 bg-pink-200 text-pink-800",
        icon: Trophy,
        },
        bundles: {
        label: "BUNDLE",
        color:
            "bg-orange-600/80 text-orange-100 dark:bg-orange-600/80 dark:text-orange-100 bg-orange-200 text-orange-800",
        icon: Package,
        },
    }
    return badges[category as keyof typeof badges] || badges.ps4
    }

    export default function GamesListPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 from-purple-50 via-pink-50 to-purple-100">
        <Header />

        <section className="py-12 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8 md:mb-12">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Complete Games List
                </h1>
                <p className="text-lg md:text-xl text-purple-200 dark:text-purple-200 text-purple-700 font-light mb-6 md:mb-8 px-4">
                Alphabetical list of all 150+ available trophy services including special bundles
                </p>
                <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
            </div>

            {/* Games Container */}
            <div className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/10">
                <div className="p-4 md:p-6">
                {/* Stats Header */}
                <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-2">
                    Available Services ({sortedProducts.length})
                    </h2>
                    <div className="flex flex-wrap gap-2 text-sm text-purple-300 dark:text-purple-300 text-purple-600">
                    <span>🎮 PS5: {products.filter((p) => p.category === "ps5").length}</span>
                    <span>🎮 PS4: {products.filter((p) => p.category === "ps4").length}</span>
                    <span>🎮 PS3: {products.filter((p) => p.category === "ps3").length}</span>
                    <span>📦 Bundles: {products.filter((p) => p.category === "bundles").length}</span>
                    </div>
                </div>

                {/* Games List */}
                <div className="space-y-3">
                    {sortedProducts.map((product, index) => {
                    const categoryBadge = getCategoryBadge(product.category)
                    const IconComponent = categoryBadge.icon

                    return (
                        <Link key={product.id} href={`/store?game=${product.id}`} className="block group">
                        {/* Mobile Layout (< md) */}
                        <div className="md:hidden">
                            <div
                            className={`p-4 rounded-lg border transition-all duration-300 ${
                                product.category === "bundles"
                                ? "border-orange-500/20 bg-orange-900/10 hover:border-orange-400/40 hover:bg-orange-800/20"
                                : "border-purple-500/20 bg-gray-800/30 dark:bg-gray-800/30 bg-purple-50/50 hover:border-purple-400/40 hover:bg-gray-700/40 dark:hover:bg-gray-700/40 hover:bg-purple-100/70"
                            }`}
                            >
                            {/* Mobile Header */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center space-x-3 flex-1 min-w-0">
                                <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                                    product.category === "bundles"
                                        ? "bg-gradient-to-r from-orange-600 to-red-600"
                                        : "bg-gradient-to-r from-purple-600 to-pink-600"
                                    }`}
                                >
                                    {index + 1}
                                </div>
                                <Badge
                                    className={`${categoryBadge.color} border-0 shadow-sm text-xs flex items-center gap-1`}
                                >
                                    <IconComponent className="h-3 w-3" />
                                    {categoryBadge.label}
                                </Badge>
                                </div>
                                <ExternalLink className="h-4 w-4 text-purple-400 dark:text-purple-400 text-purple-600 group-hover:text-purple-300 dark:group-hover:text-purple-300 group-hover:text-purple-700 transition-colors duration-300 flex-shrink-0" />
                            </div>

                            {/* Mobile Content */}
                            <div className="space-y-2">
                                <h3 className="font-semibold text-purple-100 dark:text-purple-100 text-purple-800 group-hover:text-purple-50 dark:group-hover:text-purple-50 group-hover:text-purple-700 transition-colors duration-300 leading-tight">
                                {product.name}
                                </h3>
                                <p className="text-sm text-purple-300 dark:text-purple-300 text-purple-600 leading-relaxed">
                                {product.description}
                                </p>
                                <div className="flex justify-between items-center pt-2">
                                <div
                                    className={`text-lg font-bold bg-clip-text text-transparent ${
                                    product.category === "bundles"
                                        ? "bg-gradient-to-r from-orange-400 to-red-400"
                                        : "bg-gradient-to-r from-purple-400 to-pink-400"
                                    }`}
                                >
                                    ${product.price.toFixed(0)}
                                </div>
                                {product.category === "bundles" && (
                                    <span className="text-xs text-orange-300 font-semibold bg-orange-500/20 px-2 py-1 rounded-full">
                                    BUNDLE
                                    </span>
                                )}
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Desktop Layout (>= md) */}
                        <div className="hidden md:block">
                            <div
                            className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 ${
                                product.category === "bundles"
                                ? "border-orange-500/20 bg-orange-900/10 hover:border-orange-400/40 hover:bg-orange-800/20"
                                : "border-purple-500/20 bg-gray-800/30 dark:bg-gray-800/30 bg-purple-50/50 hover:border-purple-400/40 hover:bg-gray-700/40 dark:hover:bg-gray-700/40 hover:bg-purple-100/70"
                            }`}
                            >
                            <div className="flex items-center space-x-4 flex-1 min-w-0">
                                <div
                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                                    product.category === "bundles"
                                    ? "bg-gradient-to-r from-orange-600 to-red-600"
                                    : "bg-gradient-to-r from-purple-600 to-pink-600"
                                }`}
                                >
                                {index + 1}
                                </div>

                                <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-purple-100 dark:text-purple-100 text-purple-800 group-hover:text-purple-50 dark:group-hover:text-purple-50 group-hover:text-purple-700 transition-colors duration-300 truncate">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-purple-300 dark:text-purple-300 text-purple-600 truncate">
                                    {product.description}
                                </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 flex-shrink-0">
                                <Badge className={`${categoryBadge.color} border-0 shadow-sm flex items-center gap-1`}>
                                <IconComponent className="h-3 w-3" />
                                {categoryBadge.label}
                                </Badge>

                                <div className="text-right">
                                <div
                                    className={`text-lg font-bold bg-clip-text text-transparent ${
                                    product.category === "bundles"
                                        ? "bg-gradient-to-r from-orange-400 to-red-400"
                                        : "bg-gradient-to-r from-purple-400 to-pink-400"
                                    }`}
                                >
                                    ${product.price.toFixed(0)}
                                </div>
                                {product.category === "bundles" && (
                                    <span className="text-xs text-orange-300 font-semibold">BUNDLE PRICE</span>
                                )}
                                </div>

                                <ExternalLink className="h-4 w-4 text-purple-400 dark:text-purple-400 text-purple-600 group-hover:text-purple-300 dark:group-hover:text-purple-300 group-hover:text-purple-700 transition-colors duration-300" />
                            </div>
                            </div>
                        </div>
                        </Link>
                    )
                    })}
                </div>
                </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-6 md:mt-8">
                <Link
                href="/store"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                >
                Back to Store
                </Link>
            </div>
            </div>
        </section>

        <Footer />
        <ContactButtons />
        </div>
    )
}
