"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Trophy, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all duration-300">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PeachyPlatinums
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-purple-200 hover:text-purple-100 transition-colors duration-300 font-medium">
              Inicio
            </Link>
            <Link
              href="/faq"
              className="text-purple-200 hover:text-purple-100 transition-colors duration-300 font-medium"
            >
              FAQ
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-200 hover:text-purple-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-purple-500/30">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-purple-200 hover:text-purple-100 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/faq"
                className="text-purple-200 hover:text-purple-100 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
