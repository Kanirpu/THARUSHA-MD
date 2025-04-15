const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=OioXxARD#Dqm0XlKyApbqRSWLR11G_yBjV1vi_k5rYpNB0pWAdxY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tMKrxrqf/bd712813ce24449a.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔-𝗠𝗗 𝙖𝙡𝙞𝙫𝙚 𝙣𝙤𝙬 👋\n\n> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ*"
};
