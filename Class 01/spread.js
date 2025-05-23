const max = Math.max (2, 43, 53, 65, 32);
console.log(max);

const numbers = [32, 34, 27, 94, 32, 54];
// const arrayMax = Math.max(numbers);
const arrayMax = Math.max(...numbers);
console.log(arrayMax)
// console.log(numbers) 
// console.log(...numbers)


// use spread operator to copy
const num1 = [10, 20, 30, 40];
const num2 = num1;
console.log(num2)

// num2.push(50);
// console.log(num2);
// console.log(num1)

const num3 = [...num1] //copy array
console.log(num3)

num1.push(50);
console.log(num1)
console.log(num3)

// advance
const num4 = [...num1, 100] // copy array and add extra element
console.log(num4)
console.log(num1)

const sonkha = [5, 10, 15, 20];
const arrMax = Math.max(numbers);
console.log(arrayMax);