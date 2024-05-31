// [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

## Falsy values

- false
- undefined
- null
- 0
- NaN
- the empty string ("")

không nên nhầm lẫn các giá trị boolean nguyên thủy true và false với các giá trị true và false của object Boolean!

```js
const b = new Boolean(false);
if (b) {
  // this condition evaluates to true
}
if (b == true) {
  // this condition evaluates to false
}
```

## The finally block

finally block chứa các câu lệnh sẽ được thực thi sau khi khối try và Catch thực thi.

Điều quan trọng cần lưu ý là finally block sẽ thực thi dù có throw exception hay không.

```js
openMyFile();
try {
  writeMyFile(theData); // This may throw an error
} catch (e) {
  handleError(e); // If an error occurred, handle it
} finally {
  closeMyFile(); // Always close the resource
}
```

Nếu finally block trả về một giá trị, giá trị này sẽ trở thành giá trị trả về của toàn bộ try…catch…finally, bất kể bất kỳ câu lệnh trả về nào trong try và catch:
