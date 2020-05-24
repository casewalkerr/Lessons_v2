export function defer(func,ms) {
    return function() {
        setTimeout(() => func.call(this, ...arguments), ms);
    }
}
const user = {
    name: 'Tom',
    SayHi() {
        console.log(`Hi, I'm ${this.name}`)
    }
}

const defferredHi = defer(user.SayHi.bind(user), 2000)
defferredHi();