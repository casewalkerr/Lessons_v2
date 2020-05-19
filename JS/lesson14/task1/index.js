// 'use strict';

let massage = 'Just learn it';
export const sendMessage = (name) =>{
    const sender = 'Gromcode';
    console.log(`${name}, ${massage}! Your ${sender}`);
}
sendMessage('Ann');

const setMessage = text => {
    massage = text;
}
setMessage('Good job');
sendMessage('Ann');

// another.js
// import {sendMessage} from 'index.js'
// let massage = 'Bye'; при имторте значение переменных будет взято из экспортируемого
// sendMessage('Bob'); файла, не тех что мы обьявим в имортируемом файле  