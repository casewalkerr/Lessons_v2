const flatArray = arr => {
    const flatArray = arr
    .reduce((acc, elem) =>{
        return acc.concat(elem);
    }, []);
    return flatArray;
}
console.log(flatArray([[3,4,], 3, [16,5]]));

// const flatArray = arr => arr
//     .flat();
