### Template Literal?

```js
const name = 'Joe';
const color = 'green';

const message = introduce`Hello, I'm ${name} and my favorite color is ${color}`;
```

### Functions & Arrow Functions

Here is a function written in ES5 syntax:

```js
function timesTwo(params) {  return params * 2}

function timesTwo(params) {
  return params * 2
}

timesTwo(4);  // 8
```

Now, here is the same function expressed as an arrow function:
```js
var timesTwo = params => params * 2

timesTwo(4);  // 8
```

#### Variations (Biến thể)

##### 1. No parameters

If there are no parameters, you can place an empty parentheses before =>.

```js
() => 42
```

In fact, you don’t even need the parentheses!

```js
_ => 42
```

##### 2. Single parameter

With these functions, parentheses are optional:

```js
x => 42  || (x) => 42
```

##### 3. Multiple parameters

Parentheses are required for these functions:

```js
(x, y) => 42
```

##### 4. Statements (as opposed to expressions)

In its most basic form, a function expression produces a value, while a function statement performs an action.

With the arrow function, it is important to remember that statements need to have curly braces. Once the curly braces are present, you always need to write return as well.

Here is an example of the arrow function used with an if statement:

```js
var feedTheCat = (cat) => {
  if (cat === 'hungry') {
    return 'Feed the cat';
  } else {
    return 'Do not feed the cat';
  }
}
```

##### 5. “Block body”

If your function is in a block, you must also use the explicit return statement:

```js
var addValues = (x, y) => {
  return x + y
}
```

##### 6. Object literals

If you are returning an object literal, it needs to be wrapped in parentheses. This forces the interpreter to evaluate what is inside the parentheses, and the object literal is returned.

```js
x =>({ y: x })
```

#### Syntactically anonymous

It is important to note that arrow functions are anonymous, which means that they are not named

This anonymity creates some issues:

1, Harder to debug

When you get an error, you will not be able to trace the name of the function or the exact line number where it occurred.


2, No self-referencing

If your function needs to have a self-reference at any point (e.g. recursion, event handler that needs to unbind), it will not work.

#### Main benefit: No binding of ‘this’

In classic function expressions, the this keyword is bound to different values based on the context in which it is called. With arrow functions however, this is lexically bound. It means that it usesthis from the code that contains the arrow function.

For example, look at the setTimeout function below:

```js
// ES5
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
};
```

```js
// ES6
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};
```

#### When you should not use Arrow Functions

##### 1. Object methods

When you call cat.jumps, the number of lives does not decrease. It is because this is not bound to anything, and will inherit the value of this from its parent scope.

```js
var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}
```

##### 2. Callback functions with dynamic context

If you need your context to be dynamic, arrow functions are not the right choice. Take a look at this event handler below:

```js
var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});
```
If we click the button, we would get a TypeError. It is because this is not bound to the button, but instead bound to its parent scope.

##### 3. When it makes your code less readable

It is worth taking into consideration the variety of syntax we covered earlier. With regular functions, people know what to expect. With arrow functions, it may be hard to decipher what you are looking at straightaway.

#### When you should use them

Arrow functions shine best with anything that requires this to be bound to the context, and not the function itself.

## JavaScript object destructuring usages you must know

#### Use destructuring to retrieve values from an object

The most basic usage of object destructuring is to retrieve the value of a property key from the object.

```js
const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy'
}
```
Traditionally, we will use the dot(.) notation or the subscript([]) notation to retrieve values from the object

```js
const id = employee.id;
const name = employee.name;
```

To destructure a value from an object, you use a syntax like this:

```js
const { id, name } = employee;
```

Here, we use the object's key names to create variables and assign them with the value from the object for the same key. In the above code snippet, we retrieve the value of id and name without typing them in multiple lines.

#### Use destructuring to retrieve values from a nested object

In all practicality, your data object may not be as simple as the employee object we have seen so far. The object's key can have another object as a value and form a nested object. Let us now see how to retrieve the value for a key from a nested object.

```js
const employee = {
  id: 007,
  name: 'James',
  dept: {
    id: 'D001',
    name: 'Spy',
    address: {
      street: '30 Wellington Square',
      city: 'Chelsea'  
    }
  }  
}
```

Let's retrieve the value of the address property traditionally.

```js
const address = employee.dept.address;
```

Now let us go one more level down and retrieve the value of the street property.

```js
const street = employee.dept.address.street;
```

Now with destructuring, things are simple. You can define the key name using its predecessor key. So to retrieve the value of address, we will start with its predecessor key dept. So, dept is the top-level key with no predecessor. Hence the syntax is,

```js
const { dept: { address } } = employee;
console.log(address);
```

#### Define a new variable with object destructuring

There could be a situation where you are unsure if the object has a specific key while retrieving its value. Also, you may want to create a new variable with a default value in case the key is unavailable in the object.

```js
const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy'
}
```

Now let's assume we are trying to retrieve the value of the age property, which is not present in the object. A traditional way to do that is.

```js
const age = employee.age ? employee.age : 25;
```

If we find the age property, access its value, and assign it to the variable else, assign a default value of 25. that with the object destructuring syntax

```js
const { name, age=25 } = employee;
console.log(age);
```

The destructuring part has got more magic to show! How about creating a brand new variable and assigning a value computed using the object property values? Sounds complex? Here is an example,

```js
const {name, dept, message = `${name} is ${dept}`} = employee;
console.log(message);
```

#### How to use JavaScript object destructuring aliases?

In JavaScript object destructuring, you can give your destructured variables an alias name. It comes in very handy to reduce the chances of variable name conflicts.

```js
const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy'
}
```

#### Handle dynamic name property with object destructuring

We often handle API response data as JavaScript objects. These objects may contain dynamic data such that, as a client, we may not even know the property key names in advance.

```js
const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy'
}
```

Can we write a function that returns the value of the employee object properties when we pass a key as an argument? Yeah, so it means we will not hard-code the key name inside the function. It is dynamic for the function.

```js
const id = getPropertyValue('id');
const name = getPropertyValue('name');

