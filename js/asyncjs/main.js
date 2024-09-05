// console.log('Hello');
// console.log('My name');
// setTimeout(() => console.log('Timeout'), 2000
// );
// console.log('Async');
// console.log('JS');


const order = (call_production) => {
    setTimeout(() => {
        console.log('Burger ordered');
        call_production();
    }, 2000);
};

const production = () => {
    setTimeout(() => {
        console.log('Production started');
        setTimeout(() => {
            console.log('Meat has been grilled');
            setTimeout(() => {
                console.log('Vegetables and sauce');
                
            })
            
        })
        
    })
    console.log('Production started')    
};

order(production);