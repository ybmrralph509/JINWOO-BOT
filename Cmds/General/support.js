module.exports = async (context) => {
  const { client, m } = context;


  const messageCaption = `
   *Follow my channels and join my  groups for more updates*
   
 ╭━━〔 *ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ🪀* 〕━━┈⊷
│▸      ──────────
│▸ *Channel*
│▸ https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z
│▸ 
│▸ *Instagram* 
│▸ https://Instagram.com/@malvinking20
│▸ 
│▸ *Telegram* 
│▸ https://t.me/malvintech 
│▸ 
│▸ *YouTube*
│▸ https://youtube.com/@malvintech
╰──────────────┈⊷
  `;

  // Prepare the image URL
  const image = {
    url: "https://i.imgur.com/SoM44K7.jpeg'"
  };

  // Prepare the message object
  const message = {
    image: image,
    caption: messageCaption
  };

  // Send the message
  await client.sendMessage(m.chat, message, { quoted: m });
};

