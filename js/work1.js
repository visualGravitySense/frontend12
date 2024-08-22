// Напишите программу которая сложит все числа в заданном массиве
// выведет результат в консоль
const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];
let sum = 0;
nums1.forEach(num => sum += num);

console.log('Sum of all numbers in the array:', sum);

/*
Sum of all numbers in the array: 185
*/


// Напишите программу которая добавит в массив namesObject объекты
// с двумя парами { name: "имя с большой буквы", nameLength: "длина имени"}
const names = ['jack', 'sarah', 'mary', 'joey', 'chris', 'samantha'];
const namesObject = [];

names.forEach(name => {
    namesObject.push({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        nameLength: name.length
    });
});

console.log('namesObject:', namesObject);

/*
namesObject: [
  { name: 'Jack', nameLength: 4 },
  { name: 'Sarah', nameLength: 5 },
  { name: 'Mary', nameLength: 4 },
  { name: 'Joey', nameLength: 4 },
  { name: 'Chris', nameLength: 5 },
  { name: 'Samantha', nameLength: 8 }
]
  */



// Напишите программу которая в массив numsRes добавит объекты
// с тремя парами { number: "само число", square: "число в квадрпате", cube: "число в кубе"}
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numsRes = [];

nums2.forEach(num => {
    numsRes.push({
        number: num,
        square: num ** 2,
        cube: num ** 3
    });
});

console.log('numsRes:', numsRes);

/* numsRes: [
  { number: 1, square: 1, cube: 1 },
  { number: 2, square: 4, cube: 8 },
  { number: 3, square: 9, cube: 27 },
  { number: 4, square: 16, cube: 64 },
  { number: 5, square: 25, cube: 125 },
  { number: 6, square: 36, cube: 216 },
  { number: 7, square: 49, cube: 343 },
  { number: 8, square: 64, cube: 512 },
  { number: 9, square: 81, cube: 729 }
]
  */




// Используйте forEach чтобы в массив 'reversedNumberRow'
// добавить те же числа, но в обратном порядке.
const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];

numberRow.forEach(num => {
    reversedNumberRow.unshift(num);
});

console.log('reversedNumberRow:', reversedNumberRow);

/* reversedNumberRow: [
  9, 8, 7, 6, 5,
  4, 3, 2, 1
]
  */




// Для каждой машины в массиве используйте "forEach"
// что-бы вывести в консоль строку типа:
// This is green Jaguar. It costs 7000€.

const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    } 
];

cars.forEach(car => {
    console.log(`This is a ${car.color} ${car.make}. It costs ${car.price}€.`);
});

/* 
This is a grey BMW. It costs 10000€.
This is a black Mercedes-Benz. It costs 15000€.
This is a blue Honda. It costs 8000€.
This is a red Ferrari. It costs 50000€.
*/