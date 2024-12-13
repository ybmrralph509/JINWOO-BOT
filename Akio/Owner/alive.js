module.exports = async (context) => {
  const { client, m } = context;

  // Sound file URLs
  const audioFiles = [
    'https://cdn.jsdelivr.net/gh/Keithkeizzah/KEITH-MD2@main/data/broken.mp3',
    'https://cdn.jsdelivr.net/gh/Keithkeizzah/KEITH-MD2@main/data/AUD-20241119-WA0011.mp3',
    'https://cdn.jsdelivr.net/gh/Keithkeizzah/KEITH-MD2@main/data/home.mp3',
    'https://cdn.jsdelivr.net/gh/Keithkeizzah/KEITH-MD2@main/data/broken.mp3',
    'https://cdn.jsdelivr.net/gh/Keithkeizzah/KEITH-MD2@main/data/antidote.m4a'
  ];

  // Randomly pick an audio file
  const vn = audioFiles[Math.floor(Math.random() * audioFiles.length)];

  // Other variables
  const name = m.pushName || client.getName(m.sender);
  const url = 'https://github.com/kingmalvn/AKIO-MD';
  const murl = 'https://whatsapp.com/channel/0029VayTeumIN9io4KVkqx28';
  const img = 'https://files.catbox.moe/qeshxp.jpg';

  // Constructing the contact message
  const con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split('@')[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '263714757857@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: name,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };

  // Audio file message with external ad reply info
  const doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'shizo',
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'AKIO MD Alive message',
        body: '> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜ ʟᴏʀᴅ*',
        thumbnailUrl: img,
        sourceUrl: murl,
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };

  // Send the message
  await client.sendMessage(m.chat, doc, { quoted: con });
};
