const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu5",
    desc: "Show interactive menu system",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const menuCaption = `*╭━━━〔 ${config.BOT_NAME} 〕━━━●●►*
*┃ 👑 Owner : ${config.OWNER_NAME}*
*┃ 🤖 Baileys : Multi Device*
*┃ 💻 Type : NodeJs*
*┃ 🚀 Platform : Heroku*
*┃ ⚙️ Mode : [${config.MODE}]*
*┃ 🔣 Prefix : [${config.PREFIX}]*
*┃ 🏷️ Version : 1.0.0 Bᴇᴛᴀ*
*╰━━━━━━━━━━━━━━●●►*

*🔢 ʀᴇᴘʟʏ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʙᴇʟᴏᴡ*🗿

*➀ ➽ 📥 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*
*❷ ➽ 👥 ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
*➂ ➽ 😄 ꜰᴜɴ ᴍᴇɴᴜ*
*➍ ➽ 👑 ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
*➄ ➽ 🤖 ᴀɪ ᴍᴇɴᴜ*
*➏ ➽ 🎎 ᴀɴɪᴍᴀ ᴍᴇɴᴜ*
*➆ ➽ 🔄 ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
*➑ ➽ 📌 ᴏᴛʜᴇʀ ᴍᴇɴᴜ*
*➈ ➽ 💞 ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*
*➓ ➽ 🏠 ᴍᴀɪɴ ᴍᴇɴᴜ*

「 🍄 」 「 ɢɪᴛʜᴜʙ ʀᴇᴘᴏ 」:* https://github.com/Kanirpu/THARUSHA-MD

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ*`;

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363411607943828@newsletter',
                newsletterName: '𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰 〽️𝙳',
                serverMessageId: 143
            }
        };

        // Function to send menu image with timeout
        const sendMenuImage = async () => {
            try {
                return await conn.sendMessage(
                    from,
                    {
                        image: { url: config.MENU_IMAGE_URL },
                        caption: menuCaption,
                        contextInfo: contextInfo
                    },
                    { quoted: mek }
                );
            } catch (e) {
                console.log('Image send failed, falling back to text');
                return await conn.sendMessage(
                    from,
                    { text: menuCaption, contextInfo: contextInfo },
                    { quoted: mek }
                );
            }
        };

        // Function to send menu audio with timeout
        const sendMenuAudio = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Small delay after image
               /* await conn.sendMessage(from, {
                    audio: { url: 'https://github.com/JawadYT36/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
                    mimetype: 'audio/mp4',
                    ptt: true,
                }, { quoted: mek });*/
            } catch (e) {
                console.log('Audio send failed, continuing without it');
            }
        };

        // Send image first, then audio sequentially
        let sentMsg;
        try {
            // Send image with 10s timeout
            sentMsg = await Promise.race([
                sendMenuImage(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Image send timeout')), 10000))
            ]);
            
            // Then send audio with 1s delay and 8s timeout
            await Promise.race([
                sendMenuAudio(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Audio send timeout')), 8000))
            ]);
        } catch (e) {
            console.log('Menu send error:', e);
            if (!sentMsg) {
                sentMsg = await conn.sendMessage(
                    from,
                    { text: menuCaption, contextInfo: contextInfo },
                    { quoted: mek }
                );
            }
        }
        
        const messageID = sentMsg.key.id;

        // Menu data (complete version)
        const menuData = {
            '1': {
                title: "📥 *Download Menu* 📥",
                content: `╭━━〔 📥 *DOWNLOAD MENU* 〕━━➣
┃◈
┃◈ 🟦 facebook
┃◈ 📁 mediafire
┃◈ 🎵 tiktok
┃◈ 🐦 twitter
┃◈ 📷 insta
┃◈ 📦 apk
┃◈ 🖼️ img
┃◈ ▶️ tt2
┃◈ 📌 pins
┃◈ 🔄 apk2
┃◈ 🔵 fb2
┃◈ 📍 pinterest
┃◈ 🎶 spotify
┃◈ 🎧 play
┃◈ 🎧 play2
┃◈ 🔉 audio
┃◈ 🎬 video
┃◈ 📹 video2
┃◈ 🎵 ytmp3
┃◈ 📹 ytmp4
┃◈ 🎶 song
┃◈ 🎬 darama
┃◈ ☁️ gdrive
┃◈ 🌐 ssweb
┃◈ 🎵 tiks
╰━━━━━━━━━━━━━━━━━━━➣
> ${config.DESCRIPTION}`,
                image: true
            },
            '2': {
                title: "👥 *Group Menu* 👥",
                content: `╭━━〔 👥 *GROUP MENU* 〕━━➣
┃◈
┃◈ 🔗 grouplink
┃◈ 🚪 kickall
┃◈ 🚷 kickall2
┃◈ 🚫 kickall3
┃◈ ➕ add
┃◈ ➖ remove
┃◈ 👢 kick
┃◈ ⬆️ promote
┃◈ ⬇️ demote
┃◈ 🚮 dismiss
┃◈ 🔄 revoke
┃◈ 👋 setgoodbye
┃◈ 🎉 setwelcome
┃◈ 🗑️ delete
┃◈ 🖼️ getpic
┃◈ ℹ️ ginfo
┃◈ ⏳ disappear on
┃◈ ⏳ disappear off
┃◈ ⏳ disappear 7D,24H
┃◈ 📝 allreq
┃◈ ✏️ updategname
┃◈ 📝 updategdesc
┃◈ 📩 joinrequests
┃◈ 📨 senddm
┃◈ 🏃 nikal
┃◈ 🔇 mute
┃◈ 🔊 unmute
┃◈ 🔒 lockgc
┃◈ 🔓 unlockgc
┃◈ 📩 invite
┃◈ #️⃣ tag
┃◈ 🏷️ hidetag
┃◈ @️⃣ tagall
┃◈ 👔 tagadmins
╰━━━━━━━━━━━━━━━━━━━➣


> ${config.DESCRIPTION}`,
                image: true
            },
            '4': {
                title: "👑 *Owner Menu* 👑",
                content: `╭━━〔 👑 *OWNER MENU* 〕━━➣
┃◈
┃◈ 👑 owner
┃◈ 📜 menu
┃◈ 📜 menu2
┃◈ 📊 vv
┃◈ 📋 listcmd
┃◈ 📚 allmenu
┃◈ 📦 repo
┃◈ 🚫 block
┃◈ ✅ unblock
┃◈ 🖼️ fullpp
┃◈ 🖼️ setpp
┃◈ 🔄 restart
┃◈ ⏹️ shutdown
┃◈ 🔄 updatecmd
┃◈ 💚 alive
┃◈ 🏓 ping
┃◈ 🆔 gjid
┃◈ 🆔 jid
╰━━━━━━━━━━━━━━━━━━━➣
> ${config.DESCRIPTION}`,
                image: true
            },
            '5': {
                title: "🤖 *AI Menu* 🤖",
                content: `╭━━〔 🤖 *AI MENU* 〕━━➣
┃◈
┃◈ 🧠 ai
┃◈ 🤖 gpt3
┃◈ 🤖 gpt2
┃◈ 🤖 gptmini
┃◈ 🤖 gpt
┃◈ 🔵 meta
┃◈ 📦 blackbox
┃◈ 🌈 luma
┃◈ 🎧 dj
┃◈ 🧠 gpt4
┃◈ 🔍 bing
┃◈ 🎨 imagine
┃◈ 🖼️ imagine2
┃◈ 🤖 copilot
╰━━━━━━━━━━━━━━━━━━━➣
> ${config.DESCRIPTION}`,
                image: true
            },
            '6': {
                title: "🎎 *Anime Menu* 🎎",
                content: `╭━━〔 🎎 *ANIME MENU* 〕━━➣
┃◈
┃◈ 🤬 fack
┃◈ ✅ truth
┃◈ 😨 dare
┃◈ 🐶 dog
┃◈ 🐺 awoo
┃◈ 👧 garl
┃◈ 👰 waifu
┃◈ 🐱 neko
┃◈ 🧙 megnumin
┃◈ 🐱 neko
┃◈ 👗 maid
┃◈ 👧 loli
┃◈ 🎎 animegirl
┃◈ 🎎 animegirl1
┃◈ 🎎 animegirl2
┃◈ 🎎 animegirl3
┃◈ 🎎 animegirl4
┃◈ 🎎 animegirl5
┃◈ 🎬 anime1
┃◈ 🎬 anime2
┃◈ 🎬 anime3
┃◈ 🎬 anime4
┃◈ 🎬 anime5
┃◈ 📰 animenews
┃◈ 🦊 foxgirl
┃◈ 🍥 naruto
╰━━━━━━━━━━━━━━━━━━━➣
> ${config.DESCRIPTION}`,
                image: true
            },
            '7': {
                title: "🔄 *Convert Menu* 🔄",
                content: `╭━━〔 🔄 *CONVERT MENU* 〕━━➣
┃◈
┃◈ 🏷️ sticker
┃◈ 🏷️ sticker2
┃◈ 😀 emojimix
┃◈ ✨ fancy
┃◈ 🖼️ take
┃◈ 🎵 tomp3
┃◈ 🗣️ tts
┃◈ 🌐 trt
┃◈ 🔢 base64
┃◈ 🔠 unbase64
┃◈ 010 binary
┃◈ 🔤 dbinary
┃◈ 🔗 tinyurl
┃◈ 🌐 urldecode
┃◈ 🌐 urlencode
┃◈ 🌐 url
┃◈ 🔁 repeat
┃◈ ❓ ask
┃◈ 📖 readmore
╰━━━━━━━━━━━━━━━━━━━➣
> ${config.DESCRIPTION}`,
                image: true
            },
            '8': {
                title: "📌 *Other Menu* 📌",
                content: `╭━━〔 ℹ️ *OTHER MENU* 〕━━➣
┃◈
┃◈ 🕒 timenow
┃◈ 📅 date
┃◈ 🔢 count
┃◈ 🧮 calculate
┃◈ 🔢 countx
┃◈ 🎲 flip
┃◈ 🪙 coinflip
┃◈ 🎨 rcolor
┃◈ 🎲 roll
┃◈ ℹ️ fact
┃◈ 💻 cpp
┃◈ 🎲 rw
┃◈ 💑 pair
┃◈ 💑 pair2
┃◈ 💑 pair3
┃◈ ✨ fancy
┃◈ 🎨 logo <text>
┃◈ 📖 define
┃◈ 📰 news
┃◈ 🎬 movie
┃◈ ☀️ weather
┃◈ 📦 srepo
┃◈ 🤬 insult
┃◈ 💾 save
┃◈ 🌐 wikipedia
┃◈ 🔑 gpass
┃◈ 👤 githubstalk
┃◈ 🔍 yts
┃◈ 📹 ytv
╰━━━━━━━━━━━━━━━━━━━➣
> ${config.DESCRIPTION}`,
                image: true
            },
            '9': {
                title: "💞 *Reactions Menu* 💞",
                content: `╭━━〔 🎭 *REACTIONS MENU* 〕━━➣
┃◈
┃◈ 👊 bully @tag
┃◈ 🤗 cuddle @tag
┃◈ 😢 cry @tag
┃◈ 🤗 hug @tag
┃◈ 🐺 awoo @tag
┃◈ 💋 kiss @tag
┃◈ 👅 lick @tag
┃◈ 🖐️ pat @tag
┃◈ 😏 smug @tag
┃◈ 🔨 bonk @tag
┃◈ 🚀 yeet @tag
┃◈ 😊 blush @tag
┃◈ 😄 smile @tag
┃◈ 👋 wave @tag
┃◈ ✋ highfive @tag
┃◈ 🤝 handhold @tag
┃◈ 🍜 nom @tag
┃◈ 🦷 bite @tag
┃◈ 🤗 glomp @tag
┃◈ 👋 slap @tag
┃◈ 💀 kill @tag
┃◈ 😊 happy @tag
┃◈ 😉 wink @tag
┃◈ 👉 poke @tag
┃◈ 💃 dance @tag
┃◈ 😬 cringe @tag
╰━━━━━━━━━━━━━━━━━━━➣
> ${config.DESCRIPTION}`,
                image: true
            },
            '10': {
                title: "🏠 *Main Menu* 🏠",
                content: `╭━━〔 ⚡ *MAIN MENU* 〕━━➣
┃◈
┃◈ 🏓 ping
┃◈ 🏓 ping2
┃◈ 🚀 speed
┃◈ 📡 live
┃◈ 💚 alive
┃◈ ⏱️ runtime
┃◈ ⏳ uptime
┃◈ 📦 repo
┃◈ 👑 owner
┃◈ 📜 menu
┃◈ 📜 menu2
┃◈ 🔄 restart
╰━━━━━━━━━━━━━━━━━━━➣
> ${config.DESCRIPTION}`,
                image: true
            }
        };

        // Message handler with improved error handling
        const handler = async (msgData) => {
            try {
                const receivedMsg = msgData.messages[0];
                if (!receivedMsg?.message || !receivedMsg.key?.remoteJid) return;

                const isReplyToMenu = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;
                
                if (isReplyToMenu) {
                    const receivedText = receivedMsg.message.conversation || 
                                      receivedMsg.message.extendedTextMessage?.text;
                    const senderID = receivedMsg.key.remoteJid;

                    if (menuData[receivedText]) {
                        const selectedMenu = menuData[receivedText];
                        
                        try {
                            if (selectedMenu.image) {
                                await conn.sendMessage(
                                    senderID,
                                    {
                                        image: { url: config.MENU_IMAGE_URL },
                                        caption: selectedMenu.content,
                                        contextInfo: contextInfo
                                    },
                                    { quoted: receivedMsg }
                                );
                            } else {
                                await conn.sendMessage(
                                    senderID,
                                    { text: selectedMenu.content, contextInfo: contextInfo },
                                    { quoted: receivedMsg }
                                );
                            }

                            await conn.sendMessage(senderID, {
                                react: { text: '✅', key: receivedMsg.key }
                            });

                        } catch (e) {
                            console.log('Menu reply error:', e);
                            await conn.sendMessage(
                                senderID,
                                { text: selectedMenu.content, contextInfo: contextInfo },
                                { quoted: receivedMsg }
                            );
                        }

                    } else {
                        await conn.sendMessage(
                            senderID,
                            {
                                text: `❌ *Invalid Option!* ❌\n\nPlease reply with a number between 1-10 to select a menu.\n\n*Example:* Reply with "1" for Download Menu\n\n> ${config.DESCRIPTION}`,
                                contextInfo: contextInfo
                            },
                            { quoted: receivedMsg }
                        );
                    }
                }
            } catch (e) {
                console.log('Handler error:', e);
            }
        };

        // Add listener
        conn.ev.on("messages.upsert", handler);

        // Remove listener after 5 minutes
        setTimeout(() => {
            conn.ev.off("messages.upsert", handler);
        }, 300000);

    } catch (e) {
        console.error('Menu Error:', e);
        try {
            await conn.sendMessage(
                from,
                { text: `❌ Menu system is currently busy. Please try again later.\n\n> ${config.DESCRIPTION}` },
                { quoted: mek }
            );
        } catch (finalError) {
            console.log('Final error handling failed:', finalError);
        }
    }
});
