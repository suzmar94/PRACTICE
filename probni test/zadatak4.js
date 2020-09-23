// Исписати првих 30 преступних година (почевши од 1234, уљкучујући)

let godina =1600
let brojPrestupnih = 10;

for(let i =0; i<brojPrestupnih;){
if(godina%4===0 && (godina % 100!==0 || godina% 400===0)){
        console.log(godina)
        i++;
}
godina++;

}
console.log('............................');

