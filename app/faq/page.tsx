import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactButtons } from "@/components/contact-buttons"

const faqs = [
  {
    question: "What is a platinum trophy service?",
    answer:
      "A platinum trophy service is when our expert gamers complete all trophies in a video game on your PlayStation account so you can obtain the coveted platinum trophy without having to invest hundreds of hours.",
  },
  {
    question: "Is it safe to use your services?",
    answer:
      "Yes, completely safe. We use legitimate gameplay methods, never hacks or cheats. Our gamers are experts who complete games naturally. Additionally, we never share your personal information.",
  },
  {
    question: "How long does it take to complete a platinum?",
    answer:
      "Time varies depending on the game. Simple games can take 1-3 days, while more complex games like Dark Souls can take 1-2 weeks. We provide you with a time estimate before starting.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "You only need to provide your PlayStation account credentials (email and password) and ensure the game is installed on your console or available in your digital library.",
  },
  {
    question: "Can I track the progress?",
    answer:
      "Of course! We keep you updated with screenshots and regular progress updates. You can also contact us anytime to check the status.",
  },
  {
    question: "What happens if something goes wrong?",
    answer:
      "We offer a complete guarantee. If for any reason we cannot complete the platinum, we refund 100% of your money. We also take responsibility for any technical issues.",
  },
  {
    question: "Do you accept international payments?",
    answer:
      "Yes, we accept payments from around the world through PayPal, credit/debit cards, and cryptocurrencies. Prices are in USD but can be automatically converted.",
  },
  {
    question: "Do you work with accounts from all regions?",
    answer:
      "We work with accounts from all regions (NA, EU, Asia, etc.). Just make sure to specify your region when placing the order to avoid compatibility issues.",
  },
  {
    question: "Can I request a game that's not on the list?",
    answer:
      "Yes! If you don't see the game you're looking for in our list, contact us via Discord or WhatsApp. We can make a custom quote for virtually any PlayStation game.",
  },
  {
    question: "Do you offer discounts for multiple services?",
    answer:
      "Yes, we offer progressive discounts: 5% off for 2-3 services, 10% for 4-5 services, and 15% for 6 or more services. Discounts are automatically applied at checkout.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 from-purple-50 via-pink-50 to-purple-100">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-purple-200 dark:text-purple-200 text-purple-700 font-light">
              Everything you need to know about our services
            </p>
          </div>

          <div className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 shadow-2xl shadow-purple-500/10">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-purple-500/20 rounded-lg px-6 py-2 bg-gray-800/30 dark:bg-gray-800/30 bg-purple-50/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left text-purple-200 dark:text-purple-200 text-purple-800 hover:text-purple-100 dark:hover:text-purple-100 hover:text-purple-700 font-semibold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-purple-300 dark:text-purple-300 text-purple-600 leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      <ContactButtons />
    </div>
  )
}

