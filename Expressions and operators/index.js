function f() {
  return 1;
}
let x;
const y = (x = f()); // Or equivalently: const y = x = f();
console.log(y); // Logs the return value of the assignment x = f().

console.log((x = f())); // Logs the return value directly.

// An assignment expression can be nested in any place
// where expressions are generally allowed,
// such as array literals' elements or as function calls' arguments.
console.log([0, (x = f()), 0]);
console.log(f(0, (x = f()), 0));

// Comma operator
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

console.log(a[0]);
for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(a[0]);
  // console.log(`a[${i}][${j}]= ${a[i][j]}`);
}

function validate(obj, lowval, hival) {
  console.log(obj.value);
  if (obj.value < lowval || obj.value > hival) {
    console.log("Invalid Value!");
  }
  console.log("222222222222");
}

validate(this, 18, 99);
