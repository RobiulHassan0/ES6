// Object Destructuring

const person = {
    name: 'Robin',
    age: 27,
    address: 'Dhaka',
    phone: +8801580919321,
    money: 5435356
}
const age = person.age; 
const phone = person.phone;
console.log(age)
console.log(phone)


// if right side is an object, then also left side of destructuring will be object
// use property name as a variable or shortcut way of calling object key-value pair
const {address} = person;
const {money, name} = person;
console.log(address);
console.log(money, name);


// Array Destructure

const numbers = [23, 32, 12, 43];
const [first, second] = numbers;
console.log(first, second)

const [x, y] = [10, 20];
console.log(x)

// Advanced Case
function doubleThem(a, b){
    return [a*2, b*5];
};
// const double = doubleThem;
// console.log(double(3, 5))
// const double = doubleThem(3, 8);
// console.log(double);
const [one, two] = doubleThem(3, 8);
console.log(one, two)