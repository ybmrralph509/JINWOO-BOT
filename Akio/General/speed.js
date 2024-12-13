module.exports = async (context) => {
    const { client, m, dreadedspeed } = context;

    try {
        // Contact message to send first
        let fgg = {
            key: { remoteJid: m.chat, participant: `0@s.whatsapp.net` },
            message: {
                contactMessage: {
                    displayName: `𝙰𝙺𝙸𝙾 𝙼𝙳`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:𝙰𝙺𝙸𝙾 𝙼𝙳\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                },
            },
        };

        // Get the latency
        let latency = dreadedspeed.toFixed(4);

        // Send the Ping message with quoted contact message
        await client.sendMessage(m.chat, {
            text: `*Ping:* *${latency} ms*`,
            quoted: fgg
        });

    } catch (error) {
        // Handle any errors that might occur
        console.error('Error:', error);
    }
};
