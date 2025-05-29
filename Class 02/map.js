const numbers = [2, 3, 4, 5, 6];
const doubled = [];
for(num of numbers){
    const double = num * 2;
    doubled.push(double);

}
console.log(doubled);

// With Function
function doubledIt (num){
    console.log('number is:', num)
    const result = num * 2;
    console.log('now num is:', result)
    return result;
}
const result = numbers.map(doubledIt);
console.log(result);

// With Arrow Function
const double2 = n => n*2;
console.log(numbers.map(double2))

// arrow function inside map function
const output = numbers.map(n=>n*2)
console.log(output)