console.log(id, name); // 7 'James'
```

Let's define it now.

```js
function getPropertyValue(key) {
    const { [key]: returnValue } = employee;   
    return returnValue;
}
```

Please note the square brackets([..]) around the key in the destructuring assignment. The key we pass to the function gets evaluated, and the value is retrieved from the object.

####  Destructure objects in the function argument and return value

You must learn this usage if you want to explore any modern JavaScript-based frameworks/libraries like React, Vue, Svelte, Angular, etc. You can use object destructuring to pass the property values as arguments to the function.

```js
const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy'
}
```

Now let us create a simple function that creates a message using the *name* and *dept* property values to log into the browser console.

```js
function logEmployee({name, dept}) {
  console.log(`${name} is ${dept}`); 
}
```

There is one more usage of object destructuring with function. If a function returns an object, you can destructure the values directly into variables. Let's create a function that returns an object.

```js
function getUser() {
  return {
    'name': 'Alex',
    'age': 45
  }
}
```

Now if you are interested to retrieve the value of the age property, you can do it like:

```js
const { age } = getUser();
console.log(age); // 45
```

#### Use object destructuring in loops

usage we will be discussing is destructuring in loops. Let's think of an array of employee objects. We want to iterate through the array and want to use the property values of each of the employee object.

```js
const employees= [
  { 
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  { 
      'name': 'John',
      'address': 'USA',
      'age': 33
  },
  { 
      'name': 'Ravi',
      'address': 'Bangalore',
      'age': 16
  }
];
```

You can use the for-of loop to loop through the employees array and then use the object destructuring assignment syntax to retrieve the details. Let us log the name and age of each employee in the browser console.

```js
for(let {name, age} of employees) {
  console.log(`${name} is ${age} years old!!!`);
}
```

### Spread Syntax in JavaScript

The Spread Syntax (also known as the Spread Operator) is another excellent feature of ES6. As the name indicates, it takes an iterable (like an array) and expands (spreads) it into individual elements.

Spread syntax helps us clone an object with the most straightforward syntax using the curly braces and three dots {...}.

```js
const clone_some_object = {...some_object}
```

With spread syntax we can clone, update, and merge objects in an immutable way. The immutability helps reduce any accidental or unintentional changes to the original (Source) object.

#### Create a Clone of an Object

We can create a cloned instance of an object using the spread syntax like this:

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const clone = {...user} // Output, {name: "Alex", address: "15th Park Avenue", age: 43}

clone === user; // Output, false
```

You can alternatively use object.assign() to create a clone of an object. However, the spread syntax is much more precise and much shorter.

#### Add Properties to Objects

We can add a new property (key-value pair) to the object using the spread syntax. Note that the actual object never gets changed. The new property gets added to the cloned object.

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

// Add a new property salary
const updatedUser = {...user, salary:12345}; // {name: "Alex", address: "15th Park Avenue", age: 43, salary: 12345}

// Original object is unchanged
console.log(user); // {name: "Alex", address: "15th Park Avenue", age: 43}
```

#### Update Properties

We can also update an existing property value using the spread syntax. Like the add operation, the update takes place on the object's cloned instance, not on the actual object.

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const updatedUser = {...user, age:56}; // {name: "Alex", address: "15th Park Avenue", age: 56}

console.log(user); // {name: "Alex", address: "15th Park Avenue", age: 43}
```

#### Update Nested Objects

As we have seen, updating an object with the spread syntax is easy, and it doesn't mutate the original object. However, it can be a bit tricky when you try to update a nested object using the spread syntax. Let's understand it with an example.

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}
```

Now, how can we add a new property called, number with a value of, say, 7 for the department object? Well, we might try out the following code to achieve it (but that would be a mistake):

```js
const updated = {
    ...user, 
    department: {'number': 7}
}

