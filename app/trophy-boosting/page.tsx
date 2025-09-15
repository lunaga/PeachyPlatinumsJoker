import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactButtons } from "@/components/contact-buttons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Trophy Boosting Service - PlayStation Trophy Boosting | PeachyPlatinums",
    description:
        "Professional trophy boosting service for PlayStation games. Safe, fast, and reliable trophy boosting for PS3, PS4, and PS5. Get your platinum trophies completed by experts.",
    keywords: [
        "trophy boosting",
        "PlayStation trophy boosting",
        "trophy boost service",
        "PS4 trophy boosting",
        "PS5 trophy boosting",
        "platinum trophy boost",
        "gaming boost service",
        "trophy completion service",
    ],
    alternates: {
        canonical: "https://peachy-platinums.vercel.app/trophy-boosting",
    },
    }

    export default function TrophyBoostingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 from-purple-50 via-pink-50 to-purple-100">
        <Header />

        <main className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
            <section className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Trophy Boosting Service
                </h1>
                <p className="text-xl text-purple-200 dark:text-purple-200 text-purple-700 mb-8">
                Professional PlayStation trophy boosting by expert gamers
                </p>
            </section>

            <section className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 mb-8">
                <h2 className="text-3xl font-bold text-purple-100 dark:text-purple-100 text-purple-800 mb-6">
                What is Trophy Boosting?
                </h2>
                <p className="text-purple-300 dark:text-purple-300 text-purple-600 leading-relaxed mb-6">
                Trophy boosting is a professional gaming service where experienced players complete difficult or
                time-consuming trophies on your PlayStation account. This includes platinum trophies, rare achievements,
                and challenging objectives that would normally take hundreds of hours to complete.
                </p>

                <h3 className="text-2xl font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                Why Choose Professional Trophy Boosting?
                </h3>
                <ul className="list-disc list-inside text-purple-300 dark:text-purple-300 text-purple-600 space-y-3 mb-8">
                <li>
                    <strong>Save Time:</strong> Skip hundreds of hours of grinding and repetitive gameplay
                </li>
                <li>
                    <strong>Expert Skills:</strong> Our gamers have mastered the most difficult PlayStation games
                </li>
                <li>
                    <strong>Guaranteed Results:</strong> 100% completion rate with money-back guarantee
                </li>
                <li>
                    <strong>Safe Methods:</strong> No hacks, cheats, or account risks - only legitimate gameplay
                </li>
                <li>
                    <strong>24/7 Progress Updates:</strong> Stay informed about your trophy progress
                </li>
                </ul>

                <h3 className="text-2xl font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-4">
                Popular Trophy Boosting Games
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="text-lg font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-2">
                    Challenging SoulsLike Games:
                    </h4>
                    <ul className="list-disc list-inside text-purple-300 dark:text-purple-300 text-purple-600 space-y-1">
                    <li>Dark Souls 1, 2, 3</li>
                    <li>Sekiro: Shadows Die Twice</li>
                    <li>Elden Ring</li>
                    <li>Bloodborne</li>
                    <li>Demon's Souls</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-purple-200 dark:text-purple-200 text-purple-700 mb-2">
                    Time-Consuming RPGs:
                    </h4>
                    <ul className="list-disc list-inside text-purple-300 dark:text-purple-300 text-purple-600 space-y-1">
                    <li>Final Fantasy series</li>
                    <li>Persona games</li>
                    <li>Atelier series</li>
                    <li>Tales of series</li>
                    <li>Dragon Quest games</li>
                    </ul>
                </div>
                </div>
            </section>

            <section className="text-center">
                <Link href="/">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 text-lg">
                    Start Your Trophy Boosting Service
                </Button>
                </Link>
            </section>
            </div>
        </main>

        <Footer />
        <ContactButtons />
        </div>
    )
}
