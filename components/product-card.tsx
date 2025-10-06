"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, ShoppingCart, Package } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

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
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product)
  }

  const getCategoryBadge = (category: string) => {
    const badges = {
      ps3: { label: "PS3", color: "bg-blue-600/80 text-blue-100", icon: Trophy },
      ps4: { label: "PS4", color: "bg-purple-600/80 text-purple-100", icon: Trophy },
      ps5: { label: "PS5", color: "bg-pink-600/80 text-pink-100", icon: Trophy },
      bundles: { label: "BUNDLE", color: "bg-gradient-to-r from-orange-500 to-red-500 text-white", icon: Package },
    }
    return badges[category as keyof typeof badges] || badges.ps4
  }

  const categoryBadge = getCategoryBadge(product.category)
  const IconComponent = categoryBadge.icon

  return (
    <Card
      className={`group bg-gray-900/50 backdrop-blur-sm border transition-all duration-300 hover:shadow-2xl overflow-hidden ${
        product.category === "bundles"
          ? "border-orange-500/40 hover:border-orange-400/60 hover:shadow-orange-500/20"
          : "border-purple-500/30 hover:border-purple-400/60 hover:shadow-purple-500/20"
      }`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${categoryBadge.color} border-0 shadow-lg font-bold`}>{categoryBadge.label}</Badge>
        </div>
        <div className="absolute top-3 right-3">
          <div
            className={`backdrop-blur-sm rounded-full p-2 ${
              product.category === "bundles" ? "bg-orange-500/70" : "bg-black/70"
            }`}
          >
            <IconComponent className={`h-4 w-4 ${product.category === "bundles" ? "text-white" : "text-yellow-400"}`} />
          </div>
        </div>

        {/* Bundle Special Indicator */}
        {product.category === "bundles" && (
          <div className="absolute top-0 right-0 bg-gradient-to-l from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            SPECIAL OFFER
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-purple-100 mb-2 line-clamp-2 group-hover:text-purple-50 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-purple-300 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span
            className={`text-2xl font-bold bg-clip-text text-transparent ${
              product.category === "bundles"
                ? "bg-gradient-to-r from-orange-400 to-red-400"
                : "bg-gradient-to-r from-purple-400 to-pink-400"
            }`}
          >
            £{product.price.toFixed(2)}
          </span>
          {product.category === "bundles" && (
            <span className="text-xs text-orange-300 font-semibold bg-orange-500/20 px-2 py-1 rounded-full">
              BUNDLE PRICE
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className={`w-full font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg ${
            product.category === "bundles"
              ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-orange-500/30 hover:shadow-orange-500/50"
              : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-purple-500/30 hover:shadow-purple-500/50"
          }`}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.category === "bundles" ? "Add Bundle to Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}

