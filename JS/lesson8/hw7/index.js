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

// const compareObjects = (obj1, obj2) => {
//   if (obj1 === obj2) return true;
//   if (Object.keys(obj1).length != Object.keys(obj2).length) return false;

//   for (let key in obj1) {
//     if (obj1[key] != obj2[key] || obj1.key != obj2.key) return false;
//   }
//   return true;
// };