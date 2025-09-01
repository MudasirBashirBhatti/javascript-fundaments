// Currying is a functional programming technique where:
// A function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
// The final function in the chain executes the logic only when all required arguments are received.

// todo: (Problem)=> we wanted to send email to any user but only when all required parameters are available else the function should not processed. this is the basic concept of currying

// functions using different ways
// ? way1 to define function
const sendEmail = (to) => {
    return (subject) => {
        return (body) => {
            console.log(`Hi ${to} we have send this mail for purpose ${subject} and we wanted to explain you that ${body}`);
        }
    }
}

// ? way2 to define function we can use any both are doing same
// const sendEmail = to => subject => body => console.log(`Hi ${to} we have send this mail for purpose ${subject} and we wanted to explain you that ${body}`);  



// calling method using different ways
// ?syntax 1
sendEmail('john@gmail.com')("describing info")('this is body text')


// ?syntax 2
let dev1Task = sendEmail(`"mudasir@gmail.com"`)  //first dev task is to finds and attach email with function
let dev2Task = dev1Task(`"this is subject"`) // second dev will attach subject for this email
dev2Task(`"this is body"`)

// ..............
// With currying, you can fix one of the arguments to create a more specific (specialized) function.
const multiply = a => b => a * b
const multiplyBy2 = multiply(2)
const multiplyBy3 = multiply(3)

console.log(multiplyBy2(6));  //print 12
console.log(multiplyBy3(6));  //print 18