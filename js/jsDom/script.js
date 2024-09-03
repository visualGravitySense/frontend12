// // const title = document.getElementById('title');
// // title.remove()
// // title.removeAttribute('id');
// // console.log(title);

// // const listItems = document.getElementsByClassName('list-item');
// // console.log(listItems);

// // const title2 = document.getElementsByTagName('h1');
// // console.log(title2);

// // const title = document.querySelector('#title');
// // const listItems = document.querySelectorAll('.list-item');

// // title.style.color = 'red';
// // title.style.backgroundColor = 'black';
// // title.style.padding = '50px';

// // listItems.forEach(element => element.style.color = 'green');

// // const ul = document.querySelector('ul');
// // const li = document.createElement('li');
// // li.innerHTML = '<span>Mexican</span> food';
// // // li.setAttribute('id', 'title');
// // // li.removeAttribute('id');
// // // console.log(li.getAttribute('id'));
// // li.classList.add('list-item');
// // li.classList.add('new-class');
// // // if (li.classList.contains('list-item')) {
// // //     li.style.color = 'red';
// // // }
// // li.classList.remove('new-class');

// // ul.append(li);
// // li.remove();


// // const firstListItem = document.querySelector('.list-item');
// // firstListItem.setAttribute('id', 'unique');


// // console.dir(firstListItem);
// // console.log(firstListItem.innerText);
// // console.log(firstListItem.innerHTML);
// // console.log(firstListItem.textContent);

// // const names = ['Jack', 'Sarah', 'Bob', 'Simon', 'Mary'];
// // names.forEach(name => {
// //     const li = document.createElement('li');
// //     li.innerHTML = `<b><a href="#">${name}</a></b>`;
// //     ul.append(li);
// // })

// const ul = document.querySelector('ul');

// // console.log(ul.parentNode);
// // console.log(ul.parentElement);

// // const html = document.documentElement;
// // console.log(html.parentNode);
// // console.log(html.parentElement);

// // ! DO NOT USE (THEESE ARE NODES)
// // console.log(ul.childNodes);
// // console.log(ul.firstChild);
// // console.log(ul.lastChild);
// // ul.childNodes.forEach(child => child.style.color = 'red');
// // console.log(ul.nextSibling);
// // console.log(ul.previousSibling);

// // ? DO USE (THEESE ARE ELEMENTS)
// // console.log(ul.children);
// // console.log(ul.firstElementChild);
// // console.log(ul.lastElementChild);
// // console.log(ul.nextElementSibling);
// // console.log(ul.previousElementSibling);


// function alertMe() {
//     alert('Hello again!');
// }

// const background = document.querySelectorAll('div')[1];
// console.log(background);
// function changeBgColor() {
//     background.style.backgroundColor = 'darkgrey';
// }

// function changeBgColorBack() {
//     background.style.backgroundColor = 'dodgerblue';
// }

// background.addEventListener('mouseover', changeBgColor);
// background.addEventListener('mouseout', changeBgColorBack);

// const first = document.querySelector('#first');
// function hideOrReveal() {
//     if (first.classList.contains('hidden')) {
//         first.classList.remove('hidden');
//     } else {
//         first.classList.add('hidden');
//     }
// }

// window.addEventListener('click', () => console.log('Window'), {once: true});
// document.addEventListener('click', () => console.log('Document'));
// document.querySelector('.container').addEventListener('click', () => console.log('container'))
// document.querySelector('.level1').addEventListener('click', (e) => {
//     console.log('level1');
// })
// document.querySelector('.level2').addEventListener('click', () => console.log('level2'))
// document.querySelector('.level3').addEventListener('click', (e) => console.log('level3', e.target))

// document.querySelector('.level4').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.style.innerTEXT = 'clicked');
// }, false);

document.querySelector('#cars').addEventListener('click', (e) => {
    
    const target = e.target;
    
    if (target.matches('li')) {
        console.log(target.getAttribute('id') + ' is clicked');
        target.style.backgroundColor = 'darkgrey';
    }
})

const cars = document.querySelector('#cars');
const newCar = document.createElement('li');
newCar.innerText = 'Fiat';
newCar.setAttribute('id', 'fiat');
newCar.classList.add('list-item');

cars.append(newCar);

function logName() {
    const input = document.querySelector('#username');
    console.log(input.value);
    input.value = '';
}