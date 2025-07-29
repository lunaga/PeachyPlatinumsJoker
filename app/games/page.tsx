import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { ContactButtons } from "@/components/contact-buttons"

const products = [
{
    id: "1",
    name: "Final Fantasy VII Remake (EU) (+DLC) PS5 Platinum Trophy Service",
    description: "RPG game",
    price: 180.31,
    category: "ps5",
    image: "/images/games/1.webp",
},
{
    id: "2",
    name: "Final Fantasy 7 Remake PS4 Platinum Trophy Service",
    description: "RPG game",
    price: 133.56,
    category: "ps4",
    image: "/images/games/2.webp",
},
{
    id: "3",
    name: "Resident Evil 5 (+DLC) PS4 Platinum Trophy Service",
    description: "Survival horror",
    price: 166.95,
    category: "ps4",
    image: "/images/games/3.webp",
},
{
    id: "4",
    name: "Resident Evil 2 remake (+DLC) PS4 Platinum Trophy Service",
    description: "Survival horror",
    price: 93.49,
    category: "ps4",
    image: "/images/games/4.webp",
},
{
    id: "5",
    name: "Mortal Kombat 11 PS5 Platinum Trophy Service",
    description: "Fighting game",
    price: 146.92,
    category: "ps5",
    image: "/images/games/5.webp",
},
{
    id: "6",
    name: "Bloodborne (+DLC) PS4 Platinum Trophy Service",
    description: "Souls-like / action RPG",
    price: 100.17,
    category: "ps4",
    image: "/images/games/6.webp",
},
{
    id: "7",
    name: "Bloodstained: ROTN (+DLC) EU/NA PS4 Platinum Trophy Service",
    description: "Metroidvania game",
    price: 113.53,
    category: "ps4",
    image: "/images/games/7.webp",
},
{
    id: "8",
    name: "Sifu (+DLC) PS5 Platinum Trophy Service",
    description: "Action / fighting game",
    price: 160.27,
    category: "ps5",
    image: "/images/games/8.webp",
},
{
    id: "9",
    name: "Resident Evil Village PS5 (+DLC) Platinum Trophy Service",
    description: "Survival horror",
    price: 106.85,
    category: "ps5",
    image: "/images/games/9.webp",
},
{
    id: "10",
    name: "Devil May Cry 5 PS4 (+DLC) Platinum Trophy Service",
    description: "Hack and slash",
    price: 247.09,
    category: "ps4",
    image: "/images/games/10.webp",
},
{
    id: "11",
    name: "Batman: Arkham City (+DLC) PS4 Platinum Trophy Service",
    description: "Action adventure",
    price: 160.27,
    category: "ps4",
    image: "/images/games/11.webp",
},
{
    id: "12",
    name: "*Not The Game* Tomb Raider: Legend PS4 Platinum Trophy Service",
    description: "Action / adventure",
    price: 40.07,
    category: "ps4",
    image: "/images/games/12.webp",
},
{
    id: "13",
    name: "*Not The Game* Bully PS4 Platinum Trophy Service",
    description: "Action / school life",
    price: 66.78,
    category: "ps4",
    image: "/images/games/13.webp",
},
{
    id: "14",
    name: "Resident Evil 7 (+DLC) PS5 Platinum Trophy Service",
    description: "Survival horror",
    price: 146.92,
    category: "ps5",
    image: "/images/games/14.webp",
},
{
    id: "15",
    name: "Crash Bandicoot N’Sane Trilogy (+DLC) PS4 Platinum Trophy Service",
    description: "Platformer",
    price: 200.34,
    category: "ps4",
    image: "/images/games/15.webp",
},
{
    id: "16",
    name: "Elden Ring PS4 Platinum Trophy Service",
    description: "Souls-like / open-world RPG",
    price: 100.17,
    category: "ps4",
    image: "/images/games/16.webp",
},
{
    id: "17",
    name: "Resident Evil Village (+DLC) PS4 Platinum Trophy Service",
    description: "Survival horror",
    price: 106.85,
    category: "ps4",
    image: "/images/games/17.webp",
},
{
    id: "18",
    name: "Hollow knight (EU/NA) PS4 Platinum Trophy Service",
    description: "Metroidvania / indie action",
    price: 80.14,
    category: "ps4",
    image: "/images/games/18.webp",
},
{
    id: "19",
    name: "Elden Ring PS5 Platinum Trophy Service",
    description: "Souls-like / open-world RPG",
    price: 100.17,
    category: "ps5",
    image: "/images/games/19.webp",
},
{
    id: "20",
    name: "Devil May Cry Trilogy Bundle PS3 or PS4 Platinum Trophy Service",
    description: "Hack and slash bundle",
    price: 213.70,
    category: "ps4",
    image: "/images/games/20.webp",
},
{
    id: "21",
    name: "Kakarot PS4 Platinum Trophy Service",
    description: "Anime / action RPG",
    price: 60.10,
    category: "ps4",
    image: "/images/games/21.webp",
},
{
    id: "22",
    name: "Batman Arkham Knight (+DLC) PS4 Platinum Trophy Service",
    description: "Action adventure",
    price: 146.92,
    category: "ps4",
    image: "/images/games/22.webp",
},
{
    id: "23",
    name: "*Not The Game* Castlevania Dominus Collection PS5 Platinum Trophy Service",
    description: "Action / metroidvania collection",
    price: 80.14,
    category: "ps5",
    image: "/images/games/23.webp",
},
{
    id: "24",
    name: "Resident Evil Remake Bundle PS4 or PS5 Platinum Trophy Service",
    description: "Horror remake bundle",
    price: 240.41,
    category: "ps4",
    image: "/images/games/24.webp",
},
{
    id: "25",
    name: "House Flipper (+DLC) EU/NA PS4 Platinum Trophy Service",
    description: "Simulation / renovation game",
    price: 120.20,
    category: "ps4",
    image: "/images/games/25.webp",
},
{
    id: "26",
    name: "Mortal Kombat 11 PS4 Platinum Trophy Service",
    description: "Fighting game",
    price: 146.92,
    category: "ps4",
    image: "/images/games/26.webp",
},
{
    id: "27",
    name: "Shenmue III PS4 (+DLC) Platinum Trophy Service",
    description: "Adventure / story-driven",
    price: 106.85,
    category: "ps4",
    image: "/images/games/27.webp",
},
{
    id: "28",
    name: "Horizon Chase Turbo (+DLC) PS4 Platinum Trophy Service",
    description: "Arcade racing",
    price: 106.85,
    category: "ps4",
    image: "/images/games/28.webp",
},
{
    id: "29",
    name: "Resident Evil 2 remake (+DLC) PS5 Platinum Trophy Service",
    description: "Survival horror",
    price: 93.49,
    category: "ps5",
    image: "/images/games/29.webp",
},
{
    id: "30",
    name: "Devil May Cry 5 PS5 Platinum Trophy Service",
    description: "Hack and slash",
    price: 247.09,
    category: "ps5",
    image: "/images/games/30.webp",
},
{
    id: "31",
    name: "Resident Evil 3 Remake PS4 Platinum Trophy Service",
    description: "Survival horror",
    price: 46.75,
    category: "ps4",
    image: "/images/games/31.webp",
},
{
    id: "32",
    name: "Megadimension Neptunia VII PS4 Platinum Trophy Service",
    description: "JRPG / anime-style",
    price: 106.85,
    category: "ps4",
    image: "/images/games/32.webp",
},
{
    id: "33",
    name: "Resident Evil HD Remaster PS4 Platinum Trophy Service",
    description: "Classic survival horror remaster",
    price: 66.78,
    category: "ps4",
    image: "/images/games/33.webp",
},
{
    id: "34",
    name: "Dark Souls III PS4 Platinum Trophy Service",
    description: "Souls-like / action RPG",
    price: 120.20,
    category: "ps4",
    image: "/images/games/34.webp",
},
{
    id: "35",
    name: "Overcooked! 2 PS4 (+DLC) Platinum Trophy Service",
    description: "Co-op / cooking game",
    price: 86.81,
    category: "ps4",
    image: "/images/games/35.webp",
},
{
    id: "36",
    name: "DmC: Devil May Cry PS4 Platinum Trophy Service",
    description: "Hack and slash",
    price: 106.85,
    category: "ps4",
    image: "/images/games/36.webp",
},
{
    id: "37",
    name: "Sifu (+DLC) PS4 Platinum Trophy Service",
    description: "Action / fighting game",
    price: 160.27,
    category: "ps4",
    image: "/images/games/37.webp",
},
{
    id: "38",
    name: "Tomb Raider Trilogy Bundle PS3 Platinum Trophy Service",
    description: "Action adventure trilogy",
    price: 133.56,
    category: "ps3",
    image: "/images/games/38.webp",
},
{
    id: "39",
    name: "Dark Souls Trilogy Bundle PS4 Platinum Trophy Service",
    description: "Souls-like trilogy",
    price: 227.05,
    category: "ps4",
    image: "/images/games/39.webp",
},
{
    id: "40",
    name: "Resident Evil: Revelations 2 PS3 Platinum Trophy Service",
    description: "Survival horror",
    price: 106.85,
    category: "ps3",
    image: "/images/games/40.webp",
},
{
    id: "41",
    name: "Resident Evil 3 Remake PS5 Platinum Trophy Service",
    description: "Survival horror",
    price: 46.75,
    category: "ps5",
    image: "/images/games/41.webp",
},
{
    id: "42",
    name: "Resident Evil 6 (+DLC) PS4 Platinum Trophy Service",
    description: "Action / survival horror",
    price: 166.95,
    category: "ps4",
    image: "/images/games/42.webp",
},
{
    id: "43",
    name: "Megadimension Neptunia VIIR PS4 Platinum Trophy Service",
    description: "JRPG / anime-style",
    price: 93.49,
    category: "ps4",
    image: "/images/games/43.webp",
},
{
    id: "44",
    name: "Batman: Arkham City (+DLC) PS3 Platinum Trophy Service",
    description: "Action adventure",
    price: 160.27,
    category: "ps3",
    image: "/images/games/44.webp",
},
{
    id: "45",
    name: "Batman Arkham Bundle PS4 Platinum Trophy Service",
    description: "Action adventure bundle",
    price: 293.83,
    category: "ps4",
    image: "/images/games/45.webp",
},
{
    id: "46",
    name: "Spyro + Crash Bundle PS4 Platinum Trophy Service",
    description: "Platformer bundle",
    price: 240.41,
    category: "ps4",
    image: "/images/games/46.webp",
},
{
    id: "47",
    name: "Yu-Gi-Oh! Legacy of the Duelist: Link evolution Platinum Trophy Service",
    description: "Card battle game",
    price: 133.56,
    category: "ps4",
    image: "/images/games/47.webp",
},
{
    id: "48",
    name: "LA: Noire (+DLC) PS4 Platinum Trophy Service",
    description: "Detective / noir game",
    price: 82.81,
    category: "ps4",
    image: "/images/games/48.webp",
},
{
    id: "49",
    name: "Melty Blood: Type Lumina PS4 Platinum Trophy Service",
    description: "2D fighting game",
    price: 86.81,
    category: "ps4",
    image: "/images/games/49.webp",
},
{
    id: "50",
    name: "Human Fall Flat PS5 (+20 DLC) Platinum Trophy Service",
    description: "Physics puzzle platformer",
    price: 113.53,
    category: "ps5",
    image: "/images/games/50.webp",
},
{
    id: "51",
    name: "Danganronpa 1-2 Reload PS4 Platinum Trophy Service",
    description: "Visual novel / mystery",
    price: 133.56,
    category: "ps4",
    image: "/images/games/51.webp",
},
{
    id: "52",
    name: "CTR Nitro Fueled PS4 Platinum Trophy Service",
    description: "Kart racing",
    price: 100.17,
    category: "ps4",
    image: "/images/games/52.webp",
},
{
    id: "53",
    name: "Devil May Cry 3 HD PS4 Platinum Trophy Service",
    description: "Hack and slash",
    price: 100.17,
    category: "ps4",
    image: "/images/games/53.webp",
},
{
    id: "54",
    name: "Resident Evil Revelations 2 PS4 Platinum Trophy Service",
    description: "Survival horror",
    price: 106.85,
    category: "ps4",
    image: "/images/games/54.webp",
},
{
    id: "55",
    name: "Devil May Cry 4 PS4 Platinum Trophy Service",
    description: "Hack and slash",
    price: 173.63,
    category: "ps4",
    image: "/images/games/55.webp",
},
{
    id: "56",
    name: "*Not The Game* Tomb Raider: Legend PS5 Platinum Trophy Service",
    description: "Action / adventure",
    price: 40.07,
    category: "ps5",
    image: "/images/games/56.webp",
},
{
    id: "57",
    name: "Human Fall Flat PS4 (+20 DLC) Platinum Trophy Service",
    description: "Physics puzzle platformer",
    price: 106.85,
    category: "ps4",
    image: "/images/games/57.webp",
},
{
    id: "58",
    name: "*Not The Game* Undertale PS4 Platinum Trophy Service",
    description: "Indie RPG",
    price: 26.71,
    category: "ps4",
    image: "/images/games/58.webp",
},
{
    id: "59",
    name: "*Not the game* The Wolf Among Us PS4 Platinum Trophy Service",
    description: "Narrative / episodic adventure",
    price: 40.07,
    category: "ps4",
    image: "/images/games/59.webp",
},
{
    id: "60",
    name: "Superliminal (+DLC) (EU/NA) PS4 Platinum Trophy Service",
    description: "Puzzle / perspective-based game",
    price: 46.75,
    category: "ps4",
    image: "/images/games/60.webp",
},
{
    id: "61",
    name: "Silent Hill: Downpour PS3 Platinum Trophy Service",
    description: "Horror game, PS3 service",
    price: 86.81,
    category: "ps3",
    image: "/images/games/61.webp",
},
{
    id: "62",
    name: "Human Fall Flat PS4 (+20 DLC) Platinum Trophy Service",
    description: "Puzzle platformer, DLC included",
    price: 106.85,
    category: "ps4",
    image: "/images/games/62.webp",
},
{
    id: "63",
    name: "Dark Souls II PS3 Platinum Trophy Service",
    description: "Action RPG, Soulslike",
    price: 80.14,
    category: "ps3",
    image: "/images/games/63.webp",
},
{
    id: "64",
    name: "God of War: Ascension PS3 Platinum Trophy Service",
    description: "Action adventure, God of War series",
    price: 100.17,
    category: "ps3",
    image: "/images/games/64.webp",
},
{
    id: "65",
    name: "Darksiders: Warmastered Edition PS4 Platinum Trophy Service",
    description: "Action-adventure, apocalyptic world",
    price: 80.14,
    category: "ps4",
    image: "/images/games/65.webp",
},
{
    id: "66",
    name: "Sifu (+DLC) PS5 Platinum Trophy Service",
    description: "Martial arts action, roguelike",
    price: 160.27,
    category: "ps5",
    image: "/images/games/66.webp",
},
{
    id: "67",
    name: "Dark Souls Trilogy Bundle PS4 Platinum Trophy Service",
    description: "Full Soulsborne experience",
    price: 227.05,
    category: "ps4",
    image: "/images/games/67.webp",
},
{
    id: "68",
    name: "Resident Evil 7 (+DLC) PS5 Platinum Trophy Service",
    description: "Horror FPS, Resident Evil franchise",
    price: 146.92,
    category: "ps5",
    image: "/images/games/68.webp",
},
{
    id: "69",
    name: "Resident Evil 6 (+DLC) PS4 Platinum Trophy Service",
    description: "Survival horror, co-op action",
    price: 166.95,
    category: "ps4",
    image: "/images/games/69.webp",
},
{
    id: "70",
    name: "Resident Evil 6 PS3 Platinum Trophy Service",
    description: "Survival horror, PS3 edition",
    price: 80.14,
    category: "ps3",
    image: "/images/games/70.webp",
},
{
    id: "71",
    name: "Resident Evil Remake Bundle PS4 or PS5 Platinum Trophy Service",
    description: "Remastered Resident Evil classics",
    price: 240.41,
    category: "ps4",
    image: "/images/games/71.webp",
},
{
    id: "72",
    name: "Dark Souls Remastered PS4 Platinum Trophy Service",
    description: "Soulslike, action RPG",
    price: 66.78,
    category: "ps4",
    image: "/images/games/72.webp",
},
{
    id: "73",
    name: "Sekiro: Shadows Die Twice PS4 Platinum Trophy",
    description: "Adventure game, SoulsLike game",
    price: 100.17,
    category: "ps4",
    image: "/images/games/73.webp",
},
{
    id: "74",
    name: "Devil May Cry 5 PS5 Platinum Trophy Service",
    description: "Stylish action, demon slaying",
    price: 247.09,
    category: "ps5",
    image: "/images/games/74.webp",
},
{
    id: "75",
    name: "Spyro + Crash Bundle PS4 Platinum Trophy Service",
    description: "Classic platformers remastered",
    price: 240.41,
    category: "ps4",
    image: "/images/games/75.webp",
},
{
    id: "76",
    name: "Danganronpa 1-2 Reload PS4 Platinum Trophy Service",
    description: "Visual novel, mystery game",
    price: 133.56,
    category: "ps4",
    image: "/images/games/76.webp",
},
{
    id: "77",
    name: "Melty Blood: Type Lumina PS4 Platinum Trophy Service",
    description: "Anime fighting game",
    price: 86.81,
    category: "ps4",
    image: "/images/games/77.webp",
},
{
    id: "78",
    name: "Shenmue 1+2 PS4 Platinum Trophy Service",
    description: "Open world, action-adventure",
    price: 66.78,
    category: "ps4",
    image: "/images/games/78.webp",
},
{
    id: "79",
    name: "*Not The Game* Resident Evil 4 (2005) PS3 Trophy Service",
    description: "Classic horror trophy service",
    price: 66.78,
    category: "ps3",
    image: "/images/games/79.webp",
},
{
    id: "80",
    name: "DmC: Devil May Cry (+DLC) PS3 Platinum Trophy Service",
    description: "Reboot action game with DLC",
    price: 126.88,
    category: "ps3",
    image: "/images/games/80.webp",
},
{
    id: "81",
    name: "Human Fall Flat PS5 (+20 DLC) Platinum Trophy Service",
    description: "Puzzle platformer, DLC included",
    price: 113.53,
    category: "ps5",
    image: "/images/games/81.webp",
},
{
    id: "82",
    name: "Furi PS5 Platinum Trophy Service",
    description: "Boss-rush action game, indie",
    price: 80.14,
    category: "ps5",
    image: "/images/games/82.webp",
},
{
    id: "83",
    name: "Cyberdimension Neptunia: 4 Goddess Online PS4 Platinum Trophy Service",
    description: "Anime-style RPG, Neptunia series",
    price: 80.14,
    category: "ps4",
    image: "/images/games/83.webp",
},
{
    id: "84",
    name: "The Walking Dead (+DLC) PS4 Platinum Trophy Service",
    description: "Narrative adventure, Telltale series",
    price: 40.07,
    category: "ps4",
    image: "/images/games/84.webp",
},
{
    id: "85",
    name: "InFamous: Second Son PS4 Platinum Trophy Service",
    description: "Open-world superhero action",
    price: 46.75,
    category: "ps4",
    image: "/images/games/85.webp",
},
{
    id: "86",
    name: "Resident Evil 5 PS3 Platinum Trophy Service",
    description: "Action horror, Resident Evil franchise",
    price: 66.78,
    category: "ps3",
    image: "/images/games/86.webp",
    },
{
    id: "87",
    name: "LEGO Star Wars III: The Clone Wars PS3 Platinum Trophy Service",
    description: "LEGO adventure, co-op",
    price: 66.78,
    category: "ps3",
    image: "/images/games/87.webp",
},
{
    id: "88",
    name: "Devil May Cry 2 HD PS4 Platinum Trophy Service",
    description: "Stylized hack-and-slash action",
    price: 60.10,
    category: "ps4",
    image: "/images/games/88.webp",
},
{
    id: "89",
    name: "Dragon Quest Builders 2 PS4 Platinum Trophy Service",
    description: "Building RPG, Dragon Quest spin-off",
    price: 113.53,
    category: "ps4",
    image: "/images/games/89.webp",
},
{
    id: "90",
    name: "Spyro Reignited Trilogy PS4 Platinum Trophy Service",
    description: "Remastered classic platformers",
    price: 80.14,
    category: "ps4",
    image: "/images/games/90.webp",
},
{
    id: "91",
    name: "InFamous PS3 Platinum Trophy Service",
    description: "Superpowered open world",
    price: 66.78,
    category: "ps3",
    image: "/images/games/91.webp",
},
{
    id: "92",
    name: "Tomb Raider: Anniversary PS3 Platinum Trophy Service",
    description: "Classic Lara Croft action-adventure",
    price: 66.78,
    category: "ps3",
    image: "/images/games/92.webp",
},
{
    id: "93",
    name: "Sifu (+DLC) PS4 Platinum Trophy Service",
    description: "Kung fu action roguelike",
    price: 160.27,
    category: "ps4",
    image: "/images/games/93.webp",
},
{
    id: "94",
    name: "Devil May Cry 4 PS4 Platinum Trophy Service",
    description: "Hack-and-slash action sequel",
    price: 173.63,
    category: "ps4",
    image: "/images/games/94.webp",
},
{
    id: "95",
    name: "Atelier Ryza 2 PS5 Platinum Trophy Service",
    description: "Anime JRPG, crafting and alchemy",
    price: 100.17,
    category: "ps5",
    image: "/images/games/95.webp",
},
{
    id: "96",
    name: "Trine 2: Complete Story PS4 Platinum Trophy Service",
    description: "Puzzle-platformer with co-op",
    price: 86.81,
    category: "ps4",
    image: "/images/games/96.webp",
},
{
    id: "97",
    name: "Patapon 2 PS4 Platinum Trophy Service",
    description: "Rhythm strategy remaster",
    price: 66.78,
    category: "ps4",
    image: "/images/games/97.webp",
},
{
    id: "98",
    name: "Super Neptunia RPG PS4 Platinum Trophy Service",
    description: "Side-scrolling JRPG, anime-style",
    price: 80.14,
    category: "ps4",
    image: "/images/games/98.webp",
},
{
    id: "99",
    name: "Dragon Quest Builders PS4 Platinum Trophy Service",
    description: "Sandbox building RPG",
    price: 66.78,
    category: "ps4",
    image: "/images/games/99.webp",
},
{
    id: "100",
    name: "Tomb Raider: Underworld PS3 Platinum Trophy Service",
    description: "Lara Croft classic platform adventure",
    price: 46.75,
    category: "ps3",
    image: "/images/games/100.webp",
},
{
    id: "101",
    name: "DRAGON BALL: Sparking! ZERO PS5 Platinum Trophy Service",
    description: "Upcoming Dragon Ball arena fighter",
    price: 133.56,
    category: "ps5",
    image: "/images/games/101.webp",
},
{
    id: "102",
    name: "Atelier Ryza 3 PS5 Platinum Trophy Service",
    description: "Anime-style JRPG, crafting & alchemy",
    price: 100.17,
    category: "ps5",
    image: "/images/games/102.webp",
},
{
    id: "103",
    name: "KeyWe PS4 (EU/NA) Platinum Trophy Service",
    description: "Co-op puzzle postal adventure",
    price: 86.81,
    category: "ps4",
    image: "/images/games/103.webp",
},
{
    id: "104",
    name: "DarkSiders PS3 Platinum Trophy Service",
    description: "Action-adventure, apocalyptic hack and slash",
    price: 100.17,
    category: "ps3",
    image: "/images/games/104.webp",
},
{
    id: "105",
    name: "Dark Souls PS3 Platinum Trophy Service",
    description: "Challenging action RPG, Souls-like",
    price: 80.14,
    category: "ps3",
    image: "/images/games/105.webp",
},
{
    id: "106",
    name: "L.A. Noire (+DLC) PS3 Platinum Trophy Service",
    description: "Detective thriller, open world, Rockstar Games",
    price: 82.81,
    category: "ps3",
    image: "/images/games/106.webp",
},
{
    id: "107",
    name: "Superliminal (+DLC) PS5 Platinum Trophy Service",
    description: "First-person puzzle, perspective-based gameplay",
    price: 46.75,
    category: "ps5",
    image: "/images/games/107.webp",
},
{
    id: "108",
    name: "Neptunia x Senran Kagura (EU/NA) PS4 Platinum Trophy Service",
    description: "Anime crossover, action RPG",
    price: 66.78,
    category: "ps4",
    image: "/images/games/108.webp",
},
{
    id: "109",
    name: "Detroit: Become Human PS4 Platinum Trophy Service",
    description: "Interactive narrative, futuristic thriller",
    price: 60.10,
    category: "ps4",
    image: "/images/games/109.webp",
},
{
    id: "110",
    name: "InFamous: First Light PS4 Platinum Trophy Service",
    description: "Standalone superhero expansion, open-world",
    price: 40.07,
    category: "ps4",
    image: "/images/games/110.webp",
},
{
    id: "111",
    name: "Atelier Ryza 1 PS4 Platinum Trophy Service",
    description: "JRPG, crafting, slice-of-life fantasy",
    price: 100.17,
    category: "ps4",
    image: "/images/games/111.webp",
},
{
    id: "112",
    name: "God Of War III Remastered PS4 Platinum Trophy Service",
    description: "Epic action-adventure, Greek mythology",
    price: 40.07,
    category: "ps4",
    image: "/images/games/112.webp",
},
{
    id: "113",
    name: "Devil May Cry 3 HD PS3 Platinum Trophy Service",
    description: "Fast-paced hack and slash, prequel",
    price: 100.17,
    category: "ps3",
    image: "/images/games/113.webp",
},
{
    id: "114",
    name: "Saint Seiya: Sanctuary Battle PS3 Platinum Trophy Service",
    description: "Anime action, Saint Seiya franchise",
    price: 106.85,
    category: "ps3",
    image: "/images/games/114.webp",
},
{
    id: "115",
    name: "Resident Evil 4 (2005) PS4 Trophy Service",
    description: "Survival horror classic, third-person shooter",
    price: 66.78,
    category: "ps4",
    image: "/images/games/115.webp",
},
{
    id: "116",
    name: "Devil May Cry 2 HD PS3 Platinum Trophy Service",
    description: "Stylish demon-slaying action",
    price: 60.10,
    category: "ps3",
    image: "/images/games/116.webp",
},
{
    id: "117",
    name: "Cat Quest II PS4 Platinum Trophy Service",
    description: "Action RPG with cats and dogs",
    price: 40.07,
    category: "ps4",
    image: "/images/games/117.webp",
},
{
    id: "118",
    name: "The Walking Dead (+DLC) PS3 Platinum Trophy Service",
    description: "Telltale adventure, zombie survival",
    price: 40.07,
    category: "ps3",
    image: "/images/games/118.webp",
},
{
    id: "119",
    name: "Batman: Arkham Asylum PS3 Platinum Trophy Service",
    description: "Superhero stealth-action, Arkham series",
    price: 40.07,
    category: "ps3",
    image: "/images/games/119.webp",
},
{
    id: "120",
    name: "Devil May Cry 1 HD PS3 Platinum Trophy Service",
    description: "Original demon hunter action game",
    price: 93.49,
    category: "ps3",
    image: "/images/games/120.webp",
},
{
    id: "121",
    name: "Shadow Warrior 3 PS5 (EU/NA) Platinum Trophy Service",
    description: "First-person shooter, fast-paced action",
    price: 33.39,
    category: "ps5",
    image: "/images/games/121.webp",
},
{
    id: "122",
    name: "KeyWe PS5 (EU/NA) Platinum Trophy Service",
    description: "Co-op puzzle postal adventure",
    price: 86.81,
    category: "ps5",
    image: "/images/games/122.webp",
},
{
    id: "123",
    name: "Patapon Remastered PS4 Platinum Trophy Service",
    description: "Rhythm strategy, stylized 2D visuals",
    price: 66.78,
    category: "ps4",
    image: "/images/games/123.webp",
},
{
    id: "124",
    name: "God of War III PS3 Platinum Trophy Service",
    description: "Epic action-adventure, Greek mythology",
    price: 40.07,
    category: "ps3",
    image: "/images/games/124.webp",
},
{
    id: "125",
    name: "Cat Quest III PS4 Platinum Trophy Service",
    description: "Open-world action RPG with cats",
    price: 33.39,
    category: "ps4",
    image: "/images/games/125.webp",
},
{
    id: "126",
    name: "Cat Quest PS4 Platinum Trophy Service",
    description: "Charming feline-themed RPG",
    price: 33.39,
    category: "ps4",
    image: "/images/games/126.webp",
},
{
    id: "127",
    name: "Ape Escape PS4 Platinum Trophy Service",
    description: "Classic platformer remastered",
    price: 26.71,
    category: "ps4",
    image: "/images/games/127.webp",
},
{
    id: "128",
    name: "Suicide Squad: KTJL PS5 Platinum Trophy Service",
    description: "Supervillain action, DC universe",
    price: 180.31,
    category: "ps5",
    image: "/images/games/128.webp",
},
{
    id: "129",
    name: "Jak & Daxter: The Precursor Legacy PS3 Platinum Trophy",
    description: "Classic 3D platformer adventure",
    price: 40.07,
    category: "ps3",
    image: "/images/games/129.webp",
},
{
    id: "130",
    name: "Overcooked! All You Can Eat PS5 Platinum Trophy Service",
    description: "Chaotic co-op cooking game bundle",
    price: 46.75,
    category: "ps5",
    image: "/images/games/130.webp",
},
{
    id: "131",
    name: "Yakuza Kiwami PS4 Platinum Trophy Service",
    description: "Crime drama, beat-em-up remake",
    price: 160.27,
    category: "ps4",
    image: "/images/games/131.webp",
},
{
    id: "132",
    name: "Tomb Raider: Legend PS3 Platinum Trophy Service",
    description: "Lara Croft action-adventure reboot",
    price: 46.75,
    category: "ps3",
    image: "/images/games/132.webp",
},
{
    id: "133",
    name: "Shadow Warrior 3 PS4 Platinum Trophy Service",
    description: "Fast-paced FPS, demon-slaying chaos",
    price: 33.39,
    category: "ps4",
    image: "/images/games/133.webp",
},
{
    id: "134",
    name: "*Not The Game* Ratchet & Clank: Rift Apart PS5 Platinum Trophy Service",
    description: "Interdimensional platform shooter trophy service",
    price: 46.75,
    category: "ps5",
    image: "/images/games/134.webp",
    },
{
    id: "135",
    name: "The Walking Dead: A New Frontier PS4 Platinum Trophy Service",
    description: "Telltale narrative zombie drama",
    price: 33.39,
    category: "ps4",
    image: "/images/games/135.webp",
},
{
    id: "136",
    name: "Ape Escape: On The Loose PS4/PS5 Platinum Trophy Service",
    description: "Remake of classic PSP platformer",
    price: 40.07,
    category: "ps4",
    image: "/images/games/136.webp",
},
{
    id: "137",
    name: "Spongebob Squarepants: The Cosmic Shake PS4 Platinum Trophy Service",
    description: "Cartoon platforming with Spongebob",
    price: 46.75,
    category: "ps4",
    image: "/images/games/137.webp",
},
{
    id: "138",
    name: "Ape Escape PS5 Platinum Trophy Service",
    description: "Platformer classic, modern remaster",
    price: 26.71,
    category: "ps5",
    image: "/images/games/138.webp",
},
{
    id: "139",
    name: "Dragon Ball Z: Kakarot PS5 Platinum Trophy Service",
    description: "Anime RPG retelling of DBZ saga",
    price: 60.10,
    category: "ps5",
    image: "/images/games/139.webp",
},
{
    id: "140",
    name: "Spongebob Squarepants: The Cosmic Shake PS5 Platinum Trophy Service",
    description: "3D platformer in Bikini Bottom",
    price: 46.75,
    category: "ps5",
    image: "/images/games/140.webp",
},
{
    id: "141",
    name: "The Jumping Flash PS4 Platinum Trophy Service",
    description: "Retro first-person platforming action",
    price: 20.03,
    category: "ps4",
    image: "/images/games/141.webp",
},
{
    id: "142",
    name: "The Wolf Among Us PS3 Platinum Trophy Service",
    description: "Gritty fairy tale noir by Telltale",
    price: 40.07,
    category: "ps3",
    image: "/images/games/142.webp",
},
{
    id: "143",
    name: "Cat Quest III PS5 Platinum Trophy Service",
    description: "Fantasy feline RPG, third entry",
    price: 33.39,
    category: "ps5",
    image: "/images/games/143.webp",
},
{
    id: "144",
    name: "Robocop: Rogue City PS5 Platinum Trophy Service",
    description: "Cinematic shooter as Robocop",
    price: 53.42,
    category: "ps5",
    image: "/images/games/144.webp",
}
]

