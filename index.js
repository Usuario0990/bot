const { Client, MessageEmbed, MessageAttachment } = require('discord.js'); 
const Discord = require("discord.js");
const client = new Discord.Client();
const Zeew = require("zeew");
const config = require('./config/bot.json');

function presence(){
  client.user.setPresence({
    status:"online",
    activity: {
      name:"Bienvenido/a seas a estos lares",
      type:"STREAMING",
      url: "https://www.twitch.tv/usuario099004"
    }
  })
}

client.on('ready', () => {
  console.log(`Sesión iniciada como ${client.user.tag}!`);
  presence();
});

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
    .descripcion("Tenemos un nuevo coder con nosotros")

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
  if (msg.content === 'Wenas') {
    msg.channel.send(`Hola bienvenido/a **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'wenas') {
    msg.channel.send(`Hola bienvenido/a **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'Gracias Rias') {
    msg.channel.send(`De nada **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'gracias rias') {
    msg.channel.send(`De nada **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'grasias rias') {
    msg.channel.send(`De nada **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'Grasias') {
    msg.channel.send(`De nada **${msg.author.username}**`);
  }
});

client.on('message', msg => {
  if (msg.content === 'Hola') {
    msg.channel.send(`Hola **${msg.author.username}** como ¿Estas hoy?`);
  }
});

client.on('message', msg => {
  if (msg.content === 'hola') {
    msg.channel.send(`Hola **${msg.author.username}** como ¿Estas hoy?`);
  }
});

client.on('message', msg => {
    if (msg.content === 'Bastante bien') {
      msg.channel.send(`Genial! me alegro **${msg.author.username}**.`);
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
    if (msg.content === 'xD') {
      msg.channel.send('XD');
  }
});

client.on('message', msg => {
    if (msg.content === 'OwO') {
      msg.channel.send('UwU');
  }
});

client.on('message', msg => {
    if (msg.content === 'Por fin he vuelto') {
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
    if (msg.content === 'Buenas noches por hoy me retiro') {
      msg.channel.send(`Que la pases bien **${msg.author.username}**`);
  }
});

client.on('message', msg => {
    if (msg.content === 'buenas noches por hoy me retiro') {
      msg.channel.send(`Que la pases bien **${msg.author.username}**`);
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
    if (msg.content === 'Check update') {
      msg.channel.send(`:white_check_mark:`);
  }
});

client.on('message', msg => {
    if (msg.content === 'check update') {
      msg.channel.send(`:white_check_mark:`);
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

// Abrebiacion 
// Escucha de nuevos mensajes 
client.on('message', message => {
  if (message.content === 'v') {
    // Envio de la URL
    message.reply(message.author.displayAvatarURL({format: 'jpg'}));
  }
});

client.on('message', message => {

  if (message.content === 'set.neko') {

    const embed = new MessageEmbed()
      .setTitle('Monogatari neko')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/9KBexNlpIZ4XkwuzHI/giphy.gif')
      .setDescription('Prueba de shiro(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});

//////////////  Respuesta a mensajes //////////////

///////////// Enviar el avatar al server ///////////////

/////////////// SFW ///////////////

/////////////// Mensajes Embed ///////////////

client.on('message', message => {

  if (message.content === 'set.neko') {

    const embed = new MessageEmbed()
      .setTitle('Monogatari neko')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/9KBexNlpIZ4XkwuzHI/giphy.gif')
      .setDescription('(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});

client.on('message', message => {

  if (message.content === 'set.kiss') {

    const embed = new MessageEmbed()
      .setTitle('Toradora Kiss')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/EhzVCBthlrRxPqGXRy/giphy.gif')
      .setDescription('(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});

client.on('message', message => {

  if (message.content === 'set.slap') {

    const embed = new MessageEmbed()
      .setTitle('Eromanga Sensei slap')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/JEd9BMo7ixvmVIsWJF/giphy.gif')
      .setDescription('(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});

client.on('message', message => {

  if (message.content === 'set.wink') {

    const embed = new MessageEmbed()
      .setTitle('princess connect re dive wink')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/DPype2bGDAjWkxPprM/giphy.gif')
      .setDescription('(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});

client.on('message', message => {

  if (message.content === 'set.run') {

    const embed = new MessageEmbed()
      .setTitle('Hunter x Hunter run')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/ePG7LU78fFrWGCn4s5/giphy.gif')
      .setDescription('(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});

client.on('message', message => {

  if (message.content === 'set.dance') {

    const embed = new MessageEmbed()
      .setTitle('Another dance')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/IylSJZFrT5IHReCZ3c/giphy.gif')
      .setDescription('(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});

client.on('message', message => {

  if (message.content === 'set.hug') {

    const embed = new MessageEmbed()
      .setTitle('Kyoukai no kanata hug')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/Du2REnqhImbTPOvTNZ/giphy.gif')
      .setDescription('(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});

client.on('message', message => {

  if (message.content === 'set.cry') {

    const embed = new MessageEmbed()
      .setTitle('Violet evergarden cry')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/CeZDh2tU4EPi7lc5IG/giphy.gif')
      .setDescription('(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});

client.on('message', message => {

  if (message.content === 'set.punch') {

    const embed = new MessageEmbed()
      .setTitle('Toradora punch')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/tbWv4ChfCDJXOz4i1w/giphy.gif')
      .setDescription('(＾▽＾)')
      .addField('Servidor', message.guild.name, true)
      .addField('Miembros', message.guild.memberCount, true);

    message.channel.send(embed);
  }
});

client.on('message', message => {

  if (message.content === 'set.wasted') {

    const embed = new MessageEmbed()
      .setTitle('Love live wasted')
      .setColor('#00D7FC')
      .setImage('https://media.giphy.com/media/SpVYVPQVn9rQSdTdT4/giphy.gif')
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