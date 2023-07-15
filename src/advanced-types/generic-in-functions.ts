// arrow function

const createArray = (param: string): string[] => {
  return [param];
};

const createArray1 = <T>(param: T): T[] => {
  return [param];
};

const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const result100 = createArray("Bangladesh");
const result200 = createArray1<string>("Bangladesh");

type Name = {
  name: string;
};

const result300 = createArray1<Name>({ name: "Bangladesh" });

const result400 = createArray2<string, string>("Bangladesh", "USA");
const result500 = createArray2<boolean, Array<string>>(true, ["USA", "UK"]);
const result600 = createArray2<Name, boolean>({ name: "Bangladesh" }, false);

// rest operator

const addPhoneToUserDetails = <T>(myInfo: T) => {
  const phone = "+8801627152820";
  const newData = { ...myInfo, phone };
  return newData;
};

const myInfo: UserInfo = {
  name: "Farhan",
  email: "farhan@gmail.com",
  isAuthenticated: true,
};

type UserInfo = {
  name: string;
  email: string;
  isAuthenticated: boolean;
};

const result700 = addPhoneToUserDetails<UserInfo>(myInfo);
// All properties are accessible.
result700.email;
result700.isAuthenticated;
result700.name;
result700.phone;
