const createCalculator = () => {
     let memory = 0;
    
    const add = num => {
        memory += num;
    }
    const decrease = num => {
     memory -= num;
    }   
    const reset =() => {
        memory = 0;
    }
    const getMemo = () => memory;
    
    return {
        add, decrease, reset, getMemo, 
    };
}
const calculator = createCalculator();
calculator.add(77);
console.log(calculator.getMemo());
export {createCalculator}
