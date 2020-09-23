// Написати програм који исписује структуру броја 8 од #, за унето W и H (width,height)
// Пример: W = 6 , H = 10
// ####
// # #
// # #
// # #
// ####
// # #
// # #
// # #
// # #
// ####
// Напомена: Горњи и доњи део осмице су или једнаки или је доњи део већи (као у задатом случају)


                    // // ulazni paremtri
                    // let W=8;
                    // let H=20;

                    // // definisemo dimenzije osmice
                    // let gornjiDeoVisina = Math.floor((H-3)/2);
                    // let donjiDeoVisina = Math.ceil((H-3)/2);

                    // // pripremamo linije za stampanje
                    // let sirinaReda = W-2;
                    // let crta = " ";
                    // let linijaUTelu = "#";
                    // for(let i=0; i<sirinaReda;i++) {
                    //     crta += "#";
                    //     linijaUTelu += " ";
                    // }
                    // crta += " ";
                    // linijaUTelu +="#";

                    // // stampamo osmicu

                    // console.log(crta);
                    // for(let i=0; i<gornjiDeoVisina; i++) {
                    //     console.log(linijaUTelu);
                    // }
                    // console.log(crta);
                    // for(let i=0; i<donjiDeoVisina; i++) {
                    //     console.log(linijaUTelu);
                    // }
                    // console.log(crta);

{
    let W = 8, H = 8

    let precka = ' ' + '#'.repeat(W - 2) + ' '
    let red = '#' + ' '.repeat(W - 2) + '#'

    console.log(precka)

    for(let i = 0; i < Math.floor((H - 3) / 2); i++){
        console.log(red)
    }

    console.log(precka)

    for(let i = 0; i < (H - 3) / 2; i++){
        console.log(red)
    }

    console.log(precka)
}