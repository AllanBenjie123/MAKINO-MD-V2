const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


global.Owner = ["Benjie"];
global.OwnerNumber = ["+256 709 117848"];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID |{"noiseKey":{"private":{"type":"Buffer","data":"sFeeNyst/oJX7TKsxnkSBMIsjTMR5JyVTn/bBnmQfHA="},"public":{"type":"Buffer","data":"lQmn0zZ0fCm4YlwtvaoWFomIZc21Oj2dKAvhAGZ6azg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"MIrZqF3/Lf07nCr1WkI+OipdPbS6xr/ainuSY4nhI00="},"public":{"type":"Buffer","data":"VX/sXGSJpMCpLI+FCUBrFisOzq6utp5NczEsh9kTqFM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GBcPsJ/1s+P1ntn6848Wv+Wj9qsG+zsTU/TQ2b0VMEY="},"public":{"type":"Buffer","data":"S+unl6k5+M/ASP6x4Pr/RW3G2V+Vn4nkRkW65NwxAlI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"OALH6hqoOCjvLDJrxCbU/s72dS/cbufoWsrLt9jucks="},"public":{"type":"Buffer","data":"yDdfaAIzsUHQQWjcNJrHqiCzdBJlnEOKRLmFSWxfQSM="}},"signature":{"type":"Buffer","data":"6ZZgb7u/Z+SfUI5ioWQmVDt5dXcqgFJdlLfcmG5NjdZGnRhQ/ITycs3Za4k90zd61mWvtz1pSXyaZg0JY1W9iA=="},"keyId":1},"registrationId":202,"advSecretKey":"lVlbZmaZ9Jx7bHHwqSjxiKQzjTTXGWG7Vg3UrhyVylE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"hFXUJerLTkuDYA-bO1mNRQ","phoneId":"d5f3a4dd-62a7-4182-9c29-d5753cf3fe20","identityId":{"type":"Buffer","data":"mP3GnaQuiziuNSq5RDzTxij7F9s="},"registered":true,"backupToken":{"type":"Buffer","data":"8iWq762wyIGdBJb2NIgXu2GA0LE="},"registration":{},"pairingCode":"KSK1ECZ3","me":{"id":"256709117848:34@s.whatsapp.net"},"account":{"details":"COSElrMCEPGysbQGGAMgACgA","accountSignatureKey":"EigVBPri2OIoUcAtchkiv/p9AtorWfBkcIN8yuerM20=","accountSignature":"gMfKCLInpHpJygG74QlxTeqmM6V1rbbQbkp2Y9JEqMbpdSM0NQcSkAK7nWrE+NLjIrh4L8mTm4lJnyqicyGqBA==","deviceSignature":"/A3LxmQhQqlDC+EzhO/WU+FZnG5ZCG1n5rdbgalo9VQFdaZC6uslkTXeJuWe6ptWIcdcUy9V5S5RJU3NPzTlgQ=="},"signalIdentities":[{"identifier":{"name":"256709117848:34@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRIoFQT64tjiKFHALXIZIr/6fQLaK1nwZHCDfMrnqzNt"}}],"platform":"android","lastAccountSyncTimestamp":1720473982,"myAppStateKeyId":"AAAAABrC"}| ``
global.prefa = ["?"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
