// won't declare the implementation/behavior of the methods or class
// will give an abstract idea about the shape/purpose of the class and it's methods.

// Abstraction using interfaces.

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  public constructor(public name: string, public model: number) {}
  startEngine(): void {
    console.log("Starting Engine...");
  }
  stopEngine(): void {
    console.log("Stopping Engine...");
  }
  move(): void {
    console.log("Moving Vehicle...");
  }
  test(): void {
    console.log("Testing Vehicle...");
  }
}

const vehicle1 = new Vehicle("Corvette", 1989);

abstract class VehicleCls {
  public constructor(public name: string, public model: number) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;
  washVehicle?(): void {
    console.log("Washing Vehicle...");
  }
}

class CarCls extends VehicleCls {
  startEngine(): void {
    console.log("Starting Engine...");
  }
  stopEngine(): void {
    console.log("Stopping Engine...");
  }
  move(): void {
    console.log("Moving Vehicle...");
  }
}

const car1 = new CarCls("BMW", 2033);
// car1.washVehicle();
car1.startEngine();
car1.move();
car1.stopEngine();
