// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

## Basics

JavaScript phân biệt chữ hoa chữ thường và sử dụng bộ ký tự Unicode

## Declarations

JavaScript có ba loại khai báo biến.

_var_ Khai báo một biến có phạm vi truy cập xuyên suốt function chứa nó.

_let_ Khai báo một biến cục bộ, có phạm vi scope, tùy ý khởi tạo nó thành một giá trị.

_const_ Khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.

## Declaration and initialization

Trong các khai báo var và let, init value laf optional. Nếu một biến được khai báo mà không có bộ khởi tạo, nó sẽ được gán giá trị undefined

```js
let x;
console.log(x); // logs "undefined"
```

Các khai báo const luôn cần một trình khởi tạo, bởi vì chúng cấm bất kỳ loại phép gán nào sau khi khai báo và việc ngầm khởi tạo nó với giá trị undefined có thể là một lỗi.

```js
const x; // SyntaxError: Missing initializer in const declaration
```

## Variable scope

Một biến có thể thuộc một trong các phạm vi sau:

Global scope: Phạm vi mặc định cho tất cả code chạy ở chế độ script.

Module scope: Phạm vi mã chạy ở chế độ module.

Function scope: Phạm vi được tạo bằng một function.

## Variable hoisting

Các biến được khai báo bằng var thì bạn có thể tham chiếu đến nó ở bất kì đâu trong phạm vi của nó, ngay cả khi chưa khai báo được biến đó. Tuy nhiên, nếu bạn truy cập một biến trước khi nó được khai báo, thì giá trị đó luôn undefined, bởi vì chỉ có phần khai báo và khởi tạo mặc định (undefined) của nó được hoisted chứ không phải gán giá trị của nó.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

Diễn giải

```js
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();
```

## Global variables

Các biến toàn cục trên thực tế là thuộc tính của global objec.

Trong các trang web, global objec là window, vì vậy bạn có thể read và set các biến toàn cục bằng cú pháp window.variable. Trong tất cả các môi trường, biến toàn cục này (bản thân nó là biến toàn cục) có thể được sử dụng để đọc và đặt các biến toàn cục. Điều này nhằm cung cấp một giao diện nhất quán giữa các JavaScript runtimes khác nhau.

Do đó, bạn có thể truy cập các biến toàn cục được khai báo trong một window hoặc frame từ window hoặc frame khác bằng cách chỉ định tên window hoặc frame. Ví dụ: nếu một biến có tên phoneNumber được khai báo trong document, bạn có thể tham chiếu biến này từ iframe dưới dạng parent.phoneNumber.

## Constants

Trong JavaScript, từ khóa const được sử dụng để khai báo các hằng số, nhưng điều này không có nghĩa là giá trị của biến không thể thay đổi dưới bất kỳ hình thức nào. Thay vào đó, const chỉ đảm bảo rằng tham chiếu đến giá trị được khai báo không thể thay đổi. Đây là một khái niệm quan trọng cần hiểu khi làm việc với const.

Cụ thể hơn:
Giá trị nguyên thủy (primitive values): Đối với các giá trị nguyên thủy như số, chuỗi, boolean, null, và undefined, const thực sự làm cho giá trị không thể thay đổi.
Đối tượng (objects), mảng (arrays): Đối với đối tượng và mảng, const đảm bảo rằng tham chiếu đến đối tượng hoặc mảng đó không thể thay đổi. Tuy nhiên, nội dung bên trong đối tượng hoặc mảng vẫn có thể thay đổi.

```js
const a = 5;
a = 10; // Lỗi: Assignment to constant variable.

const obj = { name: "Alice" };
obj.name = "Bob"; // Hợp lệ: Bạn có thể thay đổi thuộc tính của đối tượng.
obj = { name: "Charlie" }; // Lỗi: Assignment to constant variable.
```

## Data structures and types

Tiêu chuẩn ECMAScript mới nhất xác định tám loại dữ liệu:

- Boolean: true or false .

