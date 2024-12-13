module.exports = async (context) => {
  const { client, m } = context;


  const messageCaption = `
   *Follow my channels and join my  groups for more updates*
   
 ╭━━〔 *ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ🪀* 〕━━┈⊷
│▸      ──────────
│▸ *Channel*
│▸ https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z
│▸ 
│▸ https://whatsapp.com/channel/0029VayTeumIN9io4KVkqx28
│▸ 
│▸ *Instagram* 
│▸ https://Instagram.com/@malvinking20
│▸ 
│▸ *Telegram* 
│▸ https://t.me/malvintech 
│▸ 
│▸ *YouTube*
│▸ https://youtube.com/@malvintech2
╰──────────────┈⊷
  `;

  // Prepare the image URL
  const image = {
    url: "https://files.catbox.moe/qeshxp.jpg"
  };

  // Prepare the message object
  const message = {
    image: image,
    caption: messageCaption
  };

  // Send the message
  await client.sendMessage(m.chat, message, { quoted: m });
};

