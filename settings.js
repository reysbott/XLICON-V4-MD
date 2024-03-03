//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='XLICON-V4-DUZXz16Y'

//owmner v card
global.ytname = "YT: S4 Salman YT" //ur yt chanel name
global.socialm = "GitHub: salmanytofficial" //ur github or insta name
global.location = "Pakistan, Lahore, Sabzazar" //ur location

//new
global.botname = 'XLICON-V4-MD' //ur bot name
global.ownernumber = '923184070915' //ur owner number
global.ownername = 'Salman Ahmad' //ur owner name
global.websitex = "https://youtube.com/@s4salmanyt"
global.wagc = "https://whatsapp.com/channel/0029VaINgEZK0IBaK1nDtE3f"
global.themeemoji = '🏮'
global.wm = "© Xʟɪᴄᴏɴ-Iɴᴄ"
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "𝐆𝐎𝐉𝐎 𝐊𝐔𝐍"
global.author = "ᗰᗩᗪE ᗷY 𝙎𝘼𝙇𝙈𝘼𝙉 𝘼𝙃𝙈𝘼𝘿"
global.creator = "923184070915@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923184070915"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '212' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: '*_Your limit is up!_*',
	nsfw: '*_Nsfw is disabled in this group, Please tell the admin to enable_*',
    done: '*_Done✓_*',
    error: '*_Error!_*',
    success: '*_Here you go!_*'
}
//thumbnail
global.thumb = fs.readFileSync('./XliconV4Media/theme/XliconImage.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
