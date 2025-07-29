import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Phone, ShoppingBag } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/90 dark:bg-black/90 bg-purple-100/90 border-t border-purple-500/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg shadow-purple-500/30 ring-2 ring-purple-500/20">
                <Image
                  src="/images/games/logo.webp"
                  alt="PeachyPlatinums Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                PeachyPlatinums
              </h3>
            </div>
            <p className="text-purple-300 dark:text-purple-300 text-purple-700 leading-relaxed">
              Professional PlayStation platinum trophy services. Experts in completing the most difficult challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-purple-200 dark:text-purple-200 text-purple-800 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-purple-300 dark:text-purple-300 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/games"
                className="block text-purple-300 dark:text-purple-300 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300"
              >
                Games List
              </Link>
              <Link
                href="/faq"
                className="block text-purple-300 dark:text-purple-300 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-purple-200 dark:text-purple-200 text-purple-800 mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://discord.com/users/peachyplatinums"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 text-purple-300 dark:text-purple-300 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300 group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Discord: @peachyplatinums</span>
              </a>
              <a
                href="https://wa.me/5491164716955"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 text-purple-300 dark:text-purple-300 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300 group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.ebay.com/str/peachyplatinums?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=YiIVhmFMRyC&sssrc=3418065&ssuid=v792cyonree&stype=1&widget_ver=artemis&media=WHATS_APP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 text-purple-300 dark:text-purple-300 text-purple-700 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-600 transition-colors duration-300 group"
              >
                <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>eBay Store</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/30 text-center">
          <p className="text-purple-400 dark:text-purple-400 text-purple-600 text-sm">
            © 2024 PeachyPlatinums. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

