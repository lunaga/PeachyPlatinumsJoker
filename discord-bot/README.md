# PeachyPlatinums Discord Bot

Bot de Discord para mostrar productos de la tienda PeachyPlatinums.

## Configuracion

### 1. Crear Bot en Discord Developer Portal

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Click en "New Application" y dale un nombre (ej: "PeachyPlatinums Bot")
3. Ve a la seccion **Bot** en el menu lateral
4. Click en "Add Bot"
5. En **Privileged Gateway Intents**, activa:
   - MESSAGE CONTENT INTENT
6. Click en "Reset Token" y copia el token

### 2. Invitar Bot al Servidor

1. Ve a la seccion **OAuth2 > URL Generator**
2. En **Scopes**, selecciona: `bot`, `applications.commands`
3. En **Bot Permissions**, selecciona:
   - Send Messages
   - Send Messages in Threads
   - Embed Links
   - Attach Files
   - Read Message History
   - Use External Emojis
4. Copia la URL generada y abrela en el navegador
5. Selecciona tu servidor y autoriza el bot

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la carpeta `discord-bot`:

```env
DISCORD_BOT_TOKEN=tu_token_aqui
DISCORD_CHANNEL_ID=id_del_canal_opcional
API_URL=https://www.peachyplatinums.com/api/products
```

Para obtener el ID del canal:
1. En Discord, activa "Developer Mode" en Configuracion > Avanzado
2. Click derecho en el canal y selecciona "Copy Channel ID"

### 4. Instalar y Ejecutar

```bash
cd discord-bot
npm install
npm start
```

## Comandos del Bot

| Comando | Descripcion |
|---------|-------------|
| `!peachy products [categoria] [limite]` | Muestra productos (categoria: ps5, ps4, ps3) |
| `!peachy ps5 [limite]` | Muestra juegos de PS5 |
| `!peachy ps4 [limite]` | Muestra juegos de PS4 |
| `!peachy ps3 [limite]` | Muestra juegos de PS3 |
| `!peachy help` | Muestra ayuda |

### Ejemplos

```
!peachy products        # Muestra 10 productos de todas las categorias
!peachy products ps5 5  # Muestra 5 productos de PS5
!peachy ps4 15          # Muestra 15 productos de PS4
```

## Deploy en Railway/Render

### Railway

1. Crea cuenta en [railway.app](https://railway.app)
2. Conecta tu repositorio de GitHub
3. Agrega las variables de entorno en la configuracion
4. El bot se ejecutara automaticamente

### Render

1. Crea cuenta en [render.com](https://render.com)
2. Crea un "Background Worker"
3. Conecta tu repositorio
4. Configura:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Agrega las variables de entorno

## API Endpoints

El proyecto incluye una API REST en `/api/products`:

```
GET /api/products                    # Todos los productos
GET /api/products?category=ps5       # Solo PS5
GET /api/products?limit=20           # Limitar resultados
GET /api/products?category=ps4&limit=10
```

### Respuesta

```json
{
  "success": true,
  "count": 50,
  "products": [
    {
      "id": "1",
      "name": "Final Fantasy VII Remake PS5",
      "price": 181,
      "category": "ps5",
      "image": "images/games/1.webp"
    }
  ],
  "baseUrl": "https://www.peachyplatinums.com"
}
```
