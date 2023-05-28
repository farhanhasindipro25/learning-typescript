// everything is public by default.

class Animal {
  //   public name: string;
  //   public species: string;
  //   public sound: string;

  //   constructor(name: string, species: string, sound: string) {
  //     this.name = name;
  //     this.species = species;
  //     this.sound = sound;
  //   }

  // parameter properties.
  // properties are declared within the constructor parameter.
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  public makeSound() {
    console.log(`The ${this.name} ${this.species} is ${this.sound}.`);
  }
}

const dog = new Animal("German Shepherd", "dog", "barking");
dog.makeSound();
const cow = new Animal("Australian", "cow", "mooing");
cow.makeSound();
