import Link from "next/link"
import { MessageCircle, Phone, ShoppingBag } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/90 border-t border-purple-500/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              PeachyPlatinums
            </h3>
            <p className="text-purple-300 leading-relaxed">
              Servicios profesionales de trofeos platino para PlayStation. Expertos en completar los desafíos más
              difíciles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-purple-200 mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-purple-300 hover:text-purple-100 transition-colors duration-300">
                Inicio
              </Link>
              <Link href="/faq" className="block text-purple-300 hover:text-purple-100 transition-colors duration-300">
                Preguntas Frecuentes
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-purple-200 mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://discord.gg/peachyplatinums"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 text-purple-300 hover:text-purple-100 transition-colors duration-300 group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Discord</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 text-purple-300 hover:text-purple-100 transition-colors duration-300 group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://ebay.com/usr/peachyplatinums"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 text-purple-300 hover:text-purple-100 transition-colors duration-300 group"
              >
                <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>eBay</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/30 text-center">
          <p className="text-purple-400 text-sm">© 2024 PeachyPlatinums. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
