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