// Nullish Coeslancing Operator.
// Works only for null and undefined

const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? 'Guest';
console.log(userName);

const isAuthenticatedUser2 = undefined;
const userName2 = isAuthenticatedUser2 ?? 'Guest';
console.log(userName2);

const isAuthenticatedUser3 = "";
const userName3 = isAuthenticatedUser3 ? isAuthenticatedUser3 : "Guest User";
const userName4 = isAuthenticatedUser3 ?? "Guest";
console.log({userName3},{userName4});
// { userName3: 'Guest User' } { userName4: '' }


type Person = {
    name: string;
    age: number;
    address: {
        city: 'Not Set';
        road: 'Not Set';
        house?: "";
    };
};

const person1:Person = {
    name:"Farhan",
    age:23,
    address:{
        city:"Not Set",
        road: "Not Set",
    }
};

const home = person1?.address?.house ?? 'House Not Set';
console.log({home});