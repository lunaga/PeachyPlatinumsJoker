import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactButtons } from "@/components/contact-buttons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - PeachyPlatinums | PlayStation Trophy Service Questions",
  description:
    "Frequently asked questions about our PlayStation trophy services. Learn about safety, pricing, completion times, and more for PS3, PS4, and PS5 trophy boosting.",
  keywords: [
    "PlayStation trophy FAQ",
    "trophy service questions",
    "trophy boosting safety",
    "PlayStation completion service",
  ],
}

const faqs = [
  {
    question: "Is it safe to use your services?",
    answer:
      "Yes, completely safe. Here at PeachyPlatinums we use legitimate gameplay methods, never hacks or cheats. We treat each customer with the utmost discretion, and would never share your personal information.",
  },
  {
    question: "How long does it take to complete a Service?",
    answer:
      "Completion time will vary depending on the game. We can provide you with a time estimate before starting the service, and keep you updated throughout.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "You will need to provide your PlayStation account credentials (E-Mail and password).",
  },
  {
    question: "Can I track the progress?",
    answer:
      "Of course! We keep you updated with screenshots and regular progress updates. You can also contact us anytime to check the status.",
  },
  {
    question: "Do you accept international payments?",
    answer:
      "Yes, we accept payments from around the world through PayPal. Prices are displayed in USD but can be automatically converted.",
  },
  {
    question: "Do you work with accounts from all regions?",
    answer:
      "We are able to offer services for games from either NA or EU. Just make sure to specify your region when placing the order to avoid compatibility issues.",
  },
  {
    question: "Can I request a game that's not on the list?",
    answer:
      "Yes! If you don't see the game you're looking for in our list, contact us via Discord or WhatsApp. We can make a custom quote for virtually any PlayStation game.",
  },
]
export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 from-purple-50 via-pink-50 to-purple-100 overflow-x-hidden">
      <Header />

      <main>
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header Section - Responsive */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent px-2 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-purple-200 dark:text-purple-200 text-purple-700 font-light px-4 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about our PlayStation trophy services
              </p>
              <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50 mt-6"></div>
            </div>

            {/* FAQ Container - Responsive */}
            <div className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-purple-500/30 p-4 sm:p-6 md:p-8 shadow-2xl shadow-purple-500/10">
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-purple-500/20 rounded-lg px-3 sm:px-4 md:px-6 py-2 bg-gray-800/30 dark:bg-gray-800/30 bg-purple-50/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40"
                  >
                    <AccordionTrigger className="text-left text-purple-200 dark:text-purple-200 text-purple-800 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-700 font-semibold text-base sm:text-lg md:text-xl leading-relaxed py-3 sm:py-4 [&[data-state=open]>svg]:rotate-180">
                      <span className="pr-2 sm:pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-purple-300 dark:text-purple-300 text-purple-600 leading-relaxed pt-2 sm:pt-3 md:pt-4 pb-3 sm:pb-4 text-sm sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact Section - Responsive */}
            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
              <div className="bg-gray-900/30 dark:bg-gray-900/30 bg-purple-100/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-200 dark:text-purple-200 text-purple-800 mb-3 sm:mb-4">
                  Still have questions?
                </h2>
                <p className="text-purple-300 dark:text-purple-300 text-purple-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed px-2">
                  Contact us directly for personalized assistance with your PlayStation trophy needs
                </p>

                {/* Contact Buttons - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
                  <a
                    href="https://discord.com/users/peachyplatinums"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                  >
                    <span>💬</span>
                    <span>Discord</span>
                  </a>
                  <a
                    href="https://wa.me/5491164716955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                  >
                    <span>📱</span>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:Peachyplatinums@hotmail.com"
                    className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base sm:col-span-2 lg:col-span-1"
                  >
                    <span>📧</span>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactButtons />
    </div>
  )
}
