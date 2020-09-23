// let pravougaonik1 = {
//     duzina:10,
//     sirina:5,
//     povrsina: function(){
//         console.log(this.duzina*this.sirina);
//     }
// }

// pravougaonik1.povrsina()

// class Pravougaonik{
//     constructor(sirina, duzina){ //ovo su parametri
//         this.sirina = sirina //ovo su key od objekta
//         this.duzina = duzina
//     }

//     povrsina(){
//         return this.sirina * this.duzina
//     }

//     obim(){
//         return this.sirina * 2 + this.duzina * 2
//     }

//     opis(){
//         // console.log(this);
//         return `Pravougaonik sirine ${this.sirina} i duzine ${this.duzina}`
//     }
// }

// let p1 = new Pravougaonik(3, 4)
// let p2 = new Pravougaonik(5, 2)
// console.log(p1.povrsina());
// console.log(p2.povrsina());
// console.log(p2.opis());

//napraviti klasu sastojak koja sadrzi polja: 
//ime, kolicina i cena
//ima metodu koja racuna ukupnu cenu


class Sastojak {
    constructor(a, b, c) {
        this.ime = a
        this.kolicina = b
        this.cena = c
    }

    ukupnaCena() {
        return this.kolicina * this.cena
    }

    ispis() {
        return `Sastojak: ${this.ime} cene: ${this.cena} i kolicine: ${this.kolicina}`
    }
}


let sastojak1 = new Sastojak('Paprika', 3, 100)
let sastojak2 = new Sastojak('Mleko', 10, 50)
let sastojak3 = new Sastojak('Hleb', 2, 30)

let sastojci = [sastojak1, sastojak2, sastojak3]


class Recept {
    constructor(a, b, c) {
        this.naziv = a
        this.tezina = b
        this.sastojci = c
    }

    ispis() {
        console.log(`Naziv: ${this.naziv}, tezina: ${this.tezina}, sastojci: ${this.sastojci.map(el => el.ispis())}`);
    }

    ukupnaCenaRecepta(){
        let sum = 0;
        this.sastojci.forEach(el => {
            sum += el.ukupnaCena()
        });
        return sum;
        

    }

}

let rec1 = new Recept('Rec1', 'pocetni', sastojci)
let rec2 = new Recept('Rgsdgec1', 'fhsrh', sastojci)
// rec1.ispis()
// console.log(rec1.ukupnaCenaRecepta());
//prazan objekat i string kad se saberu rezultat je broj 0
//prazan string plus prazan objekat je prazan string koji sadrzi object object
//tip od null je objekat

class Figura{
    constructor(boja){
        this.boja = boja;
    }
    getPovrsina(){
        return
    }
    getObim(){
        return
    }
}

class Krug extends Figura{
    constructor(boja, r){
        super(boja)  //poziva konstruktor, uvek prvi mora da se pozove
        this.boja = boja;
        this.r = r;
    }
    getPovrsina(){
        return this.r ** 2 * Math.PI;
    }
    getObim(){
        return this.r * 2 * Math.PI;
    }
}

let f1 = new Figura('crvena')
let f2 = new Krug('plava', 2)

console.log(f1.getPovrsina());
console.log(f2.getPovrsina());
