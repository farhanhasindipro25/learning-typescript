const numbersNumber: Array<number> = [1,2,3];
const numbersString: Array<string> = ['1','2','3'];
const numbersBoolean: Array<boolean> = [true, false];

// Inside the angle brackets after 'Array'<>, an interface is declared.

// Array of Objects
const userNameAndUIDs: Array<{name: string; uid: number}> = [
    {
        name:"X",
        uid:1
    },
    {
        name:"Y",
        uid:2
    }
]

type GenericArray<T> = Array<T> // T is a paramater and stands for Type.
const numbersGenericNumber: GenericArray<number> = [1,2,3];
const numbersGenericString: GenericArray<string> = ['1','2','3'];
const numbersGenericBoolean: GenericArray<boolean> = [true, false];

type userDetails = {
    name: string; 
    uid: number;
}
const genericUserNameAndUIDs: GenericArray<userDetails> = [
    {
        name:"X",
        uid:1
    },
    {
        name:"Y",
        uid:2
    }
]

type GenericTuple<X,Y> = [X,Y];

const user100:GenericTuple<string, string> = ["Farhan","Admin"];
const user200:GenericTuple<object, string> = [{
    name:"Farhan",
    email:"farhan@email.com"
},"Admin"];

// not a best practice to directly use object type as anything can be assigned without type checking.
const user300:GenericTuple<object, string> = [{
    rank:100,
    email:"farhan@email.com"
},"Admin"];

type userInformation = {
    name: string;
    email:string;
}

interface IUserInformation{
    name:string;
    email:string;
}

const user400:GenericTuple<IUserInformation,string> = [
    {
        name:"Farhan",
        email:'farhan@gmail.com'
    },
    "Admin"
]

const user500:GenericTuple<userInformation,string> = [
    {
        name:"Farhan",
        email:'farhan@gmail.com'
    },
    "Admin"
]