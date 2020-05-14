const pockProps = (obj, arr) => {
  let newObj = {};
  arr.forEach(element => {
    newObj[element] = obj[element];
  });
 return newObj;
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
}
console.log(pockProps(obj, ['a', 'c']));