let memory = 0;
function add(num){
    memory += num;
}
function decrease (num) {
    memory -= num;
}
function reset() {
    memory = 0;
}
function getMemo (){
    return memory;
}

export{add, decrease, reset,getMemo};