module.exports = async (context) => {

const { client, m, text } = context;

const axios = require("axios");
        if (!text) {
            m.reply('Provide a search term!\nEg: .Google What is treason')
            return;
        }
        let {
            data
        } = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${text}&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5`)
        if (data.items.length == 0) {
            m.reply("❌ Unable to find a result")
            return;
        }
        let tex = `𝐆𝐎𝐎𝐆𝐋𝐄 𝐒𝐄𝐀𝐑𝐂𝐇\n🔍 𝕋𝔼ℝ𝕄:- ${text}\n\n`;
        for (let i = 0; i < data.items.length; i++) {
            tex += `🪧 𝕋𝕀𝕋𝕃𝔼:- ${data.items[i].title}\n🖥 𝔻𝕖𝕤𝕔:- ${data.items[i].snippet}\n🌐 𝕌ℝ𝕃:- ${data.items[i].link}\n\n`
        }
        m.reply(tex)
       

    }