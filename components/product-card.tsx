import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, ShoppingCart } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const getCategoryBadge = (category: string) => {
    const badges = {
      ps3: { label: "PS3", color: "bg-blue-600/80 text-blue-100" },
      ps4: { label: "PS4", color: "bg-purple-600/80 text-purple-100" },
      ps5: { label: "PS5", color: "bg-pink-600/80 text-pink-100" },
    }
    return badges[category as keyof typeof badges] || badges.ps4
  }

  const categoryBadge = getCategoryBadge(product.category)

  return (
    <Card className="group bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${categoryBadge.color} border-0 shadow-lg`}>{categoryBadge.label}</Badge>
        </div>
        <div className="absolute top-3 right-3">
          <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
            <Trophy className="h-4 w-4 text-yellow-400" />
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-purple-100 mb-2 line-clamp-2 group-hover:text-purple-50 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-purple-300 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Solicitar Servicio
        </Button>
      </CardFooter>
    </Card>
  )
}
