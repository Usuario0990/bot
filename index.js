const { Client, MessageEmbed, MessageAttachment } = require('discord.js'); 
const Discord = require("discord.js");
const client = new Discord.Client();
const Zeew = require("zeew");
const config = require('./config/bot.json');


function presence(){
  client.user.setPresence({
    status:"online",
    activity: {
      name:"Creando un bot desde 0",
      type:"STREAMING",
      url: "https://www.youtube.com/channel/UCP_CFZCBFqb1m3UUfhSfloA"
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

  client.channels.resolve("867822514095652914").send(attachment);

  const channel = member.guild.channels.cache.find(ch => ch.name === 'bienvenida');
  
  if (!channel) return;

  channel.send(`Bienvenid@ al server ${member}! pasate por el canal de <#816048713478307902> para poder evitar posibles conflictos y mantener una buena comunidad, sin mas que decir esperamos que te la pases bien durante tu estadia en el server..`);

});

/////////////// Despedida ///////////////

client.on("guildMemberRemove", async (member) => {

  let wel = new Zeew.Bienvenida()
    .token(config.token_zeew)
    .estilo("classic")
    .avatar(member.user.displayAvatarURL({ format: "png" }))
    .fondo("https://cdn.discordapp.com/attachments/832726533868879924/832728029406429294/One-Piece-Anime-HD-Wallpapers-Free-Download-Wallpaperxyz.com-1_1.jpg")
    .colorTit("#fff")
    .titulo("Adios " + member.displayName)
    .colorDesc("#fff")
    .descripcion("Adios coder :(")

  let img = await Zeew.WelcomeZeew(wel);
  let attachment = new MessageAttachment(img, "bienvenida.png")

  client.channels.resolve("867822344809873449").send(attachment);

  const channel = member.guild.channels.cache.find(ch => ch.name === 'despedida');
  
  if (!channel) return;

  channel.send(`Adios ${member}`);

});

//////////////  Respuesta a mensajes //////////////



//Buenas chicos como estáis? Hoy os traigo un comando sencillito para ver si nuestro servidor tiene baneos o no, y si si, que nos de su usurario e id

module.exports.run = async(client, message, args) => { //exportamos
    const Discord = require('discord.js') //llamamos a Discord
    const { splitMessage } = require('discord.js') //llamamos a splitMessage que lo usaremos más tarde, ustedes pueden usar const { Discord, splitMessage } = require('discord.js'), para simplificar
    
    let perms = message.guild.me.hasPermission("BAN_MEMBERS") //comprobamos que el bot tenga permisos
    if (!perms) return message.reply("<:Cross:746056185832013946> | No tengo permisos").then(m => m.delete({ timeout: 6000 })); //si no tiene, que retorne
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('<:Cross:746056185832013946> | Necesitas el permiso `BAN_MEMBERS` Para ver la lista de baneos.').then(m => m.delete({ timeout: 6000 })); //comprobamos que el usuario tenga el permiso de banear miembros para ejecutar el comando, usteder ponganle el que quieran recomiendo MANAGE_MESSAGES

    var blist = await message.guild.fetchBans(); //buscamos a los usuarios baneados
    if(blist.size <= 0) return message.channel.send("<:Cross:746056185832013946> | No hay baneos en el servidor.") //si el número de baneos es menor o igual a 0 que retorne
    var bansID = blist.map(b => '**'+b.user.username +'**: '+ b.user.id).join('\n') //aquí es donde definimos para que nos de el nombre y id de los usuarios baneados
    const description = '**📌 Usuario y ID:** \n'+bansID //defino description, yo lo he hecho para poder hacer el splitMessage,  que es que si la cantidad de caracteres en la descripción supera al limite de discord, continue enviando el resto de baneos en otro mensage

    let embed = new Discord.MessageEmbed() //definimos el embed
    .setColor("RANDOM")
    .setTitle('<:banhammer:779256190370447371> | Banlist de **'+message.guild.name+'**')
    .setDescription(description)
    .setFooter('Pedido por: '+message.author.username, message.author.displayAvatarURL())
    .setTimestamp()
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 1024}))

    const splitDescription = splitMessage(description, {
        maxLength: 2048,
        char: "\n",
        prepend: "",
        append: ""
    }); //aquI decimos que si la description que es la que habíamos definido antes, supera el límite de 2048 se envíe a mensaje
  
    splitDescription.forEach(async (m) => {
        embed.setDescription(m);
        message.channel.send(embed).then(m => m.delete({ timeout: 20000 })) //enviamos el mensaje y pones de tiempo 20s
    });
