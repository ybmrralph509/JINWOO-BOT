module.exports = async (context) => {
    const { client, m, text, fetchJson } = context;

    try {
        if (!text) {
            return m.reply('Provide TikTok username. eg malvinquotes');
        }

        const query = encodeURIComponent(text);
        const response = await fetchJson(`https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=${query}`);

        if (!response.ok) {
            return m.reply('Error fetching data from API.');
        }

        const results = response.data; // Adjust according to actual response structure

        if (!results || results.length < 1 || !results[0].nowm) {
            return m.reply('Invalid username or no results found.');
        }

        const item = results[0]; 
        const title = item.title || 'N/A';
        const info = item.url || 'N/A';
        const region = item.region || 'N/A';
        const creator = item.creator || 'N/A';
        const id = item.nowm; 
        const imageUrl = item.imageUrl || ''; 

        const message = `*𝐀𝐊𝐈𝐎 𝐌𝐃 𝐓𝐈𝐊𝐓𝐎𝐊 𝐒𝐄𝐀𝐑𝐂𝐇*\n\n𝕋𝕀𝕋𝕃𝔼: ${title}\n𝔻𝕖𝕤𝕔: ${info}\nℝ𝔼𝔾𝕀𝕆ℕ: ${region}\nℂℝ𝔼𝔸𝕋𝕆ℝ: ${creator}\nId: ${id}`;

        const options = { quoted: m };
        if (imageUrl) {
            await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, options);
        } else {
            await client.sendMessage(m.chat, { text: message }, options);
        }
    } catch (error) {
        console.error("Error occurred:", error);
        return m.reply('An error occurred while processing your request. Please try again later.');
    }
};