- null: Một từ khóa đặc biệt biểu thị giá trị null. (Vì JavaScript phân biệt chữ hoa chữ thường nên null không giống với Null, NULL hoặc bất kỳ biến thể nào khác.)

- undefined Thuộc tính cấp cao nhất có value is not defined.

- Number: Một số nguyên hoặc số dấu phẩy động. Ví dụ: 42 hoặc 3.14159.

- BigInt. Một số nguyên có độ chính xác tùy ý. Ví dụ: 9007199254740992n.

- String: Một chuỗi ký tự đại diện cho một giá trị văn bản. Ví dụ: "Xin chào".

- Symbol: . Một kiểu dữ liệu mà các thể hiện của nó là duy nhất và không thể thay đổi.
- Object: Các đối tượng có thể được xem như một tập hợp các thuộc tính

## Numbers and the '+' operator

Trong các biểu thức liên quan đến giá trị số và chuỗi bằng toán tử +, JavaScript chuyển đổi giá trị số thành chuỗi. Ví dụ:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Với tất cả các toán tử khác, JavaScript không chuyển đổi giá trị số thành chuỗi. Ví dụ:

```js
"37" - 7; // 30
"37" * 7; // 259
```

## Converting strings to numbers

Trong trường hợp giá trị biểu thị một số nằm trong bộ nhớ dưới dạng chuỗi thì có các phương thức để chuyển đổi.

- parseInt()
- parseFloat()

Một phương pháp khác để lấy một số từ một chuỗi là sử dụng toán tử + (cộng một ngôi):

```js
"1.1" + "1.1"; // '1.11.1'
+"1.1" + +"1.1"; // 2.2
```

## Literals

- Array literals
- Boolean literals
- Numeric literals
- Object literals
- RegExp literals
- String literals

### Extra commas in array literals

Nếu bạn đặt hai dấu phẩy liên tiếp trong một array literal, mảng đó sẽ để lại một slot cho phần tử không xác định. Ví dụ sau tạo mảng:

```js
const fish = ["Lion", , "Angel"];
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Lưu ý rằng item thứ hai là "empty", không hoàn toàn giống với giá trị thực tế undefined. Khi sử dụng các phương pháp duyệt mảng như Array.prototype.map, các slot trống sẽ bị bỏ qua. Tuy nhiên, truy cập chỉ mục cá[1] vẫn trả về undefined.

### Template literals

```js
// Basic literal string creation
`In JavaScript '\n' is a line-feed.` // Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;

// String interpolation
const name = "Lev",
  time = "today";
`Hello ${name}, how are you ${time}?`;
```

### Using special characters in strings

| Character | Meaning                                                                                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \0        | Null Byte                                                                                                                                                                     |
| \b        | Backspace                                                                                                                                                                     |
| \f        | Form Feed                                                                                                                                                                     |
| \n        | New Line                                                                                                                                                                      |
| \r        | Carriage Return                                                                                                                                                               |
| \t        | Tab                                                                                                                                                                           |
| \v        | Vertical tab                                                                                                                                                                  |
| \'        | Apostrophe or single quote                                                                                                                                                    |
| \"        | Double quote                                                                                                                                                                  |
| \\        | Backslash character                                                                                                                                                           |
| \XXX      | The character with the Latin-1 encoding specified by up to three octal digits XXX between 0 and 377. For example, \251 is the octal sequence for the copyright symbol.        |
| \xXX      | The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF. For example, \xA9 is the hexadecimal sequence for the copyright symbol. |
| \uXXXX    | The Unicode character specified by the four hexadecimal digits XXXX. For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences.      |
| \u{XXXXX} | Unicode code point escapes. For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.                                                                    |

### Escaping characters

Bạn có thể chèn dấu ngoặc kép bên trong chuỗi bằng cách đặt trước chuỗi đó một dấu gạch chéo ngược. Điều này được gọi là thoát khỏi dấu ngoặc kép. Ví dụ:

```js
const quote = 'He read "The Cremation of Sam McGee" by R.W. Service.';
console.log(quote);
```