// Sort products alphabetically
const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name))

function getCategoryBadge(category: string) {
    const badges = {
    ps3: {
        label: "PS3",
        color: "bg-blue-600/80 text-blue-100 dark:bg-blue-600/80 dark:text-blue-100 bg-blue-200 text-blue-800",
    },
    ps4: {
        label: "PS4",
        color:
        "bg-purple-600/80 text-purple-100 dark:bg-purple-600/80 dark:text-purple-100 bg-purple-200 text-purple-800",
    },
    ps5: {
        label: "PS5",
        color: "bg-pink-600/80 text-pink-100 dark:bg-pink-600/80 dark:text-pink-100 bg-pink-200 text-pink-800",
    },
    }
    return badges[category as keyof typeof badges] || badges.ps4
}

export default function GamesListPage() {
    return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 from-purple-50 via-pink-50 to-purple-100">
        <Header />

        <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Games List
            </h1>
            <p className="text-xl text-purple-200 dark:text-purple-200 text-purple-700 font-light mb-8">
                Complete alphabetical list of all available platinum trophy services
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
            </div>

            <div className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/10">
            <div className="p-6">
                <div className="mb-6">
                <h2 className="text-2xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-2">
                    Available Games ({sortedProducts.length})
                </h2>
                <p className="text-purple-300 dark:text-purple-300 text-purple-600 text-sm">
                    Click on any game to view details and add to cart
                </p>
                </div>

                <div className="space-y-3">
                {sortedProducts.map((product, index) => {
                    const categoryBadge = getCategoryBadge(product.category)

                    return (
                    <Link key={product.id} href={`/?game=${product.id}`} className="block group">
                        <div className="flex items-center justify-between p-4 rounded-lg border border-purple-500/20 bg-gray-800/30 dark:bg-gray-800/30 bg-purple-50/50 hover:border-purple-400/40 hover:bg-gray-700/40 dark:hover:bg-gray-700/40 hover:bg-purple-100/70 transition-all duration-300">
                        <div className="flex items-center space-x-4 flex-1 min-w-0">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                            </div>

                            <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-purple-100 dark:text-purple-100 text-purple-800 group-hover:text-purple-50 dark:group-hover:text-purple-50 group-hover:text-purple-700 transition-colors duration-300 line-clamp-1">
                                {product.name}
                            </h3>
                            <p className="text-sm text-purple-300 dark:text-purple-300 text-purple-600 line-clamp-1">
                                {product.description}
                            </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 flex-shrink-0">
                            <Badge className={`${categoryBadge.color} border-0 shadow-sm`}>{categoryBadge.label}</Badge>

                            <div className="text-right">
                            <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                ${product.price.toFixed(2)}
                            </div>
                            </div>

                            <ExternalLink className="h-4 w-4 text-purple-400 dark:text-purple-400 text-purple-600 group-hover:text-purple-300 dark:group-hover:text-purple-300 group-hover:text-purple-700 transition-colors duration-300" />
                        </div>
                        </div>
                    </Link>
                    )
                })}
                </div>
            </div>
            </div>

            <div className="text-center mt-8">
            <Link
                href="/"
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