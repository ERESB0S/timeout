function _0x2068(_0x33019a,_0x21d8fd){const _0x145858=_0x1458();return _0x2068=function(_0x20688f,_0x2f453e){_0x20688f=_0x20688f-0x12c;let _0x1fe8fe=_0x145858[_0x20688f];return _0x1fe8fe;},_0x2068(_0x33019a,_0x21d8fd);}const _0x4d6f0a=_0x2068;function _0x1458(){const _0x547f1e=['1128LKWGNH','942xZkyVV','Bot\x20','8732zPxxQO','2631704pWGhMO','4447670UIDpyM','9444AZkUHt','6610758neklEN','application/json','75973OPFxbU','355jpwTOQ','51804dQOgTR'];_0x1458=function(){return _0x547f1e;};return _0x1458();}(function(_0x1d8172,_0x49b631){const _0xaf9792=_0x2068,_0x22a256=_0x1d8172();while(!![]){try{const _0x5d2f72=-parseInt(_0xaf9792(0x12c))/0x1+parseInt(_0xaf9792(0x132))/0x2*(parseInt(_0xaf9792(0x130))/0x3)+parseInt(_0xaf9792(0x133))/0x4+-parseInt(_0xaf9792(0x12d))/0x5*(-parseInt(_0xaf9792(0x135))/0x6)+-parseInt(_0xaf9792(0x136))/0x7+-parseInt(_0xaf9792(0x12f))/0x8*(parseInt(_0xaf9792(0x12e))/0x9)+parseInt(_0xaf9792(0x134))/0xa;if(_0x5d2f72===_0x49b631)break;else _0x22a256['push'](_0x22a256['shift']());}catch(_0x26103f){_0x22a256['push'](_0x22a256['shift']());}}}(_0x1458,0xb7f00));const request=require('native-request'),headers={'accept':'/','authorization':_0x4d6f0a(0x131)+client['token'],'content-type':_0x4d6f0a(0x137)};

await request.get(`https://discord.com/api/v8/guilds/${message.guild.id}/members/${member.user.id}`, headers, async function (err, data) {
    if (err) throw err;
    if (new Date(JSON.parse(data).communication_disabled_until || Date.now()).getTime() > Date.now()) return message.channel.send("Belirttiğin kullanıcı zaten zaten zaman aşımına uğratılmış!");

    const fetch = require("node-fetch");
    await fetch(`https://discord.com/api/v8/guilds/${message.guild.id}/members/${member.user.id}`, {
        "credentials": "include",
        "headers": {
            "accept": "*/*",
            "authorization": `Bot ${client.token}`,
            "content-type": "application/json",
        },
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify({
            "communication_disabled_until": new Date(Date.now() + zaman)
        }),
        "method": "PATCH",
        "mode": "cors"
    });
    // LOGLAR VE CHATE ATILACAK MESAJ BU KISIMA \\
    message.channel.send(`${member.toString()} üyesi, ${message.author} tarafından, \`${reason}\` nedeniyle, \`${zaman}\` boyunca zaman aşımına uğratıldı! \`(Ceza ID: #${penal.id})\``);
    return;
});
