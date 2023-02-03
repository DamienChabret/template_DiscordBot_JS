// --------------------------------- CLASSE BOT DISCORD ----------------------------------------- 
// Gère la connexion au client
// Controller qui execute les actions selon le message envoyé
// ----------------------------------------------------------------------------------------------

// --------------------------------------------------- VARIABLES 
// Récupères les fichiers commandes
var fs = require("fs");
var vm = require('vm');
vm.runInThisContext(fs.readFileSync(__dirname + "/commandes/commande_general.js"));
vm.runInThisContext(fs.readFileSync(__dirname + "/commandes/commande_paypal.js"));

// Récupère les variables dans les fichiers 
const { CLIENT_TOKEN } = require('./config.json');
const { Client, GatewayIntentBits, MessageEmbed } = require('discord.js');

// Instancie client
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
let prefixe = "nyp!"


// --------------------------------------------------- PROGRAMME PRINCIPAL
reponseMessage();
clientLogin();

// --------------------------------------------------- METHODES 
/**
 * Quand le client est prêt
 */
function clientLogin(){
   client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
   })
   client.login(CLIENT_TOKEN); // Connecte le bot avec le secret tokken
}

/**
 * Repond selon le message
 */
function reponseMessage(){
   client.on('messageCreate', (message) => {
      switch(message.content){
         // Commande ping
         case prefixe + " ping":
            pong(message);
            break;
         // Commande Paypal
         case prefixe + " paypal":
            paypalToMe(message);
            console.log("paypal");
            break;
         // Commande Help
         case prefixe + " help":
            help(message, MessageEmbed);
            break;
      }
   });
   
}