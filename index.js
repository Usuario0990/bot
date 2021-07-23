const { Client, MessageEmbed, MessageAttachment } = require('discord.js'); 
const Discord = require("discord.js");
const client = new Discord.Client();
const Zeew = require("zeew");
const config = require('./config/bot.json');
const AntiSpam = require('discord-anti-spam')
const antiSpam = new AntiSpam({
/*
	El modulo que usaremos se llama discord-anti-spam link a npm https://www.npmjs.com/package/discord-anti-spam
*/


	warnThreshold: 3, //Cantidad de mensajes enviados seguidos que generarán una advertencia.

	kickThreshold: 5, //Cantidad de mensajes enviados seguidos que provocarán un kick.

	banThreshold: 7, //Cantidad de mensajes enviados seguidos que provocarán un ban.

	maxInterval: 2000, //Cantidad de tiempo milisegundos en el que los mensajes se consideran spam.

	maxDuplicatesInterval: 60000, //Cantidad de tiempo milisegundos en el que los mensajes duplicados se consideran spam.

	warnMessage: '{@user}, deja de enviar spam', //Mensaje que se enviará en el chat al advertir a un usuario.

	kickMessage: '**{user_tag}** ha sido expulsado por enviar spam', //Mensaje que se enviará en el chat al expulsar a un usuario.

	banMessage: '**{user_tag}** ha sido baneado por enviar spam', //Mensaje que se enviará en el chat al banear a un usuario.

	errorMessages: false, //Si los mensajes de error, cuando el bot no tiene suficientes permisos, deben enviarse o no
	
	maxDuplicatesWarning: 5, //Cantidad de mensajes duplicados que activan una advertencia.

	maxDuplicatesKick: 10, //Cantidad de mensajes duplicados que provocan un kick.

	maxDuplicatesBan: 15, //Cantidad de mensajes duplicados que provocan una prohibición.
	
	deleteMessagesAfterBanForPastDays: 1, //Cantidad de días en los que se eliminarán los mensajes antiguos. (1-7)
	
	exemptPermissions: ['ADMINISTRATOR', 'BAN_MEMBERS', 'KICK_MEMBERS'], //Omitir usuarios con al menos uno de estos permisos

	ignoreBots: true, //Si se ignoran los mensajes del bot

	verbose: true //Registros extendidos del módulo (recomendado)

})

//Pueden encontrar más propiedades en https://discord-anti-spam.js.org/global.html#format

/*
	Este modulo es muy fácil de usar, solo configurenlo a su gusto como vieron arriba y despues en el evento mensaje hacen lo siguiente.
*/


client.on('message', (message) => { //Su evento mensaje
	antiSpam.message(message) //Y esto seria todo
})



function presence(){
  client.user.setPresence({
    status:"online",
    activity: {
      name:"Bienvenido/a SUSCRIBETE al canal de Youtube",
      type:"YOUTUBER",
      url: "https://www.youtube.com/channel/UCP_CFZCBFqb1m3UUfhSfloA"
    }
  })
}

client.on('ready', () => {
  console.log(`Sesión iniciada como ${client.user.tag}!`);
  presence();
});


// niveles //




/////////////// Bienvenida ///////////////

client.on("guildMemberAdd", async (member) => {

  let wel = new Zeew.Bienvenida()
    .token(config.token_zeew)
    .estilo("classic")
    .avatar(member.user.displayAvatarURL({ format: "png" }))
    .fondo("https://media.discordapp.net/attachments/859594790176817152/860324645009752094/854066.png?width=757&height=448")
    .colorTit("#fff")
    .titulo("Bienvenido " + member.displayName)
    .colorDesc("#fff")
    .descripcion("Tenemos un nuevo integrante con nosotros")

  let img = await Zeew.WelcomeZeew(wel);
  let attachment = new MessageAttachment(img, "bienvenida.png")

  client.channels.resolve("816048634168606760").send(attachment);

  const channel = member.guild.channels.cache.find(ch => ch.name === 'bienvenida');
  
  if (!channel) return;

  channel.send(`Bienvenid@ al server ${member}! pasate por el canal de <#816048713478307902> para poder evitar posibles conflictos y mantener una buena comunidad, sin mas que decir esperamos que te la pases bien durante tu estadia en el server.`);

});

/////////////// Despedida ///////////////

