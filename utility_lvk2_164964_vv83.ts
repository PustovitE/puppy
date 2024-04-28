const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
91,95,51,5,1,66,68,9,90,48,91,61,79,57,0,61,15,82,50,49,86,13,25,61,77,18,42,45,24,99,93,92,43,99,95,70,65,10,92,36,54 * 21,92,63,33,31,50,2,75,77,9,68,88,79,1,21,36,84,62,66,70,87,42,22,8,48,29,89,26,47,38,71,98,52,19,95,35,44,10,19,56,27,15,41,34,83,51,68,32,44,43,73,90,66,30,36,21,47,62,70,23,57,38,51,81,21,71,14,37,84,41,49,71,66,49
const getRandomSubset = (array, size) => array.slice(0, size);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
