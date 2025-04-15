const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    jidNormalizedUser,
    getContentType,
    fetchLatestBaileysVersion,
    Browsers
} = require('@whiskeysockets/baileys')

const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const util = require('util')
const { sms, downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')
const prefix = '.'

const ownerNumber = ['94740326138']

//===================SESSION-AUTH============================
// Session file එක local එකට දැම්මත් OK.
// MEGA එකෙන් download එක fail වුණොත් error එක handle කරනවා.

const authPath = __dirname + '/auth_info_baileys/creds.json'

if (!fs.existsSync(authPath)) {
    if (!config.SESSION_ID) return console.log('SESSION_ID එක දැන්වී නැහැ!');
    const sessdata = config.SESSION_ID.replace("𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=", '');
    const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
    try {
        filer.download((err, data) => {
            if (err) {
                console.error("MEGA එකෙන් session එක download කරගන්න බැරි උනා:", err.message)
                return
            }
            fs.writeFile(authPath, data, () => {
                console.log("SESSION ID එක MEGA එකෙන් download උනා ✔️")
            })
        })
    } catch (e) {
        console.error("SESSION download error එකක් තියෙනවා:", e.message)
    }
}

const express = require("express")
const app = express()
const port = process.env.PORT || 8000

//================ CONNECT FUNCTION =================

async function connectToWA() {
    console.log("CONECTING 🧬...")
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
    var { version } = await fetchLatestBaileysVersion()

    const conn = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS("Firefox"),
        syncFullHistory: true,
        auth: state,
        version
    })

    conn.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                connectToWA()
            }
        } else if (connection === 'open') {
            console.log('BOT CONNECT SUCCESSFUL ✅')
            const path = require('path')
            fs.readdirSync("./plugins/").forEach((plugin) => {
                if (path.extname(plugin).toLowerCase() === ".js") {
                    require("./plugins/" + plugin)
                }
            })

            conn.sendMessage(ownerNumber[0] + "@s.whatsapp.net", {
                image: { url: `https://i.ibb.co/cc8DzcNh/5389.jpg` },
                caption: `*THARUSHA-MD connected.✅*\n> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰 〽️Ｄ*`
            })
        }
    })

    conn.ev.on('creds.update', saveCreds)

    conn.ev.on('messages.upsert', async (mek) => {
        mek = mek.messages[0]
        if (!mek.message) return
        mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const m = sms(conn, mek)

        // Continue with command handling code...
        // Keep rest of your original command processing logic here (unchanged)
    })
}

//================ HTTP SERVER =================

app.get("/", (req, res) => {
    res.send("HEY , I'M STARTED ✅");
})
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))

//================ START BOT =================

setTimeout(() => {
    connectToWA()
}, 4000)
