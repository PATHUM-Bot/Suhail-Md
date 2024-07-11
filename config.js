const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94761238040" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94761238040";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_45_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwLFxuICAgICAgICA3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDgyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICA0MixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM4LFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICA1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICA2MCxcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUEpjSnkvKzlZZjNHdFlPRldHMGpJaDlTUlhXcU5DVHdDN1pBdkw2dTlORT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyNDMyNzM4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUY4MzcxMDcwNjFFMTY1MUVDOTdDMzRDN0M4QkQ4QUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzIzNDkzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjQzMjczODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJGNjlCRjIwRDQzREM1MjY2NjgyODhBNTE4MzJDNDJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDcyMzQ5M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3N2NxWk5tSVNzRzFtTHZ0Nm1YVV9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA4NjhmY2ZlLTE5Y2ItNDgyYy1hZmE1LTY5ZTk0ZWE4MDNjN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDEwNCxcbiAgICAgIDE0OCxcbiAgICAgIDEzMCxcbiAgICAgIDgsXG4gICAgICAxOTMsXG4gICAgICA0OCxcbiAgICAgIDM2LFxuICAgICAgMTMyLFxuICAgICAgMTA0LFxuICAgICAgMjU0LFxuICAgICAgMjEzLFxuICAgICAgMjQ0LFxuICAgICAgMTM1LFxuICAgICAgMTIzLFxuICAgICAgMjUwLFxuICAgICAgODAsXG4gICAgICA5OCxcbiAgICAgIDU4LFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTkwLFxuICAgICAgMjQsXG4gICAgICAxOTEsXG4gICAgICAxMDAsXG4gICAgICA0OCxcbiAgICAgIDIwOCxcbiAgICAgIDE2MSxcbiAgICAgIDk4LFxuICAgICAgMTgwLFxuICAgICAgMjAsXG4gICAgICAxMDAsXG4gICAgICAzOCxcbiAgICAgIDIxMixcbiAgICAgIDExMSxcbiAgICAgIDc0LFxuICAgICAgMTU1LFxuICAgICAgMjA5LFxuICAgICAgNjEsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSUTJQQ0FER1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjQzMjczODc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMzNzU4MzU5ODY3NTMyOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+ZglwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ082VXhJMENFSi9Rd0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib3UvNDZvZUFiTmRRbmVSUVhxVGZ6RjlLbUlLb2VJVTFWOWM2OERpYy9pMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSSy9NTVBZdTV3OEdRSk80VWpBOURURXJJaE1DYURLcXNWVEFTYWYwNzJKRERwWVZsb0Vkd2V1VWpoWnhxUG5YSnppb2VpYTNTdTRoMG0zTXJ2UFBBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQSHhlNDZpOFhUVldhNTVaaTZXUUR6QnJNS05vNk14aFdQRlFjZXJZYmRhZW1LcTNzZG1Hdjk1N1F2MXpZOXhwVC9uby81N2tlTTFuY2s5VDhUdGJCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyNDMyNzM4NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MjM0OTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCOXlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUI5eS5qc29uIjogIntcImtleURhdGFcIjpcIjNERG1yZ1l2cjhqc0FmNThxNzFJSnJJOU1XbVpHQzM1UEVUMzk4V1k3dEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTY1MjUwNjcwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3MjM0OTE4MjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©imasha-ᴍᴅ" , // ```『 Imasha Md 』```", //*imasha Md 2024*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "imasha md",
  ownername:process.env.OWNER_NAME|| "It'x Imasha",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Imasha"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
