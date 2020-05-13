const addPropertyV1 = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

const addPropertyV2 = (obj, key, value) => {
  return Object.assign(obj, {[key]: value})
}

const addPropertyV3 = (obj, key, value) => {
  return Object.assign({}, obj, {[key]: value})
}

const addPropertyV4 = (obj, key, value) => {
  let copyObj = {...obj};
  copyObj[key] = value;
  return copyObj;
}

const num = {
  value: 777
}
console.log(addPropertyV4(num, 'money', 'USD'));