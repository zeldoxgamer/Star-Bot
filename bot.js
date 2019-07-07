 const Discord = require('discord.js');
 const moment = require("moment");  
 const fs = require("fs");      
 const dateFormat = require('dateformat');
 const client = new Discord.Client(); 
 const Canvas = require("canvas"); 
 const prefix = "#";
 const token = 'BOT_TOKEN'; 
 const version = "1.1.2";
       


client.on('message', message => {
        if (message.content.startsWith(`${prefix}new`)) {     /// Me Codes 
        const reason = message.content.split(" ").slice(1).join(" ");     /// Me Codes
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`يجب انشاء رتبة بإٍسم : \`Support Team\` وتعطيها للبوت لكي يستطيع التعديل والانشاء `);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// Me Codes
         var current;
         current++;
var name = `ticket-${current}`;
message.guild.createChannel(name, "text").then(c => {
         current =1 ;

            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
        message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.id}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
               .addField(`Hey ${message.author.username}!`, `**تم فتح تذكرة الرجاء انتظار الى حين يأتي مشرف ويقوم بلرد عليك**`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }



     client.on('ready', () => {
     client.user.setActivity(`${prefix}help | vr: ${version}`,{type: 'Streaming'});

});  
       
 client.on('message', message => {  
	if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
	if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
		if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });



client.on('message', message => {
    if(message.content.startsWith(prefix +"server")){ // الامر
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
    if(!message.channel.guild) return message.reply(' ');
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 Server ID:**", message.guild.id,true)
    .addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
    .addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
    .addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
    .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
    .addField("**🌍 Others **" , message.guild.region,true)
    .addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
    .setColor('#000000')
    message.channel.sendEmbed(embed)
     
    }
    });

   

 
 
     



client.on('ready', () => {

  console.log('|===================================|');

  console.log(`|  Users Size ${client.users.size}  |`);

  console.log(`| Guilds Size ${client.guilds.size} |`);

  console.log(`|===================================|`);

  console.log(`| Created By <@429972030092476437> |`);

  console.log(`|===================================|`);

  console.log(`|       Star bot Log By You !       |`);

  console.log(`|===================================|`);

}); 

  client.on('message', message => {
 
    if (message.content === `${prefix}closeroom`) {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
if (message.content === `${prefix}openroom`) {
    if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }
 
 
 
});

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + '-role' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == `${prefix}list-roles`){
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

 client.on('message', message => { 

           if (message.content.startsWith(prefix + "id")) {

     var args = message.content.split(" ").slice(1);

     let user = message.mentions.users.first();

     var men = message.mentions.users.first();

        var heg;

        if(men) {

            heg = men

        } else {

            heg = message.author

        }

      var mentionned = message.mentions.members.first();

         var h;

        if(mentionned) {

            h = mentionned

        } else {

            h = message.member

        }

               moment.locale('ar-TN');

      var id = new  Discord.RichEmbed()

      .setAuthor(message.author.username, message.author.avatarURL) 

    .setColor("#707070")

    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 

    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               

    .setFooter(`Probot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 

    .setThumbnail(heg.avatarURL);

    message.channel.send(id)

}       }); 

 client.on('message', omar => {

if(omar.content.split(' ')[0] == prefix + 'dac') {  

if (!omar.channel.guild) return;

if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return;

if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply(`**I D'ont Have Permission For That !`);

omar.guild.channels.forEach(m => {

m.delete();

});

}// TopBot//

if(omar.content.split(' ')[0] == prefix + 'dar') { 

if (!omar.channel.guild) return;

if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return;

if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply(`**I D'ont Have Permission For That !`);

omar.guild.roles.forEach(m => {

m.delete();

});

omar.reply("`تم حذف جميع الرتب بنجاح`")

}

}); 


client.on('message', async message =>{
  var prefix = "#";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت😯** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});


client.on('message', message => {
	var prefix = "#";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن احد**");
  if(!reason) return;
  if (!message.guild.member(user)
  .bannable) return message.reply("**لا يمكن اعطاء باند للادارة**");

  message.guild.member(user).ban(7, user);
  message.channel.send(`**:white_check_mark: ${user} تم اعطائه باند :airplane: **`)
user.send(`تم اعطائك باند في ${message.guild.name} السبب: ${reason}`)
  }})






const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json"));;

 

 

client.on('message', async message => {

 

  if (message.author.x5bz) return;

  if (!message.content.startsWith(prefix)) return;

 

 

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

 

  let args = message.content.split(" ").slice(1);

 

  if (command == "warn") { //??? ???????

 

               if(!message.channel.guild) return message.reply('** This command only for servers**');

         

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");

  let user = message.mentions.users.first();

  let reason = message.content.split(" ").slice(2).join(" ");

 

  if (message.mentions.users.size < 1) return message.reply("**???? ???**");

  if(!reason) return message.reply ("**???? ??? ?????**");

 

 

  if(!warns[user.id]) warns[user.id] = {

    warns: 0

  };

 

  warns[user.id].warns++;

 

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {

    if (err) console.log(err)

  });

 

 

  const banembed = new Discord.RichEmbed()

  .setAuthor(`WARNED!`, user.displayAvatarURL)

  .setColor("RANDOM")

  .setTimestamp()

  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')

  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')

  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')

   client.channels.find('name', 'log').send({

    embed : banembed

  })

 

    if(warns[user.id].warns == 2){ //??? ???????? ??????

    let muterole = message.guild.roles.find(`name`, "Muted");

    if(!muterole){

      try{

        muterole = await message.guild.createRole({

          name: "Muted",

          color: "#000000",

          permissions:[]

        })

        message.guild.channels.forEach(async (channel, id) => {

          await channel.overwritePermissions(muterole, {

            SEND_MESSAGES: false,

            ADD_REACTIONS: false

          });

        });

      }catch(e){

        console.log(e.stack);

      }

    }

   

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!tomute) return message.reply("**??? ???? ?????? ?????**:x: ") .then(m => m.delete(5000));

   

    let mutetime = "60s";

    await(tomute.addRole(muterole.id));

    message.channel.send(`<@${user.id}> has been temporarily muted`);

 

    setTimeout(async function(){

    await(tomute.removeRole(muterole.id));

      message.reply(`<@${user.id}> has been unmuted.`)

    }, ms(mutetime))

  }

  if(warns[user.id].warns == 3){  //??? ???????? ??????

    message.guild.member(user).ban(reason);

    message.reply(`<@${user.id}> has been banned.`)

  }

 

}

}

);





 client.on('message', message => {

  if (message.content.startsWith(prefix +"avatar")) {

if(!message.channel.guild) return;

      var mentionned = message.mentions.users.first();

  var client;

    if(mentionned){

        var client = mentionned; } else {

        var client = message.author;

    }

      const embed = new Discord.RichEmbed()

                         .addField('Requested by:', "<@" + message.author.id + ">")

      .setColor(000000)

      .setImage(`${client.avatarURL}`)

    message.channel.sendEmbed(embed);

  }

}); 

client.on("message", message => {
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === prefix + "av-ser"){ 
        const embed = new Discord.RichEmbed()

    .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor(0x164fe3)
  .setImage(message.guild.iconURL)
  .setURL(message.guild.iconrURL)
                  .setTimestamp()

 message.channel.send({embed});
    }
});







 client.on('message', message => {

   if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let BcList = new Discord.RichEmbed()

.setThumbnail(message.author.avatarURL)

.setAuthor(`محتوى الرساله ${args}`)

.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {

msg.react('📝')

.then(() => msg.react('✏'))

.then(() =>msg.react('📝'))

 

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;

let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

 

let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });

let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });

 

 

