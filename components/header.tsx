"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 dark:bg-black/90 bg-white/90 backdrop-blur-md border-b border-purple-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center space-x-2 sm:space-x-3 group min-w-0 flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all duration-300 ring-2 ring-purple-500/30 group-hover:ring-purple-400/50 flex-shrink-0">
              <Image
                src="/images/peachy-logo.webp"
                alt="PeachyPlatinums Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent truncate">
              PeachyPlatinums
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/home"
              className="text-purple-200 dark:text-purple-200 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/store"
              className="text-purple-200 dark:text-purple-200 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              Store
            </Link>
            <Link
              href="/faq"
              className="text-purple-200 dark:text-purple-200 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              FAQ
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-200 dark:text-purple-200 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 h-8 w-8 sm:h-10 sm:w-10"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-purple-500/30">
            <div className="flex flex-col space-y-4">
              <Link
                href="/home"
                className="text-purple-200 dark:text-purple-200 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/store"
                className="text-purple-200 dark:text-purple-200 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Store
              </Link>
              <Link
                href="/faq"
                className="text-purple-200 dark:text-purple-200 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300 font-medium"
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

