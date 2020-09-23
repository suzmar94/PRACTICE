//Proizvod prvih 5 prirodnih brojeva.	

// let proizvod = 1;
// let n = 5;
// for(let i = 1; i <= n; i++){
//     proizvod *= i;
// }
// console.log(proizvod);


//Izračunati proizvod parnih prirodnih brojeva od 1 do 5.	

// let proizvod = 1;
// let n =5;
// for (let i =1; i <=n; i++){
//     if(i%2===0){
//         proizvod *=i;
//     }
// }
// console.log(proizvod);


//Izračunati proizvod neparnih prirodnih brojeva od 1 do 5.	

// let proizvod = 1; 
// let n = 5;
// for(let i = 1; i <=n; i++){
//     if(i%2!==0){
//         proizvod *= i;
//     }
// }
// console.log(proizvod);


//Napisati program za ispis proizvoda (faktorijele) brojeva od 1 do 5.	

// let proizvod = 1;
// let n = 5;
// for(let i = 1; i <=n; i ++){
//     proizvod *= i;
//     console.log(proizvod);
// }
// console.log(`faktorijel od 5 je: ${proizvod}`);


//Napisati program za izračunavanje proizvoda od 1 do 10.	

// let proizvod = 1;
// let n = 10;
// for(let i = 1; i < n; i++){
//     proizvod *= i;
// }
// console.log(proizvod);


//Proizvod parnih od prvih n prirodnih brojeva.	??????????????????????????????????????????????

let proizvod = 1;
let n = 8; //zadati broj parnih u zadatku koji treba da se pomnozi
//i je iterator koji sluzi da se ide broj po broj u petlji

for(let i = 1, brojac = 0; brojac < n; i++){
    if(i%2===0){
    proizvod *= i; //mnozim samo parne zato mora u petlju
    brojac ++; //broji parne koji su dodati u proizvod
    }
}
console.log(proizvod);



//Izračunati proizvod brojeva od 1 do n koji nisu djeljivi sa a.	

// let proizvod = 1;
// let N = 20;
// let a = 5;
// for(let i = 1; i < N; i++){
//     if(i % a!== 0){
//         proizvod *= i;
//     }
// }
// console.log(proizvod);


//Napisati program za ispis proizvoda brojeva od 1 do n čija je cifra jedinica 6.	

// let proizvod = 1;
// let n = 20;
// for(let i = 1; i < n; i++){
//     if(i%10===6){
//         proizvod *= i;
//     }
// }
// console.log(proizvod);


//Izračunati proizvod parnih brojeva od A do B.	

// let proizvod = 1;
// let a = 5;
// let b = 20;
// for( let i = a; i < b; i++){
//     if( i % 2 ===0){
//         proizvod *= i;
//     }
// }
// console.log(proizvod);


//Naći proizvod prirodnih brojeva u intervalu od k do n koji su djeljivi sa 2 a nisu djeljivi sa 3.	

// let proizvod = 1;
// let k = 10;
// let n = 25;
// for(let i = k; i < n; i++){
//     if(i%2 === 0 && i%3 !== 0){
//         proizvod *= i;
//     }
// }
// console.log(proizvod);


//Izračunati sumu i proizvod prirodnih brojeva od k do n. Koristiti jednu i dvije petlje.	

// let suma = 0;
// let proizvod = 1;
// let k = 5;
// let n = 20;
// //jedna petlja

// for(let i=k; i < n; i++){
//     suma += i;
//     proizvod *= i;
// }
// console.log(suma);
// console.log(proizvod);


//Saberi i pomnoži prirodne brojeve do N koji su djeljivi sa 3.	

// let suma = 0;
// let proizvod = 1;
// let N = 20;
// for(let i = 1; i < N; i++){
//     if(i%3 === 0){
//         suma += i;
//         proizvod *= i;
//     }
// }
// console.log(suma);
// console.log(proizvod);
















