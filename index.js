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


client.on("message", (message) => {
  if (message.content === "!link") {
    const embed = new MessageEmbed()
      .setTitle("Link de invitacion de Striks")
      .setColor("#00D7FC")
      .setDescription("https://discord.com/oauth2/authorize?client_id=863245184791609404&scope=bot&permissions=8");

    message.channel.send(embed);
  }
});


////// elimina mensjes


exports.run = async (client, message, args) => {

    if (message.content === "!piedra") {

  // Condicionaremos que si el usuario no manda ningun argumento. O sea solo escribe el comando. *
  if(!args[0]) return message.channel.send("Opciones: `piedra`, `papel` o `tijera`").then(m => m.delete({timeout: 10000})) //El .then() es opcional, yo siempre lo agrego porque me gusta.
  
  // Haremos una declaracion en matriz con las diferentes opciones ya dichas.
  let Options = ["piedra", "papel", "tijera"]
  // Condicionamos la matriz con el metodo .includes() que nos va a determinar si lo que mandamos esta dentro de la matriz, si es si no devolvera true sino false.
  if(!Options.includes(args[0].toLowerCase())) return message.channel.send(":x: Opcion incorrecta!")
  
  //Ahora empezamos a obtener las cosas de la matriz y condicionamos..
  
  // Si args[0] es igual a "piedra" (if(args[0] == <piedra/papel/tijera>) {})
  if(args[0] == "piedra") {

    // Creamos una condicional de matriz que tendra las respuestas.
    let random1 = ["He ganado! Elegi papel. El papel cubre a la roca.", // Perdedor -jeje-
                   "Has ganado! Elegi tijera. Las tijeras no pueden cortar rocas.",  // Ganaste :D
                   "Empate. Piedra vs piedra, gana... La piedra!"] // Empate ._.

    // Enviamos el mensaje aplicando Math.random() que nos dara una respuesta aleatoria de la matriz.
    message.reply(" "+random1[Math.floor(Math.random() * random1.length)]+"")
    
    // Si no es "piedra", pero es "papel"
  } else if(args[0] == "papel") {

    let random2 = ["He ganado! Elegi tijera. Las tijeras cortan el papel.", // Perdedor -jeje-
                   "Has ganado! Elegi piedra. El papel cubre a la roca.",  // Ganaste :D
                   "Empate."] // Empate ._.

    message.reply(" "+random2[Math.floor(Math.random() * random2.length)]+"")
    
  } else if(args[0] == "tijera") {} //Hagan este ultimo ustedes, no les voy a hacer el code al 100% xd
  
}

exports.help = {
  comando: 'rps',
  ejemplo: ["<prefix>rps <papel/piedra/tijera>"]
}

}
/*
Seguramente no les ha servido, pero si les sirvio de algo dejenle un like ;)

Obviamente, antes de nada, quiero decir algo MUY IMPORTANTE... Crater te amo! <3

Es todo, adios!
*/


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