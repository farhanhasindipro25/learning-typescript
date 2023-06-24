// Type Guards or Type Narrowing.

// keyof guard

type Alphaneumeric = string | number;

function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}
add("1", "1");
add(1, 1);

// in guard

type NormalUser = {
  name: string;
};

type Admin = {
  name: string;
  role: "ADMIN";
};

function getUser(user: NormalUser | Admin) {
  if ("role" in user) {
    return `This is the ${user.role} speaking!`;
  } else {
    return `This is a regular user!`;
  }
}

const normalUser1: NormalUser = {
  name: "Mr.X",
};

const admin1: Admin = {
  name: "Mr.T",
  role: "ADMIN",
};

console.log(getUser(normalUser1));
console.log(getUser(admin1));

// instanceof guard

class AnimalClass {
  public constructor(public name: string, public species: string) {}
  makeSound() {
    console.log("Animal is making sound!");
  }
}

class Dog extends AnimalClass {
  constructor(name: string, species: string) {
    super(name, species);
  }

  bark() {
    console.log("Barking");
  }
}

class Cow extends AnimalClass {
  constructor(name: string, species: string) {
    super(name, species);
  }

  moo() {
    console.log("Mooing");
  }
}

function isDog(animal: AnimalClass): animal is Dog {
  return animal instanceof Dog;
}
function isCow(animal: AnimalClass): animal is Cow {
  return animal instanceof Cow;
}
function getAnimal(animal: AnimalClass) {
  if (isDog(animal)) {
    animal.bark();
  } else if (isCow(animal)) {
    animal.moo();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("Tom", "dog");
const animal2 = new Cow("Mark", "cow");
getAnimal(animal1);
getAnimal(animal2);
