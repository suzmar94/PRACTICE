// zadatak1.js

// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу
// zadatak2.js
{
let cena = 850;
let precnik = 42;
let r = precnik / 2;
let P;
P = r * r * Math.PI;

console.log(`Cena pice po centimetru kvadratnom je: ${cena/P}`)
}

console.log('-----------------------------------------------------------------')
// За првих 100 бројева исписати:

// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
// (1,2,Fizz,4,Buzz,...)



for ( let x = 1, y = 100; x<=y; x++){
    if(x % 3 === 0 && x % 5 === 0){
        console.log('FizzBuzz')
    }else if ( x % 3 === 0){
        console.log('Fizz')
    }else if ( x % 5 === 0){
        console.log('Buzz')
    }else{
        console.log(x)
    }
}


console.log('-----------------------------------------------------------------')


// zadatak3.js

// Исписати Марио пирамиду одређене висине:
// За n = 5

// #
// ##
// ###
// ####
// #####


let n = 5;
for(let i = 0; i <=n; i++){
    console.log('#'.repeat(i));
}
for(let i = 0; i <=n; i++){
    console.log('#'.repeat(n- i));
}









console.log('-----------------------------------------------------------------')
// zadatak4.js

// Исписати Марио пирамиду одређене висине:
// За n = 5

//     #
//    ## 
//   ###
//  ####   
// #####



let k = 5
for(let i = 0; i <=k; i++){
    console.log('#'.repeat(k - i))
}










console.log('-----------------------------------------------------------------')

// zadatak5.js

// Исписати Марио пирамиду одређене висине:
// За n = 5

//     # #
//    ## ##
//   ### ###
//  #### ####  
// ##### #####

let visina = 5

for(let i = 0; i <= visina; i++){
    console.log(' '.repeat(visina-i) + '#'.repeat(i) + ' ' + '#'.repeat(i))
}