//si os ha gustado este pequeño y sencillo comando, agradecería que le dieran me gusta, y si veo que les gusta mucho seguiré subiendo más comandos por el estilo =^^=
}





/////////////// Anuncio Embed //////////////////

client.on('message', message => {

  if (message.content === 'YorWTF!') {

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
    msg.channel.send(`Hola **${msg.author.username}** bienvenido/a `);
  }
});

client.on('message', msg => {
  if (msg.content === 'hola') {
    msg.channel.send(`Hola **${msg.author.username}** bienvenido/a`);
  }
});


                      // Comandos//

// heroku git:clone -a botd00

// bienvenida




//ban

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member
          .ban({
            reason: '¡Eran malos!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Se a banneado con éxito a ${user.tag}`);
          })
          .catch(err => {
            message.reply('No puedo bannear al miembro');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("¡Esa usuaria no está en este gremio!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("¡No mencionaste al usuario para Bannear!");
    }
  }
});


//palabras proividas




// algo nuevo



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



/////////////// server ///////////////




/////////////// Memes ///////////////


client.on("message", (message) => {
  if (message.content === "!meme1") {
    const embed = new MessageEmbed()
      .setTitle("")
      .setColor("#00D7FC")
      .setImage(
        "https://images3.memedroid.com/images/UPLOADED315/5dd03138e4f86.jpeg"
      )
          .setDescription("")
          .setTimestamp()
      .setAuthor(`${client.user.username}`)
    message.channel.send(embed);
  }
});




client.on("message", (message) => {
  if (message.content === "!meme2") {
    const embed = new MessageEmbed()
      .setTitle("")
      .setColor("#00D7FC")
      .setImage(
        "https://pm1.narvii.com/6708/dc654ffbab5b1c60fa733196a65665a7aef79788_hq.jpg"
      )
          .setDescription("")
          .setTimestamp()
      .setAuthor(`${client.user.username}`)
    message.channel.send(embed);
  }
});


client.on("message", (message) => {
  if (message.content === "!meme3") {
    const embed = new MessageEmbed()
      .setTitle("")
      .setColor("#00D7FC")
      .setImage(
        "http://memeschistosos.net/wp-content/uploads/2016/03/memes-de-naruto20.jpg"
      )
          .setDescription("")
          .setTimestamp()
      .setAuthor(`${client.user.username}`)
    message.channel.send(embed);
  }
});

client.on("message", (message) => {
  if (message.content === "!meme4") {
    const embed = new MessageEmbed()
      .setTitle("")
      .setColor("#00D7FC")
      .setImage(
        "https://i.pinimg.com/originals/20/c2/7f/20c27f0a77ee484b0df539ed5a750246.jpg"
      )
          .setDescription("")
          .setTimestamp()
      .setAuthor(`${client.user.username}`)
    message.channel.send(embed);
  }
});

client.on("message", (message) => {
  if (message.content === "!meme5") {
    const embed = new MessageEmbed()
      .setTitle("")
      .setColor("#00D7FC")
      .setImage(
        "https://media.discordapp.net/attachments/863239100059615253/871227422463365200/Screenshot_20210104-143026.png?width=252&height=448")
          .setDescription("")
          .setTimestamp()
      .setAuthor(`${client.user.username}`)
    message.channel.send(embed);
  }
});


client.on("message", (message) => {
  if (message.content === "!meme6") {
    const embed = new MessageEmbed()
      .setTitle("")
      .setColor("#00D7FC")
      .setImage(
        "https://media.discordapp.net/attachments/863239100059615253/871229994054062080/images9.jpg")
          .setDescription("")
          .setTimestamp()
      .setAuthor(`${client.user.username}`)
    message.channel.send(embed);
  }
});

client.on("message", (message) => {
  if (message.content === "!list") {
    const embed = new MessageEmbed()
      .setTitle("Lista de comandos de Striks")
      .setColor("#00D7FC")
      .setDescription("**Lista de Memes:** ^:point_down:^ \n\n\ !mem1 \n\n\ !meme2 \n\n\ !meme3 \n\n\ !meme4 \n\n\ **Mensajes dinamicos:** ^proximamente^");

    message.channel.send(embed);
  }
});

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




/////////////// spam ///////////////



////////////// Lenguajes de programación //////////////

client.on('message', msg => {
  if (msg.content.include === 'php') {
    msg.channel.send(`**${msg.author.username}** Documentación de PHP https://www.php.net/`);
  }
});

/////////////// SFW ///////////////

client.login(config.token_bot);