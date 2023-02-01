// Récupère les variables dans les bon fichiers 
const { CLIENT_TOKEN } = require('./config.json')
const { Client, GatewayIntentBits } = require('discord.js');

// Instancie client
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});

// Quand le bot est prêt  
client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
})
client.login(CLIENT_TOKEN); // Connecte le bot avec le secret tokken
// https://discordjs.guide/creating-your-bot/#using-config-json