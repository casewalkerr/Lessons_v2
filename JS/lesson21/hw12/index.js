

// const getSection = num => {
//     const getN = document.querySelector(`span[data-number="${num}"]`)
//     return getN.closest('div').dataset.section
// }

export const getSection = num => {
    return document.querySelector(`span[data-number="${num}"]`)
        .closest('div').dataset.section
}





// console.log(getSection(3));




































