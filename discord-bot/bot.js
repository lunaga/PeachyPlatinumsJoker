require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const API_URL = "https://peachyplatinums.com/api/products";

if (!TOKEN) {
    console.error("❌ DISCORD_BOT_TOKEN environment variable is required!");
    process.exit(1);
    }

    const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
    });

    // 🔥 Fetch NATIVO
    async function fetchProducts(category = null) {
    let url = API_URL;

    if (category) {
        url += `?category=${category}`;
    }

    const res = await fetch(url);
    return await res.json();
    }

    // 🔥 Mostrar TODOS
    async function postProducts(channel, category = null) {
    const products = await fetchProducts(category);

    if (!products.length) {
        return channel.send("❌ No products found.");
    }

    for (let i = 0; i < products.length; i += 5) {
        const batch = products.slice(i, i + 5);

        const embeds = batch.map(p =>
        new EmbedBuilder()
            .setTitle(p.title)
            .setDescription(`🎮 Platform: **${p.platform}**`)
            .addFields(
            { name: "💰 Price", value: `$${p.price}`, inline: true },
            { name: "📦 Stock", value: p.stock ? "Available" : "Out of stock", inline: true }
            )
            .setImage(p.image)
            .setColor("#ff9bd2")
        );

        const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setLabel("🛒 Visit Store")
            .setStyle(ButtonStyle.Link)
            .setURL("https://peachyplatinums.com/store"),

        new ButtonBuilder()
            .setLabel("💬 Join Discord")
            .setStyle(ButtonStyle.Link)
            .setURL("https://discord.gg/9ycQPSCdAZ")
        );

        await channel.send({ embeds, components: [row] });
    }
    }

    client.once("ready", () => {
    console.log(`✅ Bot online as ${client.user.tag}`);
    });

    client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith("!peachy")) return;

    const args = message.content.split(" ");
    const command = args[1];

    if (command === "products") await postProducts(message.channel);
    if (command === "ps5") await postProducts(message.channel, "ps5");
    if (command === "ps4") await postProducts(message.channel, "ps4");
    if (command === "ps3") await postProducts(message.channel, "ps3");

    if (command === "help") {
        message.reply(`
    **📌 Peachy Commands**

    !peachy products → All products  
    !peachy ps5 → PS5 games  
    !peachy ps4 → PS4 games  
    !peachy ps3 → PS3 games  
    `);
  }
});

client.login(TOKEN);
