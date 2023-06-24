class PersonCls {
  sleep(): void {
    console.log("Person sleeps 8 hours per day.");
  }
}

class StudentCls extends PersonCls {
  sleep(): void {
    console.log("Student sleeps 10 hours per day.");
  }
}

class DeveloperCls extends PersonCls {
  sleep(): void {
    console.log("Developer sleeps 6 hours per day.");
  }
}

function getMethod(param: PersonCls) {
  param.sleep();
}

const person10 = new PersonCls();
const person11 = new StudentCls();
const person12 = new DeveloperCls();
getMethod(person10);
getMethod(person11);
getMethod(person12);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  public radius: number;
  public constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  public height: number;
  public width: number;
  public constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.width * this.height;
  }
}
function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

const shape1 = new Shape();
const circle1 = new Circle(10);
const rectangle1 = new Rectangle(10, 12);
getAreaOfShape(shape1);
getAreaOfShape(circle1);
getAreaOfShape(rectangle1);
