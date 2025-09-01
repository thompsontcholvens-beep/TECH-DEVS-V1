const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const getRandomImage = () => {
    try {
        const srcPath = path.join(__dirname, '../src');
        const files = fs.readdirSync(srcPath);
        const imageFiles = files.filter(file => 
            file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')
        );
        
        if (imageFiles.length === 0) {
            console.log('No image files found in src folder');
            return 'https://files.catbox.moe/tejxaj.jpg'; 
        }
        
        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
        return path.join(srcPath, randomImage);
    } catch (e) {
        console.log('Error getting random image:', e);
        return 'https://files.catbox.moe/tejxaj.jpg'; 
    }
};

cmd({
    pattern: "menu",
    desc: "Show interactive menu system",
    category: "menu",
    react: "📜",
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        const totalCommands = Object.keys(commands).length;
        const menuCaption = `🌟 *Good ${
  new Date().getHours() < 12 ? 'Morning' : 
  (new Date().getHours() < 18 ? 'Afternoon' : 'Evening')
}, ${pushname}!* 🌟
╭━━━━━〔 ⚡ *☬༒𝕋𝔼ℂℍ-𝔻𝔼𝕍𝕊-𝕍1༒☬* ⚡ ━⊷
┃ ✦ 🆄︎🆂︎🅴︎🆁︎ : 𝕋𝔼ℂℍ 𝔻𝔼𝕍𝕊 𝕌𝕊𝔼ℝ𝕊
┃ ✦ 🅲︎🅾︎🅼︎🅼︎🅰︎🅽︎🅳︎🆂︎ : 2400
┃ ✦ 🆃︎🆈︎🅿︎🅴︎ : ℙ𝕐𝕋ℍ𝕆ℕ 
┃ ✦ 🅿︎🅻︎🅰︎🆃︎🅵︎🅾︎🆁︎🅽︎ : 𝕃𝕀ℕ𝕌𝕏 25ℍ2
┃ ✦ 🅳︎🅴︎🆅︎🅴︎🅻︎🅾︎🅿︎🅴︎🆁︎ : 𝕋𝔼ℂℍ_𝔻𝔼𝕍𝕊
┃ ✦ 🅼︎🅾︎🅳︎🅴︎ : 🍺
┃ ✦ 🅿︎🆁︎🅴︎🅵︎🅸︎🆇︎ : .
┃ ✦ 🆃︎🅸︎🅼︎🅴︎ : 🙇🏿🙇🏿🙇🏿
┃ ✦ 🆅︎🅴︎🆁︎🆂︎🅸︎🅾︎🅽︎ : 1.0.0
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🅸︎🅵︎ 🆄︎ 🅻︎🅸︎🅺︎🅴︎ 🆃︎🅷︎🅸︎🆂︎ 🅱︎🅾︎🆃︎ 🅲︎🅾︎🅽︎🆃︎🅰︎🅲︎🆃︎ 🆄︎🆂︎
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
╔═══ஜ۩░▒▓█ 🅼︎🅴︎🅽︎🆄︎-🅻︎🅸︎🆂︎🆃︎█▓▒░۩ஜ═══╗
┃ ✪ ᴘʀᴀʏᴇʀᴛɪᴍᴇ
┃ ✪ ϙᴜʀᴀɴᴍᴇɴᴜ
┃ ✪ ᴀɪᴍᴇɴᴜ
┃ ✪ ᴀɴɪᴍᴇᴍᴇɴᴜ
┃ ✪ ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
┃ ✪ ғᴜɴᴍᴇɴᴜ
┃ ✪ ʀᴇᴀᴄᴛɪᴏɴᴍᴇɴᴜ
┃ ✪ ᴅʟᴍᴇɴᴜ
┃ ✪ sᴇᴛᴛɪɴɢsᴍᴇɴᴜ
┃ ✪ ʟɪsᴛᴄᴍᴅ
┃ ✪ ᴍᴀɪɴᴍᴇɴᴜ
┃ ✪ ᴛᴇᴍᴘᴍᴀɪʟ
┃ ✪ ɢʀᴏᴜᴘᴍᴇɴᴜ
┃ ✪ ᴀʟʟᴍᴇɴᴜ
┃ ✪ ᴏᴛʜᴇʀᴍᴇɴᴜ
┃ ✪ ᴏᴡɴᴇʀᴍᴇɴᴜ
┃ ✪ ʟᴏɢᴏ <ᴛᴇxᴛ>
┃ ✪ ʀᴇᴘᴏ
┃ ✪ ʟᴏɢᴏᴍᴇɴᴜ
┃ ✪ ᴀᴅᴜʟᴛᴍᴇɴᴜ
╰━━━━━━━━━━━━━━⊷
༺ 𝐀𝐜𝐭𝐨𝐫 / 𝐃𝐚𝐝 ༻

𝓟𝓪𝓼𝓼𝓲𝓸𝓷𝓪𝓽𝓮 𝓪𝓫𝓸𝓾𝓽 𝓶𝔂 𝔀𝓸𝓻𝓴 ♡

> ❀༒𝕋𝔼ℂℍ-𝔻𝔼𝕍𝕊-𝕍1༒❀

fσr mσrє ínfσ tчpє *.ownєr*
> ${config.DESCRIPTION}`;
        
        // Contact message for verified context
        const verifiedContact = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "🆃︎🅴︎🅲︎🅷︎-🅳︎🅴︎🆅︎🆂︎-🆅︎1 ᴍᴇɴᴜ",
                    vcard: "BEGIN:VCARD\nVERSION:3.0\nFN: Jephter\nORG:ᴊꜰx ᴍᴅ-xᴠ3;\nTEL;type=CELL;type=VOICE;waid=93775551335:+2349046157539\nEND:VCARD"
                }
            }
        };
        
        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '0029VajbiIfAjPXO45zG2i2c@newsletter',
                newsletterName:'🆃︎🅴︎🅲︎🅷︎-🅳︎🅴︎🆅︎🆂︎-🆅︎1 ᴍᴇɴᴜ',
                serverMessageId: 143
            }
        };
        
        const audioUrls = [
            'https://files.catbox.moe/8as3yt.mp3'
        ];

        const randomAudioUrl = audioUrls[Math.floor(Math.random() * audioUrls.length)];

        // Send image first
        const sentMsg = await conn.sendMessage(
            from, 
            { 
                image: { url: getRandomImage() }, 
                caption: menuCaption,
                contextInfo: contextInfo 
            }, 
            { quoted: verifiedContact }
        );

        // Then send audio
        await conn.sendMessage(from, {
            audio: { url: randomAudioUrl },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: verifiedContact });

        const messageID = sentMsg.key.id;

        // Menu data (complete version)
        const menuData = {
            '1': {
                title: "📥 *Download Menu* 📥",
                content: `
╭━〔 Download Menu 〕━┈⊷
┃◈╭─────────·๏
┃◈┃• facebook
┃◈┃• mediafire
┃◈┃• tiktok
┃◈┃• twitter
┃◈┃• Insta
┃◈┃• apk
┃◈┃• img
┃◈┃• spotify
┃◈┃• play
┃◈┃• play2
┃◈┃• play3
┃◈┃• tt2
┃◈┃• audio
┃◈┃• playx
┃◈┃• video
┃◈┃• video1
┃◈┃• ytmp3
┃◈┃• ytmp4
┃◈┃• pdf
┃◈┃• sss
┃◈┃• song
┃◈┃• darama
┃◈┃• git
┃◈┃• gdrive
┃◈┃• smovie
┃◈┃• baiscope 
┃◈┃• ginisilia 
┃◈┃• bible
┃◈┃• xxx
┃◈┃• mp3
┃◈┃• mp4 
┃◈┃• gemini
┃◈└─────────┈⊷
╰───────────┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '2': {
                title: "👥 *Group Menu* 👥",
                content: `
╭━━〔 Group Menu 〕━┈⊷
┃◈╭──────────·๏
┃◈┃• grouplink
┃◈┃• kickall
┃◈┃• kickall2
┃◈┃• kickall3
┃◈┃• add
┃◈┃• remove
┃◈┃• kick
┃◈┃• promote 
┃◈┃• demote
┃◈┃• dismiss 
┃◈┃• revoke
┃◈┃• setgoodbye
┃◈┃• setwelcome
┃◈┃• delete 
┃◈┃• getpic
┃◈┃• ginfo
┃◈┃• delete 
┃◈┃• disappear on
┃◈┃• disappear off
┃◈┃• disappear 7D,24H
┃◈┃• allreq
┃◈┃• updategname
┃◈┃• updategdesc
┃◈┃• joinrequests
┃◈┃• senddm
┃◈┃• nikal
┃◈┃• mute
┃◈┃• unmute
┃◈┃• lockgc
┃◈┃• unlockgc
┃◈┃• invite
┃◈┃• tag
┃◈┃• hidetag
┃◈┃• tagall
┃◈┃• tagadmins
┃◈└─────────┈⊷
╰───────────┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '3': {
                title: "😄 *Fun Menu* 😄",
                content: `
╭━━〔 Fun Menu 〕━━┈⊷
┃◈╭──────────·๏
┃◈┃• insult
┃◈┃• compatibility
┃◈┃• aura
┃◈┃• roast
┃◈┃• compliment
┃◈┃• lovetest
┃◈┃• emoji
┃◈┃• ringtone 
┃◈┃• pickup
┃◈┃• ship
┃◈┃• character
┃◈┃• hack
┃◈┃• joke
┃◈┃• hrt
┃◈┃• hpy
┃◈┃• syd
┃◈┃• anger
┃◈┃• shy
┃◈┃• kiss
┃◈┃• mon
┃◈┃• cunfuzed
┃◈┃• setpp
┃◈┃• hand
┃◈┃• nikal
┃◈┃• hold
┃◈┃• hug
┃◈┃• nikal
┃◈┃• hifi
┃◈┃• poke
┃◈└────────┈⊷
╰──────────┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '4': {
                title: "👑 *Owner Menu* 👑",
                content: `
╭━━━〔 *Owner Menu* 〕━┈⊷
┃★╭──────────
┃★│ ⚠️ *Restricted*
┃★│ • block @user
┃★│ • unblock @user
┃★│ • fullpp [img]
┃★│ • setpp [img]
┃★│ • restart
┃★│ • shutdown
┃★│ • updatecmd
┃★╰────────────
┃★╭────────────
┃★│ ℹ️ *Info Tools*
┃★│ • gjid
┃★│ • jid @user
┃★│ • listcmd
┃★│ • allmenu
┃★╰───────────
╰━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '5': {
                title: "🤖 *AI Menu* 🤖",
                content: `
 ╭━━━〔 *AI Menu* 〕━┈⊷
┃★╭────────────
┃★│ 💬 *Chat AI*
┃★│ • ai [query]
┃★│ • gpt3 [query]
┃★│ • gpt2 [query]
┃★│ • gptmini [query]
┃★│ • gpt [query]
┃★│ • meta [query]
┃★╰───────────
┃★╭───────────
┃★│ 🖼️ *Image AI*
┃★│ • imagine [text]
┃★│ • imagine2 [text]
┃★╰──────────
┃★╭──────────
┃★│ 🔍 *Specialized*
┃★│ • blackbox [query]
┃★│ • luma [query]
┃★│ • dj [query]
┃★╰──────────
╰━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '6': {
                title: "🎎 *Anime Menu* 🎎",
                content: `
╭━━〔 *Anime Menu* 〕━┈⊷
┃★╭───────────
┃★│ 🖼️ *Images*
┃★│ • fack
┃★│ • dog
┃★│ • awoo
┃★│ • garl
┃★│ • waifu
┃★│ • neko
┃★│ • megnumin
┃★│ • maid
┃★│ • loli
┃★╰───────────
┃★╭───────────
┃★│ 🎭 *Characters*
┃★│ • animegirl
┃★│ • animegirl1-5
┃★│ • anime1-5
┃★│ • foxgirl
┃★│ • naruto
┃★╰───────────
╰━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '7': {
                title: "🔄 *Convert Menu* 🔄",
                content: `
 ╭━〔 *Convert Menu* 〕━┈⊷
┃★╭────────────
┃★│ 🖼️ *Media*
┃★│ • sticker [img]
┃★│ • sticker2 [img]
┃★│ • emojimix 😎+😂
┃★│ • take [name,text]
┃★│ • tomp3 [video]
┃★╰───────────
┃★╭───────────
┃★│ 📝 *Text*
┃★│ • fancy [text]
┃★│ • tts [text]
┃★│ • trt [text]
┃★│ • base64 [text]
┃★│ • unbase64 [text]
┃★╰──────────
╰━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '8': {
                title: "📌 *Other Menu* 📌",
                content: `
 ━━〔 Other Menu 〕━━┈⊷
┃◈╭──────────·๏
┃◈┃• vv
┃◈┃• pair
┃◈┃• pair2
┃◈┃• fact
┃◈┃• font
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• yts
┃◈┃• ytv
┃◈└───────┈⊷
╰─────────┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '9': {
                title: "💞 *Reactions Menu* 💞",
                content: `
╭━━〔 Reactions Menu 〕━━┈⊷
┃◈╭───────────·๏
┃◈┃• bully 
┃◈┃• cuddle 
┃◈┃• cry 
┃◈┃• hug 
┃◈┃• awoo 
┃◈┃• kiss 
┃◈┃• lick 
┃◈┃• pat 
┃◈┃• smug 
┃◈┃• bonk
┃◈┃• yeet 
┃◈┃• blush 
┃◈┃• smile
┃◈┃• wave 
┃◈┃• highfive 
┃◈┃• handhold 
┃◈┃• nom 
┃◈┃• bite 
┃◈┃• glomp 
┃◈┃• slap
┃◈┃• kill
┃◈┃• happy
┃◈┃• wink 
┃◈┃• poke 
┃◈┃• dance 
┃◈┃• cringe 
┃◈└────────┈⊷
╰──────────┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '10': {
                title: "🏠 *Main Menu* 🏠",
                content: `
╭━━━〔 *Main Menu* 〕━━┈⊷
┃★╭────────────
┃★│ ℹ️ *Bot Info*
┃★│ • ping
┃★│ • live
┃★│ • alive
┃★│ • runtime
┃★│ • uptime
┃★│ • repo
┃★│ • owner
┃★╰───────────
┃★╭───────────
┃★│ 🛠️ *Controls*
┃★│ • menu
┃★│ • menu2
┃★│ • restart
┃★╰───────────
╰━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '11': {
                title: "Settingsmenu",
                content: `
╭━━〔 *Reactions Menu* 〕━━┈⊷

      〘 𝖲𝖤𝖳𝖳𝖨𝖭𝖦𝖲 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ setprefix 
┋ ☻ statusview
┋ ☻ mode
┋ ☻ statusreply
┋ ☻ alwaysonline
┋ ☻ autorecording
┋ ☻ autotyping
┋ ☻ setbotnumber
┋ ☻ autovoice
┋ ☻ autosticker
┋ ☻ autoreply
┋ ☻ autoreply
┋ ☻ statusreact
┋ ☻ autoreact
┋ ☻ welcome
┋ ☻ customreacts
┋ ☻ antibad
┋ ☻ antibot
┋ ☻ antilink
┋ ☻ readmessage
┋ ☻ settings
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

> ${config.DESCRIPTION}`,
                image: true
            },
            '12': {
                title: "MPESA MENU",
                content: `
 *╭───❍「 SUPPORT 」❍*
‎*├⬡ .ᴀɪʀᴛᴇʟᴍᴏɴᴇʏ*
‎*├⬡ .ᴍᴘᴇsᴀ*
‎*╰───────────────❍
> ${config.DESCRIPTION}`,
                image: true
            },
            '13': {
                title: "MPESA MENU",
                content: `
 *╭───❍「 LOGO 𝖫𝖨𝖲𝖳 」❍*
‎*├⬡ .ɴᴇᴏɴʟɪɢʜᴛ*
‎*├⬡ .ʙʟᴀᴄᴋᴘɪɴᴋ*
‎*├⬡ .ᴅʀᴀɢᴏɴʙᴀʟʟ*
‎*├⬡ .𝟹ᴅᴄᴏᴍɪᴄ*
‎*├⬡ .ᴀᴍᴇʀɪᴄᴀ*
‎*├⬡ .ɴᴀʀᴜᴛᴏ*
‎*├⬡ .sᴀᴅɢɪʀʟ*
‎*├⬡ .ᴄʟᴏᴜᴅs*
‎*├⬡ .ғᴜᴛᴜʀɪsᴛɪᴄ*
‎*├⬡ .𝟹ᴅᴘᴀᴘᴇʀ*
‎*├⬡ .ᴇʀᴀsᴇʀ*
‎*├⬡ .sᴜɴsᴇᴛ*
‎*├⬡ .ʟᴇᴀғ*
‎*├⬡ .ɢᴀʟᴀxʏ*
‎*├⬡ .sᴀɴs*
‎*├⬡ .ʙᴏᴏᴍ*
‎*├⬡ .ʜᴀᴄᴋᴇʀ*
‎*├⬡ .ᴅᴇᴠɪʟᴡɪɴɢs*
‎*├⬡ .ɴɪɢᴇʀɪᴀ*
‎*├⬡ .ʙᴜʟʙ*
‎*├⬡ .ᴀɴɢᴇʟᴡɪɴɢs*
‎*├⬡ .ᴢᴏᴅɪᴀᴄ*
‎*├⬡ .ʟᴜxᴜʀʏ*
‎*├⬡ .ᴘᴀɪɴᴛ*
‎*├⬡ .ғʀᴏᴢᴇɴ*
‎*├⬡ .ᴄᴀsᴛʟᴇ*
‎*├⬡ .ᴛᴀᴛᴏᴏ*
‎*├⬡ .ᴠᴀʟᴏʀᴀɴᴛ*
‎*├⬡ .ʙᴇᴀʀ*
‎*├⬡ .ᴛʏᴘᴏɢʀᴀᴘʜʏ*
‎*├⬡ .ʙɪʀᴛʜᴅᴀʏ*
‎*╰────────────❍*
> ${config.DESCRIPTION}`,
                  image: true
            },
            '15': {
                title: "CODE MENU",
                content: `
 *╭───❍CODE MENU❍*──
‎*├⬡ .ɢɪᴛsᴛᴀʟᴋ*
‎*├⬡ .ᴛᴇʀᴍɪɴᴀᴛᴇ*
‎*├⬡ .ᴜɴʙᴀsᴇ*
‎*├⬡ .ʙᴀsᴇ*
‎*├⬡ .ᴄᴏʟᴏᴜʀ*
‎*╰─────────────❍*
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
                                        image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/g5a1yr.webp' },
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
                                text: `📛 *Invalid Option!* ❌\n\nPlease reply with a number between 1-15 to select a menu.\n\n*Example:* Reply with "1" for Download Menu\n\n> ${config.DESCRIPTION}`,
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
                { text: `Menu system is currently busy. Please try again later📛.\n\n> ${config.DESCRIPTION}` },
                { quoted: mek }
            );
        } catch (finalError) {
            console.log('Final error handling failed:', finalError);
        }
    }
});
