// calc(3).add(2).mult(2).div(2).substract(4).result(); // 3

export const calc = initValue => {
    let result = initValue;
    const calculator = {
        add(value) {
            result += value;
            return this;
        },
        mult(value) {
            result *= value;
            return this;
        }, substract(value) {
            result -= value;
            return this;
        },
        div(value) {
            result /= value;
            return this;
        },
        result() {
            return result
        }
    }
    return calculator;
}
// const res = calc(4).add(3).div(4).result()
// console.log(res)