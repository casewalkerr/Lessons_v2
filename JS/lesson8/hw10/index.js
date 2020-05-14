// input: obj;
// output: obj;

const getAdults = obj => { 
     let newObj = {}
     for (let key in obj) {
         if(obj[key] >= 18)
         newObj[key] = obj[key]; 
     }
     return newObj;  
  }
  const obj ={
    'John': 15,
    'Tom': 22,
    'Bob': 18,
  }
  console.log(getAdults(obj));