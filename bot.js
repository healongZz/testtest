const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const prefix = "..";

client.commands = new Discord.Collection();

fs.readdir("./cmd/", (err, file) => {
if(err) console.error(err);

let jsfiles = files.filter(f => f.split(".").pop() === "js");
if jsfile.length <= 0) {
console.log("No Command To Load ");
return;
}

client.login(process.env.TOKEN);
