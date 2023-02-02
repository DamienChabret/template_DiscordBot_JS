/**
 * test
 * @param {message de l'utilisateur} message 
 */
function pong(message){
    let channel = message.channel; 
    // channel.bulkDelete(100); 
    channel.send("Ping c'est moi !");
 }