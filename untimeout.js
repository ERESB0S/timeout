const _0xbbf9a5=_0xa01c;function _0x23aa(){const _0x3fbd74=['6219WgRCKi','Bot\x20','1595400xmxLae','7976GmQkxX','112206MXgvgL','2364945qaqJFX','897348eJtCbO','native-request','4BKuNKZ','4254166saAQdO','189298BpreOa','token'];_0x23aa=function(){return _0x3fbd74;};return _0x23aa();}(function(_0x1d2350,_0x4a9ba2){const _0x48604f=_0xa01c,_0x34c088=_0x1d2350();while(!![]){try{const _0x1c05ec=-parseInt(_0x48604f(0x9c))/0x1+parseInt(_0x48604f(0xa2))/0x2+-parseInt(_0x48604f(0xa0))/0x3+parseInt(_0x48604f(0x9a))/0x4*(-parseInt(_0x48604f(0xa3))/0x5)+parseInt(_0x48604f(0x98))/0x6+parseInt(_0x48604f(0x9b))/0x7+-parseInt(_0x48604f(0xa1))/0x8*(-parseInt(_0x48604f(0x9e))/0x9);if(_0x1c05ec===_0x4a9ba2)break;else _0x34c088['push'](_0x34c088['shift']());}catch(_0x90c0a5){_0x34c088['push'](_0x34c088['shift']());}}}(_0x23aa,0x4b40f));function _0xa01c(_0x199d15,_0x22314b){const _0x23aa19=_0x23aa();return _0xa01c=function(_0xa01cf2,_0x32fc66){_0xa01cf2=_0xa01cf2-0x98;let _0x5a02a3=_0x23aa19[_0xa01cf2];return _0x5a02a3;},_0xa01c(_0x199d15,_0x22314b);}const request=require(_0xbbf9a5(0x99)),headers={'accept':'/','authorization':_0xbbf9a5(0x9f)+client[_0xbbf9a5(0x9d)],'content-type':'application/json'};

await request.get(`https://discord.com/api/v8/guilds/${message.guild.id}/members/${member.user.id}`, headers, async function (err, data) {
    if (err) throw err;
    if (new Date(JSON.parse(data).communication_disabled_until || Date.now()).getTime() <= Date.now()) return message.channel.send("Belirttiğin kullanıcı zaten zaten zaman aşımına uğratılmamış!");

    const fetch = require("node-fetch");
    await fetch(`https://discord.com/api/v8/guilds/${message.guild.id}/members/${member.user.id}`, {
        "credentials": "include",
        "headers": {
            "accept": "*/*",
            "authorization": `Bot ${client.token}`,
            "content-type": "application/json"
        },
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify({
            "communication_disabled_until": null
        }),
        "method": "PATCH",
        "mode": "cors"
    });
    // LOGLAR VE CHATE ATILACAK MESAJ BU KISIMA \\
    message.channel.send(`${member.toString()} üyesinin zaman aşımı, ${message.author} tarafından kaldırıldı!`);
    return;
});
