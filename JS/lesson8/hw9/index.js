// input: obj, arr;
// output: obj;
const pickProps = (obj, arr) =>{
  let newObj = {};
  arr.forEach(element => {
    newObj[element] = obj[element];
  });
  return newObj;
};
const obj = {
  a: 1,
  b: 3,
  c: 5,
};
console.log(pickProps(obj, ['a', 'b']));
