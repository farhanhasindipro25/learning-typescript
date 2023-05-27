// nullable types
const searchName = (value: string | null) => {
    if(value === null){
        console.log('There is nothing to search!');
    }
    else{
        console.log(`Searching for ${value}`);
    }
}

searchName("Farhan");
searchName(null);

// unknown types
const getMyCarSpeed = (speed: unknown) => {
    if(typeof speed === "number"){
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if(typeof speed === "string"){
        const [value, unit] = speed.split(" "); // ['10','km/h']
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else{
        console.log("Something went wrong");
    }
};

getMyCarSpeed(10);
getMyCarSpeed("10 km/h");
getMyCarSpeed(true);

// never types

function throwError(message:string):never{
    throw new Error(message);
}
throwError('Error Generated!')