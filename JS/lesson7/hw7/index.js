const filterNames = (arr, text) => {
     const filterAr = arr.filter(num => {
       return num.includes(text) && num.length > 5
    })
    return filterAr;
}

console.log(filterNames(['asbane', 'sssane', 'vaile', 'carane', 'void'], 'ne'));

