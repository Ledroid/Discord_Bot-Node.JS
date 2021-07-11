// Discord
const discord = require("discord.js")
const client = new discord.Client();

// Config
const config = require("./config.json")

// Once Ready
client.on("ready", async () => {
    console.log(`Oh bot is ready, it can be used now`)
});

// Logging in
client.login(config.client.token)