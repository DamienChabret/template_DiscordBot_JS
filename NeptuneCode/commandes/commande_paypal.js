/**
 * Commande paypal qui renvoie un message quand on écrit "nyp paypal"
 * @param {Message de l'utilisateur} message 
 */
function paypalToMe(message){
    let channel = message.channel; 
    // channel.bulkDelete(100); 
    channel.send("Paypal c'est moi !");
 }

<<<<<<< HEAD
 function linkPaypal(){
=======

 function testPaypal(){
    let urlAPI = "https://api-m.paypal.com";
    let acessTokenPyapal = "Access-Token";
    let test = `https://api-m.sandbox.paypal.com/v1/invoicing/invoices?page=3&page_size=4&total_count_required=true \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <${acessTokenPyapal}>"`;
>>>>>>> edc9faf2867a15858b4a20038e9914714c0437a0
    
 }