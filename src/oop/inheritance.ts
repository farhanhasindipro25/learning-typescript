class PersonClass {
  public constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  sleep(hours: number): string {
    return `${this.name} will sleep for ${hours}`;
  }
}

class Student extends PersonClass {
  public constructor(
    public name: string,
    public age: number,
    public address: string
  ) {
    super(name, age, address);
  }
}

const student1 = new Student("Mr. X", 15, "BD");
student1.address;
student1.age;
student1.name;
student1.sleep(8);

class Teacher extends PersonClass {
  public constructor(
    public name: string,
    public age: number,
    public address: string,
    public designation: string
  ) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(noOfClasses: number): string {
    return `${this.name} wil take ${noOfClasses} of classes.`;
  }
}

const teacher1 = new Teacher("Mr.Y", 26, "BD", "Lecturer");
teacher1.address;
teacher1.age;
teacher1.designation;
teacher1.name;
teacher1.sleep(8);
teacher1.takeClasses(4);
