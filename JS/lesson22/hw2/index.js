const inputG = document.querySelector('.text-input');
const inputF = () => {
    console.log(inputG.value);
}
inputG.addEventListener('change', inputF)