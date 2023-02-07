//1. Console Commands 
// var greeting = "hello"
// console.log("hello world", 123, greeting, [1, 2, 3, 4], { a: 1, b: 2 })
// console.table({ a: 1, b: 2 })
// console.error("This is some error")
// console.warn("This is a warning")
// console.info("This is informational message")
// console.time('Hello')
// console.log("Basic Program to find the time")
// console.timeEnd('Hello')

// for (var i = 0; i < 5; i++) {
//     console.count("Counting")
// }
// console.assert(1 === 1, "The expression is false", "Pass");
// console.dir({ name: "John", age: 30 });

// console.group("Group 1");
// console.log("Message 1");
// console.log("Message 2");
// console.groupEnd();

// console.groupCollapsed("Group 2");
// console.log("Message 1");
// console.log("Message 2");
// console.groupEnd();


//2. Variables
var num = 10
let num2 = 20
const num3 = 30
console.log(num, num2, num3)


//3. Data Types

//Primitive Data Types
//String
const name = "John Doe"
//Number
const age = 45
//Boolean
const hasKids = true
//Null
const car = null
//Undefined
let test
//Symbol
const sym = Symbol()


//Reference Data Types
//Array
const hobbies = ["movies", "music"]
//Object Literal
const address = {
    city: "Boston",
    state: "MA"
}
//Date
const today = new Date()

//4. Operators

//Arithmetic Operators
let val
val = 5 + 5
val = 5 - 5
val = 5 * 5
val = 5 / 5
val = 5 % 5
val = 5 ** 5

//Assignment Operators
val = 5
val += 5
val -= 5
val *= 5
val /= 5
val %= 5
val **= 5

//Comparison Operators
val = 5 == 5
val = 5 == 6
val = 5 != 6
val = 5 > 6
val = 5 < 6
val = 5 >= 6
val = 5 <= 6

//Logical Operators
val = 5 > 6 && 5 > 4
val = 5 > 6 || 5 > 4
val = !(5 > 6 || 5 > 4)

//Type Operators
val = typeof 5
val = typeof "Hello"
val = typeof true
val = typeof undefined
val = typeof null
val = typeof Symbol()
val = typeof {}
val = typeof []

//5. Conditionals

//If Else
if (5 > 6) {
    console.log("5 is greater than 6")
} else {
    console.log("5 is not greater than 6")
}

//If Else If
if (5 > 6) {
    console.log("5 is greater than 6")
} else if (5 > 4) {
    console.log("5 is greater than 4")
} else {
    console.log("5 is not greater than 6")
}

//Ternary Operator
const id = 100
console.log(id === 100 ? "Correct" : "Incorrect")

//Switch
const color = "red"
switch (color) {
    case "red":
        console.log("Color is red")
        break
    case "blue":
        console.log("Color is blue")
        break
    default:
        console.log("Color is not red or blue")
        break
}


//6. Loops

//For Loop
for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`)
}

//While Loop
let i = 0
while (i < 10) {
    console.log(`While Loop Number: ${i}`)
    i++
}

//Do While Loop
let j = 0
do {
    console.log(`Do While Loop Number: ${j}`)
    j++
} while (j < 10)

//Loop Through Array
const cars = ["Ford", "Chevy", "Honda", "Toyota"]
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

//For Each
cars.forEach(function (car, index, array) {
    console.log(`${index} : ${car}`)
    console.log(array)
})

//Map
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Karen" },
    { id: 4, name: "Steve" }
]

const ids = users.map(function (user) {
    return user.id
})

console.log(ids)

//For In Loop
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 40
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`)
}


//7. Functions

//Function Declaration
function greet(firstName = "John", lastName = "Doe") {
    // if (typeof firstName === "undefined") { firstName = "John" }
    // if (typeof lastName === "undefined") { lastName = "Doe" }
    // console.log("Hello")
    return "Hello " + firstName + " " + lastName
}

console.log(greet("Steve", "Smith"))

//Function Expressions
const square = function (x = 3) {
    return x * x
}

console.log(square())

    //Immediately Invocable Function Expressions - IIFEs
    (function () {
        console.log("IIFE Ran...")
    })()

    (function (name) {
        console.log("Hello " + name)
    })("Brad")

//Property Methods
const todo = {
    add: function () {
        console.log("Add todo...")
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function () {
    console.log("Delete todo...")
}

todo.add()
todo.edit(22)
todo.delete()


//8. Arrays

//Create Array
const numbers = [43, 56, 33, 23, 44, 36, 5]
const numbers2 = new Array(22, 45, 33, 76, 54)
const fruit = ["Apple", "Banana", "Orange", "Pear"]
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()]


//Get Array Length
console.log(numbers.length)

//Check if is Array
console.log(Array.isArray(numbers))

//Get Single Value
console.log(numbers[3])

//Insert into Array
numbers[2] = 100

//Find Index of Value
console.log(numbers.indexOf(36))

//Mutating Arrays
//Add on to end
numbers.push(250)
//Add on to front
numbers.unshift(120)
//Take off from end
numbers.pop()
//Take off from front
numbers.shift()
//Splice values
numbers.splice(1, 3)
//Reverse
numbers.reverse()

//Concatenate array
val = numbers.concat(numbers2)

//Sorting Arrays
val = fruit.sort()

//Use the "compare function"
val = numbers.sort(function (x, y) {
    return x - y
})

//Reverse sort
val = numbers.sort(function (x, y) {
    return y - x
})

//Find
function under50(num) {
    return num < 50
}

console.log(numbers.find(under50))



//9. Objects

//10. Classes

//11. Modules

//12. Promises

//13. Async/Await

//14. Fetch

//15. DOM

//16. Events

//17. Local Storage
localStorage.setItem('key', 'value');
let value = localStorage.getItem('key');
localStorage.removeItem('key');
// Store an array in local storage
localStorage.setItem('arrayKey', JSON.stringify([1, 2, 3]));

// Retrieve and parse the array from local storage
let array = JSON.parse(localStorage.getItem('arrayKey'));

//18. JSON
