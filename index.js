// Discord
const discord = require("discord.js")
const client = new discord.Client();

// Config
const config = require("./config.json")

// Once Ready
client.on("ready", async () => {
    console.log(`Oh bot is ready, it can be used now | ${client.guilds.cache.size} Servers | ${client.channels.cache.size} Channels | ${client.users.cache.size} Users`)
});

// Logging in
client.login(config.client.token)
