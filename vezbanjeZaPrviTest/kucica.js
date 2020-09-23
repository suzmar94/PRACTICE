//kucica
let N = 5;
let red = '';
for(let i = 1; i<=N; i++){
    red = ' '.repeat(N-i) + '*'.repeat(i + (i - 1));
    console.log(red);
}

let m = 5;
let poklopac = '*'.repeat(N + 4);
for(let i = 0; i < m; i++){
    console.log(poklopac);
}
