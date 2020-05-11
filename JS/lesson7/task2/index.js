const sortDesc = numbers => {
    const copy = numbers.slice(); 
    return copy.sort((a,b) => b-a);
}
console.log(sortDesc([2,5,34,15,6,7]));