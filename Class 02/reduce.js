const numbers = [1, 2, 43, 4, 5];
const sum = numbers.reduce(function(prev, curr){
    return prev + curr;
}, 100);
console.log(sum)


const max = numbers.reduce(function(prev, curr){
    return Math.max(prev, curr)
}, 0);
console.log(max)

const num = [2, 4, 5, 6];
const sumResult = num.reduce(function(prevValue, currValue){
    return prevValue + currValue;
},0)
console.log(sumResult);

const multiply = [3, 4, 5, 6, 7];
const multResult = multiply.reduce((prev, curr) => {
    return prev + curr;
},0);
console.log(multResult)


const number = [4, 5, 6, 7];
const add = number.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(add);

const nums = [6, 7, 8, 9];
const addResult = nums.reduce((previousValue, currentValue) => {
    console.log(`Previous Value: ${previousValue} and Current Value: ${currentValue}`);
    return previousValue + currentValue;
}, 0);
console.log(`Final Result: ${addResult}`);



// Example
const shoppingCart = [
    {items: 'T-shirt', price: 390},
    {items: 'Pant', price: 842},
    {items: 'Hat', price: 255},
    {items: 'Watch', price: 867},
];
const totalPrice = shoppingCart.reduce((prevValue, currValue) => {
    return prevValue + currValue.price;
},0);
console.log(totalPrice);

// -----------

const total = shoppingCart.reduce((prevValue, currValue) => {
    console.log(currValue);       // output: only object
    console.log(currValue.price); // output: object property
    return prevValue + currValue.price;
}, 0);
console.log(`Total Price: ${total}`);
console.log('Total Price:', total);