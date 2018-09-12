const Discord = require('discord.js');
const request = require("request");
const ytdl = require('ytdl-core');
const fs = require('fs');
const ytrequest = require("request");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const client = new Discord.Client();
const config = require("./config.json");
const newUsers = new Discord.Collection();

client.login(config.token);

client.on('ready', () => {
  console.log('Test Bot!');
  console.info('Made by Griffindor');
  client.user.setActivity(config.prefix+'help',({type: "PLAYING"}));
});

var randomcolor = [
	"0xf15f5f",
	"0xf1955f",
	"0xf1cc5f",
	"0xe2f15f",
	"0x9ada47",
	"0x47da60",
	"0x47da9c",
	"0x47dad0",
	"0x4794da",
	"0x5a47da",
	"0x8a47da",
	"0xbb47da",
	"0xda47c1",
	"0xda4791",
	"0xda475d",
	"0xFFA500",
];

client.on("message", async message => {
  if(message.author.bot) return;
  let customprefix = config.prefix;
  if(message.content.indexOf(customprefix) !== 0) return;
  const args = message.content.slice(customprefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  if(command === "eval") {
	  if(message.author.id !== config.ownerID) return;
	  if(!args[0]) return;
	  eval(args.slice(0).join(' '));
  }
  if(command === "help") {
	  let a = new Discord.RichEmbed()
		.setTitle(client.user.tag)
		.setThumbnail(client.user.avatarURL)
		.setDescription("This is the commands anyone can use!")
		.addField(customprefix+"help", "Shows this help message.")
		.addField(customprefix+"ping", "Check the ping for the bot")
		.addField(customprefix+"poll", "Make a poll")
		.addField(customprefix+"apply", "Apply for staff!")
		.addField(customprefix+"new", "Make a ticket!")
		.addField(customprefix+"add", "Add a person to be able to view your ticket.")
		.addField(customprefix+"setstatus", "Set the \"status\" of your ticket.")
		.addField(customprefix+"close", "Close your ticket.")
		.addField(customprefix+"play", "Play something in a voicechannel.")
		.addField(customprefix+"skip", "Skip the current thing playing.")
		.addField(customprefix+"queue", "See a list of the stuff currently playing.")
		.addField(customprefix+"volume", "Check the current volume, or make it higher!")
		.setColor(randomcolor[Math.floor(Math.random() * randomcolor.length)]);
	  
	  message.channel.send(a);
	  if(message.channel.type != 'dm') {
		  let b = new Discord.RichEmbed()
			.setTitle(client.user.tag)
			.setThumbnail(client.user.avatarURL)
			.setDescription("This is the commands you only can use if you have \"Manage Server\" permission :P")
			.addField(customprefix+"closeticket", "Close a ticket by it's numbers.")
			.addField(customprefix+"announcement", "Announce something in a channel!")
			.setColor(randomcolor[Math.floor(Math.random() * randomcolor.length)]);
		  
		  if(message.member.hasPermission('MANAGE_GUILD')) {
		  return message.channel.send(b);
		  }
	  }
  }
  if(command === "poll") {
	  message.react('👍');
	  message.react('👎');
	  message.react('🤷');
  }
  if(command === "apply") {
	  if(message.author.bot) return;
	  if(message.channel.type == 'dm') return;
	  let finishjson = JSON.parse(fs.readFileSync('./test3.json', 'utf8'));
	  let steam64idjson = JSON.parse(fs.readFileSync('./steam64id.json', 'utf8'));
	  if(finishjson[message.author.id]) {
		  if(finishjson[message.author.id].notes[0]) {
			  if(finishjson[message.author.id].notes[0] == "finished") {
				  return;
			  }
		  }
	  }
	  message.reply("Sending dms.. Make sure dms is open.\nDO NOT use this command again, just type \"yes\" to the bot in dms when you've opened dms.")
	  .catch(error => {
		  return message.reply(error);
	  });
	  let totallyauthor = message.author.id;
	  let maintotallyauthor = message.author;
	  let totallyguild = message.guild;
	  let totallymember = message.member;
	  let astart="false";
	  let a="false";
	  let b="false";
	  let c="false";
	  let d="false";
	  let e="false";
	  let f="false";
	  let g="false";
	  let h="false";
	  let i="false";
	  let j="false";
	  let k="false";
	  let l="false";
	  let m="false";
	  let n="false";
	  let o="false";
	  let p="false";
	  let q="false";
	  let r="false";
	  let s="false";
	  let blahbluh;
	  let q1="1.) What is your Name?"; 
	  let q2="2.) What is your Steam 64 ID?";
	  let q3="3.) Where do you live?";
	  let q4="4.) How old are you?";
	  let q5="5.) What good have you done?";
	  let q6="6.) Why should we choose you out of the other applicants?";
	  let q7="7.) Any past server staff experience?";
	  let q8="8.) Anything you wanna add?";
	  message.author.send("Are you ready?")
	  .catch(error => {
		  return message.reply(error);
	  });
	  // user responds "yes"
	  client.on('message', function(message){
		  if(message.author.bot) return;
		  if(message.channel.type !== 'dm') return;
		  if(finishjson[message.author.id]) {
			  if(finishjson[message.author.id].notes[0]) {
				  if(finishjson[message.author.id].notes[0] == "finished") {
					  return;
				  }
			  }
		  }
		  if(totallyauthor !== message.author.id) return;
		  if(astart == "false") {
		  if(message.content == "no") return message.reply("Oh, Oki dokie.");
		  if(message.content.match(/wait/i)) return message.reply("Okay, I'll wait..");
		if((message.content.match(/y/i) || message.content.match(/ready/i) || message.content.match(/sure/i)) && client.user.id != message.author.id){
			blahbluh = message.content;
			astart="true";
			if(a !== "true") {
	  message.reply(q1);
	  // user responds
			}
		}
		  }
	  if(o == "true") {
	  r=message.content;
	  message.reply("Thanks for applying to be apart of the staff team!\nGood Luck\n-"+totallyguild.name+" Team");
	  // sends in a channel the answers to the questions
	  let abc = new Discord.RichEmbed()
		.setTitle(message.author.tag)
		.setThumbnail(message.author.avatarURL)
		.setDescription("By "+maintotallyauthor)
		.addField(q1, f)
		.addField(q2, g)
		.addField(q3, h)
		.addField(q4, [i.slice(0,1024)])
		.addField(q5, [j.slice(0,1024)])
		.addField(q6, [l.slice(0,1024)])
		.addField(q7, [m.slice(0,1024)])
		.addField(q8, [r.slice(0,1024)])
		.setFooter(new Date())
		.setColor(randomcolor[Math.floor(Math.random() * randomcolor.length)]);
		let channel1 = totallyguild.channels.find('id', '459778393622466080') || totallyguild.channels.find('name', 'staff-applications');
		if(channel1) {
			channel1.send(abc);
		}
	  if (!finishjson[totallyauthor]) finishjson[totallyauthor] = {}
	  if (!finishjson[totallyauthor].notes) finishjson[totallyauthor].notes = [];
		finishjson[totallyauthor].notes.push("finished");
	  fs.writeFile('./test3.json', JSON.stringify(finishjson), (err) => {
	if (err) console.error(err);
	 });
	  if (!steam64idjson[totallyauthor]) steam64idjson[totallyauthor] = {}
	  if (!steam64idjson[totallyauthor].notes) steam64idjson[totallyauthor].notes = [];
		steam64idjson[totallyauthor].notes.push(g);
	  fs.writeFile('./steam64id.json', JSON.stringify(steam64idjson), (err) => {
	if (err) console.error(err);
	 });
	  }
		  if(o !== "true" && n == "true") {
		  o="true";
		  m=message.content;
		  console.log(m);
		  message.reply(q8);
		  }
		  if(n !== "true" && e == "true") {
		  n="true";
		  l=message.content;
		  console.log(l);
		  message.reply(q7);
		  }
		  if(e !== "true" && d == "true") {
		  e="true";
		  j=message.content;
		  console.log(j);
		  message.reply(q6);
		  }
		  if(d !== "true" && c == "true") { 
		  d="true";
		  if(e !== "true" && d == "true") {
			  i=message.content;
			  console.log(i);
	  message.reply(q5);
	  // user responds
		  }
		  }
		  if(c !== "true" && b == "true") {
		  c="true";
		  if(d !== "true" && c == "true") {
			  h=message.content;
			  console.log(h);
	  message.reply(q4);
	  // user responds
		  }
		  }
		  if(b !== "true" && a == "true") {
		  b="true";
		  if(c !== "true" && b == "true") {
			  g=message.content;
			  console.log(g);
	  message.reply(q3);
	  // user responds
		  }
		  }
		  if(message.content === blahbluh) return;
		  if(a !== "true") {
		  a="true";
		  if(b !== "true" && a == "true") {
		  f=message.content;
		  console.log(f);
	  message.reply(q2);
	  // user responds
		  }
		  }
	  });
  }
  if(command === "new") {
	  listeningticket=true;
	  let reason = args.slice(0).join(" ");
	  if(!reason) return message.reply("You need to put something to have in your ticket");
	  
	 var dingus = new Discord.RichEmbed() // sets a embed box
    .setTitle(message.author.username) // sets the title
	.setDescription("Ticket | " + message.author.tag)
	.setThumbnail(message.author.avatarURL)
	.addField("Author: ", message.author + " | " + message.author.tag)
    .addField("Message: ", message.content)
    .setColor(randomcolor[Math.floor(Math.random() * randomcolor.length)]) // sets a color on the side
    .setFooter(new Date());
	  
	let logschannel = client.channels.get(config.logID);
	if(logschannel) logschannel.send(dingus);
	
	 var embedticket = new Discord.RichEmbed()
	.setTitle(message.author.tag, client.user.avatarURL)
	.setThumbnail(message.author.avatarURL)
	.setDescription(message.author)
	.addField("Ticket: ", reason)
	.setColor(0x306825)
	.setFooter(message.author.id + " | " + new Date(), client.user.avatarURL);
	
	if(message.channel.type !== 'dm') {
		for (var a = 0; a < 10000; a++) {
		if (a<10) {
			console.log(a);
			a="000"+a;
			console.log(a);
		};
		if (a>9 && a<100) {
			console.log(a);
			a="00"+a;
			console.log(a);
		};
		if (a>99 && a<1000) {
			console.log(a);
			a="0"+a;
			console.log(a);
		};
		let ticketchannel = message.guild.channels.find('name', 'ticket-'+a);
		let supportteam = message.guild.roles.find('name', 'Support Team');
		if(!ticketchannel) return message.guild.createChannel('ticket-'+a, 'text')
			.then(ticketchannel => {
				ticketchannel.send(embedticket);
				let ticketjson = JSON.parse(fs.readFileSync('./justtickets.json', 'utf8'));
				if (!ticketjson[message.guild.id+ticketchannel.id]) ticketjson[message.guild.id+ticketchannel.id] = {}
				if (!ticketjson[message.guild.id+ticketchannel.id].notes) ticketjson[message.guild.id+ticketchannel.id].notes = [];
				  ticketjson[message.guild.id+ticketchannel.id].notes.push(message.author.id);
				fs.writeFile('./justtickets.json', JSON.stringify(ticketjson), (err) => {
					if (err) console.error(err);
				});
				let newticketiscreated = new Discord.RichEmbed()
					.setThumbnail(message.author.avatarURL)
					.addField(message.author.tag, message.author + ", your ticket is now fixed")
					.addField("Channel", ticketchannel)
					.setColor(randomcolor[Math.floor(Math.random() * randomcolor.length)])
					.setFooter(message.author.id + " | " + message.createdTimestamp);
				message.channel.send(newticketiscreated);
				ticketchannel.overwritePermissions(message.author, {
				  READ_MESSAGES: true,
				  SEND_MESSAGES: true
				});
				let supportrole = message.guild.roles.find('name', 'Support Team') || message.guild.roles.find('name', 'Support team');
				if(supportrole) {
				ticketchannel.overwritePermissions(supportrole, {
				  READ_MESSAGES: true,
				  SEND_MESSAGES: true
				});
				}
				let everyonerole = message.guild.roles.find('name', '@everyone');
				ticketchannel.overwritePermissions(everyonerole, {
				  READ_MESSAGES: false,
				  SEND_MESSAGES: false
				});
			});
		};
	}	  
  }
  if(command === "closeticket") {
	  if(message.channel.type == 'dm') return;
	  if(!message.member.hasPermission('MANAGE_GUILD')) return;
	  
	  if(!args[0]) return message.reply("Example: if there is a ticket-0001 do ``/closeticket 0001``");
	  
	  let ticketchannel = message.guild.channels.find('name', 'ticket-'+args[0]);
	  if(!ticketchannel) return message.reply("That's not a valid ticket, make sure you did something like ``/close 0000``");
	  if(ticketchannel) ticketchannel.delete();
	  
	 var dingus = new Discord.RichEmbed() // sets a embed box
    .setTitle(message.author.username) // sets the title
	.setDescription("Ticket closed by " + message.author.tag)
	.setThumbnail(message.author.avatarURL)
	.addField("Author: ", message.author + " | " + message.author.tag)
	.addField("Ticket: ", args[0])
    .setColor(randomcolor[Math.floor(Math.random() * randomcolor.length)]) // sets a color on the side
    .setFooter(new Date());
	  
	  let logs = client.channels.get(config.logID);
	  if(logs) logs.send(dingus);
  }
  if(command === "close") {
	  if(message.channel.type == 'dm') return;
	  let ticketjson = JSON.parse(fs.readFileSync('./justtickets.json', 'utf8'));
	  if(!ticketjson[message.guild.id+message.channel.id]) return;
	  let ticketauthor = ticketjson[message.guild.id+message.channel.id].notes[0];
	  if(!(message.member.hasPermission('MANAGE_GUILD') || message.author.id == ticketauthor)) return;
	  
      if (!ticketjson[message.guild.id+message.channel.id]) ticketjson[message.guild.id+message.channel.id] = {}
	  if (!ticketjson[message.guild.id+message.channel.id].notes) ticketjson[message.guild.id+message.channel.id].notes = [];
		ticketjson[message.guild.id+message.channel.id].notes.pop(ticketauthor);
	  fs.writeFile('./justtickets.json', JSON.stringify(ticketjson), (err) => {
	if (err) console.error(err);
	 });
	 
	  let ticketchannel = message.channel;
	  if(ticketchannel) ticketchannel.delete();
	  let ticketsauthor = client.users.get(ticketauthor);
	 
	 var dingus = new Discord.RichEmbed() // sets a embed box
    .setTitle(message.author.username) // sets the title
	.setDescription("Ticket closed by " + message.author.tag)
	.setThumbnail(message.author.avatarURL)
	.addField("Author: ", message.author + " | " + message.author.tag)
	.addField("Ticket: ", message.channel.name)
	.addField("Ticket by: ", ticketsauthor.id + " / " + ticketsauthor.tag)
    .setColor(randomcolor[Math.floor(Math.random() * randomcolor.length)]) // sets a color on the side
    .setFooter(new Date());
	  
	  let logs = client.channels.get(config.logID);
	  if(logs) logs.send(dingus);
  }
  if(command === "setstatus") {
	  if(message.channel.type == 'dm') return;
	  let ticketjson = JSON.parse(fs.readFileSync('./justtickets.json', 'utf8'));
	  if(!ticketjson[message.guild.id+message.channel.id]) return;
	  let ticketauthor = ticketjson[message.guild.id+message.channel.id].notes[0];
	  if(!(message.member.hasPermission('MANAGE_GUILD') || message.author.id == ticketauthor)) return;

	  let desc = args.slice(0).join(" ");
	  
	  message.channel.edit({ topic: desc });
	  
	  let embedupdate = new Discord.RichEmbed()
		.setTitle(message.author.username)
		.setDescription(message.channel + " updated status by " + message.author)
		.setColor(randomcolor[Math.floor(Math.random() * randomcolor.length)])
		.setFooter(new Date());
	  let logs = client.channels.get(config.logID);
	  if(logs) logs.send(embedupdate);
  }
  if(command === "add") {
	  if(message.channel.type == 'dm') return;
	  let ticketjson = JSON.parse(fs.readFileSync('./justtickets.json', 'utf8'));
	  if(!ticketjson[message.guild.id+message.channel.id]) return;
	  let ticketauthor = ticketjson[message.guild.id+message.channel.id].notes[0];
	  if(!(message.member.hasPermission('MANAGE_GUILD') || message.author.id == ticketauthor)) return;

	  let desc = args.slice(0).join(" ");
	  let mentionuser = message.mentions.members.first();
	  let user2add = client.users.get(desc) || mentionuser;
	  let ticketchannel = message.channel;
				
				ticketchannel.overwritePermissions(user2add, {
				  READ_MESSAGES: true,
				  SEND_MESSAGES: true
				});
  }
  if(command === "accept") {
	  if(message.channel.type == 'dm') return;
	  if(!message.member.hasPermission('MANAGE_GUILD')) return;
	  if(!args[0]) return message.reply('Who?');
	  let steam64idjson = JSON.parse(fs.readFileSync('./steam64id.json', 'utf8'));
	  let finishjson = JSON.parse(fs.readFileSync('./test4.json', 'utf8'));
	  let finish2json = JSON.parse(fs.readFileSync('./test3.json', 'utf8'));
	  let a = args[0];
	  let b;
	  let d;
	  let e;
	  let f;
	  let member;
	  if(a) {
	  b=message.guild.members.find('id', a);
	  if(b) {
		  d = b.id;
	  }
	  e=d;
	  f=b;
	  member=b;
	  }
	  let abc = message.mentions.members.first();
	  if(abc) {
	  let c = abc.user.id;
		  e = c || d;
		  f = abc || b;
		  member = abc;
	  }
	  if(args[1] === "appeal") {
	  if(!finishjson[e]) return message.reply("This user is apperently not in the save.");
	  if (!finishjson[e]) finishjson[e] = {}
	  if (!finishjson[e].notes) finishjson[e].notes = [];
		finishjson[e].notes.pop("finished");
	  fs.writeFile('./test4.json', JSON.stringify(finishjson), (err) => {
	if (err) console.error(err);
	 });
	  let reason = args.slice(2).join(' ');
	  
	  f.send('Congratulations, Your appeal has been accepted! :tada: ');
	  if(reason) f.send(reason);
	  message.channel.send(`${f} has been accepted! :tada: ${reason}`);
	  if(steam64idjson[e]) {
		  if(steam64idjson[e].notes[0]) {
			  let excmdchannel = client.channels.get('460179436503826454');
			  if(excmdchannel) {
				  excmdchannel.send(`/unban ${steam64idjson[e].notes[0]}`);
			  }
		  }
	  }
	  return;
	  }
	  
	  if(args[1] === "apply") {
	  if(!finish2json[e]) return message.reply("This user is apperently not in the save.");
	  if (!finish2json[e]) finish2json[e] = {}
	  if (!finish2json[e].notes) finish2json[e].notes = [];
		finish2json[e].notes.pop("finished");
	  fs.writeFile('./test3.json', JSON.stringify(finish2json), (err) => {
	if (err) console.error(err);
	 });
	  let reason = args.slice(2).join(' ');
	  
	  f.send('Congratulations, Your apply to be staff has been accepted! :tada: ');
	  if(reason) f.send(reason);
	  message.channel.send(`${f} has been accepted! :tada: ${reason}`);
	  if(steam64idjson[e]) {
		  if(steam64idjson[e].notes[0]) {
			  let excmdchannel = client.channels.get('460179436503826454');
			  if(excmdchannel) {
				  excmdchannel.send(`/p add ${steam64idjson[e].notes[0]} Mod`);
			  }
		  }
	  }
	  let role1 = message.guild.roles.find('id', '473179771669577728') || message.guild.roles.find('name', 'Moderator') || message.guild.roles.find('name', 'staff');
	  if(role1) {
	  member.addRole(role1);
	  }
	  return;
	  }
	  
	  if(message.channel.id === '463665306473332748') {
		  if(!finishjson[e]) return message.reply("This user is apperently not in the save.");
	  if (!finishjson[e]) finishjson[e] = {}
	  if (!finishjson[e].notes) finishjson[e].notes = [];
		finishjson[e].notes.pop("finished");
	  fs.writeFile('./test4.json', JSON.stringify(finishjson), (err) => {
	if (err) console.error(err);
	 });
	  let reason = args.slice(1).join(' ');
	  
	  f.send('Congratulations, Your appeal has been accepted! :tada: ');
	  if(reason) f.send(reason);
	  message.channel.send(`${f} has been accepted! :tada: ${reason}`);
	  if(steam64idjson[e]) {
		  if(steam64idjson[e].notes[0]) {
			  let excmdchannel = client.channels.get('460179436503826454');
			  if(excmdchannel) {
				  excmdchannel.send(`/unban ${steam64idjson[e].notes[0]}`);
			  }
		  }
	  }
		  return;
	  }
	  
	  if(message.channel.id === '459778393622446080') {
		  if(!finish2json[e]) return message.reply("This user is apperently not in the save.");
	  if (!finish2json[e]) finish2json[e] = {}
	  if (!finish2json[e].notes) finish2json[e].notes = [];
		finish2json[e].notes.pop("finished");
	  fs.writeFile('./test3.json', JSON.stringify(finish2json), (err) => {
	if (err) console.error(err);
	 });
	  let reason = args.slice(1).join(' ');
	  
	  f.send('Congratulations, Your apply to be staff has been accepted! :tada: ');
	  if(reason) f.send(reason);
	  message.channel.send(`${f} has been accepted! :tada: ${reason}`);
	  if(steam64idjson[e]) {
		  if(steam64idjson[e].notes[0]) {
			  let excmdchannel = client.channels.get('460179436503826454');
			  if(excmdchannel) {
				  excmdchannel.send(`/p add ${steam64idjson[e].notes[0]} Mod`);
			  }
		  }
	  }
	  let role1 = message.guild.roles.find('id', '473179771669577728') || message.guild.roles.find('name', 'Moderator') || message.guild.roles.find('name', 'staff');
	  if(role1) {
	  member.addRole(role1);
	  }
		  return;
	  }
	  
  }
  if(command === "deny") {
	  if(message.channel.type == 'dm') return;
	  if(!message.member.hasPermission('MANAGE_GUILD')) return;
	  if(!args[0]) return message.reply('Who?');
	  let steam64idjson = JSON.parse(fs.readFileSync('./steam64id.json', 'utf8'));
	  let finishjson = JSON.parse(fs.readFileSync('./test4.json', 'utf8'));
	  let finish2json = JSON.parse(fs.readFileSync('./test3.json', 'utf8'));
	  let a = args[0];
	  let b;
	  let d;
	  let e;
	  let f;
	  let member;
	  if(a) {
	  b=message.guild.members.find('id', a);
	  if(b) {
		  d = b.id;
	  }
	  e=d;
	  f=b;
	  member=b;
	  }
	  let abc = message.mentions.members.first();
	  if(abc) {
	  let c = abc.user.id;
		  e = c || d;
		  f = abc || b;
		  member = abc;
	  }
	  if(args[1] === "appeal") {
	  if(!finishjson[e]) return message.reply("This user is apperently not in the save.");
	  if (!finishjson[e]) finishjson[e] = {}
	  if (!finishjson[e].notes) finishjson[e].notes = [];
		finishjson[e].notes.pop("finished");
	  fs.writeFile('./test4.json', JSON.stringify(finishjson), (err) => {
	if (err) console.error(err);
	 });
	  let reason = args.slice(2).join(' ');
	  
	  f.send('Unfortunantly your appeal got denied, better luck next time :frowning: ');
	  if(reason) f.send(reason);
	  return message.channel.send(`${f} has been denied! ${reason}`);
	  }
	  
	  if(args[1] === "apply") {
	  if(!finish2json[e]) return message.reply("This user is apperently not in the save.");
	  if (!finish2json[e]) finish2json[e] = {}
	  if (!finish2json[e].notes) finish2json[e].notes = [];
		finish2json[e].notes.pop("finished");
	  fs.writeFile('./test4.json', JSON.stringify(finish2json), (err) => {
	if (err) console.error(err);
	 });
	  let reason = args.slice(2).join(' ');
	  
	  f.send('Unfortunantly your apply/application got denied, better luck next time! :frowning: ');
	  if(reason) f.send(reason);
	  return message.channel.send(`${f} has been denied! ${reason}`);
	  }
	  
	  if(message.channel.id === '463665306473332748') {
	  if(!finishjson[e]) return message.reply("This user is apperently not in the save.");
	  if (!finishjson[e]) finishjson[e] = {}
	  if (!finishjson[e].notes) finishjson[e].notes = [];
		finishjson[e].notes.pop("finished");
	  fs.writeFile('./test4.json', JSON.stringify(finishjson), (err) => {
	if (err) console.error(err);
	 });
	  let reason = args.slice(1).join(' ');
	  
	  f.send('Unfortunantly your appeal got denied, better luck next time :frowning: ');
	  if(reason) f.send(reason);
	  return message.channel.send(`${f} has been denied! ${reason}`);
	  }
	  
	  if(message.channel.id === '459778393622446080') {
	  if(!finish2json[e]) return message.reply("This user is apperently not in the save.");
	  if (!finish2json[e]) finish2json[e] = {}
	  if (!finish2json[e].notes) finish2json[e].notes = [];
		finish2json[e].notes.pop("finished");
	  fs.writeFile('./test4.json', JSON.stringify(finish2json), (err) => {
	if (err) console.error(err);
	 });
	  let reason = args.slice(1).join(' ');
	  
	  f.send('Unfortunantly your apply/application got denied, better luck next time! :frowning: ');
	  if(reason) f.send(reason);
	  return message.channel.send(`${f} has been denied! ${reason}`);
	  }
	  
  }
  if(command === "announce" || command === "announcement" || command === "annouce") {
	  if(message.channel.type == 'dm') return message.reply("http://JonHost.ml");
	  if(!message.member.hasPermission('MANAGE_GUILD')) return;
	  let a = message.mentions.channels.first();
	  if(!a) return message.reply("Please type #channel before the message :)");
	  let b = a.toString();
	  let c = b.length;
	  let d = Math.floor(customprefix.length + command.length + c + 2);
	  if(d) console.log(d);
	  let sayMessage = [message.content.slice(parseInt(d))];
	  if(sayMessage < 1) return message.reply("Cannot send empty message.");
	  if(sayMessage) a.send(sayMessage);
  }
  if(command === "set-welcome") {
	  if(message.channel.type == 'dm') return message.reply("Please only use this in guilds");
      if(!(message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_GUILD')))
      return message.reply("Sorry, you don't have permissions to use this!");
  
      if(!args[0]) return message.channel.send("You do ``"+customprefix+"set-welcome <channelID or channel name>`` example; ``"+customprefix+"set-welcome welcome`` but you can also do ``"+customprefix+"set-welcome #welcome ``");
	  let channelthingy = message.mentions.channels.first();
	  let findchannel = message.guild.channels.find('name', args.slice(0).join(' ')) || message.guild.channels.find('id', args.slice(0).join(' ')) || channelthingy;
	  if(!findchannel) return message.reply("Sorry, channel not found.. Make sure either that I can access it or that it even exists..");
	  let channel2set = findchannel.id;
  
let welcom = JSON.parse(fs.readFileSync('./welcomeid.json', 'utf8'));
	  if (!welcom[message.guild.id]) welcom[message.guild.id] = {}
	  if (!welcom[message.guild.id].notes) welcom[message.guild.id].notes = [];
		welcom[message.guild.id].notes.push(channel2set);
	  fs.writeFile('./welcomeid.json', JSON.stringify(welcom), (err) => {
	if (err) console.error(err);
	 });
	 
	  message.reply("Should be working now :)");
	  console.log(message.content);
  }
  if(command === "welcome-msg" || command === "welcome-message") {
	  if(message.channel.type == 'dm') return message.reply('http://JonHost.ml');
	  if(!message.member.hasPermission('MANAGE_GUILD')) return;
	  if(!args[0]) return message.reply("Write something..");
	  let msg2set = args.slice(0).join(' ');
	  
let welcom = JSON.parse(fs.readFileSync('./welcomemsg.json', 'utf8'));
	  if (!welcom[message.guild.id]) welcom[message.guild.id] = {}
	  if (!welcom[message.guild.id].notes) welcom[message.guild.id].notes = [];
		welcom[message.guild.id].notes.push(msg2set);
	  fs.writeFile('./welcomemsg.json', JSON.stringify(welcom), (err) => {
	if (err) console.error(err);
	 });
	  message.reply("Added :)");
  }
});

client.on("guildMemberAdd", (member, guild) => {
	let welcomechannel = JSON.parse(fs.readFileSync('./welcomeid.json', 'utf8'));
  if(welcomechannel[member.guild.id]) {
	  let msg2send = `:tada: Welcome ${member}! We're now at **${member.guild.memberCount}** members in **${member.guild.name}**. :tada: `;
	let welcomemsg = JSON.parse(fs.readFileSync('./welcomemsg.json', 'utf8'));
	if(welcomemsg[member.guild.id]) {
		if(welcomemsg[member.guild.id].notes[0]) {
msg2send = [
welcomemsg[member.guild.id].notes[0],
welcomemsg[member.guild.id].notes[1],
welcomemsg[member.guild.id].notes[2],
];
		}
	}
	if(welcomechannel[member.guild.id].notes[0]) {
	let channel2send = member.guild.channels.find('id', welcomechannel[member.guild.id].notes[0]);
	if(channel2send) {
		channel2send.send(msg2send);
	}
	}
  }
});

var playconfig = JSON.parse(fs.readFileSync('./playsettings.json', 'utf-8'));

const yt_api_key = playconfig.yt_api_key;
const bot_constroller = playconfig.bot_controller;
var guilds = {};

client.on('message', function(message) {
	if(message.channel.type == 'dm') return;
	if(message.author.bot) return;
	if(message.content.indexOf(config.prefix) !== 0) return;
	const prefix = config.prefix;
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(" ");
  const args2 = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args2.shift().toLowerCase();
	

	if (!guilds[message.guild.id]) {
        guilds[message.guild.id] = {
            queue: [],
            queueNames: [],
            isPlaying: false,
            dispatcher: null,
            voiceChannel: null,
            skipReq: 0,
            skippers: []
        };
    }
	

  if(command === "play") {
	  if (!(message.member.voiceChannel)) {
		  return message.reply("No thanks.");
	  }
	  if(!args[0]) return message.reply("Use https://www.youtube.com/watch?v= link or use a name.");
        if (message.member.voiceChannel || guilds[message.guild.id].voiceChannel != null) {
            if (guilds[message.guild.id].queue.length > 0 || guilds[message.guild.id].isPlaying) {
                getID(args, function(id) {
                    add_to_queue(id, message);
                    fetchVideoInfo(id, function(err, videoInfo) {
                        if (err) throw new Error(err);
                        message.channel.send("Added to queue: **" + videoInfo.title + "**");
                        guilds[message.guild.id].queueNames.push(videoInfo.title);						
                    });
                });
            } else {
                isPlaying = true;
                getID(args, function(id) {
                    guilds[message.guild.id].queue.push(id);
                    playMusic(id, message);
                    fetchVideoInfo(id, function(err, videoInfo) {
                        if (err) throw new Error(err);
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
								message.channel.send(`Now playing **${videoInfo.title}**`);
                    });
                });
            }
        } else {
            message.reply("You need to be in a voice channel!");
        }
  }
  if(command === "skip") {
	  if (!(message.member.voiceChannel)) {
		  return message.reply("No thanks.");
	  }
        if (guilds[message.guild.id].skippers.indexOf(message.author.id) === -1) {
            guilds[message.guild.id].skippers.push(message.author.id);
            guilds[message.guild.id].skipReq++;
                skip_song(message);
                message.reply(" your skip has been acknowledged. Skipping now!");
  }
  }
  if(command === "queue") {
        var message2 = "```";
        for (var i = 0; i < guilds[message.guild.id].queueNames.length; i++) {
            var temp = (i + 1) + ": " + guilds[message.guild.id].queueNames[i] + (i === 0 ? "**(Current Song)**" : "") + "\n";
            if ((message2 + temp).length <= 2000 - 3) {
                message2 += temp;
            } else {
                message2 += "```";
                message.channel.send(message2);
                message2 = "```";
            }
        }
        message2 += "```";
        message.channel.send(message2);
  }
  if(command === "pause") {
	  if(!message.member.hasPermission('MANAGE_GUILD')) return;
	  pause_song(message);
	  message.react('⏸');
  }
  if(command === "resume") {
	  if(!message.member.hasPermission('MANAGE_GUILD')) return;
	  resume_song(message);
	  message.react('▶');
  }
  if(command === "volume") {
	  if(!message.member.hasPermission('MANAGE_GUILD')) return;
	  if(!args[0]) return message.reply(guilds[message.guild.id].dispatcher._volume);
	  let reason = args2.slice(0).join(' ');
	  if(reason.includes("%")) {
		  let noob = reason.indexOf("%");
		  for (i = 0; i<20; i++) {
			  let bajs = reason.indexOf((noob-i));
			  if (bajs==" ") {
				  volume2 = i;
				  i = 20;
			  }
		  }
		  let b = parseInt((reason.split(volume2, noob)))/100;
		  console.log(b);
		  let abcde = guilds[message.guild.id].dispatcher.setVolume(b);
		  return abcde;
	  }
	  guilds[message.guild.id].dispatcher.setVolume(reason);
	  message.react('🔉');
  }
});

client.on('ready', function() {
    console.log("I am ready!");
});

function skip_song(message) {
    guilds[message.guild.id].dispatcher.end();
}

function playMusic(id, message) {
    guilds[message.guild.id].voiceChannel = message.member.voiceChannel;



    guilds[message.guild.id].voiceChannel.join().then(function(connection) {
        stream = ytdl("https://www.youtube.com/watch?v=" + id, {
            filter: 'audioonly'
        });
        guilds[message.guild.id].skispReq = 0;
        guilds[message.guild.id].skippers = [];

        guilds[message.guild.id].dispatcher = connection.playStream(stream);
        guilds[message.guild.id].dispatcher.on('end', function() {
            guilds[message.guild.id].skipReq = 0;
            guilds[message.guild.id].skippers = [];
            guilds[message.guild.id].queue.shift();
            guilds[message.guild.id].queueNames.shift();
            if (guilds[message.guild.id].queue.length === 0) {
                guilds[message.guild.id].queue = [];
                guilds[message.guild.id].queueNames = [];
                guilds[message.guild.id].isPlaying = false;
            } else {
                setTimeout(function() {
                    playMusic(guilds[message.guild.id].queue[0], message);
                }, 500);
            }
        });
    });
}

function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYouTubeID(str));
    } else {
        search_video(str, function(id) {
            cb(id);
        });
    }
}

function add_to_queue(strID, message) {
    if (isYoutube(strID)) {
        guilds[message.guild.id].queue.push(getYouTubeID(strID));
    } else {
        guilds[message.guild.id].queue.push(strID);
    }
}

function search_video(query, callback) {
    ytrequest("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
        if(!json.items[0]) callback("3_-a9nVZYjk");
        else {
            callback(json.items[0].id.videoId);
        }
    });
}

function isYoutube(str) {
    return str.toLowerCase().indexOf("youtube.com") > -1;
}

function pause_song(message) {
    guilds[message.guild.id].dispatcher.pause();
}

function resume_song(message) {
    guilds[message.guild.id].dispatcher.resume();
}