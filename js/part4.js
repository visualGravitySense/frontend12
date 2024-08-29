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


const jsonData = JSON.parse(`[
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
        }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
        }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
        }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
        }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
        }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
        }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
        }
    }
    ]`);
    
    // const addresses = jsonData.map(person => {
    //   const {id, address, company} = person;
    //   return {
    //     [id]: company,
    //   }
    // })
    
    // console.log(addresses[9]['10'].geo.lat);
    // console.log(addresses);
    
    // const shortData = jsonData.map(person => {
    //   const {id, name, username, email} = person;
    //   if (id === 10 || id === 9) {
    //     return
    //   }
    //   return {
    //     id,
    //     name,
    //     username,
    //     email,
    //   }
    // })
    // console.log(shortData);
    
    // const filteredData = jsonData.filter(person => {
    //   if (person.id % 2 === 0) {
    //     return true
    //   }
    // })
    
    // console.log(filteredData);
    
    // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    // const mappedNums = numbers.map(num => {
    //   return {
    //     number: num,
    //     square: num ** 2,
    //     cube: num ** 3,
    //   };
    // })
    
    // console.log(mappedNums);
    
    // const filteredNums = numbers.filter(num => {
    //   if (num ** 2 > 20) {
    //     return true
    //   }
    // })
    
    // console.log(filteredNums);
    
    // const year = 2024;
    
    // switch (year % 4) {
    //   case 0:
    //     console.log('This year is a leap year!');
    //     break;
    //   case 1:
    //     console.log('Last year was a leap year!');
    //     break;
    //   case 3:
    //     console.log('Next year was a leap year!');
    //     break;
    //   default:
    //     console.log('It is not a leap year!');
    // }
    
    // const month = 8;
    
    // switch (month) {
    //   case 6:
    //     console.log("It is June, begining of summer!");
    //     break;
    //   case 7:
    //     console.log("It is July, middle of summer!");
    //     break;
    //   case 8:
    //     console.log("It is August, end of summer!");
    //     break;
    //   default:
    //     console.log("It is not summer!");
    // }
    
    // const num = 10;
    
    // num > 0
    //   ? console.log(num, 'is positive')
    //   : console.log(num, 'is negative');
    
    let user;
    
    user
    ? console.log(`<h1>Hello ${user}</h1>`)
    : console.log("<h1>There is no user</h1>");

    // // Arrow function
// const area = (a, b) => console.log(a ** b);

// const area2 = function (a, b) {
//     return console.log(a ** b);
// }

// function area3 (a, b) {
//     return console.log(a ** b);
// }

// area = 4;

// console.log(area3);

// function sumTwoOrThree(a, b, c=null, d=null) {
//     if (!d) {
//         return a + b + c;
//     }
//     return a + b + c + d;

// }

// console.log(sumTwoOrThree(1, 2, 3));

// let a = 10, b = 20, c = 30;

// const localVisibilityArea = () => {
//     let a = 1, b = 2;
//     return [a, b, c];
// }

// console.log(localVisibilityArea());
// console.log([a, b, c]);

// let a, b;

// function tester() {
//     let a;
//     let b;  // NEW LOCAL VARIABLE
//     a = true;
//     b = 10;
//     console.log('LOCAL', a, b);
// }
// tester();

// console.log('GLOBAL', a, b);

// const a = 5;
// function outerFunc() {
//     function innerFunc() {
//         console.log('FROM INNER', a);
//     }
//     innerFunc();
//     console.log('FROM OUTER', a);
// }

// outerFunc();
// innerFunc();

// let a = 0;

// function changeA () {
//     let b = a;
//     b += 2
//     return b;
// }

// console.log(changeA());
// console.log(a);

const names = ["Jack", "Samantha", "Jane", "Bob", "Simon"];

// const shortNames = names.filter(name => {
//     if (name.length < 5) {
//         return true;
//     }
//     return false;
// })

// console.log(names);
// console.log(shortNames);

// const nameObjects = names.map(name => {
//     return {
//         name: name,
//         nameLength: name.length,
//     }
// })

// console.log(nameObjects);

const jsonData = JSON.parse(`[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]`);

// const addresses = jsonData.map(person => {
//   const {id, address, company} = person;
//   return {
//     [id]: company,
//   }
// })

// console.log(addresses[9]['10'].geo.lat);
// console.log(addresses);

// const shortData = jsonData.map(person => {
//   const {id, name, username, email} = person;
//   if (id === 10 || id === 9) {
//     return
//   }
//   return {
//     id,
//     name,
//     username,
//     email,
//   }
// })
// console.log(shortData);

// const filteredData = jsonData.filter(person => {
//   if (person.id % 2 === 0) {
//     return true
//   }
// })

// console.log(filteredData);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const mappedNums = numbers.map(num => {
//   return {
//     number: num,
//     square: num ** 2,
//     cube: num ** 3,
//   };
// })

// console.log(mappedNums);

// const filteredNums = numbers.filter(num => {
//   if (num ** 2 > 20) {
//     return true
//   }
// })

// console.log(filteredNums);

// const year = 2024;

// switch (year % 4) {
//   case 0:
//     console.log('This year is a leap year!');
//     break;
//   case 1:
//     console.log('Last year was a leap year!');
//     break;
//   case 3:
//     console.log('Next year was a leap year!');
//     break;
//   default:
//     console.log('It is not a leap year!');
// }

// const month = 8;

// switch (month) {
//   case 6:
//     console.log("It is June, begining of summer!");
//     break;
//   case 7:
//     console.log("It is July, middle of summer!");
//     break;
//   case 8:
//     console.log("It is August, end of summer!");
//     break;
//   default:
//     console.log("It is not summer!");
// }

// const num = 10;

// num > 0
//   ? console.log(num, 'is positive')
//   : console.log(num, 'is negative');

let user;

user
  ? console.log(`<h1>Hello ${user}</h1>`)
  : console.log("<h1>There is no user</h1>");