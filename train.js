// A-TASK: 
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.
// @MITASK

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
console.log('result:',c)