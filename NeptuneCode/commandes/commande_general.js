/**
 * Commande qui répond pong quand on envoie ping
 * @param {any} message message de l'utilisateur
 */
function pong(message){
    let channel = message.channel; 
    // channel.bulkDelete(100); 
    channel.send("Ping c'est moi !");
 }

/**
 * Commande help
 * @param {any} message message de l'utilisateur
 */
 function help(message){
    // Message
    /*
    let helpEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Bot Nyx')
    .setDescription("Vous pourrez retrouver toutes les commandes du bots afin de pouvoir au mieux l'utiliser.\n")
    .setThumbnail('caca.png')
    .addFields(
        { name: '>> e! help', value: 'Demande la liste des commandes du bot.', inline: false }
    );
    */
    let messageHelp = "Vous pourrez retrouver toutes les commandes du bots afin de pouvoir au mieux l'utiliser.\nnyp! help : Demande la liste des commande du bot\nnyp! ping : répond pong\nnyp! paypal : Commande paypal";

    // Envoie en mp
    //message.author.send({ embeds: [helpEmbed] });
    message.author.send(messageHelp);
 }