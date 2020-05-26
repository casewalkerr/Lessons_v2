// input: Object, obj
// output: obj
function mergeObjectV1(obj1, obj2) {
    
    return Object.assign(obj1, obj2)
}
function addPropertyV2(obj1, obj2) {
    
    return Object.assign(obj2, obj1)
}
function addPropertyV3(obj1, obj2) {
    let resObj = {...obj1, ...obj2}
    return resObj;
}
function addPropertyV4(userData, { id: userId}) {
    let resObj = {...obj2, ...obj1}
    return resObj;
}

let obj1 = {
    name: 'Andrey',
    phone: '5454',
    price: 20011,
    age:20
};
let obj2 = {
    name: 'Denis',
    city: 'Lviv',
    age:20
};



console.log(addPropertyV4(obj1,obj2))



// let arr = [1, 5, 6];
// let res = [...arr,5, 10, 12];
// console.log(res);