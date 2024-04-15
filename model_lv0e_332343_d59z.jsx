grape


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
kiwi

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

1,60,50,95,79,5,54,31,33,79,72,48,49,53,32,64,38,61,59,96,62,27,26,95,68,46,56,42,14,11,40,74 / true
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
banana


const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const isPalindrome = str => str === str.split("").reverse().join("");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

grape * kiwi
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
false * true
const greet = name => `Hello, ${name}!`;
apple + false
const squareRoot = num => Math.sqrt(num);
const getRandomSubset = (array, size) => array.slice(0, size);
grape - 61

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
