// A-TASK: 
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.
// @MITASK


/*
const task =(hisob,son) => {
    let count=0;
    for(i=0; i<=hisob.length; i++){
        if(hisob[i] === son){
            count++;
        }
    }
    return count;
}
const a='assalomu alaykum'
const b = 'a'
const c = task(a,b)
console.log('result:',c);

console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba boling",//0-20
    "togri boshliq tanlang va koproq hato qiling", //20-30
    "oz ustingizda ishlashni boshlang", //30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitsya qiling", //50-60
    "endi dam oling, foydasi yoq endi", //60
]; */

/* Callback funksiyasi - bu boshqa funksiya ichida, 
ma'lum bir operatsiya tugagandan so'ng chaqiriladigan funksiya. */

// function maslahatBering(a, callback){
//     if(typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null,list[0]);
//     else if (a > 20 && a <= 30) callback(null,list[1]);
//     else if (a > 30 && a <= 40) callback(null,list[2]);
//     else if (a > 40 && a <= 50) callback(null,list[3]);
//     else if (a > 50 && a <= 60) callback(null,list[4]);
//     else{
//         setTimeout(function () {
//             callback(null,list[5]);
//         },5000);
//     }
// }

// maslahatBering(30, (err,data) =>{
//     if(err) console.log("ERROR:", err);
//     else{
//         console.log("Javob:", data)
//     }
// });
// console.log("Passed here 1")

// async functionlar -- 
// async function maslahatBering(a){
//     if(typeof a !== "number") throw new Error ("insert a number", null);
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else{
//         return new Promise((resolve,reject) => {
//             setInterval(() => {
//                 resolve(list[5])
//             },500);
//         })
//     }
// }
// then/catch--

// maslahatBering(65)
//     .then((data) => {
//         console.log("Javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err)
//     })
// console.log("Passed here 1")

// async/await
// async function run() {
//     let Javob =await maslahatBering(68);
//     console.log(Javob);
//     Javob= await maslahatBering(31);
//     console.log(Javob);
//     Javob = await maslahatBering(41);
//     console.log(Javob)
// }
// run()

/* B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi. */

// const task = (hisob) => {
//     let count = 0;
//     for (let i = 0; i < hisob.length; i++) {
//         if (!isNaN(hisob[i]) && hisob[i] !== ' ') { 
//             count++;
//         }
//     }
//     return count;
// }

// const a = "ad2a54y79wet0sfgb9";
// const c = task(a);
// console.log('result:', c);

/* C-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true; */


const tasckC =function (a,b){
 if(a.length !== b.length){
    return false;
    }
    const str1 =a.split("").sort().join("")
    const str2 =b.split("").sort().join("")
    return str1 === str2
}
const matn1='salom';
const matn2='asmlo';
const matn3= tasckC(matn1,matn2);
console.log(matn3)

/*D-TASK: 
Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!  */

const moment = require('moment');
class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    vaqt(){
        return moment().format('HH:mm:ss');
    }

    shopQoldiq() {
        console.log(`Hozir ${this.vaqt()} da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
    }

    shopSotish(mahsulot, soni) {
        if (this[mahsulot] >= soni) {
            this[mahsulot] -= soni;
            console.log(`Hozir ${this.vaqt()} da ${soni}ta ${mahsulot} sotildi.`);
        } else {
            console.log(`Kechirasiz, yetarli miqdorda ${mahsulot} mavjud emas.`);
        }
    }

    shopQabul(mahsulot, soni) {
        this[mahsulot] += soni;
        console.log(`Hozir ${this.vaqt()} da ${soni}ta ${mahsulot} qabul qilindi.`);
    }
}

const myShop = new Shop(10, 10, 10);

myShop.shopQoldiq(); 
myShop.shopSotish('non', 9); 
myShop.shopSotish('lagmon', 11); 
myShop.shopQabul('cola', 4); 

/* E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"

@MITASK */

const as = (soz) =>{
     const text='hello'
     return text;
}
const b = as().split("").reverse().join("")
console.log(b);