// normal functions

function add (number1:number, number2:number):number{
    return number1 + number2;
}

add(2,2);

// Default parameters
function add2 (number1:number, number2:number = 10):number{
    return number1 + number2;
}

add(2,2);

const addArrow = (number1:number, number2:number):number => number1 + number2;

addArrow(2,2);

const numberArray: number[] = [1,3,5,7,9];

const newArray: number[] = numberArray.map((element:number) => element * element);

const person: {
    name:string;
    balance: number;
    addBalance(money:number):void;
} = {
    name: 'Farhan',
    balance: 5,
    addBalance(money:number){
        console.log(`New Balance: ${this.balance + money}`);
    }
}