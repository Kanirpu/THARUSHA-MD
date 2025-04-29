const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `*╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」*
*│*👤 *User*: ${pushname}
*│*✒️ *Prefix*: [${config.PREFIX}]
*│*🧬 *Version*: 1.0.0
*│*🎈 *Platform*: github
*│*📳 *Mode:* [${config.MODE}]
*│*📡 *Host*: ${os.hostname()}
*│*📟 *Uptime*: ${runtime(process.uptime())}
*│*📂 *Memory*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*╰──────────●●►*

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛʜᴀʀᴜ ᴏꜰᴄ`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/x8q6HFr1/9862.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411607943828@newsletter',
                    newsletterName: 'ᴛʜᴀʀᴜ ᴏꜰᴄ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
