const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

// Utility function to delay execution
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Reusable function to send menu with animation
const sendMenuWithAnimation = async (conn, mek, from, sections, imageUrl, reply) => {
    try {
        // Send initial loading message
        await conn.sendMessage(from, { text: '🌟 *Loading Menu...* [□□□□□□]' }, { quoted: mek });

        // Simulate loading animation with progress bar
        const progressSteps = ['[■□□□□□]', '[■■□□□□]', '[■■■□□□]', '[■■■■□□]', '[■■■■■□]', '[■■■■■■]'];
        for (let i = 0; i < progressSteps.length; i++) {
            await delay(300); // Delay between progress steps
            await conn.sendMessage(from, { text: `🌟 *Loading Menu...* ${progressSteps[i]}` }, { quoted: mek });
        }

        // Send menu sections one by one
        for (const section of sections) {
            await delay(500); // Delay between sections for smooth reveal
            await conn.sendMessage(
                from,
                {
                    image: { url: imageUrl },
                    caption: section,
                    contextInfo: {
                        mentionedJid: [mek.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '1120363401051383340@newsletter',
                            newsletterName: '𝚃𝙴𝙲𝙷-𝙷𝙾𝚁𝙸𝚉𝙾𝙽',
                            serverMessageId: 143
                        }
                    }
                },
                { quoted: mek }
            );
        }

        // Final confirmation message
        await delay(300);
        await conn.sendMessage(from, { text: '✅ *Menu Loaded Successfully!*' }, { quoted: mek });

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
        throw e;
    }
};

