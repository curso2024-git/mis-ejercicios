
//import gTTS from "gtts";
//import player from "play-sound";

const gTTS = require('gtts');   //text to speech - conversor de texto a mp3
const player = require('play-sound')(opts = {});   //lector de fichero

function speechText(speech, languaje = 'es') {

    const gtts = new gTTS(speech, language);    // convierte al lenguaje indicado
    const fileName = 'speech.mp3';

    gtts.save(fileName, function (err, result) {
        if (err) {
            throw new Error(err);
        } else {
            console.log("Text to speech converted");
            player.play(fileName, function (err) {  //play reproduce el fichero
                if (err) throw err;
            })

        }

    });



}
