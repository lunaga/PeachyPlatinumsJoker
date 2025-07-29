import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué es un servicio de trofeo platino?",
    answer:
      "Un servicio de trofeo platino es cuando nuestros expertos jugadores completan todos los trofeos de un videojuego en tu cuenta de PlayStation para que obtengas el codiciado trofeo platino sin tener que invertir cientos de horas.",
  },
  {
    question: "¿Es seguro usar sus servicios?",
    answer:
      "Sí, completamente seguro. Utilizamos métodos legítimos de juego, nunca usamos hacks o cheats. Nuestros jugadores son expertos que completan los juegos de forma natural. Además, nunca compartimos tu información personal.",
  },
  {
    question: "¿Cuánto tiempo toma completar un platino?",
    answer:
      "El tiempo varía según el juego. Juegos simples pueden tomar 1-3 días, mientras que juegos más complejos como Dark Souls pueden tomar 1-2 semanas. Te proporcionamos un estimado de tiempo antes de comenzar.",
  },
  {
    question: "¿Qué necesito proporcionar?",
    answer:
      "Solo necesitas proporcionar las credenciales de tu cuenta de PlayStation (email y contraseña) y asegurarte de que el juego esté instalado en tu consola o disponible en tu biblioteca digital.",
  },
  {
    question: "¿Puedo seguir el progreso?",
    answer:
      "¡Por supuesto! Te mantenemos actualizado con capturas de pantalla y actualizaciones regulares del progreso. También puedes contactarnos en cualquier momento para verificar el estado.",
  },
  {
    question: "¿Qué pasa si algo sale mal?",
    answer:
      "Ofrecemos garantía completa. Si por alguna razón no podemos completar el platino, te devolvemos el 100% de tu dinero. También nos hacemos responsables de cualquier problema técnico.",
  },
  {
    question: "¿Aceptan pagos internacionales?",
    answer:
      "Sí, aceptamos pagos de todo el mundo a través de PayPal, tarjetas de crédito/débito y criptomonedas. Los precios están en USD pero se pueden convertir automáticamente.",
  },
  {
    question: "¿Trabajan con cuentas de todas las regiones?",
    answer:
      "Trabajamos con cuentas de todas las regiones (NA, EU, Asia, etc.). Solo asegúrate de especificar tu región al hacer el pedido para evitar problemas de compatibilidad.",
  },
  {
    question: "¿Puedo solicitar un juego que no está en la lista?",
    answer:
      "¡Sí! Si no ves el juego que buscas en nuestra lista, contáctanos por Discord o WhatsApp. Podemos hacer una cotización personalizada para prácticamente cualquier juego de PlayStation.",
  },
  {
    question: "¿Ofrecen descuentos por múltiples servicios?",
    answer:
      "Sí, ofrecemos descuentos progresivos: 5% de descuento en 2-3 servicios, 10% en 4-5 servicios, y 15% en 6 o más servicios. Los descuentos se aplican automáticamente en el checkout.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl text-purple-200 font-light">Todo lo que necesitas saber sobre nuestros servicios</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 shadow-2xl shadow-purple-500/10">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-purple-500/20 rounded-lg px-6 py-2 bg-gray-800/30 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left text-purple-200 hover:text-purple-100 font-semibold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-purple-300 leading-relaxed pt-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
