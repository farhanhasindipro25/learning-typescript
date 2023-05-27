let variableName:any;

variableName = "Sample";

// if an any type variable is asserted as string. All the methods of string would be accessible.
(variableName as string).charAt;
(variableName as string).concat;
(variableName as string).endsWith;
(variableName as string).includes;
(variableName as string).indexOf;
(variableName as string).length;
<string>variableName; // this syntax won't work in .tsx files.

// if an any type variable is asserted as number. All the methods of number would be accessible.
(variableName as number).toFixed;
(variableName as number).toPrecision;
(variableName as number).toString;
(variableName as number).valueOf;

function kgToGram(params: string | number):string | number | undefined{
    if(typeof params === 'string'){
        const value = parseFloat(params) * 100;
        return `Result: ${value} grams.`
    }
    if(typeof params === 'number'){
        const value = params * 1000;
        return `Result: ${value} grams.`
    }
}

const result = kgToGram(1000) as number;
console.log(result);
const result2 = <string>kgToGram('1000');
console.log(result2);

type CustomErrorType = {
    message:string;
}

try{}
catch(error){
    console.log((error as CustomErrorType).message);
}