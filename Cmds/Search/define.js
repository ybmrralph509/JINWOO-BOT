module.exports = async (context) => {
    const { client, m, text } = context;

    try {
        if (!text) {
            return m.reply('Please provide a term.');
        }

        const term = encodeURIComponent(text);
        const response = await fetch(`http://api.urbandictionary.com/v0/define?term=${term}`);
        const data = await response.json();

        if (!data.list || data.list.length === 0) {
            return m.reply('No definitions found for that term.');
        }

        const definition = data.list[0];
        const definitionMessage = `
            𝚆𝙾𝚁𝙳: ${definition.word}
            𝙳𝙴𝙵𝙸𝙽𝙸𝚃𝙸𝙾𝙽: ${definition.definition.replace(/\[|\]/g, '')}
            𝙴𝚇𝙰𝙼𝙿𝙻𝙴: ${definition.example.replace(/\[|\]/g, '')}
        `;

        await client.sendMessage(m.chat, { text: definitionMessage }, { quoted: m });

    } catch (error) {
        console.error("Error occurred:", error);
        m.reply('An error occurred while fetching the data. Please try again later.');
    }
};
