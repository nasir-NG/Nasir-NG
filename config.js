const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFyU1prbmJvWFZBWS85dWRhYjRBTXBqaVpGa092cyt2TGtnY04rVFBXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDI5STlBWVd4eGNzdCtYcGRoS3JIWUQvYVNNNExWU09kZkdPTnJrVkNBVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQ3JyTkVMeGJJUnZqNDlyY3N1MFcxckdNMHExV0RqRXAyY1N5VXRYcmxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLOG16eDh3Tm9jd1NXZFVGUm90L0dGbW5GSDVMTFBMOE5VVkdNQ3QyUUNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlCUFRFV2JuZGErQ2FCcE94WUdrYkM2MTR3MU81TTYxMGNwYjNkeWtzMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU2Y2hXc1pXSkxKUzh5L2hqUUdLcE9NVGpVYXdhWFhhT3Z2UlN0Z0djeDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9PY1FvOE5TeDVPRzlGNjFvdFY5d3N2NFJ1QVdRN1VlUlZrLzdiOVBVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0M3dDlyb1pSSU1qRTBSZGNFT014QVBoMWx4eWFmMUNHQVI3UkEvVVpSdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlEVmsvNkEzTHQ3UWVoRm43V3l6NVRmUGJpVnFWLzJQRklpZXg0Z0hIL0lSQTQ1S1VlSUphMko1Z3ByVnNkTmRRVStpTzNGOXV4a2pYZzFZZHFXNEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6Ik4rQU9DdGs2d0RaVlZTc2NUUE5HVVpNU3VCckprSHJvWHF4MGRWSDV4Um89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjAxMTQzNzgzMDU1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QjFCMTYzMDAzMDc4ODFCOUJBNkZDNDQ4QTgwQ0Q0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE4NTU5NzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIwMTE0Mzc4MzA1NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTgxQ0ZEMDExOUFFMkNBRkY1ODQ2MkZCNEMzMUZCQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxODU1OTc2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFTEFJTkFNRCIsIm1lIjp7ImlkIjoiMjAxMTQzNzgzMDU1OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2YXZhNqpINis2KfZhtuMIiwibGlkIjoiMTAyNTQzMDE1Mjg0ODE3OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNT1ZudGtCRU5hVGo4Z0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPVFI2V1hqaG1UdXF2Z29hdzFWVmQ4emM1dkxMNDRKTkZxKzRLUTBwUEZZPSIsImFjY291bnRTaWduYXR1cmUiOiJ1M2FtRVpkdHV3NnNXZk8zcVZBWFZwSTlQTmhLYkN4ckpyNnkzeEtOcm5uN2Y2MVZjMUZSZmxyYjZQU0NNZXpZNGtjZUpsNGxlUGRuUE9uM1dzbXREQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSlI5ZmpraEFsdm9lWG5VSi9ZVENFeE1Ga0NZRlllRjhDTXN0Z0JrWVkzdTg5ckVFSGU5VnFCVExrdWxObEhNOHhQTFpTdWdUa0tKMlFHSEVMWFBNQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDExNDM3ODMwNTU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUazBlbGw0NFprN3FyNEtHc05WVlhmTTNPYnl5K09DVFJhdnVDa05LVHhXIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE4NTU5NzMsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmJCIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
