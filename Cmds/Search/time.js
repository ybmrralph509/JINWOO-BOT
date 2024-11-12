module.exports = async (context) => {
    const { client, m, text } = context;

    try {
        // Check if an element name was provided
        if (!text) {
            return m.reply('Provide a county name or country.');
        }

        // Fetch element data from the API
        const response = await fetch(`https://levanter.onrender.com/time?code=${text}`);
        const data = await response.json();

        // Check if the element exists
        if (!data || !data.result || data.result.length === 0) {
            return m.reply('Element not found. Type elementlist to check all periodic elements.');
        }

        const { name, time, timeZone } = data.result[0];

        // Create the message
        const message = `𝙻𝚒𝚟𝚎 𝚃𝚒𝚖𝚎 𝚒𝚗 *${name}*:\n\n*𝙳𝚊𝚝𝚎 & 𝚃𝚒𝚖𝚎:* ${time}\n*𝚃𝚒𝚖𝚎𝚉𝚘𝚗𝚎:* ${timeZone}\n\n *𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘼𝙆𝙄𝙊 𝙈𝘿*`;

        // Send the message
        await client.sendMessage(m.chat, { text: message }, { quoted: m });

    } catch (error) {
        console.log("Error occurred:", error);
        m.reply('An error occurred while fetching the data. Please try again later.');
    }
};
