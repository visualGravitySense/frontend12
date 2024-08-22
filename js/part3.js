// let x = 2

// operators AND | OR
// x && console.log(x ** 2);
// x || console.log('There is no X');

// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     mileage: -120,
// }

// else if proverjaet tolko do pervogo vernogo uslovija

// if (myCar.mileage >= 0) {
//     if (myCar.mileage === 0) {
//         console.log('This car is new');
//     }
    
// } else if (myCar.mileage < 5000) {
//     console.log('This is almost new car');
    
// } else if (myCar.mileage >= 10000) {
//     console.log('This is old car');
// } else {
//     console.log('Mileage is negative. Check data');
// }

// if if if ... proverjaet i vydaet vse vernye uslovija

// if (myCar.mileage === 0) {
//     console.log('This car is new')
// } 
// if (myCar.mileage < 5000 && myCar.mileage > 0) {
//     console.log('This is almost new car');
// }
// if (myCar.mileage < 10000 && myCar.mileage >= 5000) {
//     console.log('This is old car');
// }

// let x = 123123, y = 763352;

// let res = x * y;
// if (res % 2 === 0) {
//     console.log(res, 'is even');
// } else {
//     console.log(res, 'is odd');    
// }

// const isikukood = '31212120981';

// if (isikukood.length === 11) {
//     console.log(isikukood);    
// } else if (isikukood.length < 11) {
//     console.log('code is too shotrt');
// } else if (isikukood.length > 11) {
//     console.log('code is too long');
// }

// if (isikukood.length === 11) {
//     console.log(isikukood);    
// } else {
//     if (isikukood.length < 11) {
//         console.log('code is too shotrt');
//     } else {
//         console.log('code is too long');
//     }
// }

// ! perevoratsivaet boolean znatsenie

// let username = '';

// if (!username) {
//     console.log('There is no username');   
// }

// Strogoe ravestvo === Strogoe e ravenstvo !==

// let name = 'Jack';
// let surname = 'Smith';
// let age = 20;

// console.log(`Hello ${name} ${surname}. You are ${age} years old!`);

// console.clear() - o4istit console v brauzere
// globalThis - rabotaet i v brauzere i v konsoli

// let user = 'simon';
// console.log(`${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`);

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(23, 12);
// sum(43, 23);
// sum(123, 65);

// function sayHello() {
//     console.log("Hell World");   
//     return 'I said hell world!' 
// }

// console.log(sayHello());

// function area(a, b) {
//     return a * b;
// }
// area(2, 4);

// function sayHello(name)  {
//     return `Hello ${name}`
//     console.log(name);    
// }
// console.log(sayHello('Jack'));

// Positive or negative number

// function positiveOrNegative(number) {
//     if (number > 0) {
//         return 'positive';
//     } else if (number < 0) {
//         return 'negtive';
//     } 
//     return 'zero';
    
// }
// console.log(`This number is ${positiveOrNegative(-11)}`);

// function triangleArea(a, b, c) {
//     const halfPerimiter = (a + b + c) / 2;
//     const area = (halfPerimiter * (halfPerimiter - a) * (halfPerimiter - b) * (halfPerimiter - c)) ** 0.5;
//     return area;
// }
// console.log(triangleArea(3, 4, 5))



// const myCar = {
//     make: 'Honda',
//     mileage: 0,
//     drive: function () {
//         this.mileage += 100;
//     },
// }

// myCar.drive();
// console.log(myCar);



// Callback Function

// function wrapper(func) {
//     console.log('START');
//     func();
//     console.log('FINISH');        
// }

// function sayHello() {
//     console.log('HELLO');
    
// }

// wrapper(sayHello);


// 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = numbers.map(function (num) {
    return {
        num: num,
        square: num ** 2,
    }

}) 

console.log(newArr);