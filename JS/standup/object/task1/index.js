// input: Object, Str
// output: obj
function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
}
function addPropertyV2(userData, userId) {
    
    let obj = {id:userId};
    return Object.assign(userData, {userId})
}
function addPropertyV3(userData, userId) {
    
    return Object.assign({}, userData, obj)
}
function addPropertyV4(userData, { id: userId}) {
//    how to copy obj
    // let resObj = {...userData};
    // let resObj = Object.assign({}, userData)
    let resObj = {...userData, id:userId};
    return resObj;
}

let userData = {
    name: 'Andrey',
    city: 'Lviv',
    age:20
};
let userId = '1111';

console.log(userData);
console.log(addPropertyV4(userData,userId))

console.log(userData);

// let arr = [1, 5, 6];
// let res = [...arr,5, 10, 12];
// console.log(res);