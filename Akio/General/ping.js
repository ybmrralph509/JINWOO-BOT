module.exports = async (context) => {
    const { client, m, Keithspeed } = context;

    try {
        // Prepare the response text with speed data
        const menuText = `𝙰𝙺𝙸𝙾 𝙼𝙳 𝖘𝖕𝖊𝖊𝖉\n${Keithspeed.toFixed(4)}𝐌\𝐒`;

        // Send message with contextInfo and mention the sender
        await client.sendMessage(m.chat, {
            text: menuText,
            contextInfo: {
                mentionedJid: [m.sender], // Mention the sender
                externalAdReply: {
                    title: "🌟 𝙰𝙺𝙸𝙾 𝙼𝙳 ✨",
                    body: "> ᴛᴇᴄʜ ʟᴏʀᴅ",
                    sourceUrl: "https://whatsapp.com/channel/0029VayTeumIN9io4KVkqx28",
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        });
    } catch (error) {
        console.error("Error sending message:", error);
        m.reply('An error occurred while sending the menu.');
    }
};
