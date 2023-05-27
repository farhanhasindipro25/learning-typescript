const user:{
    company: 'REPLIQ Limited', // literal types: Declaring a value instead of a type // Cannot be changed later
    name:string,
    age: number,
    position: string,
    isExperienced?: boolean // optional types: Declared by Question marks (?)
} = {
    company:'REPLIQ Limited',
    name:'Farhan Hasin Dipro',
    age: 24,
    position: 'Junior Frontend Developer',
    isExperienced: true,
}

const user2:{
    readonly company: string, // Adding readonly won't allow it to be changed.
    name:string,
    age: number,
    position: string,
    isExperienced?: boolean // optional types: Declared by Question marks (?)
} = {
    company:'REPLIQ Limited',
    name:'Farhan Hasin Dipro',
    age: 24,
    position: 'Junior Frontend Developer',
    isExperienced: true,
}