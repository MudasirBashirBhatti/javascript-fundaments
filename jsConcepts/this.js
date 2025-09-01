'use strict'
//? ......................... this keyword in js ...................
console.log("........... this keyword in js ...........");

// 1. "this" always refers to global object. that global object is different according to the environment for browser it will be "window object" for node it will be "global". for smart watch or any other platform on js is running it will be different.

// 2. "this" keyword works differently in "strict" mode and non strict mode

// 3. at any time or place of code you writing the value of "this" keyword is undefined or null this will be replaced with the global object (!!Only in non strict mode)

// 4. the value of "this" keyword depends on how the function called. very important statement
// 5. this inside DOM elements => reference to htmlElement

console.log('1. global this**', this);  //(browser-->window, node-->global || {})

function abc(param) {
    // the value depends on strict/non strict mode try to switch and see the difference
    console.log(`2. this in function ${param}**`, this);
}
abc('withoutRef')  //undefined
//window.abc('withRef')  //again result will be window object

// 4. this inside object's methods
const numbers = {
    num1: 3,
    num2: 4,
    avg: function () {  //(pro tip)function inside object called method 
        console.log(`this inside the method of an object ${this}`)  //the value of this here is original object
        console.log((this.num1 + this.num2) / 2)
    }
}

numbers.avg()

// ✅ Rule of Thumb:
// Always ask yourself: "Who is calling the function?"
// That "who" is what this will refer to.

// ?........................ concepts of apply(), call() and bind() ......................

console.log("............ concepts of apply(), call() and bind() ............");

// *problem: we have two students but one has method while other don't have is it possible to greet that second student

const student1 = {
    name: "Mudasir",
    greet: function () {
        console.log(`Hi ${this.name}`);
    }
}

const student2 = {
    name: "Mubashir",
}

student1.greet.call(student2) //the value of this refers to student2

//1. the value of this can be modified using call() apply() and bind() methods
//2. understanding of this is not complete if you don't understand call(), apply() and bind() so learn that also

// ?........................ this inside arrow functions ......................

//arrow function don't have their own this. they don't have consept of this
// 1. in arrow functions the value of this is its !!enclosing lexical context!! --> where it is lexically present means if it is present inside another function and call here this inside arrow function the this will refer to outer function means consider this is present in outer function

const data = {
    a: 10,
    x: () => {
        console.log(this);  //here this will behave not like it is in function but like it is in global space
    }
}

data.x() //it will print global object because at the end data object is in the global scope

//2. another example to sharpen understanding
const obj = {
    number: 1032,
    y: function () {
        const z = () => {
            console.log(this);
        }
        z()
    }

}

obj.y() //guess the output and think about "enclosing lexical context"