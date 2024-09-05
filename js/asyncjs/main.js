// console.log('Hello');
// console.log('My name');
// setTimeout(() => console.log('Timeout'), 2000
// );
// console.log('Async');
// console.log('JS');




// const order = (call_production) => {
//     setTimeout(() => {
//         console.log('Burger ordered');
//         call_production();
//     }, 2000);
// };

// const production = () => {
//     setTimeout(() => {
//         console.log('Production started');
//         setTimeout(() => {
//             console.log('Meat has been grilled');
//             setTimeout(() => {
//                 console.log('Vegetables and sauce');
                
//             })
            
//         })
        
//     })
//     console.log('Production started')    
// };

// order(production);




// let restrauntIsOpen = true;

// const order = (time, work) => {

//     return new Promise((resolve, reject) => {
//         if(restrauntIsOpen) {
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//         } else {
//             reject(console.log('Closed!'))
//         }
//     })
// }

// order(2000, () => console.log('burger ordered'))
// .then(() => order(1000, () => console.log('Step 1')))
// .then(() => order(1000, () => console.log('Step 2')))

// .catch(() => console.log('Customer left'))

// .finally(() => console.log('Day left'));



// try {
//     throw new Error('Something is wrong');
//     // console.log();
    
// } catch (err) {
//     console.dir(err);
// } finally {
//     console.log('Good bye');
    
// }

// console.log('HELLO');



let restrauntIsOpen = true;

const time = (ms) => {
    return new Promise((resolve, reject) => {
        if(restrauntIsOpen) {
            setTimeout(resolve, ms);
    } else {
        reject(console.log('Restraunt is closed'));
        }
    })
}

// const kitchen =

// async function name(params) {

// }

// const x = async function name(params) {

// } 

// const x = async fnction () {

// }


const kitchen = async () => {
    try {
        await time(2000);
    } catch (err) {
        console.log('Customer left', err.message);
    } finally {
        console.log('The day ended');
        
    }
}

kitchen();


