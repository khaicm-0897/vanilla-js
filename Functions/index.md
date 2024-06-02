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
