// Function Declaration or Regular Function | use the 'function' name.
// first style
function add (a, b){
    const result = a + b;
    return result;
}
console.log(add(3, 5));

// second type
function add2 (a, b){
    return a + b;
}
console.log(add2(6, 4))


// Function Express | Sometimes called it Annonymous Function.
const add3 = function(a, b, c){
    return a + b + c;
}
console.log(add3(20, 3, 4))

// Arrow Function!
const addTwo = (a, b) => a + b;
console.log(addTwo(30, 50))

const AddThree = (a, b, c) => a + b + c;
const sum = AddThree(20, 40, 60);
console.log(sum);

const multiply = (num1, num2) => num1 * num2;
const result = multiply(10, 20);
console.log(result);