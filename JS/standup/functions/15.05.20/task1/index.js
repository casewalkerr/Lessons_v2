// input: Number;
// output:undefined;
// 1. learn requirement & create algo
// 2. create prototype solution
// 3. refactoring & tisting
// 4. final solution

// algo
// 1. iterate from 1 to n
// 2. write func that checks number is prime
// 3. of num is prime  print it

// input: Number;
// output:boolean;
// algo
// 1. iterate from 1 to num
// 2. if num % i !==0 -false
// 3. 
function isPrime(num){
    for(let i = 2; i < num; i++){
        // console.log("check for: " + i);
        if(num % i === 0){
            // console.log("if is called for: " + i);
            return false;
        }
    }
    // console.log("loop is finished: " + i);
       return true;
}


function getPrimes (n) {
    for (let i= 1; i <= n; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}