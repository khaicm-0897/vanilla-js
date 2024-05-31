// const b = new Boolean(false);
// if (b) {
//   // this condition evaluates to true
//   console.log(222222);
// }
// console.log(b);
// if (b == true) {
//   console.log(111111);
//   // this condition evaluates to false
// }

(function f() {
  var a = 1;
  try {
    console.log(0);
    a = 2;
    throw "bogus";
  } catch (e) {
    console.log(1);
    a = 3;
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    a = 4;
    console.log(3);
    console.log(a);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
})();