console.log(updated);
```

As you execute it, you will realize that the code will replace the entire department object with the new value as, {'number': 7}. This is not what we wanted!

How do we fix that? We need to spread the properties of the nested object as well as add/update it. Here is the correct syntax that will add a new property number with the value 7 to the department object without replacing its value:

```js
const updated = {
    ...user, 
    department: {
        ...user.department, 
        'number': 7
    }
};

console.log(updated);
```

#### Combine (or Merge) two Objects

The last practical use of the spread syntax in JavaScript objects is to combine or merge two objects. obj_1 and obj_2 can be merged together using the following syntax:

```js
const merged = {...obj_1, ...obj_2};
```

Note that this way of merging performs a shallow merge. This means that if there is a common property between both the objects, the property value of obj_2 will replace the property value of obj_1 in the merged object.

### The Rest Parameter in JavaScript

The Rest parameter is kind of opposite to the spread syntax. While spread syntax helps expand or spread elements and properties, the rest parameter helps collect them together.

In the case of objects, the rest parameter is mostly used with destructuring syntax to consolidate the remaining properties in a new object you're working with.

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
```

We know how to destructure the age property to create a variable and assign the value of it. How about creating another object at the same time with the remaining properties of the user object? Here you go:

```js
const {age, ...rest} = user;
console.log(age, rest); // 43, { name: 'Alex', address: '15th Park Avenue' }
```

### JavaScript Modules

```js
In JavaScript, one script is one module. A module is nothing but a JavaScript file.
```

### Basics of export and import

We can load modules into each other using the keywords export and import.

**export**: Using the export keyword, we make the module features available to other modules. These features are usually the functions. However, it is not limited to it. We will be able to export variables, objects, classes, etc., from a module.

**import**: As the name suggests, the import keyword is used to import other modules' features.

```js
// calc.js

export const sum = (a, b) => {
    return a + b;
};

export const sub = (a,b) => {
    return a - b;
};
```

As you noticed, the export keyword is in front of each of the functions. The module exports these two functions so that other modules can import and make use of it. Now let's see the import part. We will be importing these functions to another module called index.js.

```js
// index.js

import { sum, sub } from './calc.js';

console.log('The Sum is', sum(2,3));
console.log('The Sub is', sub(5,3));
```

We first import both the functions with their names(sum and sub) from the module(JavaScript file), calc.js.

Finally, we will be importing(or loading) the index.js file to an HTML file, say, index.html

```html
<html>

    <head>
        <title>js-modules</title>
    </head>

    <body>
        <script type="module" src="./src/index.js"></script>
        <h1>
            See the Debugger Console...
        </h1>
    </body>

</html>
```

