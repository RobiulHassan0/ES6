/*
    1. var, let and const
    2. default parameters
    3. template literals
*/

// 2. default parameters
const age = 23;
const numbers = [23, 43, 54, 65, 76, 87, 98];
const person = {
    name: 'John',
}
const message = `Hi I am ${person.name}. my age is ${23} and my lucky number is ${numbers[0]}`;
console.log(message);