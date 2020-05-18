const functions = require('firebase-functions');


exports.web = functions.https.onRequest((request, response) => {

    response.send("Hola Carlos has conseguido configurar tu primera Cloud Funtion ... enhorabuena!");
    console.log('Configurado correctamente');
});