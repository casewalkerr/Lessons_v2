'use strict';

function printMessage(age, city) {
    console.log(this)
    console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`)
}

let user = {
    name: "Alex",
    email: "gmail.com"

}
// printMessage(50, "Kyiv")

// let binndedPrintMessage = printMessage.bind(user);
// binndedPrintMessage(50, "Kyiv")

// input: func obj 
// output func 
function myBind(func, context) {
    return func.bind(context);
}

// let binndedPrintMessage = myBind(printMessage, user);
// binndedPrintMessage(50, "Kyiv")

// input: func obj 
// output func 
function myBind2(func, context) {
    // 1 add func into context
    // 2 call func and return result
    return function (...args) {
        let copyContext = Object.assign({}, context)
        copyContext.tempFunc = func;
        console.log(context)
        console.log(args)
        return copyContext.tempFunc(...args);
    }
}
// let binndedPrintMessage = myBind2(printMessage, user)
// // console.log(binndedPrintMessage)
// binndedPrintMessage(50, 'Kyiv')

function myBindWithApply(func, context) {
    // 1 add func into context
    // 2 call func and return result
    return function (...args) {

        let funcResult = func.apply(context.args);
        return funcResult;
    }
}

let binndedPrintMessage = myBindWithApply(printMessage, user)
// console.log(binndedPrintMessage)
binndedPrintMessage(50, 'Kyiv')