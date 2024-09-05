async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

async function logData() {
    const data = await getData('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    
    data.forEach(post => {
        const postContainer = document.createElement('div');
        const postTitle = document.createElement('h3');
        const postMessage = document.createElement('p');
        postTitle.innerText = post.title;
        postMessage.innerText = post.body;
        postContainer.append(postTitle, postMessage);
        container.append(postContainer);
    })

    // console.log(data);
    // const p = document.createElement('p');
    // p.innerText = data.title;
    // container.append(p);
}

const container = document.querySelector('#container');
logData();