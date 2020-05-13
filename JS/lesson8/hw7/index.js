const compareObjects = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
const obj1 = {
  name: 'Tom',
  age: 17,
}
const obj2 = {
  name: 'Bob',
  age: 17,
}
const obj3 = {
  name: 'Tom',
  age: 17,
}

console.log(compareObjects(obj1, obj3));