// начальный массив
const numbersList = [1, 2, 3, 4, 5];

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */



/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достаньте последний элемент массива и поместите его в переменную lastNumber
// выведите эту переменную в консоль
console.log("before" + numbersList)
let res1 = numbersList.pop();
console.log(res1);
console.log("afrter" + numbersList)

/* push - добавит элемент в конец массива */

// c помощью метода push добавьте число 6 в конец массива
// выведите numbersList в консоль

console.log("before" + numbersList)

let res3 = numbersList.push(11);

console.log(res3);
console.log("afrter" + numbersList)


/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достаньте первый элемент массива и поместите его в переменную firstNumber
// выведите эту переменную в консоль

console.log("before" + numbersList)
let res4 = numbersList.shift(1);

console.log(res4);
console.log("afrter" + numbersList);


/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавьте число 0 в начало массива
// выведите numbersList в консоль

console.log("before" + numbersList)
let res5 = numbersList.unshift(100);

console.log(res5);
console.log("afrter" + numbersList);



/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */


/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* элементы массива newArr - это результат вызова callback для каждого элемента arr */
/* newArr[i] = callback(arr[i]) */

// c помощью метода map создайте новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведите squaredNumbers в консоль
const numbersList1 = [1, 2, 3, 4, 5];
console.log("before" + numbersList1)


const squaredNumbers = numbersList1.map((el) => el *el);
console.log("after" + squaredNumbers);



/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true */
/* callback(arr[i]) === true -> элемент будет добавлен в финальный массив  */
/* callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив  */

// c помощью метода filter создайте новый массив evenNumbers, в котором только четные числа из numbersList
// выведите evenNumbers в консоль


console.log("before filter" + squaredNumbers)
// let callback = function() {
//     if (el > 100) {
//         return true;
//     } else
//         return false;
// }

const filtered = squaredNumbers.filter((el, index, array) => {
    console.log(index);
    console.log(array);
    return el % 2 === 0;
});
console.log("before filter: " + squaredNumbers);
console.log("after filter: " + filtered)



/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* если callback(arr[i]) вернет true, то filter прекратит поиск и вернет этот элемент */

// c помощью метода find найдите первое нечетное число в numbersList и выведите его в консоль

const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];
 const  res = numbers.find((el) => el > 200);
//   numbers.find((el) => el % 2 == 0);
console.log(res);

// foreach 
let sum = 0;
console.log(numbers.forEach(el => sum += el));
console.log(sum);

// reduce
console.log('Before reduce1');

 let res10 =numbers.reduce((acc, el, index)=> {
    console.log('step '+ index + 'acc is: ' + acc);
    return acc += el;  
}, 0);
console.log(res10);
console.log("After reduce2" );
console.log('Before reduce2' );

console.log(numbers.reduce((acc, el,)=> {
    if(el % 2 ===0)
     acc.push(el);  
     return acc;
}, []));

console.log("After reduce2");
