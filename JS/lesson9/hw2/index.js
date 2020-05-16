// input: obj;
// output: arr;
//    1 обьект преобразить в массив со значениями
//    2 массив сделать плоским
//    3 список сделать массивом
 const rooms = {
    room1:[
        {name: 'room1 name1'},
        {name: 'room1 name2'},
        {name: 'room1 name3'},
        {name: 'room1 name4'},
    ],
    room2:[
        {name: 'room2 name1'}, 
    ],
    room3:[
        {name: 'room3 name1'},
        {name: 'room3 name2'},
        {name: 'room3 name3'},
    ],
};

const getPeople = obj =>
    Object.values(obj).flat().map((elem) => (elem.name))

console.log(getPeople(rooms));
