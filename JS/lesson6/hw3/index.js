function checkSum(arr) {
    if(!Array.isArray(arr)){
        return null;
    }
    let checkSum = 0;
    for (let i = 0; i < arr.length;i++){
        checkSum += arr[i];
    }
    if(checkSum >100){
        return true;
    } else {
        return false;
    }
}
console.log(checkSum([20,2,7]));