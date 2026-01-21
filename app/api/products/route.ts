import { NextResponse } from "next/server"

const products = [
  // PS5 Games
    { id: "1", name: "Final Fantasy VII Remake (EU) (+DLC) PS5", price: 181, category: "ps5", image: "images/games/1.webp" },
    { id: "5", name: "Mortal Kombat 11 PS5", price: 147, category: "ps5", image: "images/games/5.webp" },
    { id: "8", name: "Sifu (+DLC) PS5", price: 161, category: "ps5", image: "images/games/8.webp" },
    { id: "9", name: "Resident Evil Village PS5 (+DLC)", price: 107, category: "ps5", image: "images/games/9.webp" },
    { id: "14", name: "Resident Evil 7 (+DLC) PS5", price: 147, category: "ps5", image: "images/games/14.webp" },
    { id: "19", name: "Elden Ring PS5", price: 101, category: "ps5", image: "images/games/19.webp" },
    { id: "23", name: "Castlevania Dominus Collection PS5", price: 81, category: "ps5", image: "images/games/23.webp" },
    { id: "29", name: "Resident Evil 2 Remake (+DLC) PS5", price: 94, category: "ps5", image: "images/games/29.webp" },
    { id: "30", name: "Devil May Cry 5 PS5", price: 248, category: "ps5", image: "images/games/30.webp" },
    { id: "41", name: "Resident Evil 3 Remake PS5", price: 34, category: "ps5", image: "images/games/41.webp" },
    { id: "50", name: "Human Fall Flat PS5 (+20 DLC)", price: 114, category: "ps5", image: "images/games/50.webp" },
    { id: "56", name: "Tomb Raider: Legend PS5", price: 41, category: "ps5", image: "images/games/56.webp" },
    { id: "82", name: "Furi PS5", price: 81, category: "ps5", image: "images/games/82.webp" },
    { id: "95", name: "Atelier Ryza 2 PS5", price: 101, category: "ps5", image: "images/games/95.webp" },
    { id: "101", name: "DRAGON BALL: Sparking! ZERO PS5", price: 134, category: "ps5", image: "images/games/101.webp" },
    { id: "102", name: "Atelier Ryza 3 PS5", price: 101, category: "ps5", image: "images/games/102.webp" },
    { id: "107", name: "Superliminal (+DLC) PS5", price: 34, category: "ps5", image: "images/games/107.webp" },
    { id: "121", name: "Shadow Warrior 3 PS5 (EU/NA)", price: 34, category: "ps5", image: "images/games/121.webp" },
    { id: "122", name: "KeyWe PS5 (EU/NA)", price: 87, category: "ps5", image: "images/games/122.webp" },
    { id: "128", name: "Suicide Squad: KTJL PS5", price: 181, category: "ps5", image: "images/games/128.webp" },
    { id: "130", name: "Overcooked! All You Can Eat PS5", price: 34, category: "ps5", image: "images/games/130.webp" },
    { id: "134", name: "Ratchet & Clank: Rift Apart PS5", price: 34, category: "ps5", image: "images/games/134.webp" },
    { id: "138", name: "Ape Escape PS5", price: 27, category: "ps5", image: "images/games/138.webp" },
    { id: "139", name: "Dragon Ball Z: Kakarot PS5", price: 61, category: "ps5", image: "images/games/139.webp" },
    { id: "140", name: "Spongebob: The Cosmic Shake PS5", price: 34, category: "ps5", image: "images/games/140.webp" },
    { id: "143", name: "Cat Quest III PS5", price: 34, category: "ps5", image: "images/games/143.webp" },
    { id: "144", name: "Robocop: Rogue City PS5", price: 54, category: "ps5", image: "images/games/144.webp" },

    // PS4 Games
    { id: "2", name: "Final Fantasy 7 Remake PS4", price: 134, category: "ps4", image: "images/games/2.webp" },
    { id: "3", name: "Resident Evil 5 (+DLC) PS4", price: 167, category: "ps4", image: "images/games/3.webp" },
    { id: "4", name: "Resident Evil 2 Remake (+DLC) PS4", price: 94, category: "ps4", image: "images/games/4.webp" },
    { id: "6", name: "Bloodborne (+DLC) PS4", price: 101, category: "ps4", image: "images/games/6.webp" },
    { id: "7", name: "Bloodstained: ROTN (+DLC) PS4", price: 114, category: "ps4", image: "images/games/7.webp" },
    { id: "10", name: "Devil May Cry 5 PS4 (+DLC)", price: 248, category: "ps4", image: "images/games/10.webp" },
    { id: "11", name: "Batman: Arkham City (+DLC) PS4", price: 161, category: "ps4", image: "images/games/11.webp" },
    { id: "12", name: "Tomb Raider: Legend PS4", price: 41, category: "ps4", image: "images/games/12.webp" },
    { id: "13", name: "Bully PS4", price: 67, category: "ps4", image: "images/games/13.webp" },
    { id: "15", name: "Crash Bandicoot N'Sane Trilogy PS4", price: 201, category: "ps4", image: "images/games/15.webp" },
    { id: "16", name: "Elden Ring PS4", price: 101, category: "ps4", image: "images/games/16.webp" },
    { id: "17", name: "Resident Evil Village (+DLC) PS4", price: 107, category: "ps4", image: "images/games/17.webp" },
    { id: "18", name: "Hollow Knight (EU/NA) PS4", price: 81, category: "ps4", image: "images/games/18.webp" },
    { id: "21", name: "Dragon Ball Z Kakarot PS4", price: 61, category: "ps4", image: "images/games/21.webp" },
    { id: "22", name: "Batman Arkham Knight (+DLC) PS4", price: 147, category: "ps4", image: "images/games/22.webp" },
    { id: "25", name: "House Flipper (+DLC) PS4", price: 121, category: "ps4", image: "images/games/25.webp" },
    { id: "26", name: "Mortal Kombat 11 PS4", price: 147, category: "ps4", image: "images/games/26.webp" },
    { id: "27", name: "Shenmue III PS4 (+DLC)", price: 107, category: "ps4", image: "images/games/27.webp" },
    { id: "28", name: "Horizon Chase Turbo (+DLC) PS4", price: 107, category: "ps4", image: "images/games/28.webp" },
    { id: "31", name: "Resident Evil 3 Remake PS4", price: 34, category: "ps4", image: "images/games/31.webp" },
    { id: "33", name: "Resident Evil HD Remaster PS4", price: 67, category: "ps4", image: "images/games/33.webp" },
    { id: "34", name: "Dark Souls III PS4", price: 121, category: "ps4", image: "images/games/34.webp" },
    { id: "35", name: "Overcooked! 2 PS4 (+DLC)", price: 87, category: "ps4", image: "images/games/35.webp" },
    { id: "36", name: "DmC: Devil May Cry PS4", price: 107, category: "ps4", image: "images/games/36.webp" },
    { id: "37", name: "Sifu (+DLC) PS4", price: 161, category: "ps4", image: "images/games/37.webp" },
    { id: "42", name: "Resident Evil 6 (+DLC) PS4", price: 167, category: "ps4", image: "images/games/42.webp" },
    { id: "47", name: "Yu-Gi-Oh! Legacy of the Duelist PS4", price: 134, category: "ps4", image: "images/games/47.webp" },
    { id: "48", name: "LA: Noire (+DLC) PS4", price: 83, category: "ps4", image: "images/games/48.webp" },
    { id: "49", name: "Melty Blood: Type Lumina PS4", price: 87, category: "ps4", image: "images/games/49.webp" },
    { id: "51", name: "Danganronpa 1-2 Reload PS4", price: 134, category: "ps4", image: "images/games/51.webp" },
    { id: "52", name: "CTR Nitro Fueled PS4", price: 101, category: "ps4", image: "images/games/52.webp" },
    { id: "53", name: "Devil May Cry 3 HD PS4", price: 101, category: "ps4", image: "images/games/53.webp" },
    { id: "54", name: "Resident Evil Revelations 2 PS4", price: 107, category: "ps4", image: "images/games/54.webp" },
    { id: "55", name: "Devil May Cry 4 PS4", price: 174, category: "ps4", image: "images/games/55.webp" },
    { id: "57", name: "Human Fall Flat PS4 (+20 DLC)", price: 107, category: "ps4", image: "images/games/57.webp" },
    { id: "58", name: "Undertale PS4", price: 27, category: "ps4", image: "images/games/58.webp" },
    { id: "59", name: "The Wolf Among Us PS4", price: 41, category: "ps4", image: "images/games/59.webp" },
    { id: "60", name: "Superliminal (+DLC) PS4", price: 34, category: "ps4", image: "images/games/60.webp" },
    { id: "65", name: "Darksiders: Warmastered Edition PS4", price: 81, category: "ps4", image: "images/games/65.webp" },
    { id: "72", name: "Dark Souls Remastered PS4", price: 67, category: "ps4", image: "images/games/72.webp" },
    { id: "73", name: "Sekiro: Shadows Die Twice PS4", price: 101, category: "ps4", image: "images/games/73.webp" },
    { id: "78", name: "Shenmue 1+2 PS4", price: 67, category: "ps4", image: "images/games/78.webp" },
    { id: "84", name: "The Walking Dead (+DLC) PS4", price: 41, category: "ps4", image: "images/games/84.webp" },
    { id: "85", name: "InFamous: Second Son PS4", price: 34, category: "ps4", image: "images/games/85.webp" },
    { id: "88", name: "Devil May Cry 2 HD PS4", price: 61, category: "ps4", image: "images/games/88.webp" },
    { id: "89", name: "Dragon Quest Builders 2 PS4", price: 114, category: "ps4", image: "images/games/89.webp" },
    { id: "90", name: "Spyro Reignited Trilogy PS4", price: 81, category: "ps4", image: "images/games/90.webp" },
    { id: "97", name: "Patapon 2 PS4", price: 67, category: "ps4", image: "images/games/97.webp" },
    { id: "99", name: "Dragon Quest Builders PS4", price: 67, category: "ps4", image: "images/games/99.webp" },
    { id: "103", name: "KeyWe PS4 (EU/NA)", price: 87, category: "ps4", image: "images/games/103.webp" },
    { id: "109", name: "Detroit: Become Human PS4", price: 61, category: "ps4", image: "images/games/109.webp" },
    { id: "110", name: "InFamous: First Light PS4", price: 41, category: "ps4", image: "images/games/110.webp" },

    // PS3 Games
    { id: "20", name: "Resident Evil 4 HD PS3", price: 47, category: "ps3", image: "images/games/20.webp" },
    { id: "24", name: "Resident Evil 5 (+DLC) PS3", price: 167, category: "ps3", image: "images/games/24.webp" },
    { id: "38", name: "Devil May Cry HD Collection PS3", price: 121, category: "ps3", image: "images/games/38.webp" },
    { id: "39", name: "Megadimension Hyperdimension Mk2 PS3", price: 101, category: "ps3", image: "images/games/39.webp" },
    { id: "44", name: "Dark Souls II PS3", price: 101, category: "ps3", image: "images/games/44.webp" },
    { id: "45", name: "DMC: Devil May Cry PS3", price: 107, category: "ps3", image: "images/games/45.webp" },
    { id: "46", name: "Devil May Cry 4 PS3", price: 174, category: "ps3", image: "images/games/46.webp" },
    { id: "61", name: "Demon's Souls PS3", price: 67, category: "ps3", image: "images/games/61.webp" },
    { id: "63", name: "Dark Souls PS3", price: 67, category: "ps3", image: "images/games/63.webp" },
    { id: "64", name: "Batman: Arkham City (+DLC) PS3", price: 161, category: "ps3", image: "images/games/64.webp" },
    { id: "67", name: "Resident Evil 6 (+DLC) PS3", price: 167, category: "ps3", image: "images/games/67.webp" },
    { id: "70", name: "Batman Arkham Asylum GOTY PS3", price: 121, category: "ps3", image: "images/games/70.webp" },
    { id: "71", name: "Batman Arkham Origins PS3", price: 134, category: "ps3", image: "images/games/71.webp" },
    ]

    export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const limit = searchParams.get("limit")

    let filteredProducts = products

    if (category && category !== "all") {
        filteredProducts = products.filter((p) => p.category === category)
    }

    if (limit) {
        filteredProducts = filteredProducts.slice(0, parseInt(limit))
    }

    return NextResponse.json({
        success: true,
        count: filteredProducts.length,
        products: filteredProducts,
        baseUrl: "https://www.peachyplatinums.com",
    })
}
