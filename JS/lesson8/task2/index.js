const concatProps = Obj => {
    const arr = [];
    for (const key in Obj) {
        arr.push(Obj[key]);
    }
    return arr;
}
const user = {
    name: 'Nod',
    age: 22,
}
console.log(concatProps(user));