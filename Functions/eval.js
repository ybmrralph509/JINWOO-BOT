module.exports = async (client, m, Owner, budy, fetchJson, store) => {


const { proto } = require("@whiskeysockets/baileys");

if (budy && budy.startsWith('>')) {
  if (!Owner) return m.reply("only for my owner or ᴛᴇᴄʜ ʟᴏʀᴅ to execute this command🚫")
  try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await m.reply(evaled); 
   } catch (err) { 
 await m.reply(String(err)); 
   } 
 } 

}

