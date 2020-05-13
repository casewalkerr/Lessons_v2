const getKeys = obj => {
  Object.keys(obj).forEach(element => {
    console.log(element)});
}
const boy = {
  name: 'Tom',
  age: 10,
}
getKeys(boy);
