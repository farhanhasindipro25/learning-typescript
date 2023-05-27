// Conditonal types.
// type dependency: When a type is dependent on another type.

type a1 = null;
type a2 = a1 extends string ? string : null;

// nested conditional types.
type a3 = undefined;
type a4 = number;

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type Guy = {
  car1: string;
  car2: string;
};

type Car = keyof Guy;
// "car1" | "car2";

type CheckCar<T, K> = K extends Car ? true : false;

type CheckCar1 = CheckCar<Guy, "car8">;

type words = "code" | "bug" | "IDE";
type RemoveWord<T, K> = T extends K ? never : T;
type CurrentWord1 = RemoveWord<words, "IDE">;
type CurrentWord2 = RemoveWord<words, "Program">;
