const transformToObject = array => {
    let obj = {};

    array.forEach(element => {
        obj[element] = element;
    });
    return obj;
}
console.log(transformToObject(['4s', 34, 'Mat']));