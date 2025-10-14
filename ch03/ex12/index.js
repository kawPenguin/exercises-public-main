class Example {

    constructor(value) {
        this.value = value;
      }
    valueOf() {
      return this.value;
    }
  
    toString() {
      return `${this.value}`;
    }
  }
  
  const obj = new Example(12);

  console.log(obj*2);

  console.log(obj + "HELLO");