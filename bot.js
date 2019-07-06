 const Discord = require('discord.js');
 const moment = require("moment");  
 const fs = require("fs");      
 const dateFormat = require('dateformat');
 const client = new Discord.Client(); 
 const Canvas = require("canvas"); 
 const prefix = "#";
 const token = 'BOT_TOKEN'; 


const ms = require("ms");
  client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
  if (message.mentions.users.size < 1) return message.reply(' Error : ``منشن الشخص``').catch(console.error).then(message => message.delete(4000))
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("تم فك الميوت☑").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("تم فك الميوت☑").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});

  


client.on('message',function(message) {

 if(!message.channel.guild) return;    let messageArray = message.content.split(' ');

    let muteRole =  message.guild.roles.find('name', 'Muted');

    let muteMember = message.mentions.members.first();

    let muteReason = messageArray[2];

    let muteDuration = messageArray[3];

 if (message.content.split(" ")[0].toLowerCase() === prefix + "mute") {

           

  if (message.author.bot) return;

       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));

       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send('ليست لديك رتبة لاعطاء ميوت');

       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(' ليست لدي البرمشن');

       if(!muteMember) return message.channel.send(' المرجوا منشنت الشخص').then(message => message.delete(4000))

       if(!muteReason) return message.channel.send(' المرجو كتابة سبب الميوت').then(message => message.delete(4000))

       if(!muteDuration) return message.channel.send(' المرجو منك وضع مدة الميوت`` \n Ex: #mute @user reason 1m ').then(message => message.delete(4000))

       if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send(' لقد تم اعطائه ميوت سابقا').then(message => message.delete(4000))

       message.channel.send(`لقد تم اعطاء${muteMember} ميوت 🤐  .`).then(message => message.delete(5000))

       muteMember.addRole(muteRole);

       muteMember.setMute(true)

       .then(() => { setTimeout(() => {

           muteMember.removeRole(muteRole)

           muteMember.setMute(false)

       }, mmss(muteDuration));

       });

   }

});

         
         
    



 
 


client.on("message", message => {

if(message.content.startsWith(prefix + "setnick")){

if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;

var user = message.mentions.members.first();

var args = message.content.split(" ").slice(2);

var nick = args.join(" ");

if(!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);

message.guild.member(user.user).setNickname(`${nick}`);

message.channel.send(`Successfully changed **${user}** nickname to **${nick}**`);

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

client.login(process.env.BOT_TOKEN); 
