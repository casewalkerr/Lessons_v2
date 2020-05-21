// input arr, func
// output array
// alg
// 1 copy array
// 2 iterare array
// 3 if calback conditon is ok add to array if not skip
// const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];
// function filterArrayElements(arr,calback) {
//     let filtered = [];
//     for(let i = 0; i < arr.length; i++){
//         let res = calback(arra[i], i, arr);
//         if(res) {
//             filtered(push(arr[i]))
//         }
//     }
//     return filtered;
// }

// let calback = (el) => el % 2 === 0;
// let res = filterArrayElements(numbers,calback);
// console.log(res);

// input arr, func
// output array
// alg
// 1 copy array
// 2 iterare array
// 3 call callback for every elem and  add result to array

function mapArrayElements(arr,callback) {
    let mapped = [];
    for(let i = 0; i < arr.length; i++){
                let res = callback(arr[i], i, arr);
                mapped.push(res);
            }
            return mapped;
}
const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];
let callback = (el) => 0;
let res = mapArrayElements(numbers,callback);
console.log(res);

const numbers1 = [1, 55343, 3, 4, 5, 100, 40, 44, -1, 55, 1234];

console.log(numbers1.sort((el1, el2) =>el1 - el2));

const text = ['test', 'aaa', 'ddd', 'zzz'];
console.log(text.sort((el, el2) => el2.localeCompare(el)));
//< 0 , el1 > el2
// === 0, el1 === el2
//< 0, el1 < el2