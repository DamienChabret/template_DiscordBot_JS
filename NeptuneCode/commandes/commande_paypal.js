/**
 * 
 * @param {Message de l'utilisateur} message 
 */
function paypalToMe(message){
    let channel = message.channel; 
    // channel.bulkDelete(100); 
    channel.send("Paypal c'est moi !");
    superPaypal();
 }