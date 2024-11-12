module.exports = async (context) => {
    const { client, m, text } = context; // Removed duplicate 'm'
    const yts = require("yt-search");

    try {
        if (!text) {
            return m.reply("Please provide a media query.");
        }

        const info = await yts(text);
        const results = info.videos;

        if (!results.length) {
            return m.reply("No results found.");
        }

        let captions = "";
        for (let i = 0; i < Math.min(results.length, 10); i++) {
            captions += `----------------\n𝕋𝕀𝕋𝕃𝔼: ${results[i].title}\n𝕋𝕀𝕄𝔼: ${results[i].timestamp}\n𝕌ℝ𝕃: ${results[i].url}\n`;
        }
        captions += "\n======\n*𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙰𝙺𝙸𝙾 𝙼𝙳";

        await client.sendMessage(m.chat, {
            image: { url: results[0].thumbnail },
            caption: captions
        }, { quoted: m });

    } catch (error) {
        m.reply(`Error: ${error.message}`); // Simplified error message
    }
};
