class Counter {
  static counter = 0;

  static increment(): number {
    return (Counter.counter += 1);
  }
  static decrement(): number {
    return (Counter.counter -= 1);
  }
}

const i1 = new Counter();
const i2 = new Counter();
console.log(Counter.increment());
console.log(Counter.increment());

// Static - Fixed.
// Can be accessed by class.