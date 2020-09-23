let acc1 = {
    username: 'pera',
    age: 17
}
let acc2 = {
    username: 'zika',
    age: 32
}
let acc3 = {
    username: 'ana',
    age: 24
}
let acc4 = {
    username: 'lana',
    age: 37
}
let accounts = [acc1,acc2,acc3,acc4];
console.log(accounts);

for(let i = 0; i < accounts.length; i++){
    if(accounts[i].age > 18){
        console.log(`${accounts[i].username} je punoletan`);
    }
}