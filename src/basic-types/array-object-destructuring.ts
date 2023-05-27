/// array destructuring

const alphabets = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H','I', 'J'];

const [one]=alphabets; // takes the first element of the array
console.log(one);

/// Object destructuring

const x = {
    a: 'A',
    b: 'B'
};

const {a} = x;
console.log({a});