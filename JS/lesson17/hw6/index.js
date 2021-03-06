 function calculator(a, b) {
    switch(this.operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return NaN;
    }
}


/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */
// ...your code here
function multiplier(a,b) {
    const mult = calculator.bind({operation: '*'})
    return mult(a,b);
}
/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */
// ...your code here
function summator(a,b) {
    const sum = calculator.bind({operation: '+'})
    return sum(a,b);
}
/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */
// ...your code here
function twice(a){
    const twicefunc =calculator.bind({operation:'*'},2);
    return twicefunc(a);
} 
export {multiplier, twice, summator}