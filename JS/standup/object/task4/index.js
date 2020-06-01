
//  algo
//  1 convert the object to an array of arrays
//  2 map entries to the array of object
//  3 sort the array and return
//  input object
//  output Array
function getCustomersList(obj) {
    return Object.entries(obj)
        .map(([id, object]) => ({ ...object, id }))
        .sort((a, b) => a.age - b.age);

    // console.log(entries);

    // entries.map(entry => {
    //     let id = entry[0];
    //     let object = entry[1];
    //     console.log(id);
    //     console.log(object);
    //     let res = { ...object, id };
    //     // let res = { ...object, [id]: id };
    //     console.log(res)
    //     return res;
    // })
}

const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
};

console.log(getCustomersList(customers));