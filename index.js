// import { sum, sub } from './calc.js';
// import * as a from "./calc.js";
import name from "./whois.js";

// console.log("The Sum is", a);
// console.log('The Sub is', sub(5,3));

const employee = {
    id: '007',
    name: "James",
    dept: {
        id: "D001",
        name: "Spy",
        address: {
            street: "30 Wellington Square",
            city: "Chelsea",
        },
    },
};
// console.log(employee);

const { dept: { address: { street } } } = employee;
// console.log(street);
console.log(12121);
console.log("%s is %d years old.", "John", 29)
console.time()
let devices = [
    {
        name: 'iPhone',
        brand: 'Apple'
    },
    {
        name: 'Galaxy',
        brand: 'Samsung'
    }
    ]
console.table(devices.sort())
console.log("%c This is yellow text on a blue background.", "color:yellow; background-color:blue")

const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'address': {
        street: "30 Wellington Square",
        city: "Chelsea",
    },
}

const clone = {...user} // Output, {name: "Alex", address: "15th Park Avenue", age: 43}

console.log(clone); // Output, false

const users = { 
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

const updated = {
    ...users, 
    department: {
        ...users.department,
        'number': 7
    }
}

const {age, ...rest} = user;
console.log(age, rest);
console.log(updated);
console.log(name);

function printMe() {
    console.log('print me');
    }
    
    function test() {
        console.log('test');
    }
    
setTimeout(printMe, 500);
test();

function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

// 1. Create a Promise to fetch the water
let promiseResolve = new Promise(function (resolve, reject) {
    // Pretend a delay of 2 sec to fetch it!
    setTimeout(function () {
      // Fetched the water. Let's resolve the promise
    resolve("Hurray! Fetched the Water.");
    }, 2000);
});

  // 2. Function to Set up the handler to handle a promise result.
  // It is to inform the grandparents when the result is available.
const grandParentsCookingOil = () => {
    // The handler function to handle the resolved promise
    promiseResolve.then(function (result) {
      // Fetched the water. Now grandparents can start the cooking
    console.log(`cooking rice with the ${result}`);
    });
};

  // 3. Calling the function to activate the set up.
grandParentsCookingOil();


// 1. Create the promise
let promiseReject = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // Reject it as the disaster happend.
        reject(
        new Error(
            "Jack fell down and broke his crown. And Jill came tumbling after."
        )
        );
    }, 2000);
});

  // 2. Inform grandparents
  // but this time we are using the .catch
const grandParentsCookingRice = () => {
    promiseReject.catch(function (error) {
        console.log(`OMG!!! ${error.message}`);
    });
};

  // 3. Call the function
grandParentsCookingRice();


// It resolves with the value red after 1 second 
const red = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('red');
    }, 1000);
});

// It resolves with the value green after 3 seconds
const green = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('green');
    }, 3000);
});

// It resolves with the value blue after 5 seconds
const blue = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('blue');
    }, 5000);
});


const testAllSettled = async () => {
    const colors = await Promise.allSettled([red, green, blue]);
    console.log(colors);
    colors.forEach(color => {
        console.log(color);
    });
}

testAllSettled();