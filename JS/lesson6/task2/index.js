const numbers = [23, 34, 43, 54, 65];
function getSum(numbers) {
    let sumOfNumbers = 0;
    if (!Array.isArray(numbers)){
        return null;
    }
    for(let i=0; i < numbers.length; i++){
        sumOfNumbers += numbers[i];
        console.log (numbers[i]);
    }console.log (sumOfNumbers);
    return sumOfNumbers;
}
const sumOfElem = getSum(numbers);
console.log(sumOfElem);
