// asyncSum(asyncNum1, asyncNum2, ...)
const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        resolve(value)
    }, delay)
})
const asyncNum1 = getValueWithDelay(45, 1000)
const asyncNum2 = getValueWithDelay(3, 3000)
const asyncNum3 = getValueWithDelay(34, 4000)

const getSum = numbers =>
    numbers
        .filter(value => !isNaN(value))
        .reduce((acc, num) => acc + Number(num), 0);
const asyncSum = (...asyncNumbers) => {
    return Promise.alld(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Can\'t calculate')))
}

asyncSum(asyncNum1, asyncNum2, asyncNum3)
    .then(result => console.log(result));