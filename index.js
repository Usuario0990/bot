const { Client, MessageEmbed, MessageAttachment } = require('discord.js'); 
const Discord = require("discord.js");
const client = new Discord.Client();
const Zeew = require("zeew");
const config = require('./config/bot.json');


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


client.on("guildMemberAdd", async (member) => { //cada que el bot registre que hay un nuevo mienbro realisara la sigiente funcion
    
    let guild = client.guilds.cache.get("863239099385118721")   
    let channel = client.channels.cache.get("868611544202743819");  
  
   
  if (guild != member.guild) {
    return console.log(`entro al grupo, ${member.user}`) // cada que se agrege un mienbro al grupo pondra el sigiente texto en la consola *puedes modificarlo*
  
  } else {
     let embed = new MessageEmbed() // se creara un embed que tendra lo sigiente  
   .setColor("GREEN") // el color del embed sera verde por defecto si quieres puedes modificarlo tansolo poniendo el nombre de el color en ingles: red,purple,etc tambien puedes poner un color de paleta #0000 *este es negro*
   .setAuthor(member.user.tag, member.user.displayAvatarURL()) // esta parte lo que hace es poner el nombre del usuario y imagen en la parte de arriba 
   .setImage('https://media.giphy.com/media/TKv4j0jA2IUfcLFCKl/giphy.gif') //el gif que quieras poner, yo te recuerdo que pongas uno de giphy 
   .setTitle(`Bienvenido a ${guild.name}`) // mensaje que pondra en el titulo puedes modificarlo , seria algo asi " bienvenido a discord ayuda" 
   .setDescription(`${member.user} Diviertete En El Servidor !`) // aqui es la parte de descripcion puedes modificarlo , es el mensaje que pondra en el embed puedes cambiarlo a tu gusto en este caso se veria asi "@usuarioqueentro diviertete en el servidor"
   .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024 })) // agarrara el url del mienbro en png en tamaño 1024 y lo pondra en la aprte superior
   .setFooter("haora Somos :", message.guild.memberCount) // puedes cambiarlo como gustes asta poner el id de que entro al grupo pero pues como dije las hare lo mas indentico a discord ayuda pero pues si quisiese poner el id de la persona solo cambialo a esto "Usuario: ' + member.user.id" si quisieras poner el tiempo de mensaje solo escribe debajo : .setTimestamp() *opcional*
  
   await channel.send(embed) // pondra el mensaje "embed" lo ya definimos que contiene esta arriba en el chnnel que pues tambien ya definimos arriba
  
  // asi acaba la parte de bienvenidas haora pasemos a despedidas aqui no explicare mucho porque es casi lo mismo solo cambiarias el gif y el canal de las despedidas y lo que tendra el embed ¯\_(?)_/¯
  }
  
  });
  client.on("guildMemberRemove", async (member) => {
    
    let guild = client.guilds.cache.get("863239099385118721")       
    let channel = client.channels.cache.get("868611623428976660"); 
  
   
  if (guild != member.guild) {
    return console.log(`Salio Del Grupo, ${member.user}`) // *puedes modificarlo*
  
  } else {
     let embed = new MessageEmbed()
   .setColor("GREEN")
   .setAuthor(member.user.tag, member.user.displayAvatarURL()) 
   .setImage('https://media.giphy.com/media/3og0IG0skAiznZQLde/giphy.gif')
   .setTitle(`${guild.name}`)
     /// puedes modificarlo
   .setDescription(`${member.user} , Te Extrañaremos`)
   /// puedes modificarlo
   .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024 }))
   .setFooter("haora Somos :", message.guild.memberCount)
  
   await channel.send(embed)
  
  } 

}); // aqui acaba el comando espero que te alla servido , le podrias agregar mas funciones pero yo las hice identicas a las del discord ayuda , espero te alla servido !


//////////////  Respuesta a mensajes //////////////









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