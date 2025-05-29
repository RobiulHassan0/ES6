const numbers = [5, 7, 9, 10];

const doubled = numbers.map(num => num * 2);
console.log(doubled)

const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus)

const halves = numbers.map(num => num / 2);
console.log(halves);

const friends = ['jhon', 'doe', 'jenni', 'fulan'];
const lengths = friends.map(friend => friend.length);
console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter)