const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+918547062392";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_54_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTksXG4gICAgICAgIDg0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxLFxuICAgICAgICAxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAzOCxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiemU1ZHJZb08vTXR0K3krb3hmSHdCSFI2Mmh2QzgwZXlUSklSL2dobS8wYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTg1NDcwNjIzOTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhDNzRCMjYyMEVFMTAxOENBRUYwODNDODI4NzNEOTM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTczMjQ2MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlUGM4cUh3cVNoMnZzVUdsR01mYXZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI3MmZhZTI5LTUzYTMtNDNkYS04OWE2LTY2MjcxNWNiMGRkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAyMDcsXG4gICAgICA1NSxcbiAgICAgIDUwLFxuICAgICAgMjE0LFxuICAgICAgMTY4LFxuICAgICAgMTM2LFxuICAgICAgMTQzLFxuICAgICAgODEsXG4gICAgICAxMTcsXG4gICAgICAxOCxcbiAgICAgIDM2LFxuICAgICAgOTksXG4gICAgICA2OSxcbiAgICAgIDQ4LFxuICAgICAgNSxcbiAgICAgIDE4NSxcbiAgICAgIDE4NyxcbiAgICAgIDY3LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTY0LFxuICAgICAgMTkyLFxuICAgICAgNzQsXG4gICAgICA5MyxcbiAgICAgIDEyNSxcbiAgICAgIDE5NSxcbiAgICAgIDIzOCxcbiAgICAgIDEyNyxcbiAgICAgIDE2MCxcbiAgICAgIDE1NSxcbiAgICAgIDEzOCxcbiAgICAgIDM4LFxuICAgICAgMTk3LFxuICAgICAgMTM4LFxuICAgICAgODIsXG4gICAgICAyMzksXG4gICAgICAxMzcsXG4gICAgICAxODAsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTJZSjgyVDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODU0NzA2MjM5MjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkV4b3RpYyEhXCIsXG4gICAgXCJsaWRcIjogXCIxMTM2MDcyNTM3MzAyMToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMeTI3YmtHRU9UWjFMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInQxck82aW9zSENWVm13eWRRNklaRktvNDc2dEJBeTYvU0VML2E4VVo0SDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFBaM2RiRGdIMXRMVkZRQm5tdWpzZE5GMDhLTGRIOGZ6ZUdWdVJZenUxRDE0bjlCSHY2MjRyUmdOTWVabENmVU8zR0tBWjhEUENTZERndHpqVEdEQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidk1yeUlGRkVhNHdQeXpuNDNnNnRkK3ZPMnVwRjlVYjZYd0pVT0tFWDJONG9hRVhyNVNVbGtIQkcvM29ZdnpZaTVIS0VXQmFPQXMvMmlLTjVSWmk0QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4NTQ3MDYyMzkyOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NzMyNDU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnVqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKdWouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBZHdEbkdxdzBLRDk0TlJUZHlWSTltb0xzT01LR1dURE16ZVFlaU5JNC9JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MzE5NDMyMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
