import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://peachy-platinums.vercel.app"

    return [
        {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
        },
        {
        url: `${baseUrl}/games`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
        },
        {
        url: `${baseUrl}/faq`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        },
    ]
}
