const numbers = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

for(num of numbers){
    console.log(num);
}

const name = 'salah ud deen';
for(char of name){
    console.log(char)
}

// Print All Keys and values with 'For in Loop'
const person = {
    name: 'Robin',
    role: 'Admin',
    money: 423424,
    number: '015XXXXXXXX',
    isBoss: true,
};
// for(const keys in person){
//     console.log('print only kyes: ', keys)
//     console.log('print only values: ', person[keys])
// }
for(const key in person){
    const values = person[key];
    console.log(key, values);
}

// Another way to print All Keys | with 'For of Loop'
const kyes = Object.keys(person)
console.log(kyes);
for(const key of kyes){
    console.log(key);
}

// Another way to print All Values | with 'For of Loop'
const values = Object.values(person);       
console.log(values);
for(const value of values){
    console.log(value);
}

// Note: 'for of' Loop used in Array or String, not in Object.
// Note: 'for in' Loop used in only Object.