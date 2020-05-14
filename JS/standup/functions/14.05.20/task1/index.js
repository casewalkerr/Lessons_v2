/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */

function getSenseOfLife () {
    return 42;
}

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */
// input: Number;
// output:Number;

function getSquared (num){
    return num * num;
}

/* ф-ция sum должна принимать два числа и вернуть их сумму */
// ... code here
 // input: Number;
// output:Number;

function sum (a, b){
    return a + b;
}
/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */
// input: Number;
// output:undefined;

function printAge (num){
    console.log('I am' + num + '  years old');
}

/* ======> Arrow functions <======= */
// input: Number, number;
// output:number;

let mult = (a, b) =>  a * b;


/* ф-ция mult должна принимать два числа и вернуть их произведение */
// ... code here

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */

// let square = (num) =>{
//     return num * num;
// }
// input: Number,number;
// output:number;

let square = num => num * num;

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */
// input: -
// output:number;

//  let getMagicNumber = () => {
//      return 17;
//  }
 let getMagicNumber = () => 17;
