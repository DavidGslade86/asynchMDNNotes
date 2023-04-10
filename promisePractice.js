/*const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');

const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });

const fetchPromise4 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise5 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise6 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise6, fetchPromise4, fetchPromise5])
    .then((response) => {
        console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
        console.error(`Failed to fetch ${error}`)
    });

console.log('Started request');*/

/*async function fetchProducts(){
    try {

        // after this line, our function will wait for the 'fetch()' call to be settled
        //the 'fetch()' call will either return a Response or throw an error

        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        //after this line, our function will wait for the "response.json()" call to be settled
        //the `response.json()` call will either return the parsed JSOobject or throw an error

        const data = await response.json();
        console.lof(data[0].name);
    }
    catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

fetchProducts();*/

const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const output = document.querySelector('#output');
const button = document.querySelector('#set-alarm');

function setAlarm() {
    setTimeout(() => {
        output.textContent = "Wake Up!";
    }, 1000);
}



function alarm(person, delay){
    return new Promise((resolve, reject) =>{
        if (delay < 0) {
            throw new Error('Alarm delay must not be negative');    
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

button.addEventListener("click", async () => {
    try {
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
    }
    catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
    }
});