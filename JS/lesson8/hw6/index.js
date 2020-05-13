const mergeObjectsV1 = (obj1, obj2) =>{
  let concatObj = Object.assign(obj1, obj2)
  return concatObj;
}

const mergeObjectsV2 = (obj1, obj2) =>{
  let concatObj = Object.assign(obj2, obj1);
  return concatObj;
}

const mergeObjectsV3 = (obj1, obj2) =>{
  let concatObj = {...obj1, ...obj2}
  return concatObj;
}

const mergeObjectsV4 = (obj1, obj2) =>{
  let concatObj = {...obj2, ...obj1}
  return concatObj;
}

const obj1 = {
  name: 'Tom',
  age: 15
};
const obj2 = {
  name: 'Bob',
  student: false
};
console.log(mergeObjectsV4(obj1, obj2));
