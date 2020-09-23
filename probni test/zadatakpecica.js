// let visina = 10;

// for(let i=0; i<visina; i++){
//     console.log(' '.repeat(visina-i-1) + '*' + ' '.repeat(2*i) + '*');
// }
// for(let i=2; i<=visina; i++){
//     console.log(' '.repeat(i-1) + '*' + ' '.repeat(2*visina -2*i) + '*');
// }

let sirina = 15;

console.log(' '.repeat(Math.floor(sirina/2))+'*' );
for (let i = 1; i<(sirina/2); i++) {
    console.log(' '.repeat(sirina/2-i) + '*' + ' '.repeat(2*i-1) + '*');
}
// for (let i = 0; i<3; i++) {
//     console.log('*' + ' '.repeat(sirina-2) + '*');
// }
for (let i = 2; i<(sirina/2); i++) {
    console.log(' '.repeat(i-1) + '*' + ' '.repeat(sirina-2*i) + '*');
}
console.log(' '.repeat(Math.floor(sirina/2)) +'*' );


