export const mult = a => b => a * b;
export const twice = a => mult(a)(2);
// const res = twice(5)
// console.log(res)
export const triple = mult(3);
// console.log(triple(5))