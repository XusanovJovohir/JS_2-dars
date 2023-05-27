/* Data in JS*/

let sana = new Date;

sana.setFullYear(2002)
sana.setMonth(6)
sana.setDate(1)

let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftakuni = sana.getDay()
let soat = sana.getHours()
let minut = sana.getMinutes()
let sekund = sana.getSeconds()
let milliseconds = sana.getMilliseconds()
let timezoneOffset = sana.getTimezoneOffset()
let utcDate = sana.getUTCDate()
let utcFullYear = sana.getUTCFullYear()
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr","oktyabr","noyabr","dekabr"];
let haftakunlari = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]

document.write(yil + "-yil " + kun + "-" + oylar[oy] + ". Haftaning " + haftakunlari[haftakuni] + " kuni.")