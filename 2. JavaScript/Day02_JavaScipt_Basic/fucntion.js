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
const x = ((a, b) => {
    return a + b
})(2, 4);

console.log(x)

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

//normal function
function add(a, b) {
    return a + b
}

//arrow function
const add = (a, b) => {
    return a + b
}

//arrow function with implicit return

const add = (a, b) => a + b

//arrow function with implicit return and no parameters

const add = () => 1 + 1

//arrow function with implicit return and one parameter

const add = a => a + 1
