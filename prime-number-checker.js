// simple function to check if a number is prime
// it will be called by a web worker
// the web will import only what it needs

// Path: primeworker.js
const checkIfPrime = num => {
    for (let i = 2; i < num; i++) {
        if (!(num % i)) return false;
    }
    return true;
}

export default checkIfPrime;