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

const task = (hisob) => {
    let count = 0;
    for (let i = 0; i < hisob.length; i++) {
        if (!isNaN(hisob[i]) && hisob[i] !== ' ') { 
            count++;
        }
    }
    return count;
}

const a = "ad2a54y79wet0sfgb9";
const c = task(a);
console.log('result:', c);