// Menu 2
cmd({
    pattern: "menu",
    desc: "Display bot menu with animation",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `✨ *${config.BOT_NAME} Menu* ✨
✦══════✦══════✦
*Bot Info* 📋
👤 *Owner*: _${config.OWNER_NAME}_
🛠 *Type*: _NodeJs_
☁ *Platform*: _Heroku_
🔄 *Mode*: _${config.MODE}_
🔢 *Prefix*: _${config.PREFIX}_
📀 *Version*: _3.0.0 Beta_
✦══════✦══════✦`,
            `*Available Menus* 📚
➤ lordbuddha
➤ aimenu
➤ animemenu
➤ reactions
➤ convertmenu
➤ funmenu
➤ dlmenu
➤ listcmd
➤ mainmenu
➤ groupmenu
➤ allmenu
➤ ownermenu
➤ othermenu
➤ logo
➤ repo
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ*`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);
        
    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// Logo Menu
cmd({
    pattern: "logo",
    alias: ["logomenu"],
    desc: "Display logo commands with animation",
    category: "menu",
    react: "🧃",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `🎨 *Logo Menu* 🎨
✦══════✦══════✦
*Create stunning logos with these commands* ✍️`,
            `➤ neonlight
➤ blackpink
➤ dragonball
➤ 3dcomic
➤ america
➤ naruto
➤ sadgirl
➤ clouds
➤ futuristic
➤ 3dpaper
➤ eraser
➤ sunset
➤ leaf
➤ galaxy
➤ sans
➤ boom
➤ hacker
➤ devilwings
➤ nigeria
➤ bulb
➤ angelwings
➤ zodiac
➤ luxury
➤ paint
➤ frozen
➤ castle
➤ tatoo
➤ valorant
➤ bear
➤ typography
➤ birthday
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ*`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// Reactions Menu
cmd({
    pattern: "reactions",
    desc: "Shows reaction commands with animation",
    category: "menu",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `😄 *Reactions Menu* 😄
✦══════✦══════✦
*Express yourself with these reactions* 🫶`,
            `➤ bully @tag
➤ cuddle @tag
➤ cry @tag
➤ hug @tag
➤ awoo @tag
➤ kiss @tag
➤ lick @tag
➤ pat @tag
➤ smug @tag
➤ bonk @tag
➤ yeet @tag
➤ blush @tag
➤ smile @tag
➤ wave @tag
➤ highfive @tag
➤ handhold @tag
➤ nom @tag
➤ bite @tag
➤ glomp @tag
➤ slap @tag
➤ kill @tag
➤ happy @tag
➤ wink @tag
➤ poke @tag
➤ dance @tag
➤ cringe @tag
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ*`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// Download Menu
cmd({
    pattern: "dlmenu",
    desc: "Display download commands with animation",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `📥 *Download Menu* 📥
✦══════✦══════✦
*Download content with ease* 🌐`,
            `➤ facebook
➤ mediafire
➤ tiktok
➤ twitter
➤ insta
➤ apk
➤ img
➤ tt2
➤ pins
➤ apk2
➤ fb2
➤ pinterest
➤ spotify
➤ play
➤ play2
➤ play3
➤ play4
➤ play5
➤ play6
➤ play7
➤ play8
➤ play9
➤ play10
➤ audio
➤ video
➤ video2
➤ video3
➤ video4
➤ video5
➤ video6
➤ video7
➤ video8
➤ video9
➤ video10
➤ ytmp3
➤ ytmp4
➤ song
➤ drama
➤ gdrive
➤ ssweb
➤ tiks
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ*`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// Group Menu
cmd({
    pattern: "groupmenu",
    desc: "Display group commands with animation",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `👥 *Group Menu* 👥
✦══════✦══════✦
*Manage your group effectively* 🛠`,
            `➤ grouplink
➤ kickall
➤ kickall2
➤ kickall3
➤ add
➤ remove
➤ kick
➤ promote
➤ demote
➤ dismiss
➤ revoke
➤ setgoodbye
➤ setwelcome
➤ delete
➤ getpic
➤ ginfo
➤ disappear on
➤ disappear off
➤ disappear 7D,24H
➤ allreq
➤ updategname
➤ updategdesc
➤ joinrequests
➤ senddm
➤ nikal
➤ mute
➤ unmute
➤ lockgc
➤ unlockgc
➤ invite
➤ tag
➤ hidetag
➤ tagall
➤ tagadmins
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ*`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// Fun Menu
cmd({
    pattern: "funmenu",
    desc: "Display fun commands with animation",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `🎉 *Fun Menu* 🎉
✦══════✦══════✦
*Have some fun with these commands* 😜`,
            `➤ shapar
➤ rate
➤ insult
➤ hack
➤ ship
➤ character
➤ pickup
➤ joke
➤ hrt
➤ hpy
➤ syd
➤ anger
➤ shy
➤ kiss
➤ mon
➤ cunfuzed
➤ setpp
➤ hand
➤ hold
➤ hug
➤ hifi
➤ poke
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ*`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// Other Menu
cmd({
    pattern: "othermenu",
    desc: "Display other commands with animation",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `🛠 *Other Menu* 🛠
✦══════✦══════✦
*Miscellaneous utilities* 🔧`,
            `➤ timenow
➤ date
➤ count
➤ calculate
➤ countx
➤ flip
➤ coinflip
➤ rcolor
➤ roll
➤ fact
➤ cpp
➤ rw
➤ pair
➤ pair2
➤ pair3
➤ fancy
➤ logo <text>
➤ define
➤ news
➤ movie
➤ weather
➤ srepo
➤ insult
➤ save
➤ wikipedia
➤ gpass
➤ githubstalk
➤ yts
➤ ytv
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ*`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// Main Menu
cmd({
    pattern: "mainmenu",
    desc: "Display main commands with animation",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `⚙ *Main Menu* ⚙
✦══════✦══════✦
*Core bot commands* 🖥`,
            `➤ ping
➤ live
➤ alive
➤ runtime
➤ uptime
➤ repo
➤ owner
➤ menu
➤ menu2
➤ restart
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// Owner Menu
cmd({
    pattern: "ownermenu",
    desc: "Display owner commands with animation",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `🔒 *Owner Menu* 🔒
✦══════✦══════✦
*Admin-only commands* 👑`,
            `➤ owner
➤ menu
➤ menu2
➤ listcmd
➤ allmenu
➤ repo
➤ block
➤ unblock
➤ fullpp
➤ setpp
➤ restart
➤ shutdown
➤ updatecmd
➤ alive
➤ ping
➤ gjid
➤ jid
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// Convert Menu
cmd({
    pattern: "convertmenu",
    desc: "Display convert commands with animation",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `🔄 *Convert Menu* 🔄
✦══════✦══════✦
*Transform media and text* 🖌`,
            `➤ sticker
➤ sticker2
➤ emojimix
➤ fancy
➤ take
➤ tomp3
➤ tts
➤ trt
➤ base64
➤ unbase64
➤ binary
➤ dbinary
➤ tinyurl
➤ urldecode
➤ urlencode
➤ url
➤ repeat
➤ ask
➤ readmore
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// Anime Menu
cmd({
    pattern: "animemenu",
    desc: "Display anime commands with animation",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `🌸 *Anime Menu* 🌸
✦══════✦══════✦
*Anime-themed commands* 🎌`,
            `➤ fack
➤ dog
➤ awoo
➤ garl
➤ waifu
➤ neko
➤ megnumin
➤ maid
➤ loli
➤ animegirl
➤ animegirl1
➤ animegirl2
➤ animegirl3
➤ animegirl4
➤ animegirl5
➤ anime1
➤ anime2
➤ anime3
➤ anime4
➤ anime5
➤ animenews
➤ foxgirl
➤ naruto
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});

// AI Menu
cmd({
    pattern: "aimenu",
    desc: "Display AI commands with animation",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        const sections = [
            `🧠 *AI Menu* 🧠
✦══════✦══════✦
*Artificial Intelligence commands* 🤖`,
            `➤ ai
➤ gpt3
➤ gpt2
➤ gptmini
➤ gpt
➤ meta
➤ blackbox
➤ luma
➤ dj
➤ khan
➤ jawad
➤ gpt4
➤ bing
➤ imagine
➤ imagine2
➤ copilot
✦══════✦══════✦

> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ`
        ];

        await sendMenuWithAnimation(conn, mek, from, sections, 'https://i.ibb.co/NnL42WWH/edfe60e1f461c6d1.jpg', reply);

    } catch (e) {
        console.error(e);
        await reply(`Error: ${e.message}`);
    }
});
