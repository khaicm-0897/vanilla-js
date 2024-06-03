# [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

## Function expressions

Các hàm cũng có thể được tạo bởi một biểu thức hàm.

```js
function square(number) {
  return number * number;
}
```

Trong JavaScript, một hàm có thể được xác định dựa trên một điều kiện.

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

## Function hoisting

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Code này chạy mà không có bất kỳ lỗi nào, mặc dù hàm Square() được gọi trước khi nó được khai báo. Điều này là do trình thông dịch JavaScript nâng toàn bộ phần khai báo hàm lên đầu phạm vi hiện tại, do đó đoạn code trên tương đương với:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Function hoisting chỉ hoạt động với các function declarations — function expressions - không hoạt động với các function expressions. Đoạn mã sau sẽ không hoạt động:

```js
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## Nested functions and closures

Hàm bên trong chỉ có thể được truy cập từ các câu lệnh ở hàm bên ngoài.

Hàm bên trong tạo thành một closure: hàm bên trong có thể sử dụng các đối số và biến của hàm bên ngoài, trong khi hàm bên ngoài không thể sử dụng các đối số và biến của hàm bên trong.

```js
function outside(x) {
  function inside(y) {
    console.log(y, "3333");
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8
```

## Closures

Closure là một trong những tính năng mạnh mẽ nhất của JavaScript. JavaScript cho phép lồng các hàm và cấp cho hàm bên trong toàn quyền truy cập vào tất cả các biến và hàm được xác định bên trong hàm ngoài (và tất cả các biến và hàm khác mà hàm ngoài có quyền truy cập).

Tuy nhiên, hàm ngoài không có quyền truy cập vào các biến và hàm được xác định bên trong hàm bên trong. Điều này cung cấp một kiểu đóng gói cho các biến của hàm bên trong.

Ngoài ra, do hàm bên trong có quyền truy cập vào phạm vi của hàm bên ngoài nên các biến và hàm được xác định trong hàm bên ngoài sẽ tồn tại lâu hơn thời gian thực thi hàm bên ngoài, nếu hàm bên trong quản lý để tồn tại ngoài vòng đời của hàm bên ngoài. chức năng. Một closure được tạo ra khi hàm bên trong bằng cách nào đó được cung cấp cho bất kỳ phạm vi nào bên ngoài hàm bên ngoài.

```js
// The outer function defines a variable called "name"
const pet = function (name) {
  const getName = function () {
    // The inner function has access to the "name" variable of the outer function
    return name;
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"
```

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

## Default parameters

Trong JavaScript, tham số của hàm mặc định là undefined. Tuy nhiên, trong một số trường hợp, việc đặt một giá trị mặc định khác có thể hữu ích.

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

## Rest parameters

Cú pháp rest params cho phép chúng ta biểu diễn số lượng đối số không xác định dưới dạng một mảng.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Arrow functions

Syntax:

```js
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```

Arrow functions có cú pháp ngắn hơn so với function expressions và không có this, argument, super hoặc new.target riêng. Các chức năng Arrow functions luôn ẩn danh.

Hai yếu tố ảnh hưởng đến việc giới thiệu các Arrow functions: các hàm ngắn hơn và không ràng buộc về điều này.

### Shorter functions

```js
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]
```
