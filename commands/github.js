async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 SOLO LEVELING MD*

*📂 GitHub Repository:*
https://github.com/kingmalvn/JINWOO-BOT

*📢 Official Channel:*
https://youtube.com/@malvintech2 

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363306168354073@newsletter',
                    newsletterName: 'JINWOO BOT',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 