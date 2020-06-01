
// input:  arrays
// output: array of objects

// algo:
//1. setting property isAdmin for every user
//2. compare users id to adminids array elements
//2. if they coincide, add to user object property isAdmin:true
//3. if there are no coincides, thought isAdmin: false.

// function markAdmins1(users, adminIds) {
//     return users.map(user => {
//         let isAdmin = adminIds.includes(user.id);
//         //  user.isAdmin = isAdmin;
//         return res = { ...user, isAdmin };;
//     });

// }
const markAdmins = (users, adminIds) => {
    return users.map(user => {
        let isAdmin = adminIds.includes(user.id)
        return { isAdmin, ...user }
    })
}

// const markAdmins = (users, adminIds) => {
//     users.map( user => {let admin = adminIds.includes(user.id)})
// }


const adminIds = ['1', '3'];
const users = [
    { id: '1', name: 'Bob' },
    { id: '2', name: 'Tom' },
    { id: '3', name: 'Sam' },
    { id: '4', name: 'Tad' }
];
console.log(markAdmins(users, adminIds))