It is important to note that we use the type called module in the script tag while loading the index.js file. It is required. Specifying the type as module causes the code to be treated as a JavaScript module.

Two essential points to note here:

- This way of exporting a module feature(functions, variables, classes, etc.) is called Named Export. With Named Export, import needs curly braces. Named Export also forces upon the fact, the import must use the same exported name of the function, variable, etc. For the above example, if we import sum as sum1, we will get the following error:

- While importing the functions, the related module name in the import statement must have the .js extension.

```js
import { sum, sub } from './calc.js';
```

If you are familiar with modules from node.js or with reactjs, you can import the same as

```js
import { sum, sub } from './calc';
```

With Vanilla JavaScript, you will be getting this error

### Export Together and the Aliases

In the above example, we have seen how to export the functions individually. We may have situations where we need to export multiple things from a module. We can do all of them together.

```js
const sum = (a, b) => {
    return a + b;
};

const sub = (a,b) => {
    return a - b;
};

export { sum, sub };
```

As we see in the code above, we are not using the export keyword for each function. We are just exporting them together in the last line. With this, we can import the functions as we have done before.

**Aliases** - While importing a function from a module, we can use an alias name instead. Consider the following example where we have used the alias called add for the imported function sum.

```js
import { sum as add, sub } from './calc.js';

console.log('The Sum is', add(2,3));
console.log('The Sub is', sub(5,3));
```

### Importing as a Namespace

At times, we may need to import a large number of functions from a module. It would be tedious and too much code to import them as comma-separated as we have seen so far. We can short-hand this by importing them together with a Namespace. A namespace is nothing but a name of our choice. Let us take a look at this example:

```js
import * as Calc from './calc.js';

console.log('The Sum is', Calc.sum(2,3));
console.log('The Sub is', Calc.sub(5,3));
```
As we see here, we are importing *, which means all that is exported from, calc.js module. A more important fact to point here is importing the features by a name(Namespace) called Calc. As we did that, we can access the function using that Namespace.


### Default export and When not to use it

JavaScript modules provide a special keyword called default with export to specify only one thing to export from a file. However, technically, we can export both Named Export and Default Export from a single file but, we shouldn't mix them. Use either Named or Default export.

```js
// whoami.js

const sayMyName = () => {
    return 'Tapas';
};

export default sayMyName;
```

As we see, the default keyword with export is in the above code. We can import a default exported function in two ways.

- Using default as syntax

```js
import { default as sayMyName } from './whoami.js';
```

- Without the curly braces ({ })

```js
import sayMyName from './whoami.js';
```

**Few points to consider**

- Try not to mix the default export and named export together. Use default export when only one thing to export.
- While importing a feature exported with 'default', it is not mandatory to use the same name. Here is an example of how we can import the sayMyName function.

```js
import { default as name } from './whoami.js';
```
or

```js
import name from './whoami.js';
```

### Combine exports

We can combine the multiple exports from various modules and do a combined export from a single file. This is also called **re-export** or **aggregating**. Let us understand this with an example,

- We first export **sum** and **sub** as before from the **calc.js** module. Here we have opted for named export.

```js
// calc.js

 const sum = (a, b) => {
     return a + b;
  };

 const sub = (a,b) => {
     return a - b;
 };

 export { sum, sub };
```

- Then, we export a function called **sayMyName** from another module called **whoami.js**. This time, we have used default export.

```js
 // whoami.js

 const sayMyName = () => {
     return 'Tapas';
 };

 export default sayMyName;
```

- Now, we can combine the exports from both the modules into one module and export from there. Let us name the new module called combine.js.

```js
 // combine.js

 export * as Calc from './calc.js';
 export name from './whoami.js';
```

It is important to note the syntax here. It is almost like import, but we are actually re-exporting them. The advantage here is that we need to import only one file to access all these functions. Let us see, how are we going to do that,

- Import the functions

```js

 import * as Combine from './combine.js';

 console.log('The Sum is', Combine.Calc.sum(2,3));
 console.log('The Sub is', Combine.Calc.sub(5,3));

 console.log('The name is', Combine.name());
```

## Synchronous vs Asynchronous JavaScript – Call Stack, Promises, and More

