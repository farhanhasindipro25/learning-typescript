type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newType = "name" | "age" | "address"; // Manually done

type newTypeUsingKeyOf = keyof PersonType;
// keyof makes all the keys of the type a union type.

const a1:newType = "address";
const a2:newType = "age";
const a3:newType = "name";

const b1:newTypeUsingKeyOf = "address";
const b2:newTypeUsingKeyOf = "age";
const b3:newTypeUsingKeyOf = "name";

function getProperty<X,Y extends keyof X>(obj:X, key:Y){
    obj[key];
}
// Y = "name" | "age"

const property = getProperty({name:"A",age:"22"},"age")