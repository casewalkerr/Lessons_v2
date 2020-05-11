const getSpecialNumbers = array => array.filter(num => num % 3 === 0);

console.log(getSpecialNumbers([3, 5, 6, 4, 14, 56]));

// const getSpecialNumbers = numbers => {
//     let specialNumbers = [];
//     function checkIfSpecialNumber(num) {
//         if (num % 3 ===0 ) {
//             specialNumbers.push(num);
//         }
//     }
// //     return specialNumbers;
// // }
// const getSpecialNumbers = numbers => {
//         let specialNumbers = [];
//        numbers.forEach(num => {
//            if (num % 3 ===0 ){
//            specialNumbers.push(num);
//         }
//         });
//         return specialNumbers;
//     };