client.on("guildMemberRemove", async (member) => {

  const channel = member.guild.channels.cache.find(ch => ch.name === 'despedida');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Adios ${member} esperamos verte de nuevo.`);

  let wel = new Zeew.Bienvenida()
    .token(config.token_zeew)
    .estilo("classic")
    .avatar(member.user.displayAvatarURL({ format: "png" }))
    .fondo("https://cdn.discordapp.com/attachments/832726533868879924/832735302694862878/29822.jpg")
    .colorTit("#fff")
    .titulo("Adíos " + member.displayName)
    .colorDesc("#fff")
    .descripcion("Esperamos verte pronto.")

  let img = await Zeew.WelcomeZeew(wel);
  let attachment = new MessageAttachment(img, "despedida.png");

  client.channels.resolve("816052331744591902").send(attachment);

});


//////////////  Respuesta a mensajes //////////////

/////////////// Anuncio Embed //////////////////

client.on('message', message => {

  if (message.content === 'El YorWTF just posted a video!') {

    const embed = new MessageEmbed()
      .setTitle('¡Nuevo video del canal!')
      .setColor('#00D7FC')
      .setDescription('**Mas contenido para tu disfrute(＾▽＾)** \n\n\ **Github:** https://github.com/jorgelu15/tioanime \n\n\ **Instagram:** https://www.instagram.com/El_yorWTF/ \n\n\ **Facebook:** https://www.facebook.com/profile.php?id=100067788664356 ')

    message.channel.send(embed);
  }
});

/////////////// Anuncio Embed //////////////////

//////////////  Respuesta a mensajes //////////////

client.on('message', msg => {
  if (msg.content === 'Hola') {
    msg.channel.send(`Hola bienvenido/a **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'hola') {
    msg.channel.send(`Hola bienvenido/a **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'como estas ') {
    msg.channel.send(` Bien y tu  **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'bien ') {
    msg.channel.send(`exelente me alegro por ti  **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'jejeje') {
    msg.channel.send(`jejeje **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'Que tal') {
    msg.channel.send(`Hola COMO ESTAS? **${msg.author.username}**`);
  }
});



client.on('message', msg => {
    if (msg.content === 'Genial') {
      msg.channel.send(`Genial me alegro **${msg.author.username}**.`);
  }
});

client.on('message', msg => {
    if (msg.content === 'Wuenas') {
      msg.channel.send(`Hola **${msg.author.username}** bienvenido/a de vuelta.`);
  }
});

client.on('message', msg => {
    if (msg.content === 'wuenas') {
      msg.channel.send(`Hola **${msg.author.username}** bienvenido/a de vuelta.`);
  }
});

client.on('message', msg => {
  if (msg.author.bot) return;
    if (msg.content === 'Alv') {
      msg.channel.send('Alv');
  }
});

client.on('message', msg => {
  if (msg.author.bot) return;
    if (msg.content === 'XD') {
      msg.channel.send('XD');
  }
});

client.on('message', msg => {
  if (msg.author.bot) return;
    if (msg.content === 'alv') {
      msg.channel.send('Alv');
  }
});

client.on('message', msg => {
  if (msg.author.bot) return;
    if (msg.content === 'xd') {
      msg.channel.send('XD');
  }
});

client.on('message', msg => {
    if (msg.content === 'OwO') {
      msg.channel.send('UwU');
  }
});

client.on('message', msg => {
    if (msg.content === ' he vuelto') {
      msg.channel.send(`Genial! bienvenido de vuelta **${msg.author.username}**`);
  }
});

client.on('message', msg => {
    if (msg.content === 'amo este bot') {
      msg.channel.send(`Y yo a ti **${msg.author.username}** :blush:`);
  }
});

client.on('message', msg => {
    if (msg.content === 'Amo a este bot') {
      msg.channel.send(`Y yo a ti **${msg.author.username}** :blush:`);
  }
});

client.on('message', msg => {
    if (msg.content === 'Buenas') {
      msg.channel.send(`Hola **${msg.author.username}** bienvenido/a de vuelta.`);
  }
});

client.on('message', msg => {
    if (msg.content === 'Buenas noches ') {
      msg.channel.send(` Buenas noches, Que la pases bien **${msg.author.username}**`);
  }
});

client.on('message', msg => {
    if (msg.content === 'me retiro') {
      msg.channel.send(`Que la pases bien **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'bot de la mrd xd') {
    msg.channel.send(`La tuya por siacaso  **${msg.author.username}**`);
}
});

client.on('message', msg => {
  if (msg.content === 'callese buen freco') {
    msg.channel.send(`freca tu abuela  **${msg.author.username}**`);
}
});

client.on('message', msg => {
    if (msg.content === 'Buenas noches') {
      msg.channel.send(`Que la pases bien **${msg.author.username}**`);
  }
});

client.on('message', msg => {
    if (msg.content === 'buenas noches') {
      msg.channel.send(`Que la pases bien **${msg.author.username}**`);
  }
});

client.on('message', msg => {
    if (msg.content === 'buenas') {
      msg.channel.send(`Hola **${msg.author.username}** bienvenido/a de vuelta.`);
  }
});

client.on('message', msg => {
    if (msg.content === 'Esta vez no puedo decir mi frase típica XD') {
      msg.channel.send('Jaja sep no tienes tanto tiempo desde la ultima vez, que usaste este canal XD');
  }
});


client.on('message', msg => {
    if (msg.content === '@STRICKS que hora es') {
      msg.channel.send('no tengo cara de reloj para saber la hora XD');
  }
});


///////////// Enviar el avatar al server ///////////////

// Escucha de nuevos mensajes 
client.on('message', message => {
  if (message.content === 'Cual es mi avatar') {
    // Envio de la URL
    message.reply(message.author.displayAvatarURL({format: 'jpg'}));
  }
});

// Escucha de nuevos mensajes 
client.on('message', message => {
  if (message.content === 'cual es mi avatar') {
    // Envio de la URL
    message.reply(message.author.displayAvatarURL({format: 'jpg'}));
  }
});

// Abrebiacion 
// Escucha de nuevos mensajes 
client.on('message', message => {
  if (message.content === '!v') {
    // Envio de la URL
    message.reply(message.author.displayAvatarURL({format: 'jpg'}));
  }
});



/////////////// Ban ///////////////


/////////////// Mensajes Embed ///////////////




client.on('message', message => {

  if (message.content === '!status-server') {

    const embed = new MessageEmbed()
      .setTitle('Estado del sevidor')
      .setColor('#00D7FC')
      .setImage('https://media.tenor.com/images/648398bbc2ebb992f8f9b277e48aa2c0/tenor.gif')
      .setDescription('(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});







/////////////// Mensajes Embed ///////////////

////////////// Lenguajes de programación //////////////

client.on('message', msg => {
  if (msg.content.include === 'php') {
    msg.channel.send(`**${msg.author.username}** Documentación de PHP https://www.php.net/`);
  }
});

/////////////// SFW ///////////////

client.login(config.token_bot);