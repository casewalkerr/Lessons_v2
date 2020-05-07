// function reverseArray(arr){
//     if(!Array.isArray(arr)){
//         return null;
//     }
//     return arr.reverse();
// }
// console.log(reverseArray([34,4,222,5,34,56]));

function reverseArray(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    reverseA = [];
   for(let i =arr.length-1; i>0; i--){
       reverseA.push(arr[i]);
   }
    return reverseA;
}
console.log(reverseArray([34,4,222,5,34,56]));