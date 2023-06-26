
// module thas uses a prime number checker to check if a number is prime
// and returns the result to the main thread

import checkIfPrime from './prime-number-checker.js';

self.onmessage = msg => {
    let num = msg.data;
    let result = checkIfPrime(num);
    self.postMessage(result);
}