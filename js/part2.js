// TODO comment
// ! alert comment
// ?
// *
// // line and hide

// object i massivy v JavaScript 

const myCar = {
    make : 'Honda',
    model: 'Civic',
    isPopular: true,
    year: 2022,
}
// console.log(myCar.year + ' ' + myCar.model);

myCar.model = 'CRV';
myCar.mileage = 1000;

// Deleting object properties
delete myCar.make;
// console.log(myCar);

const Car = {
    make: 'Honda',
    'car_color': 'red',
}

const carPopularity = 'popular';
// Car.carPopularity = true;
Car[carPopularity] = true;

// Nested Objects - VOZENNIE OBJEKTI
const drive = {
    make: 'VW',
    model: 'Golf',
    info: {
        color: 'red',
        mileage: 10000,
    }
}

// console.log(drive.info.color);
// console.log(drive['info']['color']);

const userName = 'Terminator';
const friendsQty = 10000;

// import {name} from './part1.js';

const userProfile = {
    userName,
    friendsQty,
    emailVerified: false,
}

let a = 'Hello';
let b = a;

a += ' World';

// console.log('a', a);
// console.log('b', b);



// Kopirovanie Objektov
let c = {
    name: 'Jack',
    surname: 'Smith',
    info: {
        age: 25
    }
};

// let d = Object.assign({}, c);
// let d = {...c};

// Convert to JSON string

let d = JSON.parse(JSON.stringify(c));

c.surname = 'Gold';
c.info.age = 30;
d.info.age = 35;

// // console.log('a', c);
// // console.log('b', d);


// JSON java script object notation
// All keys in JSON is strings and with "---"

const Car2 = {
    make: 'Honda',
    model: 'Civic',
    year: 2022,
    isPopular: false,
}

const Car2JSON = JSON.stringify(Car2);

// console.log(Car2);
// console.log(Car2JSON);


// Rasprostraninie objektov
// (...) Object Spread

const button  = {
    width: '200px',
    text: 'Buy',
    color: 'black',
}
const redButton = {
    ...button,
    color: 'red'
}

const blckButton = {
    color: 'red',
    ...button,
    
}

// console.log(redButton);
// console.log(button);
// console.log(blckButton);

// 
const {color, text} = redButton;
// console.log(color, text);

// Massivy
const numbers = [1, 2, 3, 4, 5] // const random = new Array(1, 2, 3, 4);
console.log(typeof numbers);
console.log(Array.isArray(numbers));

const random = new Array(1, 2, 3, 4);
console.table(numbers);

console.log(numbers[3]);
numbers.length = 10;
console.log(numbers);

numbers[3] = 777;
numbers[11] = 888;
console.log(numbers);

const mixedArray = [1, true, 'hello', [1, 2, [3, 4, 5], {name: 'Jack', surname: 'Smith'}]];

console.log(mixedArray[3][2]); 

numbers.push(6); // add last number
console.log(numbers);

numbers.unshift(0); // delete first object from masive
console.log(numbers[2]);


numbers.pop(2); // pop delete last element 
console.log(numbers);

const numbers2 = [1, 2, 3, 4, 5];
const squares = [];

let sum = 0;

numbers2.forEach(num => {
    // sum += num;
    // console.log(sum);
    // console.log(num ** 2);

    squares.push(num ** 2);
    console.log(squares);

});

console.log(squares);
