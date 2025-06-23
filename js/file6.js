//arrow function
// greet();  //hoisting
// function greet() {
//   console.log("Hello");
// }
//hoisting
// x=10
// console.log(x)
// var x

//hoisting
// x=10
// console.log(x)
// let x

// const greet = 10
// console.log(greet)

//hoisting does not work with arrow function
// const greet = () => {console.log("Hello")};
// greet()

// const add = (a,b) => {
//     console.log(a+b)
// }
// add(4,5)

// const add = (a,b) => {
//     return a+b
// }
// const result = add(4,5)
// console.log(result)

const add = (...args) => {
    // console.log(args[0])
    console.log(args)
}
add(4,5,6,7,8)