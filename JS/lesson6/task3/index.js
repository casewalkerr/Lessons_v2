function getSpecialNumbers (m, n) {
    let getNumbers =[];
    for(let i = m; i <= n; i++){
        if(i % 3 === 0){
            getNumbers.push(i);
        }
    }
    return getNumbers;
}
const gets = getSpecialNumbers(23, 45);
console.log(gets);