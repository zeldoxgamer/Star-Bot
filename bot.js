 const Discord = require('discord.js');
 const moment = require("moment");  
 const fs = require("fs");      
 const dateFormat = require('dateformat');
 const client = new Discord.Client(); 
 const Canvas = require("canvas"); 
 const prefix = "#";
 const token = 'BOT_TOKEN'; 


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
  var prefix = "+";
    if (message.author.kick) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "kick") {
      if (!message.channel.guild) return;
  
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
  
    if (message.mentions.users.size < 1) return message.reply(":information_source: `#kick @OrochiX` يجب تحديد شخص ");
    if(!reason) return message.reply ("Type The Reason Please");
    if (!message.guild.member(user)
    .bannable) return message.reply("I can not be higher than my rank");
  
    message.guild.member(user).kick(7, user);
  message.channel.send(`**:white_check_mark: ${user} has been kicked ! **`)
  user.send(`**You are has been kicked in ${message.guild.name} reason: ${reason}**`)
      message.delete()
  }
  });


client.on('message', message => {
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
  if (message.mentions.users.size < 1) return message.reply("**Mention Someone**");
  if(!reason) return;
  if (!message.guild.member(user)
  .bannable) return message.reply("**This person has a grade higher than his bot rank**");

  message.guild.member(user).ban(7, user);
  message.channel.send(`**:white_check_mark: ${user} has been banned :airplane: **`)
user.send(`You Are Has Been Banned Permanently In ${message.guild.name} reason: ${reason}`)
  }})



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

 




 
 const say = JSON.parse(fs.readFileSync('./say.json', 'utf8'))
 
client.on("message", message =>
          {
      if(!say[message.guild.id]) say[message.guild.id] = {
        say: 'say'
        }
  if(message.content.startsWith(prefix + "say" ) || message.content.startsWith(say[message.guild.id].say)) {
    var args = message.content.split(" ").slice(1).join(" ")
    message.channel.send(args)
  }});
client.on("message", message => {
if(message.content.startsWith(prefix + 'set-say')) {
  var args = message.content.split(" ").slice(1).join(" ")
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
    if(!say[message.guild.id]) say[message.guild.id] = {
        say: 'say'
        }
        message.channel.send(`**SET THE SAY COMMAND TO ${args}**`), say[message.guild.id].say = args
        fs.writeFile("./say.json", JSON.stringify(say), (err) => {
            if (err) console.error(err)
        })
}
})

client.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **${prefix}help-admins** ` ,' **اوامر اداريه** ')
.addField(`     **${prefix}help-General** ` ,' **اوامر عامه** ')
.addField(`     **${prefix}help-music** ` ,' **اومر ميوزك** ')
.addField(`     **${prefix}help-ticket** ` ,' **اوامر تيكت** ')
.addField(`     **${prefix}help-roles** ` ,' **اوامر الرتب** ')
.addField(`     **${prefix}help-support** ` ,' **اوامر سيبورت البوت** ')
.setColor('YELLOW')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "help-admins")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **${prefix}clear** ` ,**مسح الشات** ')
.addField(`     **${prefix}bc**  ` ,' **برودكاست** ')
.addField(`     **${prefix}mute** ` ,**اعطاء ميوت كتابي** ')
.addField(`     **${prefix}unmute**  ` ,' **فك ميوت كتابي** ')
.addField(`     **${prefix}ban** ` ,**تبنيد الشخص** ')
.addField(`     **${prefix}unban**  ` ,' **فك الباند** ')
.addField(`     **${prefix}kick** ` ,**اخراج شخص من السيرفر** ')
.addField(`     **${prefix}closeroom**  ` ,' **لاغلاق الشات** ')
.addField(`     **${prefix}openroom** ` ,**لفتح الشات** ')
.addField(`     **${prefix}dar**  ` ,' **لمسح جميع الرومات** ')
.setColor('RED')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "help-general")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **${prefix}id** ` ,**لمعرفة الهوية** ')
.addField(`     **${prefix}credit**  ` ,' **لمعرفة رصيد** ')
.addField(`     **${prefix}daily** ` ,**المكافئة اليومية** ')
.addField(`     **${prefix}avatar**  ` ,' **لرؤيت صورت الحساب** ')
.addField(`     **${prefix}av-ser** ` ,**لرؤيت صورت السيرفر** ')
.addField(`     **${prefix}profile**  ` ,' **لمعرفة معلومات الحساب** ')
.setColor('GREEN')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "help-roles")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **${prefix}role** ` , ' **لاعطاء رتبة** ')
.addField(`     **${prefix}role humans**  ` ,' **لاعطاء رتبة لجميع البشريين** ')
.addField(`     **${prefix}role bots** ` ,*لاعطاء رتبة لجميع البوتات** ')
.addField(`     **${prefix}role all**  ` ,' **لاعطاء رتبة للجميع** ')
.addField(`     **${prefix}-role** ` ,**لنزع الرتبة** ')
.addField(`     **${prefix}-role humans**  ` ,' **لنزع الرتبة من جميع البشريين** ')
.addField(`     **${prefix}-role bots** ` ,**لنزع الرتبة من جميع البوتات** ')
.addField(`     **${prefix}-role all**  ` ,' **لنزع الرتبة للجميع** ')
.setColor('PINK')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "help-support")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **${prefix}support** ` ,**سيرفر الدعم الفني للبوت** ')
.addField(`     **${prefix}own**  ` ,' **لمعرفة صاحب البوت** ')
.addField(`     **${prefix}ping** ` ,**لمعرفة سرعة اتصال البوت** ')
.setColor('ORANGE')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "help-admins")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **soon** ` ,**قريبا** ')
.setColor('WHITE')
message.channel.sendEmbed(embed);
}
});


client.on('message', message => {
    if (message.content.startsWith(prefix + "help-music")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(`     **soon** ` ,**قريبا** ')
.setColor('WHITE')
message.channel.sendEmbed(embed);
}
});


client.login(process.env.BOT_TOKEN); 
