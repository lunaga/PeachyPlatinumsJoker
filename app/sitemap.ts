import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.peachyplatinums.com"

    return [
        {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
        },
        {
        url: `${baseUrl}/playstation-trophy-service`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        },
        {
        url: `${baseUrl}/trophy-boosting`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
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
