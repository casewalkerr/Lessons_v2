function sortAsc(array){
    if(!Array.isArray(array)){
        return null;
    }
    array.sort(function(a,b){
        return a-b;
    })
    return array;
}
// console.log(sortAsc([3,234,54,12354,5,56546]));
 let array = [3,234,54,12354,5,56546];
alert(sortAsc(array));

function sortDesc(array){
    if(!Array.isArray(array)){
        return null;
    }
    array.sort(function(a,b){
        return b-a;
    })
    return array;
}
// console.log(sortDesc([3,234,54,12354,5,56546]));
alert(sortDesc(array));