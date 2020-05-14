// input: obj;
// output: obj;
const user = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
}

// const copyObj ={...user};

const copyObj = obj => Object.assign({}, obj);
 

console.log(copyObj(user));
