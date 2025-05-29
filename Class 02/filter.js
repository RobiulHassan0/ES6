// Filter Selects Elements based on a condition and returns an Array with the Elements that fulfilled the condition.

const heights = [32, 42, 93, 85, 75, 64, 55, 51, 49, 68];
// const selected = heights.filter(player => player > 70);
// const selected = heights.filter(player => player > 60);
const selected = heights.filter(player => player > 80);
console.log(selected);

// const odd = heights.filter(heights => heights % 2 === 0)
const odd = heights.filter(heights => heights % 2 === 1)
console.log(odd)

const friends = ['jhon', 'doe', 'jenni', 'fulan'];
// const oddFriends = friends.filter(friend => friend.length > 4);
// const oddFriends = friends.filter(friend => friend.length % 2 === 0);
const oddFriends = friends.filter(friend => friend.length % 2 === 1);
console.log(oddFriends)