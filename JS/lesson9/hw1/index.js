// input: obj;
// output: arr;
// 1 обьект преобразовать в массивы массивов
// 2 добавить id 
// 3 отсортировать по возрасту
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
const getCustomersList = obj => 
    Object.entries(obj).map(([id, value]) => ({id, ...value})).
    sort((a,b) => a.age -b.age);
    
    console.log(getCustomersList(customers));