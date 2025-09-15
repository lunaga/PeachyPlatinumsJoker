import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactButtons } from "@/components/contact-buttons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "PlayStation Trophy Service - Professional PS3, PS4, PS5 Trophy Completion | PeachyPlatinums",
    description:
        "Professional PlayStation trophy service for PS3, PS4, and PS5. Expert gamers complete platinum trophies safely and quickly. 100% completion guarantee. Contact PeachyPlatinums today!",
    keywords: [
        "PlayStation trophy service",
        "PS4 trophy service",
        "PS5 trophy service",
        "PS3 trophy service",
        "platinum trophy completion",
        "trophy boosting service",
        "PlayStation achievement help",
        "gaming service",
        "trophy hunter",
        "PlayStation expert",
    ],
    alternates: {
        canonical: "https://peachy-platinums.vercel.app/playstation-trophy-service",
    },
    }

    export default function PlayStationTrophyServicePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 from-purple-50 via-pink-50 to-purple-100">
        <Header />

        <main className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                PlayStation Trophy Service
                </h1>
                <p className="text-xl text-purple-200 dark:text-purple-200 text-purple-700 mb-8">
                Professional PlayStation trophy completion service for PS3, PS4, and PS5 games
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50 mb-8"></div>
            </section>

            {/* Main Content */}
            <section className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 mb-8">
                <h2 className="text-3xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-6">
                Why Choose PeachyPlatinums Trophy Service?
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="text-xl font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                    🏆 Expert PlayStation Trophy Hunters
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 leading-relaxed">
                    Our team consists of professional gamers who specialize in PlayStation trophy completion. We have
                    years of experience with the most challenging games including Dark Souls, Sekiro, Elden Ring, and
                    hundreds more.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                    🔒 100% Safe and Secure Service
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 leading-relaxed">
                    We never use hacks, cheats, or exploits. All trophies are earned through legitimate gameplay. Your
                    PlayStation account remains completely safe and secure throughout the entire process.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                    ⚡ Fast Trophy Completion
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 leading-relaxed">
                    Most platinum trophies completed within 1-2 weeks. Simple games can be finished in 1-3 days. We
                    provide realistic time estimates before starting any service.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                    💯 Money-Back Guarantee
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 leading-relaxed">
                    If we cannot complete your platinum trophy for any reason, we provide a full 100% refund. Your
                    satisfaction is our top priority.
                    </p>
                </div>
                </div>

                <h2 className="text-3xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-6">
                PlayStation Trophy Services Available
                </h2>

                <div className="space-y-6 mb-8">
                <div className="border border-purple-500/20 rounded-lg p-6 bg-gray-800/30 dark:bg-gray-800/30 bg-purple-50/50">
                    <h3 className="text-2xl font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                    PS5 Trophy Service
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 mb-4">
                    Complete PlayStation 5 trophy lists including the latest exclusive games like God of War Ragnarök,
                    Spider-Man: Miles Morales, Demon's Souls, and more. Our experts know all the tricks and strategies for
                    PS5 trophy completion.
                    </p>
                    <ul className="list-disc list-inside text-purple-300 dark:text-purple-300 text-purple-600 space-y-2">
                    <li>God of War Ragnarök (+DLC)</li>
                    <li>Resident Evil Village</li>
                    <li>Devil May Cry 5</li>
                    <li>Final Fantasy VII Remake</li>
                    <li>And 50+ more PS5 games</li>
                    </ul>
                </div>

                <div className="border border-purple-500/20 rounded-lg p-6 bg-gray-800/30 dark:bg-gray-800/30 bg-purple-50/50">
                    <h3 className="text-2xl font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                    PS4 Trophy Service
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 mb-4">
                    Our most popular service! We complete PlayStation 4 trophy lists for hundreds of games including the
                    most challenging SoulsLike games, fighting games, and RPGs.
                    </p>
                    <ul className="list-disc list-inside text-purple-300 dark:text-purple-300 text-purple-600 space-y-2">
                    <li>Dark Souls series (1, 2, 3)</li>
                    <li>Sekiro: Shadows Die Twice</li>
                    <li>Elden Ring</li>
                    <li>Bloodborne (+DLC)</li>
                    <li>And 200+ more PS4 games</li>
                    </ul>
                </div>

                <div className="border border-purple-500/20 rounded-lg p-6 bg-gray-800/30 dark:bg-gray-800/30 bg-purple-50/50">
                    <h3 className="text-2xl font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                    PS3 Trophy Service
                    </h3>
                    <p className="text-purple-300 dark:text-purple-300 text-purple-600 mb-4">
                    Specialized in rare and discontinued PlayStation 3 trophy services. Many PS3 games have online
                    trophies that are becoming impossible to obtain - we can help before servers shut down permanently.
                    </p>
                    <ul className="list-disc list-inside text-purple-300 dark:text-purple-300 text-purple-600 space-y-2">
                    <li>Dark Souls II (Original)</li>
                    <li>God of War: Ascension</li>
                    <li>Devil May Cry HD Collection</li>
                    <li>LEGO games with online trophies</li>
                    <li>And 100+ more PS3 games</li>
                    </ul>
                </div>
                </div>

                <div className="text-center">
                <Link href="/">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 text-lg">
                    View All Available Games
                    </Button>
                </Link>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8">
                <h2 className="text-3xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-6 text-center">
                Ready to Get Your PlayStation Trophies?
                </h2>
                <p className="text-center text-purple-300 dark:text-purple-300 text-purple-600 mb-8">
                Contact PeachyPlatinums today for a free quote on your PlayStation trophy service. We respond within 24
                hours!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="https://discord.com/users/peachyplatinums"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                    Contact via Discord
                </a>
                <a
                    href="https://wa.me/5491164716955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                    WhatsApp Message
                </a>
                <a
                    href="mailto:Peachyplatinums@hotmail.com"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                    Send Email
                </a>
                </div>
            </section>
            </div>
        </main>

        <Footer />
        <ContactButtons />
        </div>
    )
}
