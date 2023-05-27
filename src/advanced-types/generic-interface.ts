// Generic Interface

interface IUserDetails<T>{
    name:string;
    details:T;
}

const user1000: IUserDetails<boolean>={
    name:"Farhan",
    details:true
}

const user2000: IUserDetails<string>={
    name:"Farhan",
    details:"farhan@gmail.com"
}

// using object type is not recommended
const user3000: IUserDetails<object>={
    name:"Farhan",
    details:{
        email:"farhan@gmail.com",
        phone:"01627152820"
    }
}

const user4000: IUserDetails<{
    email:string;
    phone:string;
}> = {
    name:"Farhan",
    details:{
        email:"farhan@gmail.com",
        phone:"01627152820"
    }
}

interface IDetails{
    email:string;
    phone:string
}

const user5000: IUserDetails<IDetails> = {
    name:"Farhan",
    details:{
        email:"farhan@gmail.com",
        phone:"01627152820"
    }
}
interface IUserInfo<T,U>{
    name:string;
    email:T;
    isAuthenticated?:U;
}

const user6000: IUserInfo<boolean,null> = {
    name:"A",
    email:true,
}

const user7000: IUserInfo<boolean,undefined> = {
    name:"A",
    email:true,
}

interface IUserInfo2<T,U = undefined>{
    name:string;
    email:T;
    isAuthenticated?:U;
}

const user8000: IUserInfo2<boolean,boolean>={
    name:"V",
    email:true,
    isAuthenticated:false
}