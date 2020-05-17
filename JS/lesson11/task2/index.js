// input: arr obj;
// output: arr;
// 1 проверить массив на массив
// 2 отсортировать массив по имени и по возрастанию сравнить строки методомlocalCompare
// 3 отортировать массив по возр и убивы если у isAsc = true or false

contacts = [
    {
        name: 'Tom',
        phoneNumber: '666-66-66',
    },
    {
        name: 'John',
        phoneNumber: '444-33-66',
    },
    {
        name: 'Case',
        phoneNumber: '666-66-66',
    },
    {
        name: 'James',
        phoneNumber: '342-22-66',
    },
    {
        name: 'Dan',
        phoneNumber: '666-43-66',
    },
]

const sortContacts = (arr, isAsc = true) => {
    if(!Array.isArray(arr)) return null;
    return arr.sort((a,b)=> isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)); 
}
 


console.log(sortContacts(contacts, false));










// String.fromCodePoint(65); // 'A'
// 'Ann'.charCodeAt(0);     // 'A'