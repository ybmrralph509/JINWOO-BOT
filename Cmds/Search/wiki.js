module.exports = async (context) => {

const { client, m, text } = context;



const wiki = require('wikipedia');

        try {
            if (!text) return m.reply(`Provide the term to search,\nE.g What is JavaScript!`)
            const con = await wiki.summary(text);
            const texa = `𝕋𝕀𝕋𝕃𝔼:- ${con.title}
                  
𝔻𝕖𝕤𝕔:- ${con.description}

𝕊𝕦𝕞𝕞𝕒𝕣𝕪:- ${con.extract}

𝕌ℝ𝕃:- ${con.content_urls.mobile.page}
        `
            m.reply(texa)
        } catch (err) {
            console.log(err)
            return m.reply(`Got 404. I did not find anything!`)
        }
    }