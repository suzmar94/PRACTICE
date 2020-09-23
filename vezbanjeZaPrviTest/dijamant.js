//dijamant sa razmakom

// let karakter = '* ';
// let visina = 6;

// for(let i=1; i<=visina; i++){
//     console.log(' '.repeat(visina - i) + karakter.repeat(i));
// }
// for(let i=1; i<=visina; i++){
//     console.log(' '.repeat(i) + karakter.repeat(visina-i))
// }
// console.log('.................................................')

let N = 5;
let red = '';
for(let i = 1; i<=N; i++){
    red = ' '.repeat(N-i) + '*'.repeat(i + (i - 1));
    console.log(red);
}
for(let i = 1; i < N; i++){
    red = ' '.repeat(i) + '*'.repeat((N - i) + (N - i -1));
    console.log(red);
}