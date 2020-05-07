function increaseEvenEl(arr,delta){
    if (!Array.isArray(arr)){
        return null;
    }
    let increaseEven = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            increaseEven.push(arr[i] + delta )
        }else increaseEven.push(arr[i]);
    } 
    return increaseEven;
   
}
console.log(increaseEvenEl([23,2,34,44,5], 34));