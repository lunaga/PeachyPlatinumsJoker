/**
 * PeachyPlatinums Discord Bot
 * 
 * Este bot se conecta a Discord y publica los productos de la tienda
 * en un canal especifico usando embeds con imagenes y precios.
 * 
 * Uso: node bot.js
 */

require('dotenv').config();
const fetch = require('node-fetch');


const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

// Configuracion
const DISCORD_TOKEN = process.env.DISCORD_BOT_TOKEN;
const API_URL = process.env.API_URL || 'https://www.peachyplatinums.com/api/products';
const STORE_URL = 'https://www.peachyplatinums.com/store';

// Canales especificos
const PRODUCTS_CHANNEL_ID = '1458156761050775818';  // Canal de juegos
const DEALS_CHANNEL_ID = '1458156828923006976';      // Canal de ofertas/descuentos
const GUILD_ID = '1458152402724061503';
const CHANNEL_ID = '1458156761050775818';  // Canal configurado para auto-publicación

// Crear cliente de Discord
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent // 🔥 NECESARIO PARA LEER !peachy
    ]
});

    // Funcion para obtener productos de la API

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


async function fetchProducts(category = null, limit = null) {
    try {
        let url = API_URL;
        const params = new URLSearchParams();
        
        if (category) params.append('category', category);
        if (limit) params.append('limit', limit.toString());
        
        if (params.toString()) {
            url += '?' + params.toString();
        }

        console.log("🔎 Fetching:", url);

        const response = await fetch(url);
        const raw = await response.text();

        console.log("📦 RAW API RESPONSE:", raw);

        const data = JSON.parse(raw);

        if (!data.products) {
            console.error("❌ API structure invalid");
            return null;
        }

        return data;

    } catch (error) {
        console.error('❌ Error fetching products:', error);
        return null;
    }
}

    // Funcion para crear embed de producto
    function createProductEmbed(product, baseUrl) {
    const categoryColors = {
        ps5: 0x003087,  // Azul PlayStation
        ps4: 0x003087,
        ps3: 0x003087,
        bundle: 0x9333EA // Morado PeachyPlatinums
    };

    const categoryBadges = {
        ps5: '🎮 PS5',
        ps4: '🎮 PS4', 
        ps3: '🎮 PS3',
        bundle: '📦 Bundle'
    };

    const embed = new EmbedBuilder()
        .setTitle(`🏆 ${product.name}`)
        .setDescription(`Platinum Trophy Service`)
        .setColor(categoryColors[product.category] || 0x9333EA)
        .setThumbnail(`${baseUrl}/${product.image}`)
        .addFields(
        { name: '💰 Price', value: `**£${product.price}.00**`, inline: true },
        { name: '🎯 Platform', value: categoryBadges[product.category] || product.category.toUpperCase(), inline: true },
        { name: '🔗 Product ID', value: `#${product.id}`, inline: true }
        )
        .setFooter({ 
        text: 'PeachyPlatinums - Professional Trophy Services',
        iconURL: `${baseUrl}/images/logo.webp`
        })
        .setTimestamp();

    return embed;
    }

    // Funcion para crear embed de categoria
    function createCategoryEmbed(category, count) {
    const categoryInfo = {
        ps5: { name: 'PlayStation 5', emoji: '🎮', color: 0x003087 },
        ps4: { name: 'PlayStation 4', emoji: '🎮', color: 0x003087 },
        ps3: { name: 'PlayStation 3', emoji: '🎮', color: 0x003087 },
        all: { name: 'All Games', emoji: '🏆', color: 0x9333EA }
    };

    const info = categoryInfo[category] || categoryInfo.all;

    return new EmbedBuilder()
        .setTitle(`${info.emoji} ${info.name} - Platinum Trophy Services`)
        .setDescription(`**${count}** games available for platinum trophy boosting!`)
        .setColor(info.color)
        .setImage('https://www.peachyplatinums.com/images/logo.webp')
        .setTimestamp();
    }

    // Funcion para crear embed de producto con descuento
    function createDealEmbed(product, baseUrl, discountPercent = 20) {
    const originalPrice = Math.round(product.price / (1 - discountPercent / 100));
    
    const embed = new EmbedBuilder()
        .setTitle(`🔥 DEAL: ${product.name}`)
        .setDescription(`**${discountPercent}% OFF** - Limited Time Offer!`)
        .setColor(0xFF6B6B)  // Rojo para ofertas
        .setThumbnail(`${baseUrl}/${product.image}`)
        .addFields(
        { name: '💰 Sale Price', value: `**£${product.price}.00**`, inline: true },
        { name: '~~Original~~', value: `~~£${originalPrice}.00~~`, inline: true },
        { name: '💎 You Save', value: `£${originalPrice - product.price}.00`, inline: true },
        { name: '🎯 Platform', value: product.category.toUpperCase(), inline: true }
        )
        .setFooter({ 
        text: 'PeachyPlatinums - Limited Time Deal!',
        iconURL: `${baseUrl}/images/logo.webp`
        })
        .setTimestamp();

    return embed;
    }

    // Publicar productos en un canal
    async function postProducts(channel, category = null, limit = 10) {
    const data = await fetchProducts(category, limit);
    
    if (!data || !data.products.length) {
        await channel.send('No products found or API error.');
        return;
    }

    // Enviar embed de categoria
    const categoryEmbed = createCategoryEmbed(category || 'all', data.count);
    await channel.send({ embeds: [categoryEmbed] });

    // Enviar productos en grupos de 5 para evitar rate limits
    const products = data.products;
    const chunks = [];
    for (let i = 0; i < products.length; i += 5) {
        chunks.push(products.slice(i, i + 5));
    }

    for (const chunk of chunks) {
        const embeds = chunk.map(p => createProductEmbed(p, data.baseUrl));
        await channel.send({ embeds });
        
        // Esperar 1 segundo entre grupos para evitar rate limits
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Enviar boton de visitar tienda
    const row = new ActionRowBuilder()
        .addComponents(
        new ButtonBuilder()
            .setLabel('Visit Store')
            .setURL(STORE_URL)
            .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
            .setLabel('Join Discord')
            .setURL('https://discord.gg/9ycQPSCdAZ')
            .setStyle(ButtonStyle.Link)
        );

    await channel.send({ 
        content: '**Ready to get your platinum trophies?** Visit our store or contact us!',
        components: [row]
    });

    console.log(`Posted ${products.length} products to channel`);
    }

    // Publicar ofertas en el canal de deals
    async function postDeals(channel, limit = 5) {
    const data = await fetchProducts(null, limit);
    
    if (!data || !data.products.length) {
        await channel.send('No deals found or API error.');
        return;
    }

    // Embed de header para ofertas
    const headerEmbed = new EmbedBuilder()
        .setTitle('SPECIAL DEALS - Limited Time Offers!')
        .setDescription('Get these platinum trophy services at discounted prices!')
        .setColor(0xFF6B6B)
        .setImage('https://www.peachyplatinums.com/images/logo.webp')
        .setTimestamp();

    await channel.send({ embeds: [headerEmbed] });

    // Enviar productos como ofertas
    for (const product of data.products) {
        const dealEmbed = createDealEmbed(product, data.baseUrl, 20);
        await channel.send({ embeds: [dealEmbed] });
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Boton de visitar tienda
    const row = new ActionRowBuilder()
        .addComponents(
        new ButtonBuilder()
            .setLabel('Shop All Deals')
            .setURL(STORE_URL)
            .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
            .setLabel('Join Discord')
            .setURL('https://discord.gg/9ycQPSCdAZ')
            .setStyle(ButtonStyle.Link)
        );

    await channel.send({ 
        content: '**Hurry! These deals wont last forever!**',
        components: [row]
    });

    console.log(`Posted ${data.products.length} deals to channel`);
    }

    // Publicar automaticamente en los canales configurados
    async function autoPostToChannels() {
    // Canal de productos
    const productsChannel = client.channels.cache.get(PRODUCTS_CHANNEL_ID);
    if (productsChannel) {
        console.log(`Posting products to #${productsChannel.name}`);
        await postProducts(productsChannel, null, 50);
    } else {
        console.log('Products channel not found');
    }

    // Canal de ofertas
    const dealsChannel = client.channels.cache.get(DEALS_CHANNEL_ID);
    if (dealsChannel) {
        console.log(`Posting deals to #${dealsChannel.name}`);
        await postDeals(dealsChannel, 5);
    } else {
        console.log('Deals channel not found');
    }
    }

    // Comandos del bot
    client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    
    const prefix = '!peachy';
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift()?.toLowerCase();

    switch (command) {
        case 'products':
        case 'games':
        const category = args[0] || null;
        const limit = parseInt(args[1]) || 10;
        await postProducts(message.channel, category, limit);
        break;

        case 'ps5':
        await postProducts(message.channel, 'ps5', parseInt(args[0]) || 10);
        break;

        case 'ps4':
        await postProducts(message.channel, 'ps4', parseInt(args[0]) || 10);
        break;

        case 'ps3':
        await postProducts(message.channel, 'ps3', parseInt(args[0]) || 10);
        break;

        case 'deals':
        await postDeals(message.channel, parseInt(args[0]) || 5);
        break;

        case 'post':
        // Publicar en los canales configurados
        await autoPostToChannels();
        await message.reply('Products and deals posted to configured channels!');
        break;

        case 'postproducts':
        // Publicar solo productos en el canal configurado
        const prodChannel = client.channels.cache.get(PRODUCTS_CHANNEL_ID);
        if (prodChannel) {
            await postProducts(prodChannel, args[0] || null, parseInt(args[1]) || 50);
            await message.reply(`Products posted to #${prodChannel.name}!`);
        }
        break;

        case 'postdeals':
        // Publicar solo ofertas en el canal configurado
        const dealChannel = client.channels.cache.get(DEALS_CHANNEL_ID);
        if (dealChannel) {
            await postDeals(dealChannel, parseInt(args[0]) || 5);
            await message.reply(`Deals posted to #${dealChannel.name}!`);
        }
        break;

        case 'help':
        const helpEmbed = new EmbedBuilder()
            .setTitle('PeachyPlatinums Bot Commands')
            .setColor(0x9333EA)
            .addFields(
            { name: '!peachy products [category] [limit]', value: 'Show products (category: ps5, ps4, ps3)' },
            { name: '!peachy ps5 [limit]', value: 'Show PS5 games' },
            { name: '!peachy ps4 [limit]', value: 'Show PS4 games' },
            { name: '!peachy ps3 [limit]', value: 'Show PS3 games' },
            { name: '!peachy deals [limit]', value: 'Show discounted products' },
            { name: '!peachy post', value: 'Post products AND deals to configured channels' },
            { name: '!peachy postproducts [category] [limit]', value: 'Post products to #games channel' },
            { name: '!peachy postdeals [limit]', value: 'Post deals to #deals channel' },
            { name: '!peachy help', value: 'Show this help message' }
            )
            .setFooter({ text: 'Default limit: 10 products, 5 deals' });
        
        await message.channel.send({ embeds: [helpEmbed] });
        break;

        default:
        await message.reply('Unknown command. Use `!peachy help` for available commands.');
    }
    });

    // Evento cuando el bot esta listo
    client.on('ready', async () => {
    console.log(`✅ Bot logged in as ${client.user.tag}`);
    console.log(`📡 Connected to ${client.guilds.cache.size} server(s)`);
    
    // Si hay un canal configurado, publicar productos al iniciar
    if (CHANNEL_ID) {
        const channel = client.channels.cache.get(CHANNEL_ID);
        if (channel) {
        console.log(`📢 Auto-posting to channel: ${channel.name}`);
        // Descomentar la siguiente linea para publicar automaticamente al iniciar
        // await postProducts(channel, null, 20);
        }
    }
    });

    // Manejar errores
    client.on('error', console.error);

    // Verificar token
    if (!DISCORD_TOKEN) {
    console.error('❌ DISCORD_BOT_TOKEN environment variable is required!');
    console.log('\nSetup instructions:');
    console.log('1. Go to https://discord.com/developers/applications');
    console.log('2. Create a new application');
    console.log('3. Go to Bot section and create a bot');
    console.log('4. Copy the token and set DISCORD_BOT_TOKEN env variable');
    console.log('5. Enable MESSAGE CONTENT INTENT in Bot settings');
    console.log('6. Invite bot to server with proper permissions');
    process.exit(1);
}

// Iniciar bot
client.login(DISCORD_TOKEN);
