 const Discord = require('discord.js');
 const moment = require("moment");  
 const fs = require("fs");      
 const dateFormat = require('dateformat');
 const client = new Discord.Client(); 
 const Canvas = require("canvas"); 
 const prefix = "#";
 const token = 'BOT_TOKEN'; 
 const version = "1.1.2";
 const r1 = require('snekfetch'); 


client.on('message', message => {
    var p = message.mentions.members.first();
    var reason = message.content.split(" ").slice(2).join(' ');
    var log = message.guild.channels.find('name', 'log');
    if(message.content.startsWith(`${prefix}warn`)){
        if(!p) return message.reply(`**!منشن الشخص**`);
        if(!reason) return message.reply(`**!اكتب رقم السبب**`);
        if(!p.bannable) return message.reply(`**I can't ban a staff member!**`);
        reason = reason.replace('0', "**نشر في الخاص**");
        reason = reason.replace('1', "**اسم غير لائق**");
        reason = reason.replace('2', "**صوره غير لائقه**");
        reason = reason.replace('3', "**سب الاهل**");
        reason = reason.replace('4', "**سب الذات الاهيه**");
        reason = reason.replace('5', "**مخالفه القوانين مع اخذ اكثر من تحذير**");
        reason = reason.replace('6', "**سبام في الشات**");
        reason = reason.replace('7', "**استخدام بعض الاوامر بشكل مسبب للإضرار بالسيرفر**");
        reason = reason.replace('8', "**جلب اعضاء مفبركين للسيرفر**");
        reason = reason.replace('9', "**عنصريه**");
        var embed = new Discord.RichEmbed()
        .setAuthor(`User Warned!`)
        .addField(`Name ♣`, `<@${p.id}>`)
        .addField(`By ♣`, `<@${message.author.id}>`)
        .addField(`Reason ♣`, reason)
        .setTimestamp()
        .setColor("WHITE")
        .setFooter(` `)
        message.channel.send(`${p} ${reason}`)
            message.delete();
        log.send({embed});
    }
});





//var يعني تختصر للحاجه زي منا عامل كدة

var copy = "ALPHACODE STEWART"


var mo = "الفلوس"
var po = "النقاط"
var lev = "الفل"


bot.on("ready", async () => { // كل حاجه هتتفح لما البوت يشتغل

    console.log(`I'm Online \n By ${copy}`) // الي هيظهر في الكونسل
    console.log(`Logged in as ${bot.user.tag}!`); // نفس الي فوق

    bot.user.setGame(`${bot.users.size} users `,"http://twitch.tv/") 
    bot.user.setStatus("online")

}); // نهايه الكود



