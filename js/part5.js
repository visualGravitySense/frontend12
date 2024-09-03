// const sample = [];

// for (let i = 0; i < 101; i++) {
//     sample.push(i);
// }

// console.log(sample);

// const names = ['Jack', 'Bob', 'Sarah', 'Mary', 'Simon'];

// for (let i = 0; i < names.length; i++) {
//     console.log(`Hello ${names[i]}`);
// }


// for (let i = 0, j = 10; i < 10 && j >= 0; i++) {
//     j += 5;
//     console.log(i, j);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let num in numbers) {
//     console.log(num);
// }

// for (let num of numbers) {
//     console.log(num);
// }

const myCar = {
    make: 'BMW',
    model: '528i',
    color: 'red',
}

// for (let prop in myCar) {
//     console.log(prop);
// }

// for (let prop of myCar) {
//     console.log(prop);
// }

// console.log(Object.keys(myCar));
// console.log(Object.values(myCar));
// console.log(Object.entries(myCar));

// const people = [
//     ['name', 'Jack'],
//     ['surname', 'Smith'],
//     ['gender', 'Male'],
// ]
// console.log(Object.fromEntries(people));

// let cnt = 0
// while (cnt < 15) {
//     if (cnt === 5) {
//         continue;
//     }
//     if (cnt === 10) {
//         break;
//     }
//     console.log(cnt, 'I can\'t stop!')
//     cnt++;

// }

// do {
//     console.log('Hello');
// } while (cnt > 100);

// for (let letter of 'JavaScript') {
//     if (letter === 'S') {
//         continue;
//     }
//     console.log(letter);
// }

// let firstPlayer = true;
// let secondPlayer = false;
// let gameEnd = false;

// while (!gameEnd) {
//     firstPlayer = !firstPlayer;
//     secondPlayer = !secondPlayer;
//     firstPlayer ? console.log('First players turn') : console.log('Second players turn');
// }