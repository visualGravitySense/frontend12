/* In JS everything is object
"." enter to object
() call "return" method

Variables use */

// console.log(a);
console.log("Hello World!");

let a;
console.log(a);
a = "Hello World"
console.log(a);
a = "Dmitri"
console.log(a);

let b=10,c=5;
console.log(b,c);

const d = 666;
console.log(d);
// d=111; // can't change "const"

// Do not use "var"
// var x = 10;
// console.log(x);
// var x = 11;
// console.log(x);

let x = 10;
console.log(typeof x);

x = 123e5;
console.log(typeof x, x);

console.log(0.1 + 0.2);

let userName = 'Terminator';
console.log(typeof userName);
console.log(userName.length);
console.log(userName.toUpperCase());

console.log("That's");
console.log("That\\\'s".length);
// /' escape symbol, not use as a system 

console.log("Hello" + ' ' + userName + (12345 + 123456));
console.log(userName * 123456);

// \n string return
// \t tabulation
// \b backspace
// console.log(123 /n 456 );
console.log("\tstring\nhfgtr");

let num = 1;
console.log(Boolean(num));

let num2 = 0;
console.log(Boolean(num2));


let str = 'Nan';
console.log(Boolean(str));
let str2 = '';
console.log(Boolean(str2));

let str3 = '\n';
console.log(Boolean(str3));

let car = 'Subaru WRX asd';
console.log(car, car.length);
console.log(car[0]);
console.log(car[car.length - 1]);

// last symbol not iclude to diapason 
console.log(car.slice(0,5));
console.log(car.slice(1,3));