EmbedBc.on("collect", r => {

 

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)

var bc = new

Discord.RichEmbed()

.setColor('RANDOM')

.setDescription(EmbedRep)

.setThumbnail(message.author.avatarURL)

m.send({ embed: bc })

msg.delete();

})

})

NormalBc.on("collect", r => {

  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)

m.send(NormalRep);

msg.delete();

})

})

})

}

}); 


client.on('message', async message =>{
  var prefix = "*";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});


  




         
         
    



 
 




 

const SQLite = require('sqlite'); // SQLpackage

const path = require('path'); // PATHpackage

const invites = {}; // Codes

 

client.on("ready", () => { // ready ?

    client.guilds.forEach(g => { // for each guilds ?

        g.fetchInvites().then(guildInvites => { // fetch invites ?

                invites[g.id] = guildInvites; // push guild invites on invites ^^

        }); // end

}); // end

}); // end

SQLite.open(path.join(__dirname, 'links.sql')) // read path ?

.then(() => { // then ?

    console.log('Opened') // seccussfull opened

    SQLite.run(`CREATE TABLE IF NOT EXISTS linkSysteme (code TEXT, id VARCHAR(30))`) // create table if not exisit

}) // end

.catch(err => console.error(err)) // on error

 

client.on("message", async msg => { // message ?

    if(msg.author.bot || !msg.channel.guild) return; // if bot or private return

    if(msg.content.startsWith("رابط")) { // message content

        let invite = await msg.channel.createInvite({ //  create invites

            maxAge: 86400, // one day // limit time for invite ^^

            maxUses: 5 // 5 people can enter // limit users for invites ^^

        }, `Requested by ${msg.author.tag}`).catch(console.log); // reason // end

       

        SQLite.run(`INSERT INTO linkSysteme VALUES ('${invite.code}','${msg.author.id}')`) // insert into table

        msg.author.send(invite ? /*seccussfull*/`**مدة الرابط : يـوم عدد استخدامات الرابط : 5 **:\n ${invite}` /*error catch*/: "يوجد خلل في البوت :( \n  يتم حل المشكل قريبا ...");

    }

 

})

 

