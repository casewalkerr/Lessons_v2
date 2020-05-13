const buildObject = (keysList, valuesList) => {
  return keysList.reduce((acc, key, index) => 
  ({...acc, [key]: valuesList[index]}), {})
}

// const buildObject = (keysList, valuesList) => {
//   return Object.assign(...keysList.map((a,b) => ({[a]: valuesList[b]})))
// }

// const buildObject = (keysList, valuesList) => {
//   return keysList.reduce((acc, key, index) => 
//   (acc[key] = valuesList[index], acc ), {})
// }
// const buildObject = (keysList, valuesList) => {
//   let sumObj = {};
//   for( let i = 0; i < keysList.length; i++){
//     sumObj[keysList[i]] = valuesList[i];
//   }return sumObj;
// }

const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', '34'];
console.log(buildObject(keys, values));
