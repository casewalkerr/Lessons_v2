// input: obj;
// output: arr;
const user = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
}
// const getAdults = obj =>{
//     // { 'Tom': 17, 'John Doe': 19,} => [['Tom', 17], ['John Doe' 19,]]
//     const usersArray = Object.entries(obj);

//     // [['Tom', 17], ['John Doe' 19,]] =>[['John Doe' 19,]]

//     const filterUsers = usersArray.filter(item => item[1] >= 18);
    
//     // [['John Doe' 19,]] => ['John Doe']
//     const userNames = filterUsers.map(item => item[0]);
//     return userNames;
// }
const getAdults = obj =>Object.entries(obj)
    .filter(item => item[1] >= 18)
    .map(item => item[0]);

console.log(getAdults(user));

