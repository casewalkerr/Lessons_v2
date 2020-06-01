
// const manageClasses = () => {
//     const classOne = document.querySelector('.one').classList.add('selected');
//     const classTwo = document.querySelector('.two').classList.remove('selected');
//     const classThree = document.querySelector('.three').classList.toggle('three_done');
//     const classFour = document.querySelector('.four')
//     if (classFour.classList.contains('some-class')) {
//         classFour.classList.add('another-class')
//     }
// }
export const manageClasses = () => {
    document.querySelector('.one').classList.add('selected');
    document.querySelector('.two').classList.remove('selected');
    document.querySelector('.three').classList.toggle('three_done');

    if (document.querySelector('.four').classList.contains('some-class')) {
        document.querySelector('.four').classList.add('another-class')
    }
}
// manageClasse();