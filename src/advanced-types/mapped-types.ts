const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings); // [ '1', '2', '3' ]

type AreaNumber = {
  height: number;
  width: number;
};

type AreaString = {
  height: string;
  width: string;
};

type VolumeNumber = {
  height: number;
  width: number;
  depth: number;
};

// type Area = {
//   [key in "height" | "width"]: string;
// };

// type Area = {
//   [key in keyof AreaNumber]: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<AreaNumber> = {
  height: 10,
  width: 10,
};

type AreaReadOnlyNumber = {
  readonly height: number;
  readonly width: number;
};

type AreaReadOnlyString = {
  readonly height: string;
  readonly width: string;
};

const RectangularArea: AreaReadOnlyNumber = {
  height: 10,
  width: 10,
};

// RectangularArea.height = 12;
// Cannot assign to 'height' because it is a read-only property.

// look up types
// accessing key of an object
type A = AreaNumber["height"];
type B = keyof AreaNumber; // "height" | "width"
