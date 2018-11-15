const Discord = require('discord.js');
const bot10 = new Discord.Client();
const ID = '505101712839671838';

bot7.on('ready', () => {
  console.log(`Starting....`);
});


bot10.on('message', message => {
  if(message.content.startsWith(`f-d`)){
    if(message.author.id !== ID) return;
    message.channel.send('#daily');
  }
});


bot10.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    if(message.author.id !== ID) return;
    message.channel.send('#rep <@505101712839671838>');
  }
});


bot10.on('ready', () => {
  let c = bot10.guilds.get("507972785650401301").channels.find(c => c.id == "510732026949795852");
  setInterval(function() {
    c.send("10th Lover")
  }, 900);
});


bot10.on('message', message => {
  if(message.author.bot) return;
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`:angry: | What do you want us to say?`);
  if(message.content.startsWith(`f-s`)){
    if(message.author.id !== ID) return;
    message.channel.send(args.join(" "))
  }
});


bot10.login(process.env.FB10)
//////////////////////////////////////////////////////////

const bot11 = new Discord.Client();

bot11.on('message', message => {
  if(message.content.startsWith(`f-d`)){
    if(message.author.id !== ID) return;
    message.channel.send('#daily');
  }
});


bot11.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    if(message.author.id !== ID) return;
    message.channel.send('#rep <@505101712839671838>');
  }
});


bot11.on('ready', () => {
  let c = bot11.guilds.get("507972785650401301").channels.find(c => c.id == "510732026949795852");
  setInterval(function() {
    c.send("11th Lover")
  }, 900);
});


bot11.on('message', message => {
  if(message.author.bot) return;
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`:angry: | What do you want us to say?`);
  if(message.content.startsWith(`f-s`)){
    if(message.author.id !== ID) return;
    message.channel.send(args.join(" "))
  }
});


bot11.login(process.env.FB11)
//////////////////////////////////////////////////////////

const bot12 = new Discord.Client();

bot12.on('message', message => {
  if(message.content.startsWith(`f-d`)){
    if(message.author.id !== ID) return;
    message.channel.send('#daily');
  }
});


bot12.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    if(message.author.id !== ID) return;
    message.channel.send('#rep <@505101712839671838>');
  }
});


bot12.on('ready', () => {
  let c = bot12.guilds.get("507972785650401301").channels.find(c => c.id == "510732026949795852");
  setInterval(function() {
    c.send("12th Lover")
  }, 900);
});


bot12.on('message', message => {
  if(message.author.bot) return;
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`:angry: | What do you want us to say?`);
  if(message.content.startsWith(`f-s`)){
    if(message.author.id !== ID) return;
    message.channel.send(args.join(" "))
  }
});


bot12.login(process.env.FB12)
//////////////////////////////////////////////////////////
