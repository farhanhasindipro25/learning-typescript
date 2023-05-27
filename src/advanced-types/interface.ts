// Interfaces must be used for Object type data.
// Type aliases must be used for Primitive type data.

type User = {
    name: string;
    age: number;
}

type extendedUser = User & {
    role:string;
}

interface IUser{
    name: string;
    age: number;
}

interface IExtendedUser extends IUser{
    role:string;
}

const userWithTypeAlias:User={
    name:'Type Alias',
    age: 100,
}

const userWithInterface:IUser={
    name:'Interface',
    age: 200,
}

const user1 : IExtendedUser = {
    name:'Extended Interface',
    age:300,
    role:'Extender'
}

// Objects, Functions, Arrays

// Functions
// Type Aliases suggested for Functions for better code readability.
type addNumbersType = (num1:number, num2:number) => number;

interface IAddNumbers{
    (num1:number, num2:number): number;
}

const addNumbers: addNumbersType = (num1, num2) => num1 + num2;
const addNumbers2: IAddNumbers = (num1, num2) => num1 + num2;

// Arrays
// Type Aliases suggested for Arrays for better code readability.
type ranksType = number[];

interface IRanks{
    [index: number]: number; // Here index is a number, and each element of an index is also holding a number
}

const movieRanks: ranksType = [1,2,3,4,5]
const seriesRanks: IRanks = [1,2,3,4,5]