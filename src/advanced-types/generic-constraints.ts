type UserInfoObjectType = {
    name: string;
    email: string;
    isAuthenticated: boolean;
}

interface IUserInfoObject{
    name:string,
    email:string,
    isAuthenticated: boolean
}

// const addPhoneNumberToUserDetails = <T extends UserInfoObjectType>(userInfo:T) => {
//     const phone = "+8801627152820";
//     const newData = {...userInfo, phone};
//     return newData;
// }

const addPhoneNumberToUserDetails = <T extends IUserInfoObject>(userInfo:T) => {
    const phone = "+8801627152820";
    const newData = {...userInfo, phone};
    return newData;
}


const myInfo2={
    name: "Farhan",
    email:"farhan@gmail.com",
    isAuthenticated: true,
}

type UserInfo2 = {
    name:string;
    email:string;
    isAuthenticated: boolean;
}

const result800 = addPhoneToUserDetails <UserInfo2> (myInfo2);
result800.email;
result800.isAuthenticated;
result800.name;
result800.phone;