[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)

## Destructuring

Đối với các phép gán phức tạp hơn, destructuring assignment là một biểu thức JavaScript cho phép trích xuất dữ liệu từ mảng hoặc đối tượng bằng cách sử dụng cú pháp mirrors the construction của mảng và đối tượng bằng chữ.

```js
// Without destructuring
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];

// With destructuring
const [one, two, three] = foo;
```

## Logical operators

Các biểu thức có thể được chuyển đổi thành false là những biểu thức đánh giá thành null, 0, NaN, chuỗi trống ("") hoặc undefined.

## String operators

Ngoài các toán tử so sánh, có thể được sử dụng trên các giá trị chuỗi, toán tử nối (+) nối hai giá trị chuỗi với nhau, trả về một chuỗi khác là sự kết hợp của hai chuỗi toán hạng.

```js
console.log("my " + "string"); // console logs the string "my string".
console.log("1" + 1); // console logs the string "11".
```

Toán tử gán tốc ký += cũng có thể được sử dụng để nối các chuỗi.

```js
let mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
```