let inv_room = "597025240626888706" // room id

client.on('guildMemberAdd', async member => { // membed add event

    member.guild.fetchInvites().then(async guildInvites => { // fetch invites ?

            const inv = invites[member.guild.id]; // get invite :)

            invites[member.guild.id] = guildInvites; // push guild invites on invites

            let invite = guildInvites.find(i => inv.get(i.code).uses < i.uses); // find ?

            let res = await SQLite.get(`SELECT * FROM linkSysteme WHERE code = '${invite.code}'`) // select from sql

            if(!res) { // if the code does'nt exists

            console.log(invite.code) // for test

            client.channels.get(inv_room).send("**Welcom To "+member.guild.name+"🌹 .\n       Joined By: "+invite.inviter+".**") // send message to welcome room

            } else { // if the code link exitst

                client.channels.get(inv_room).send("**Welcom To "+member.guild.name+"🌹 .\n       Joined By: <@!"+res.id+">.**") // send message to welcome room

                console.log(res.code) // for test

        } // end if

    }); // end fetchs :)

}); // end events :) ) )) ))  )) )) )) )) ) )) ))

 




 
 

client.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **${prefix}h-admins** ` ,' **اوامر اداريه** ')
.addField(`     **${prefix}h-general** ` ,' **اوامر عامه** ')
.addField(`     **${prefix}h-music** ` ,' **اومر ميوزك** ')
.addField(`     **${prefix}h-ticket** ` ,' **اوامر تيكت** ')
.addField(`     **${prefix}h-roles** ` ,' **اوامر الرتب** ')
.addField(`     **${prefix}h-support** ` ,' **اوامر سيبورت البوت** ')
.setColor('YELLOW')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "h-admins")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **${prefix}clear** ` ,' **مسح الشات** ')
.addField(`     **${prefix}bc**  ` ,' **برودكاست** ')
.addField(`     **${prefix}mute** ` ,' **اعطاء ميوت كتابي** ')
.addField(`     **${prefix}unmute**  ` ,' **فك ميوت كتابي** ')
.addField(`     **${prefix}ban** ` ,' **تبنيد الشخص** ')
.addField(`     **${prefix}unban**  ` ,' **فك الباند** ')
.addField(`     **${prefix}kick** ` ,' **اخراج شخص من السيرفر** ')
.addField(`     **${prefix}closeroom**  ` ,' **لاغلاق الشات** ')
.addField(`     **${prefix}openroom** ` ,' **لفتح الشات** ')
.addField(`     **${prefix}dar**  ` ,' **لمسح جميع الرولات** ')
.addField(`     **${prefix}dac** ` , ' **لمسح كل الرومات** ')
.addField(`     **${prefix}server** ` , ' **لمعرفة معلومات عن السيرفر** ')
.addField(`     **${prefix}liste-roles** ` , ' ** لاظهار قائمة رتب السيرفر** ')
.setColor('RED')
message.author.sendEmbed(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "h-admins")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
 .addField('☑** | تم الارسال خاص**') 
