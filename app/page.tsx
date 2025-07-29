"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "1",
    name: "Sekiro: Shadows Die Twice PS4 Platinum Trophy",
    description: "Adventure game, SoulsLike game",
    price: 100.79,
    category: "ps4",
    image: "/images/games/Sekiro Shadows Die Twice PS4 Platinum Trophy.webp",
  },
  {
    id: "2",
    name: "God of War: Ragnarok (+DLC) PS5 Platinum Trophy Service",
    description: "Adventure game",
    price: 103.44,
    category: "ps5",
    image: "/images/games/God of War Ragnarok.webp",
  },
  {
    id: "3",
    name: "Spider-Man: Miles Morales",
    description: "Open-world game, Adventure game",
    price: 29.99,
    category: "ps4",
    image: "/images/games/",
  },
  {
    id: "4",
    name: "Sifu (+DLC) PS4 Platinum Trophy Service",
    description: "adventure game, fighting game",
    price: 146.03,
    category: "ps4",
    image: "/images/games/Sifu (+DLC) PS4 Platinum Trophy Service.webp",
  },
  {
    id: "5",
    name: "Tomb Raider",
    description: "adventure game, plataform game",
    price: 39.99,
    category: "ps4",
    image: "/images/games/tomb.jpg",
  },
  {
    id: "6",
    name: "BloodBorne PS4 (+DLC) Platinum Trophy Service",
    description: "Open-world game, SoulsLike game",
    price: 66.93,
    category: "ps4",
    image: "/images/games/BloodBorne PS4 (+DLC) Platinum Trophy Service.webp",
  },
  {
    id: "7",
    name: "Dark Souls III PS4 Platinum Trophy Service",
    description: "Open-world game, SoulsLike game",
    price: 120.94,
    category: "ps4",
    image: "/images/games/Dark Souls III PS4 Platinum Trophy Service",
  },
  {
    id: "8",
    name: "Assassins Creed",
    description: "Open-world game",
    price: 39.99,
    category: "ps5",
    image: "/images/games/",
  },
  {
    id: "9",
    name: "Elden Ring PS4 Platinum Trophy Service",
    description: "Open-world game, SoulsLike game",
    price: 73.01,
    category: "ps4",
    image: "/images/games/Elden Ring PS4 Platinum Trophy Service.webp",
  },
  {
    id: "10",
    name: "God of war: Ascension PS3 Platinum Trophy Service",
    description: "adventure game",
    price: 36.51,
    category: "ps3",
    image: "/images/games/",
  },
  {
    id: "11",
    name: "Atelier Ryza 3 PS4 Platinum Trophy Service",
    description: "Open-world game, rol game",
    price: 91.27,
    category: "ps4",
    image: "/images/games/Atelier Ryza 3 PS4 Platinum Trophy Service.webp",
  },
  {
    id: "12",
    name: "Hollow knight (EU/NA) PS4 Platinum Trophy Service",
    description: "plataform game, soulslike game, adventre game",
    price: 73.01,
    category: "ps4",
    image: "/images/games/Hollow knight.webp",
  },
  {
    id: "13",
    name: "Megadimension Neptunia VIIR PS4 Platinum Trophy Service",
    description: "Open-world game",
    price: 85.18,
    category: "ps4",
    image: "/images/games/Megadimension Neptunia VIIR PS4 Platinum Trophy Service.webp",
  },
  {
    id: "14",
    name: "Resident Evil Village PS5 (+DLC) Platinum Trophy Service",
    description: "Horror game, survivor game",
    price: 97.35,
    category: "ps5",
    image: "/images/games/Resident Evil Village PS5 (+DLC) Platinum Trophy Service.webp",
  },
  {
    id: "15",
    name: "Dark Souls II PS3 Platinum Trophy Service",
    description: "Open-world game, SoulsLike game",
    price: 73.01,
    category: "ps3",
    image: "/images/games/Dark Souls II PS3 Platinum Trophy Service.webp",
  },
  {
    id: "16",
    name: "Resident Evil Village PS4 (+DLC) Platinum Trophy Service",
    description: "horror game, survivor game",
    price: 97.35,
    category: "ps4",
    image: "/images/games/Resident Evil Village PS4 (+DLC) Platinum Trophy Service.webp",
  },
  {
    id: "17",
    name: "Kakarot PS4 Platinum Trophy Service",
    description: "figthting game, adventure game",
    price: 46.55,
    category: "ps4",
    image: "/images/games/Kakarot PS4 Platinum Trophy Service.webp",
  },
  {
    id: "18",
    name: "Dark souls Remastered PS4 Platinum Trophy Service",
    description: "Open-world game, SoulsLike game",
    price: 51.72,
    category: "ps4",
    image: "/images/games/Dark souls Remastered PS4 Platinum Trophy Service.webp",
  },
  {
    id: "19",
    name: "Devil May Cry 3 HD PS4 Platinum Trophy Service",
    description: "Adventure game",
    price: 91.27,
    category: "ps4",
    image: "/images/games/Devil May Cry 3 HD PS4 Platinum Trophy Service.webp",
  },
  {
    id: "20",
    name: "Crash Bandicoot N'Sane Trilogy PS4 Platinum Trophy Service",
    description: "Plataform game",
    price: 182.54,
    category: "ps4",
    image: "/images/games/Crash Bandicoot N’Sane Trilogy PS4 Platinum Trophy Service.webp",
  },
  {
    id: "21",
    name: "InFamous: First Light PS4 Platinum Trophy Service",
    description: "Open-world game, adventure game",
    price: 36.51,
    category: "ps4",
    image: "/images/games/InFamous First Light PS4 Platinum Trophy Service.webp",
  },
  {
    id: "22",
    name: "Devil May Cry 5 PS5 Platinum Trophy Service",
    description: "adventure game",
    price: 225.13,
    category: "ps5",
    image: "/images/games/Devil May Cry 5 PS5 Platinum Trophy Service.webp",
  },
  {
    id: "23",
    name: "Batman Arkham Knight (+DLC) PS4 Platinum Trophy Service",
    description: "Open-world game",
    price: 146.03,
    category: "ps4",
    image: "/images/games/Batman Arkham Knight (+DLC) PS4 Platinum Trophy Service.webp",
  },
  {
    id: "24",
    name: "Tomb Raider: Legend PS5 Platinum Trophy Service",
    description: "Open-world game",
    price: 36.51,
    category: "ps5",
    image: "/images/games/Tomb Raider Legend PS5 Platinum Trophy Service.webp",
  },
  {
    id: "25",
    name: "Detroit: Become Human PS4 Platinum Trophy Service",
    description: "Story game",
    price: 54.76,
    category: "ps4",
    image: "/images/games/Detroit Become Human PS4 Platinum Trophy Service.webp",
  },
  {
    id: "26",
    name: "Devil May Cry 1 HD PS3 Platinum Trophy Service",
    description: "Adventure game",
    price: 85.18,
    category: "ps3",
    image: "/images/games/Devil May Cry 1 HD PS3 Platinum Trophy Service.webp",
  },
  {
    id: "27",
    name: "LEGO Star Wars III: The Clone Wars PS3 Platinum Trophy Service",
    description: "Open-world game",
    price: 60.85,
    category: "ps3",
    image: "/images/games/LEGO Star Wars III The Clone Wars PS3 Platinum Trophy Service.webp",
  },
  {
    id: "28",
    name: "Alice: Madness Returns PS3 (+DLC) Platinum Trophy Service",
    description: "Plataform game",
    price: 54.76,
    category: "ps3",
    image: "/images/games/Alice Madness Returns PS3 (+DLC) Platinum Trophy Service.webp/",
  },
  {
    id: "29",
    name: "Dark souls II: Scholar Of The First Sin PS4 Platinum Trophy",
    description: "Open-world game, SoulsLike game",
    price: 73.01,
    category: "ps4",
    image: "/images/games/Dark souls II Scholar Of The First Sin PS4 Platinum Trophy.webp",
  },
  {
    id: "30",
    name: "Final Fantasy VII Remake (+DLC) PS5 Platinum Trophy Service",
    description: "Open-world game",
    price: 164.28,
    category: "ps5",
    image: "/images/games/Final Fantasy VII Remake (+DLC) PS5 Platinum Trophy Service.webp",
  },
]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products
    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  const categories = [
    { id: "all", name: "Todos los Juegos", count: products.length },
    { id: "ps3", name: "PlayStation 3", count: products.filter((p) => p.category === "ps3").length },
    { id: "ps4", name: "PlayStation 4", count: products.filter((p) => p.category === "ps4").length },
    { id: "ps5", name: "PlayStation 5", count: products.filter((p) => p.category === "ps5").length },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            PeachyPlatinums
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 font-light">
            Servicios profesionales de trofeos platino para PlayStation
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`
                  px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2
                  ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500 text-white shadow-lg shadow-purple-500/50"
                      : "border-purple-500/50 text-purple-300 hover:border-purple-400 hover:text-purple-200 hover:shadow-md hover:shadow-purple-500/25"
                  }
                `}
              >
                {category.name}
                <span className="ml-2 px-2 py-1 text-xs rounded-full bg-purple-500/30">{category.count}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
