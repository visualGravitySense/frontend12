// напишите программу которая выводит в консоль сумму всех
// четных чисел в массиве

const numsArray = [1, 12, 34, 71, 14, 12, 33, 70, 82, 81, 9, 19, 90];

const sumOfEvens = numsArray
    .filter(num => num % 2 === 0) 
    .reduce((sum, num) => sum + num, 0); 

console.log(sumOfEvens); 

// Solution original
let sum = 0;
numsArray.forEach(num => {
    if (num % 2 === 0) { sum+=num;

    }
})
console.log(sum);

// Напишите программу которая проанализирует данный массив с объектами
// и добавит в новый массив только имена тех людей кому 18 и старше

const people = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
];

const names = people
    .filter(person => person.age >= 18) 
    .map(person => person.name); 

console.log(names); 

//Original soution
const adults = [];
people.forEach(person => {
    if (person.age >= 18) {
        adults.push(person.name);
    }
});
console.log(adults);



// напишите программу которая проанализирует данный массив и выведет в консоль самую длинную строку

const strings = ['Star', 'Planet', 'Comet', 'Interstellar', 'Space'];

const longest = strings
    .reduce((longest, current) => current.length > longest.length ? current : longest, '');

console.log(longest); 

// Original solution
let long = '';
strings.forEach(str => {
    if (str.length > long.length) {
        long = str;
    }
})
console.log(long);



// напишите программу которая возьмёт из данного массива наисенования книг которые вышли в этом году
// и добавит их в новый массив

const books = [
    {
        author: 'Jeremy Brook',
        title: 'My childhood',
        release: 2023
    },
    {
        author: 'Samantha Jhones',
        title: 'Living with ten cats',
        release: 2020
    },
    {
        author: 'Bob Summers',
        title: 'Exploring far space',
        release: 2021
    },
    {
        author: 'Bill Brown',
        title: 'Insects in our garden',
        release: 2023
    },
    {
        author: 'Jessica Love',
        title: 'Programming for begginers',
        release: 2023
    }
];

const thisYear = books
    .map(book => book.title); 

console.log(thisYear); 

// original solution
const freshBooks = [];
books.forEach(book => {
    if (book.release === 2023) {
        freshBooks.push(book.title);
    }
})
console.log(freshBooks);


// Напишите программу которая проанализирует данный массив и найдёт в нем наибольшее число кратное трём

const numbers = [3, 15, 23, 56, 66, 71, 12, 90];

const largest = numbers
    .filter(num => num % 3 === 0) 
    .reduce((max, num) => num > max ? num : max, -Infinity); 

console.log(largest); 

//origina solution
// Этот код выполняет поиск наибольшего числа в массиве numbers, которое делится на 3 без остатка. 
let largst = 0;
numbers.forEach(num => {
    if (num % 3 === 0 && num > largst) {
        largst = num;
    }
})
console.log(largst);

// напишите программу которая найдёт самого старшего человека в данном массиве с объектами
// и сохранит его в переменную oldestPerson
const people2 = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
];

const oldest = people2
    .reduce((oldest, current) => current.age > oldest.age ? current : oldest, { age: -Infinity });

console.log(oldest); 

// original solution

let oldestPers = {};
people2.forEach(person => {
    if (oldestPers.age) {
        if (person.age > oldestPers.age) {
            oldestPers = person;
        }
    } else {
        // Инициализируем oldestPers первым человеком
        oldestPers = person;
    }
});

console.log(oldestPers);