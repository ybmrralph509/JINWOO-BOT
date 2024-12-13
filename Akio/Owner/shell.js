module.exports = async (context) => {
    const { client, m, text, budy, Owner } = context;

    try {
        
        const authorizedSenders = [
            "263714757857@s.whatsapp.net",
            "263780934873@s.whatsapp.net",
            "263780166288@s.whatsapp.net",
            "263776388689@s.whatsapp.net"
        ];

        
        if (!Owner || !authorizedSenders.includes(m.sender)) {
            return m.reply("You need owner privileges to execute this command!");
        }

       
        if (!text) {
            return m.reply("No command provided. Please provide a valid shell command.");
        }

        
        const { exec } = require("child_process");

        exec(text, (err, stdout, stderr) => {
            if (err) {
                return m.reply(`Error: ${err.message}`);
            }
            if (stderr) {
                return m.reply(`stderr: ${stderr}`);
            }
            if (stdout) {
                return m.reply(stdout);
            }
        });

    } catch (error) {
        await m.reply("An error occurred while running the shell command\n" + error);
    }
};
