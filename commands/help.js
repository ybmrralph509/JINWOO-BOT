const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
╭─────━─────────
┋🤖 ʙᴏᴛɴᴀᴍᴇ : *${settings.botName || 'ᴊɪɴᴡᴏᴏ ʙᴏᴛ'}*  
┋⚙ ᴠᴇʀsɪᴏɴ: *${settings.version || '1.0.0'}*
┇👤 ᴏᴡɴᴇʀ ${settings.botOwner || 'ᴍᴀʟᴠɪɴ ᴋɪɴɢ'}
┇🪀 ʏᴛ : ${global.ytch}
╰┈┉┉┉┉┉┉┈┈┈┈┈┉┉┉┉┉┉┈┈┈

     *ᴀᴠᴀɪʟᴀʙʟᴇ ᴄᴏᴍᴍᴀɴᴅs:⇣*

    🌐 ᏀᎬΝᎬᎡᎪᏞ ᏟᎷᎠՏ 🌐
╭──────────────
┊▸ .help or .menu
┊▸ .ping
┊▸ .alive
┊▸ .tts <text>
┊▸ .owner
┊▸ .joke
┊▸ .quote
┊▸ .fact
┊▸ .weather <city>
┊▸ .news
┊▸ .attp <text>
┊▸ .lyrics <song_title>
┊▸ .8ball <question>
┊▸ .groupinfo
┊▸ .staff or .admins 
┊▸ .vv
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

    🎨 ᏆᎷᎪᏀᎬ ᏟᎷᎠՏ 🎨
╭──────────────
┊▸ .blur <image>
┊▸ .simage <reply to sticker>
┊▸ .sticker <reply to image>
┊▸ .meme
┊▸ .take <packname> 
┊▸ .emojimix <emj1>+<emj2>
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
      🪀 ᎪᎠᎷᏆΝ ᏟᎷᎠ 🪀
╭──────────────
┊▸ .ban @user
┊▸ .promote @user
┊▸ .demote @user
┊▸ .mute <minutes>
┊▸ .unmute
┊▸ .delete or .del
┊▸ .kick @user
┊▸ .warnings @user
┊▸ .warn @user
┊▸ .antilink
┊▸ .antibadword
┊▸ .clear
┊▸ .tag <message>
┊▸ .tagall
┊▸ .chatbot
┊▸ .resetlink
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

     👤 ϴᏔΝᎬᎡ ᏟᎷᎠ 👤
╭──────────────
┊▸ .mode
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

    🔗 ᏀᏆͲᎻႮᏴ ᏟᎷᎠՏ🔗
╭──────────────
┊▸ .git
┊▸ .github
┊▸ .sc
┊▸ .script
┊▸ .repo
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

     🎮 ᏀᎪᎷᎬ ᏟᎷᎠՏ 🎮
╭──────────────
┊▸ .tictactoe @user
┊▸ .hangman
┊▸ .guess <letter>
┊▸ .trivia
┊▸ .answer <answer>
┊▸ .truth
┊▸ .dare
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

       🎯 ҒႮΝ ᏟᎷᎠ 🎯
╭──────────────
┊▸ .compliment @user
┊▸ .insult @user
┊▸ .flirt 
┊▸ .character @user
┊▸ .wasted @user
┊▸ .ship @user
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

   🎯 ᎠϴᏔΝᏞϴᎠ ᏟᎷᎠ 🎯
╭─────────────
┊▸ .play <song_name>
┊▸ .song <song_name>
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈


Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/jinwoo.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Jinwoo bot by Malvin King',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'Jinwoo bot by Malvin King',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
