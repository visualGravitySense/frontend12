// Arrow function

const area = a => {
    return a ** 2;
}
console.log(area(5));

const area1 = (b, c) => {
    return b ** c;
}
console.log(area1(5, 2));


const area2 = (d, e) => d ** e;
console.log(3, 4);


function sum(a1, b1, c1=0) {
    return a1 + b1 + c1;
} console.log(sum(1, 2));


let a2 = 10, b2 = 20, c2 = 30;
const local = () => {
    let a2 = 1, b2 = 2, c2 = 3;
    return a2, b2, c2;
}
console.log(local());
console.log([a2, b2, c2]);


let a3, b3;
function tester() {
    let b3;
    a = true;
    b = 10;
    console.log('LOCAL', a3, b3);
}
tester();
console.log('GLOBAL', a3, b3);


const a4 = 5;
function outer() {
    let a4 = 6;
    function inner() {
        let a4 = 3;
        console.log('FROM INNER', a4);        
    }
    inner();
    console.log('FROM OUTER', a);    
}
outer();


let a5 = 0;
function changeA () {
    let b5 = a5;
    b5 += 2;
    return b5;
}
console.log(changeA());
console.log(a5);


const year = 2022;
switch (year % 4) {
    case 0:
        console.log('A Leap Year!');
        break
    case 1:
        console.log('Last was a Leap Year');
        break
    case 3:
        console.log('Next year was a Leap Year');
        break
    default:
        console.log('It is not a Leap Year');                        
}

const month = 5;
switch (month) {
    case 6:
        console.log('Begining of summer');
        break
    case 6:
        console.log('Middele of summer');
        break    
    case 6:
        console.log('End of summer');
        break
    default: 
        console.log('It is not summer!');
        
}

const num = 10;
num > 0 
    ? console.log(num, 'is positive') 
    : console.log(num, 'is negative');


let user;
user ? console.log(`<h1>${user}</h1>`)
    :console.log('<h1>No user</h1>');
