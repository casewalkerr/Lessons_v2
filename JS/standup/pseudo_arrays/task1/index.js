// // DEMO
// let arr = [5, 6, 7, 10]
// console.log(...arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// function sum (a, b, ...args) {
//     console.log(a);
//     console.log(b);
//     console.log(args);
// }
// sum(40, 30, 32, 'ddff', 'hello');
// // TASK
// // input: Number
// // output: number
// function multiply (...numbers) {
//   return numbers.reduce((acc, el) => acc * el);
// }

function multiply() {
    let args = arguments;
    console.log(args); 
  return [...args].reduce((acc, el) => acc * el);
}

