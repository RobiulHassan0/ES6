// let sum = 0; 
// for(let i = 0; i <10; i++){ 
//     const num = i;
//     sum = sum + num; 
// } 
// console.log(sum)

function add(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result)
    return result
}
add(2, 4)


// Defult Value
function add(num1 = 5, num2 = 7){
    const result = num1 + num2;
    console.log(num1, num2, result)
    return result
}
// add(2, 4)
add()

function add(num1, num2 = 8){
    const result = num1 + num2;
    console.log(num1, num2, result)
    return result
}

add(4)