In JavaScript, you can create and modify a function, use it as an argument, return it from another function, and assign it to a variable. All these abilities allow us to use functions everywhere to place a bunch of code logically.

We need to tell the JavaScript engine to execute functions by invoking them. It'll look like this:

```js
// Define a function
function f1() {
    // Do something
    // Do something again
    // Again
    // So on...
}

// Invoke the function
f1();
```

By default, every line in a function executes sequentially, one line at a time. The same is applicable even when you invoke multiple functions in your code. Again, line by line.

#### Synchronous JavaScript – How the Function Execution Stack Works

So what happens when you define a function and then invoke it? The JavaScript engine maintains a stack data structure called function execution stack. The purpose of the stack is to track the current function in execution. It does the following:

- When the JavaScript engine invokes a function, it adds it to the stack, and the execution starts.
- If the currently executed function calls another function, the engine adds the second function to the stack and starts executing it.
- Once it finishes executing the second function, the engine takes it out from the stack.
- The control goes back to resume the execution of the first function from the point it left it last time.
- Once the execution of the first function is over, the engine takes it out of the stack.
-Continue the same way until there is nothing to put into the stack.

The function execution stack is also known as the Call Stack.

Let's look at an example of three functions that execute one by one:

```js
function f1() {
  // some code
}
function f2() {
  // some code
}
function f3() {
  // some code
}

// Invoke the functions one by one
f1();
f2();
f3();
```

Did you see what happened there? First, f1() goes into the stack, executes, and pops out. Then f2() does the same, and finally f3(). After that, the stack is empty, with nothing else to execute.

Ok, let's now work through a more complex example. Here is a function f3() that invokes another function f2() that in turn invokes another function f1().

```js
function f1() {
  // Some code
}
function f2() {
  f1();
}
function f3() {
  f2();
}
f3();
```

Notice that first f3() gets into the stack, invoking another function, f2(). So now f2() gets inside while f3() remains in the stack. The f2() function invokes f1(). So, time for f1() to go inside the stack with both f2() and f3() remaining inside.

First, f1() finishes executing and comes out of the stack. Right after that f2() finishes, and finally f3().

The bottom line is that everything that happens inside the function execution stack is sequential. This is the Synchronous part of JavaScript. JavaScript's main thread makes sure that it takes care of everything in the stack before it starts looking into anything elsewhere.

#### Asynchronous JavaScript – How Browser APIs and Promises Work

The word asynchronous means not occurring at the same time. What does it mean in the context of JavaScript?

Typically, executing things in sequence works well. But you may sometimes need to fetch data from the server or execute a function with a delay, something you do not anticipate occurring NOW. So, you want the code to execute asynchronously.

In these circumstances, you may not want the JavaScript engine to halt the execution of the other sequential code. So, the JavaScript engine needs to manage things a bit more efficiently in this case.

We can classify most asynchronous JavaScript operations with two primary triggers:

- Browser API/Web API events or functions. These include methods like setTimeout, or event handlers like click, mouse over, scroll, and many more.
- Promises. A unique JavaScript object that allows us to perform asynchronous operations.

#### How to Handle Browser APIs/Web APIs

Browser APIs like setTimeout and event handlers rely on callback functions. A callback function executes when an asynchronous operation completes. Here is an example of how a setTimeout function works:

```js
function printMe() {
  console.log('print me');
}

setTimeout(printMe, 2000);
```

So, what do we expect to happen here? What do you think the output will be?

Will the JavaScript engine wait for 2 seconds to go to the invocation of the test() function and output this:

```js
printMe
test
```
Or will it manage to keep the callback function of setTimeout aside and continue its other executions? So the output could be this, perhaps:

```js
test
printMe
```

#### How the JavaScript Callback Queue Works (aka Task Queue)

JavaScript maintains a queue of callback functions. It is called a callback queue or task queue. A queue data structure is First-In-First-Out(FIFO). So, the callback function that first gets into the queue has the opportunity to go out first. But the question is:

- When does the JavaScript engine put it in the queue?
- When does the JavaScript engine take it out of the queue?
- Where does it go when it comes out of the queue?
- Most importantly, how do all these things relate to the asynchronous part of JavaScript?

Whoa, lots of questions! Let's figure out the answers with the help of the following image:

