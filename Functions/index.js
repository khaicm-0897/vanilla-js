// nested function
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41

// function outside(x) {
//   function inside(y) {
//     console.log(y, "3333");
//     return x + y;
//   }
//   return inside;
// }

// const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
// console.log(fnInside(5)); // 8
// console.log(outside(3)(5)); // 8

// closure
// const createPet = function (name) {
//   let sex;

//   const pet = {
//     // setName(newName) is equivalent to setName: function (newName)
//     // in this context
//     setName(newName) {
//       name = newName;
//     },

//     getName() {
//       return name;
//     },

//     getSex() {
//       return sex;
//     },

//     setSex(newSex) {
//       if (
//         typeof newSex === "string" &&
//         (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
//       ) {
//         sex = newSex;
//       }
//     },
//   };

//   return pet;
// };

// const pet = createPet("Vivie");
// console.log(pet.getName()); // Vivie

// pet.setName("Oliver");
// pet.setSex("male");
// console.log(pet.getSex()); // male
// console.log(pet.getName()); // Oliver

// arrow function
function Person() {
  // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 500);
}
const p = new Person();

console.log(p.age);
