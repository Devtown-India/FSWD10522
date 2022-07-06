class Student {
  constructor(name, batch) {
    this.name = name;
    this.batch = batch;
  }

  study() {
    console.log("studying");
  }
}

const s1 = new Student("John", "FSWD-10522");
const s2 = new Student("Appleeed", "FSWD-10522");

console.log(s1)
console.log(s2)
