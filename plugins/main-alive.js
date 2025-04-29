const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["status", "online", "a"],
    desc: "Check bot is alive or not",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const status = `

        ╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」*
*│*👤 *`User`*: ${pushname}
*│*✒️ *`Prefix`*: [${config.PREFIX}]
*│*🧬 *`Version`*: 1.0.0
*│*🎈 *`Platform`*: github
*│*📳 *Mode:* [${config.MODE}]
*│*📡 *`Host`*: ${os.hostname()}
*│*📟 *`Uptime`*: ${runtime(process.uptime())}
*│*📂 *`Memory`*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*╰──────────●●►*

> ${config.DESCRIPTION}`;

        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG_URL },
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411607943828@newsletter',
                    newsletterName: '𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰 〽️𝙳',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("🦠 Alive Error:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
