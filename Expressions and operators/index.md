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

## Relational operators

Toán tử quan hệ so sánh các toán hạng của nó và trả về giá trị Boolean dựa trên việc so sánh có đúng hay không.

### in

Toán tử _in_ trả về true nếu thuộc tính đã chỉ định nằm trong đối tượng đã chỉ định. Cú pháp là: _propNameOrNumber in objectName_

trong đó propNameOrNumber là một biểu thức chuỗi, số hoặc ký hiệu biểu thị tên thuộc tính hoặc array index và objectName là tên của một đối tượng.

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false
```

### instanceof

Toán tử instanceof trả về true nếu đối tượng được chỉ định thuộc kiểu đối tượng đã chỉ định. Cú pháp là:

```js
objectName instanceof objectType;
```

trong đó objectName là tên của đối tượng để so sánh với objectType và objectType là một loại đối tượng, chẳng hạn như Date hoặc Array.

```js
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

## Basic expressions

### this

Sử dụng từ khóa _this_ để chỉ đối tượng hiện tại. Nói chung, điều này đề cập đến đối tượng đang gọi trong một phương thức. Sử dụng ký hiệu này với dấu chấm hoặc dấu ngoặc:

```js
this["propertyName"];
this.propertyName;
```

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) {
    console.log("Invalid Value!");
  }
}

<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### new

Bạn có thể sử dụng _new operator_ để tạo một instance của loại đối tượng do người dùng xác định hoặc của một trong các loại đối tượng built-in. Sử dụng mới như sau:

```js
nst objectName = new ObjectType(param1, param2, /* …, */ paramN);
```

### super

Từ khóa super được sử dụng để gọi các object's parent. Chẳng hạn, việc gọi hàm tạo cha sẽ rất hữu ích với các lớp.

```js
super(args); // calls the parent constructor.
super.functionOnParent(args);
```
