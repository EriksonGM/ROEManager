/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const { Client, Attachment, Collection } = require('discord.js');
const Tesseract = require('tesseract.js');
//const request = require('request');
const fs = require('fs');
// Create an instance of a Discord client
const client = new Client();

const config = require('./config');
const core = require('./core');
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Funcionando!');
});
/*
// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  } else if (message.content === 'quien') {
    message.reply(message.author.avatarURL);
  } else if (message.content === 'torneo') {
    try {
      //var foto = message;
      console.log(message.attachments._keyArray[message.id]);

    } catch (error) {
      console.log(error);
      message.channel.send('Lo siento, no fue posible procesar su foto');
    }
  }
});
*/

client.on('message', async function (message) {
  var cmds = message.content.split(' ');
  try {
    switch (cmds[0]) {
      case 'ping':
        message.channel.send('pong');
        console.log()
        break;

      case 'quien':
        message.reply(message.author.avatarURL);
        break;

      case 'teste':
        message.channel.send('Testando la aplicacion');    
        message.channel.send('Teste realizado con exito');
        break;

      case 'torneo':
        message.channel.send('Procesando puntuacion');
      
        message.attachments.forEach(async (e)=>{
          console.log(`${e.id} - ${e.filename} - ${e.url} ${e.width}x${e.height}`);
        });


        message.channel.send('Puntuacion procesada');
        break;

      default:
        break;
    }

  } catch (error) {
    message.channel.send('A ocurrido un error, me muerooooooo');
  }
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bienvenido a ROE - SOMOS, ${member} que la pases bien.`);
});


// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(config.botToken);