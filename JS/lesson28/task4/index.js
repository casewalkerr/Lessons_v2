
// const add = value => value + 2;
// const square = value => value * value;
// const half = value => value / 2;

const compose = (...func) => value => {
    return func.reduce((acc, func) => func(acc), value)
}