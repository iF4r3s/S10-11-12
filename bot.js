const Discord = require('discord.js');
const bot10 = new Discord.Client();

bot10.on('ready', () => {
  console.log('Logged in as S10-11-12')
});


bot10.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot10.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@505101712839671838>`)
  }
});


bot10.on('ready', () => {
  let ch = bot10.guilds.get("507972785650401301").channels.find(c => c.id == "510732026949795852");
  setInterval(function() {
    ch.send("11th Lover")
  }, 900);
});


bot10.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f10"){
    message.channel.send(args.join(" "))
  }
});


bot10.login(process.env.FB10);
////////////////////////
////////////////////////
const bot11 = new Discord.Client();
bot11.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot11.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@505101712839671838>`)
  }
});


bot11.on('ready', () => {
  let ch = bot11.guilds.get("507972785650401301").channels.find(c => c.id == "510732026949795852");
  setInterval(function() {
    ch.send("11th Lover")
  }, 900);
});


bot11.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f11"){
    message.channel.send(args.join(" "))
  }
});


bot11.login(process.env.FB11);
////////////////////////
////////////////////////
const bot12 = new Discord.Client();
bot12.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot12.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@505101712839671838>`)
  }
});


bot12.on('ready', () => {
  let ch = bot12.guilds.get("507972785650401301").channels.find(c => c.id == "510732026949795852");
  setInterval(function() {
    ch.send("12th Lover")
  }, 900);
});


bot12.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f12"){
    message.channel.send(args.join(" "))
  }
});


bot12.login(process.env.FB12);
