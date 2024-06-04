[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)

## Number object

| Property               | Description                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Number.parseFloat()    | Parses a string argument and returns a floating point number. Same as the global parseFloat() function.                 |
| Number.parseInt()      | Parses a string argument and returns an integer of the specified radix or base. Same as the global parseInt() function. |
| Number.isFinite()      | Determines whether the passed value is a finite number.                                                                 |
| Number.isInteger()     | Determines whether the passed value is an integer.                                                                      |
| Number.isNaN()         | Determines whether the passed value is NaN. More robust version of the original global isNaN().                         |
| Number.isSafeInteger() | Determines whether the provided value is a number that is a safe integer.                                               |

## Math object

The built-in _Math_ object có các thuộc tính và phương thức cho các hằng số và hàm toán học. Ví dụ: thuộc tính PI của đối tượng Math có giá trị pi (3.141…)

## Date object

JavaScript không có kiểu dữ liệu ngày. Tuy nhiên, bạn có thể sử dụng đối tượng Date và các phương thức của nó để làm việc với ngày và giờ trong ứng dụng của mình. Đối tượng Date có một số lượng lớn các phương thức để setting, get và thao tác ngày tháng. Nó không có bất kỳ properties nào.

JavaScript xử lý ngày tương tự như Java. Hai ngôn ngữ có nhiều phương thức ngày giống nhau và cả hai ngôn ngữ đều lưu trữ ngày dưới dạng số mili giây kể từ nửa đêm đầu ngày 1 tháng 1 năm 1970, UTC, với Timestamp Unix là số giây kể từ cùng một thời điểm. Thời điểm vào lúc nửa đêm đầu ngày 1 tháng 1 năm 1970, UTC được gọi là kỷ nguyên(epoch).

```js
const dateObjectName = new Date([parameters]);
```

trong đó dateObjectName là tên của đối tượng Date đang được tạo; nó có thể là một đối tượng mới hoặc một thuộc tính của một đối tượng hiện có.

Gọi Date mà không có từ khóa new sẽ trả về một chuỗi biểu thị ngày và giờ hiện tại.

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year
```
