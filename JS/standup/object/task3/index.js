// input: Array, Array
// output:obj
// algo:
// iterate keskList
// get value by index & put to the object
// function buildObjectDemo(keysList,valuesList) {
//     keysList.reduce((acc, key, index) => {
//         console.log('acc', acc)

//         console.log('index' + index);
//         console.log('key' + index);
//         let value = valuesList[index];
//         console.log('key' + key)
//         console.log('value' + value)
//         let obj = Object.assign(acc, {[key]:value})
//         console.log('obj',  obj);
//         console.log();
//         return obj;
//     },{});
// }

// let keys = ['name', 'city,', 'price']
// let values = ['Denis', 'Lviv', 300]
// console.log(buildObject(keys,values))

      function buildObject(keysList, valuesList) {
        return keysList.reduce((acc, key, index) => {
            return { ...acc, [key]: valuesList[index] };
        }, {});
    };

let keys = ['name', 'city,', 'price']
let values = ['Denis', 'Lviv', 300]
console.log(buildObject(keys,values));