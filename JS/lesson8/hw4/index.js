const addPropertyV1 = (userData, userld) => {
  userData.id = userld;
  return userData;
}

const addPropertyV2 = (userData, userld) => {
  return Object.assign(userData, {id: userld});
}

const addPropertyV3 = (userData, userld) => {
  return Object.assign({}, userData, {id: userld});
  
}

const addPropertyV4 = (userData, userld) => {
  let copyObj = {...userData};
  copyObj.id = userld;
  return copyObj;
}

const user = {
  name: 'Sam',
}
console.log(addPropertyV3(user, '23445'));