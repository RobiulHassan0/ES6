// Arrow Function | when function has a single parameter (separately object declare)
const getAge = (person) => person.age;
const student = {name: 'hridoy', age: 24};
const age = getAge(student);
console.log(age);

// (Direct object use)
const getPrice = (mobile) => mobile.price;
// const price = getPrice(product ={name: 'Mobile', price: 6400, brand: 'Samsung'});
const price = getPrice({name: 'Mobile', price: 6400, brand: 'Samsung'});
console.log(price);

// Regular Function | when function has a single parameter (separately object declare)
const students = {
    name: 'Robin',
    age: 53,
    address: 'Dhaka'
}
function getAges(person){
    return person.age;
}
const ages = getAges(students)
console.log(ages);



// Get Array Index with Arrow Function (Direct Array call)
const getThird = (numbers) => numbers[2];
const third = getThird([13, 43, 92, 56, 93]);
console.log(third)

// array declare separately
const getSecond = (numbers) => numbers[1];
const numbers = [32, 41, 20, 49];
const second = getSecond(numbers);
console.log(second); 


// if Arrow Function has a single parameter, then bracket is not required
const getName = person => person.name ;
const employee = getName({name: 'Robin', age: 42, address: 'Dhaka'});
console.log(employee)

// when Function has not a parameter
const getPi = () => Math.PI;
const pi = getPi();
console.log(pi);


// when functin is larger
const doMath = (a, b, c) => { return { sum : a + b + c, mult:  a * b * c, subtract: a - b * c}};
const result = doMath(29, 5, 20);
console.log(result);

const makeMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
} 
const total = makeMath(8, 4, 2)
console.log(total);

const runMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    
    return {
        sum: sum,
        multiplication : mult,
        finalResult : result
    };
};
const getTotal = runMath(8, 4, 2)
console.log(getTotal);