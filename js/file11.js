//import export
import add,{subtract, multiply} from "./cal.mjs"//default w/o bracket
//with bracket is not default
const result= add(4,5);
console.log(result);
const result1= subtract(9,2);
console.log(result1);
const result2= multiply(9,2);
console.log(result2);
// var is function scoped-share variable
// let is blocked scoped
// const is blocked scoped and cannot be reassigned

