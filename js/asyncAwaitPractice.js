// PRACTICE FROM https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises


// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//     .then(response => {
//         if (!response.ok){
//             throw new Error(`HTTP error: ${response.status}`)
//         };
//         return response.json();
//     })
//     .then(json => {
//         console.log(json[0].name);
//     });


// const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//     .then(response => {
//         if (!response.ok){
//             throw new Error(`HTTP error: ${response.status}`)
//         }
//         return response.json()
//     })
//     .then(json => {
//         console.log(json[0].name);
//     })
//     .catch(error => {
//         console.error(`Could not get products: ${error}`)
//     })



// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then(response => {
//         console.log(`${response.url}: ${response.status}`)
//     })
//     .catch (error => {
//         console.error(`Failed to fetch: ${error}`)
//     })



async function fetchProducts() {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }
        const json = await response.json();
        console.log(json[0].name)
    }
    catch(error){
        console.error(`Could not get products: ${error}`)
    }
}

const jsonPromise = fetchProducts();
jsonPromise.then((json) => console.log(json[0].name));