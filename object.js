const person = {
    name: 'Robin',
    role: 'Admin',
    money: 423424,
    number: '015XXXXXXXX',
    isBoss: true,
};

// output: onley values in an Array
const values = Object.values(person);
console.log(values);

// output: onley keys in an Array
const keys = Object.keys(person);
console.log(keys);

// output: every key-value pairs in Arrays
const pair = Object.entries(person);
console.log(pair);

// Delete a property from Object
delete person.role;
console.log(person);

// Destructuring Delete | it's another way of delete a property!
const {isBoss, ...others} = person; // copy all propertys except isBoss. 
console.log(others); 

// Freez | Interrupt to change, add and remove the Object's property
// Object.freeze(person);
person.address = 'Dhaka';
delete person.money;
console.log(person)

// Seal | allows to change the property's value of an Object, but interrupt to add and remove
Object.seal(person)
person.name = 'Ibn Phulan';
console.log(person);