.setColor('GREEN')
message.channel.sendEmbed(embed);
}
});


client.on('message', message => {
    if (message.content.startsWith(prefix + "h-general")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **${prefix}id** ` ,' **لمعرفة الهوية** ')
.addField(`     **${prefix}credit**  ` ,' **لمعرفة رصيد** ')
.addField(`     **${prefix}daily** ` ,' **المكافئة اليومية** ')
.addField(`     **${prefix}avatar**  ` ,' **لرؤيت صورت الحساب** ')
.addField(`     **${prefix}av-ser** ` ,' **لرؤيت صورت السيرفر** ')
.addField(`     **${prefix}profile**  ` ,' **لمعرفة معلومات الحساب** ')
.addField(`     **رابط**   `, ' **لارسال رابط دعوة للسيرفر** ')
.setColor('GREEN')
message.author.sendEmbed(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "h-general")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
 .addField('☑** | تم الارسال خاص**') 
.setColor('GREEN')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "h-roles")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **${prefix}role** ` , ' **لاعطاء رتبة** ')
.addField(`     **${prefix}role humans**  ` ,' **لاعطاء رتبة لجميع البشريين** ')
.addField(`     **${prefix}role bots** ` ,' **لاعطاء رتبة لجميع البوتات** ')
.addField(`     **${prefix}role all**  ` ,' **لاعطاء رتبة للجميع** ')
.addField(`     **${prefix}-role** ` ,' **لنزع الرتبة** ')
.addField(`     **${prefix}-role humans**  ` ,' **لنزع الرتبة من جميع البشريين** ')
.addField(`     **${prefix}-role bots** ` ,' **لنزع الرتبة من جميع البوتات** ')
.addField(`     **${prefix}-role all**  ` ,' **لنزع الرتبة للجميع** ')
.setColor('PINK')
message.author.sendEmbed(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "h-roles")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
 .addField('☑** | تم الارسال خاص**') 
.setColor('GREEN')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "h-support")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **${prefix}support** ` ,' **سيرفر الدعم الفني للبوت** ')
.addField(`     **${prefix}own**  ` ,' **لمعرفة صاحب البوت** ')
.addField(`     **${prefix}ping** ` ,' **لمعرفة سرعة اتصال البوت** ')
.setColor('ORANGE')
message.author.sendEmbed(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "h-support")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
 .addField('☑** | تم الارسال خاص**') 
.setColor('GREEN')
message.channel.sendEmbed(embed);
}
});


client.on('message', message => {
    if (message.content.startsWith(prefix + "h-ticket")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **soon** ` ,' **قريبا** ')
.setColor('WHITE')
message.author.sendEmbed(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "h-ticket")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
 .addField('☑** | تم الارسال خاص**') 
.setColor('GREEN')
message.channel.sendEmbed(embed);
}
});



client.on('message', message => {
    if (message.content.startsWith(prefix + "h-music")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **soon** ` ,' **قريبا** ')
.setColor('WHITE')
message.author.sendEmbed(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "h-music")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
 .addField('☑** | تم الارسال خاص**') 
.setColor('GREEN')
message.channel.sendEmbed(embed);
}
});





client.login(process.env.BOT_TOKEN); 
