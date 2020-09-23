
// Користећи петљу исписати све људе (for / forEach)
// {
//     let ljudi = ['Pera','Ana','Zika','Lana']
//     ljudi.forEach(function ispisi(names)) {
//         console.log(names);
//     });
// }




// Уклонити 'Pera' из низа , splice
// {
//     let ljudi = ['Pera','Ana','Zika','Lana']
//     ljudi.splice(0, 1);
//     console.log(ljudi);

// } ili

// let ljudi = ['Pera','Ana','Zika','Lana']
// ljudi.shift()
// console.log(ljudi);





// Уклонити 'Lana' из низа
// {
//     let ljudi = ['Pera','Ana','Zika','Lana']
//     ljudi.splice(3, 1);
//     console.log(ljudi);

// }  //sa splice bilo sta, a sa pop konkretno zadnji

// let ljudi = ['Pera','Ana','Zika','Lana']
// ljudi.pop()
// console.log(ljudi);






// Додати 'Mika' на почетак
// {
//     let ljudi = ['Pera','Ana','Zika','Lana']
//     ljudi.unshift('Mika');
//     console.log(ljudi);
// }




// Додати 'Mika' на крај
// {
//     let ljudi = ['Pera','Ana','Zika','Lana'];
//     ljudi.push('Mika');
//     console.log(ljudi);
// }





// Наћи 'Zika' у низу (тј његову позицију) 


// let ljudi = ['Pera','Ana','Zika','Lana'];
// console.log(ljudi.indexOf('Zika'));




//Из низа извући (у други низ) бројеве који су дељиви са 2
//a potom i njihov zbir


// function sum(niza) {
//     let suma = 0;
//     niza.forEach(element => {
//         suma+=element;
//     });
//     console.log(niza);
//     return suma;
// }

// function divisibleBy2(num) {
//     return num % 2 ===0;
// }

// let niz = [1,34,23,78,231,67,2,6,23,-234];
// let noviNiz = niz.filter(divisibleBy2);
// console.log(noviNiz);
// console.log(sum(noviNiz));






// Исписати све људе, али изаћи из петље кад се стигне до 'Ana'
// Исписати све људе, али прескочити 'Ana'

//     let ljudi = ['Pera', 'Ana', 'Zika', 'Lana']

//     for (let i = 0; i < ljudi.length; i++) {
//         if (ljudi[i] === 'Ana') {
//             break;
//         }

//         console.log(ljudi[i])
//     }
//...................................................

//     for (let i = 0; i < ljudi.length; i++) {
//         if (ljudi[i] === 'Ana') {
//             continue;
//         }

//         console.log(ljudi[i])
//     }








//Исписати све бројеве у низу који су дељиви са 5


// let niz = [3, 6, 99, 54, 65];
// function divisibleBy5(num) {
//     return num % 5 === 0;
// }

// let noviNiz = niz.filter(divisibleBy5)
// console.log(noviNiz);


//Наћи просечну вредност бројева низа (Аритметичка средина)


// function aritmetickaSredina(niz) {
//     let suma = 0;
//     niz.forEach(element => {
//         suma+=element;

//     });
//     return suma/niz.length;
// }

// let niz = [234,-123,5,532,-32,23]

// console.log(aritmetickaSredina(niz));






//Исписати збир бројева дељивих са 2, а производ бројева који нису дељиви са 2

// function notDivisibleBy2(num) {
//     return num % 2 !==0;
// }
// function divisibleBy2(num) {
//     return num % 2 === 0;
// }


// function zbirR(niz) {
//   let zbir = 0;
//   for(let i = 0; i<niz.length; i++){
//       if(divisibleBy2(niz[i])){
//           zbir+=niz[i];
//       }
//   }
//   return zbir;
// }

// function proizvodD(niz) {
//     let proizvod = 1;
//     for(i = 1; i<niz.length; i++){
//         if(notDivisibleBy2(niz[i])){
//             proizvod *=niz[i];
//         }
//     }
//     return proizvod;
//   }

// let niz = [24,13,5,53,32,23];
// console.log(zbirR(niz));
// console.log(proizvodD(niz));
// console.log(niz.filter(divisibleBy2));
// console.log(niz.filter(notDivisibleBy2));