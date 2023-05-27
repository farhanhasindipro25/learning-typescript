// spread operators

const someAlphabets = ['A','B','C','D','E'];
const moreAlphabets = ['F','G','H','I','J'];

someAlphabets.push(...moreAlphabets);
console.log(someAlphabets);

// rest parameters

const greetFriends = (...myFriends: string[]):void => myFriends.forEach(friend => console.log(`Hi ${friend}`)); 

greetFriends('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J');