const heights = [32, 42, 93, 85, 75, 64, 55, 51, 49, 68];

const selected = heights.filter(palyer => palyer > 70);
const selected2 = heights.find(palyer => palyer > 70);
console.log(selected);
console.log(selected2);


const friends = ['jhon', 'doe', 'jenni', 'fulan'];
const select = friends.find(f => f.length > 3)
console.log(select)
const oddSelect = friends.find(f => f.length % 2 === 1)
console.log(oddSelect);