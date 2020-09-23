//ulazni parametri
let w = 10;
let h = 16;

let gornjiDeoVisina = Math.floor((h-3)/2);
let donjiDeoVisina = Math.ceil((h-3)/2);

let crta = ' ' + '*'.repeat(w-2) + ' '
let red = '*' + ' '.repeat(w-2) + '*'

console.log(crta);

for(let i = 0; i< gornjiDeoVisina; i++){
    console.log(red);
}
console.log(crta);

for(let i = 0; i< donjiDeoVisina; i++){
    console.log(red);
}
console.log(crta);