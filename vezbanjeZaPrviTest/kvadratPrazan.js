

/*
Написати проограм који за унето N и M исписује квадрат
нпр. N = 10 , M = 5
**********
*        *
*        *
*        *
**********
*/
{
    let N = 10
    let M = 5

    let poklopac = '*'.repeat(N)
    let red = '*' + ' '.repeat(N - 2) + '*'

    console.log(poklopac)

    for(let i = 0; i < M - 2; i++){
        console.log(red)
    }

    console.log(poklopac)
}