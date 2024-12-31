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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918547062392";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_09_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTksXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgNyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICA3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0T1p6N0x1cW1mb2xFaHVtTktCN28zTk9VbDlCWDYrTzQxRjEzTC9CWmtzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODU0NzA2MjM5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTkwRjEzN0I4REM1MjYyQTZCOTBCRTk0QUVBMjk1NUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NjY4NTU2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRLelFxQWFzUnppakdVdEY0WXl5M3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmNjMzU1YzQtNTQ4Yy00ZmY4LTk0ZWYtYzgzMDU0M2VlNGJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDIzOSxcbiAgICAgIDIxMSxcbiAgICAgIDE0MSxcbiAgICAgIDYwLFxuICAgICAgMTExLFxuICAgICAgMTAzLFxuICAgICAgMTQ4LFxuICAgICAgMzgsXG4gICAgICA4MixcbiAgICAgIDkwLFxuICAgICAgMTY5LFxuICAgICAgMTQ3LFxuICAgICAgNSxcbiAgICAgIDIyLFxuICAgICAgMTkyLFxuICAgICAgMjM0LFxuICAgICAgMTM4LFxuICAgICAgMTIxLFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDE4MSxcbiAgICAgIDE2OCxcbiAgICAgIDc0LFxuICAgICAgMTMzLFxuICAgICAgODQsXG4gICAgICAxNzcsXG4gICAgICAxNzAsXG4gICAgICAxODMsXG4gICAgICA1OSxcbiAgICAgIDIwLFxuICAgICAgMTM0LFxuICAgICAgMTk3LFxuICAgICAgMTA0LFxuICAgICAgMTU2LFxuICAgICAgMTQxLFxuICAgICAgMTIwLFxuICAgICAgMjQ4LFxuICAgICAgMjA2LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkdFWVpCVFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODU0NzA2MjM5MjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkV4b3RpYyEhXCIsXG4gICAgXCJsaWRcIjogXCIxMTM2MDcyNTM3MzAyMToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdTI3YmtHRU1UbTBMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInQxck82aW9zSENWVm13eWRRNklaRktvNDc2dEJBeTYvU0VML2E4VVo0SDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTjdJNzdmdVBNenNzQWJLSTBtdmVhaERuSlNEb2d0OHRBL3RHWHB1NFAvQm9CMkNlNnN3Mi9zdGJibDBsaHFUZ1JtQVVTWEdhR1RkWDdiV25MZ0hHRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWDBra3hmdHRVQjdxc1FVZzh3UUZ6M2xvd1BrY08rWTU3cmNtWDhjNXVJZjV4THRKbUpocTBva05OcEw1ZlZFdTYxQUZmQVo2azRqbTdtME82TzZSQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4NTQ3MDYyMzkyOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NjY4NTUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnVqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKdWouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBZHdEbkdxdzBLRDk0TlJUZHlWSTltb0xzT01LR1dURE16ZVFlaU5JNC9JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MzE5NDMyMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
