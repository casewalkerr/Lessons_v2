// input: obj;
// output: arr;
const customers = {
    'customer-id-1':{
        name: 'William',
        age: 54,
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17,
    },
};
const getPeople = obj => 
    Object.entries(obj).map(([id, value])=> ({id,...value}))
    .sort((a, b) => a.age -b.age);
    
    console.log(getCustomersList(customers));