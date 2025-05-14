// Practice Problem 01
// A)
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const total = multiply(10, 20, 30);
console.log(total);

// B)
const sentence = `I am a web developer.\nI love to code.\nI love to eat biryani`;
console.log(sentence);

// C)
const sum = (a, b=5) => a + b;
const result = sum(5);
console.log(result);


// Practice Problem 02
let friends = ['robin', 'hridoy', 'ammar', 'aman', 'ataullah'];
const friendsList = (myFriends) => {
    const evenLengthFriends = [];
    for(let friend of myFriends){
        if(friend.length % 2 === 0){
            evenLengthFriends.push(friend)
        }
    }
    return evenLengthFriends;
} 
const sumFriends = friendsList(friends);
console.log(sumFriends);


// Practice Problem 03
const numbers = [2, 3, 4, 5];
const allNumbers = (calculateNumbers) => {
    let sum = 0;
    for (let number of calculateNumbers){
        const square = number * number;
        sum += square;
    }
    const avg = sum / calculateNumbers.length
    return avg;
}
const final = allNumbers(numbers);
console.log(final);


// Practice Problem 03
const num1 = [4, 5, 6, 8];
const num2 = [23, 43, 39, 57];
const merged = (arr1, arr2) =>{
    const mergedArray = [...arr1, ...arr2];
    const arrMax = Math.max(...mergedArray);
    return arrMax;
}
const finalResult = merged(num1, num2);
console.log(finalResult);   