client.on('message', message => {

if (message.content.startsWith(`${prefix}profile`)) { // الامر
 let canvas = new Canvas(300, 300) //حجم الصوره الي هتظهر
 let ctx = canvas.getContext('2d')
    let Image = Canvas.Image
    
   
                      //  ava.src = buf;

    fs.readFile(__dirname + '/images_profile/profile.png', function(err, picture) { //مكان الصوره 
      if (err) throw err
      var img = new Image
        		var url = message.author.avatarURL; //افتار صورتك
		url = url.substring(0, url.indexOf('?'));

		r1.get(url).then(res => {
			var dataURL = res.body.toString('base64');
			dataURL = 'data:image/png;base64,' + dataURL;
			img.onload = function() {

				ctx.save();
    		ctx.beginPath();
    		ctx.arc(54, 103, 47, 0, Math.PI * 2, true); // احدثيات الدائره
		    ctx.closePath();
		    ctx.clip();
		    ctx.drawImage(img, 8, 57, 92, 92); // الصوره
		    ctx.restore();
			}
			img.src = dataURL;
		});
		
      img.onload = () => {
        ctx.drawImage(img, 1, 1, 300, 300)
     //   ctx.drawImage(message.author.avatarURL, 152, 27, 95, 95);
        ctx.font = "regular 11px Cairo" // نوع الخط وحجمه
        ctx.fillStyle = "#9f9f9f" // لون الخط
        ctx.fillText(`${message.author.username}`, 140, 137)
        ctx.fillText(`${mo}  `, 143, 219) //money
        ctx.fillText(`${po}`, 120, 202) // النقاط

        //Level
        ctx.font = "regular 21px Cairo"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${lev}`, 47, 255) //لفل

        ctx.save()
        
      }
      img.src = picture
			
    })
		
   

    

    setTimeout(function() {
      fs.readFile(__dirname + '/images_profile/diamond_prof_bg.png', function(err, picture) {
        if (err) throw err
        var img = new Image
        img.onload = () => {
          ctx.drawImage(img, -1, -1, 0, 0)
        }
        img.src = picture
        let inventoryPicture = canvas.toDataURL()
        let data = inventoryPicture.replace(/^data:image\/\w+;base64,/, "")
        let buf = new Buffer(data, 'base64')
      fs.writeFile(`image.png`, buf)
      
        message.channel.send("", {
          file: `image.png` 
        })
      })
    }, 1000)


    function roundedImage(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function wrapText(context, text, x, y, maxWidth, lineHeight) {

      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;

      for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {

          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] != test) {
          words.splice(i + 1, 0, words[i].substr(test.length))
          words[i] = test;
        }

        test = line + words[i] + ' ';
        metrics = context.measureText(test);

        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
        } else {
          line = test;
        }
      }

      ctx.fillText(line, x, y);
    }
  



};




});





client.on('message', message => {
        if (message.content.startsWith(`${prefix}new`)) {     /// Me Codes 
        const reason = message.content.split(" ").slice(1).join(" ");     /// Me Codes
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`يجب انشاء رتبة بإٍسم : \`Support Team\` وتعطيها للبوت لكي يستطيع التعديل والانشاء `);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// Me Codes
     

	
	
	var current = message.guild.channels.filter(c => c.name.startsWith("ticket-")).size;
         current++;
         var name = `ticket-${current}`;
message.guild.createChannel(name, `text`).then(c => {
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
        message.channel.send(`:white_check_mark: تم انشاء تذكرتك, <#${c.id}>.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
               .addField(`Hey ${message.author.username}!`, `**تم فتح تذكرة الرجاء انتظار الى حين يأتي مشرف ويقوم بلرد عليك**`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
	 if(message.content.startsWith(prefix + 'close')) {
     
     if(message.author.bot) return;
       if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`)
 let close = new Discord.RichEmbed()
 .addField(`**اكتب close${prefix} مجددا للتأكيد**`, `** **`)
 .setColor("#36393e");
 message.channel.sendEmbed(close) .then(m => {
 const filter = msg => msg.content.startsWith(prefix + 'close');
 if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return
 message.channel.awaitMessages(response => response.content === prefix + 'close', {
 max: 1,
 time: 20000,
 errors: ['time']
 })
 .then((collect) => {
 message.channel.delete();
 let Reason = message.content.split(" ").slice(1).join(" ");
 if(!Reason) Reason = 'NONE';
let closee = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`تم اغلاق التيكت`)
.setDescription(`Ticket : #${message.channel.name}
By : <@${message.author.id}>
Reason : ${Reason}`)
.setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109178712074/563111850162520077.png`)
.setFooter(message.author.tag)
let log = message.guild.channels.find("name", "log");
if(log) log.send(closee)
 }) .catch(() => {
 m.delete()
 .then(message.channel.send('**تم اغلاق التيكت**')) .then((c) => {
 c.delete(4000);
 })
 })
 })    
   } if(message.content.startsWith(prefix + `close-all`)) {
     if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('You don\'t have Permission **MANAGE_CHANNELS** to close all tickets');
      message.guild.channels.filter(c => c.name.toLowerCase().startsWith("ticket-")).forEach(channel => { channel.delete(); })
const ttt = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**Done all Tickets has been closed :white_check_mark:**`,`** **`)
message.channel.send(ttt)
let log = message.guild.channels.find("name", "log");
const rr = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**تم مسح جميع التيكتات:white_check_mark:**`, `**by <@${message.author.id}>**`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588151961279397898/582096914376425501.png`)
.setTimestamp();
if(log) return log.send(rr)
//
} if(message.content.startsWith(prefix + `add`)) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission to do this`)
 if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`);
let member = message.mentions.members.first();
if(!member) return message.channel.send(`**المرجوا منشن الشخص :x:**`);
if(message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) return message.channel.send(`this member already in this ticket :rolling_eyes:`);
message.channel.overwritePermissions(member.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true });
message.channel.send(`**Done :white_check_mark:\nتم اضافته <@${member.user.id}> to the ticket**`)
let tgt = new Discord.RichEmbed()
.setColor(`GREEN`)
.setAuthor(`تم اضافته الى التدكرة`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109539160066/563111851165220885.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");
if(log) return log.send(tgt);
} if(message.content.startsWith(prefix + `remove`)) {
 if(!message.channel.name.startsWith("ticket-")) {
     return message.channel.send(`this command only for the tickets`);
 }
 let member = message.mentions.members.first();
 if(!member || member.id === client.user.id) {
     return message.channel.send(`**Please mention the user :x:**`);
 }
 if(!message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) {
     return message.channel.send(`:x: **${member.user.tag}** is not in this ticket to remove them`);
 }
 message.channel.overwritePermissions(member.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false, READ_MESSAGE_HISTORY: false });
 message.channel.send(`**Done :white_check_mark:\nتم استبعاده \`${member.user.tag}\` from the ticket**`)
 let gtg = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`تم استبعاده من التدكرة`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033111212949555/563111852352077886.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");
if(log) return log.send(gtg);
 }
 
 
 });


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

 

client.on('message',message =>{
  var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.toLowerCase().split(" ");
    var userM = message.mentions.users.first()
    if(command == prefix + 'unban') {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
        if(!args[1]) return  message.channel.send(':information_source:  `#kick <@id>` يجب تحديد شخص');
        if(args[1].length < 16) return message.reply(':no_entry: | This ID is not id user!');
        message.guild.fetchBans().then(bans => {
            var Found = bans.find(m => m.id === args[1]);
            if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
            message.guild.unban(args[1]);
            message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!`);
            }

        )}
      })


 client.on('message', message => {
  if (message.content === `${prefix}support`) {
  let embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#9B59B6")
.addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/hcR4MU**")
  
 message.channel.sendEmbed(embed);
 }
});

  client.on('message', message => {
  if (message.content === `${prefix}own`) {
  let embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#9B59B6")
.addField(" **: <@صاحب البوت هو**" , "  **<411613098923786241**")
  
 message.channel.sendEmbed(embed);
 }
});
  
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
.addField(`     **${prefix}new** ` ,' **لانشاء تدكرة** ')
.addField(`     **${prefix}close** ` ,' **لمسح التدكرة** ')
.addField(`     **${prefix}closse-all** ` ,' **لمسح جميع التداكر** ')
.addField(`     **${prefix}add** ` ,' **لاضافة شخص الى التدكرة** ')
.addField(`     **${prefix}remove** ` ,' **لاستبعاد شخص من التدكرة** ')
.addField(`     **log سوي روم باسم** ` ,' **** ')
.setColor('BLUE')
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