![image](./images/Screenshot%20from%202023-12-04%2015-02-14.png)

The above image shows the regular call stack we have seen already. There are two additional sections to track if a browser API (like setTimeout) kicks in and queues the callback function from that API.

The JavaScript engine keeps executing the functions in the call stack. As it doesn't put the callback function straight into the stack, there is no question of any code waiting for/blocking execution in the stack.

The engine creates a loop to look into the queue periodically to find what it needs to pull from there. It pulls a callback function from the queue to the call stack when the stack is empty. Now the callback function executes generally as any other function in the stack. The loop continues. This loop is famously known as the Event Loop.

So, the moral of the story is:

- When a Browser API occurs, park the callback functions in a queue.
- Keep executing code as usual in the stack.
- The event loop checks if there is a callback function in the queue.
- If so, pull the callback function from the queue to the stack and execute.
- Continue the loop.

Alright, let's see how it works with the code below:

```js
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 0);
    
    f2();
}

main();
```

The code executes a setTimeout function with a callback function f1(). Note that we have given zero delays to it. This means that we expect the function f1() to execute immediately. Right after setTimeout, we execute another function, f2().

So, what do you think the output will be? Here it is:

```js
main
f2
f1
```

Here are steps written out:

1. The main() function gets inside the call stack.
2. It has a console log to print the word main. The console.log('main') executes and goes out of the stack.
3. The setTimeout browser API takes place.
4. The callback function puts it into the callback queue.
5. In the stack, execution occurs as usual, so f2() gets into the stack. The console log of f2() executes. Both go out of the stack.
6. The main() also pops out of the stack.
7. The event loop recognizes that the call stack is empty, and there is a callback function in the queue.
8. The callback function f1() then goes into the stack. Execution starts. The console log executes, and f1() also comes out of the stack.
9. At this point, nothing else is in the stack and queue to execute further.

#### How the JavaScript Engine Handles Promises

In JavaScript, promises are special objects that help you perform asynchronous operations.

You can create a promise using the Promise constructor. You need to pass an executor function to it. In the executor function, you define what you want to do when a promise returns successfully or when it throws an error. You can do that by calling the resolve and reject methods, respectively.

Here is an example of a promise in JavaScript:

```js
const promise = new Promise((resolve, reject) =>
        resolve('I am a resolved promise');
);
```

After the promise is executed, we can handle the result using the .then() method and any errors with the .catch() method.

```js
promise.then(result => console.log(result))
```

You use promises every time you use the fetch() method to get some data from a store.

The point here is that JavaScript engine doesn't use the same callback queue we have seen earlier for browser APIs. It uses another special queue called the Job Queue.

#### What is the Job Queue in JavaScript?

Every time a promise occurs in the code, the executor function gets into the job queue. The event loop works, as usual, to look into the queues but gives priority to the job queue items over the callback queue items when the stack is free.

The item in the callback queue is called a macro task, whereas the item in the job queue is called a micro task.

So the entire flow goes like this:

- For each loop of the event loop, one task is completed out of the callback queue.
- Once that task is complete, the event loop visits the job queue. It completes all the micro tasks in the job queue before it looks into the next thing.
- If both the queues got entries at the same point in time, the job queue gets preference over the callback queue.

```js
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 0);
    
    new Promise((resolve, reject) =>
        resolve('I am a promise')
    ).then(resolve => console.log(resolve))
    
    f2();
}

main();

-----------

// main
// f2
// I am a promise
// f1
```


![image](./images/Peek%202023-12-05%2022-55.gif)

The flow is almost the same as above, but it is crucial to notice how the items from the job queue prioritize the items from the task queue. Also note that it doesn't even matter if the setTimeout has zero delay. It is always about the job queue that comes before the callback queue.

```js
function f1() {
 console.log('f1');
}

function f2() { 
    console.log('f2');
}

function f3() { 
    console.log('f3');
}

function main() {
  console.log('main');

  setTimeout(f1, 50);
  setTimeout(f3, 30);

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after f1 and f3! Really?')
  ).then(resolve => console.log(resolve));
    
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  f2();
}

main();

// main
// f2
// I am a Promise, right after f1 and f3! Really?
// I am a Promise after Promise!
// f3
// f1

