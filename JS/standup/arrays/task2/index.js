// function squareArray(arr){
//     if(!Array.isArray(arr)) {
//         return null;
//     }
//     let squareArray = [];
//     for(let i = 0; i < arr.length; i++){
//         squareArray.push(arr[i] * arr[i]);
//     }
//     return squareArray;
// }
// const arr = [23,43,56]
// console.log(squareArray(arr));
// good
// input: array of numbers
// output: array of numbers
function squareArray(arr) {
    if(!Array.isArray(arr)) return null;
    let res = [];
    for(let el of arr){
        res.push(el * el);  
    }
    return res;
}


// function squareArray2(arr) {
//     if(!Array.isArray(arr)) return null;
//     let res = [...arr];
//     // console.log("res:" + res);
//     for(let i = 0;i < res.length;i++){
//         // console.log("arr[i]:" + arr[i]);
//         res[i] = res[i] * res[i]; 
//         // console.log("res[i]:" + res[i]);
//     }
//     // console.log("res:" + res);
//     return res;
// }