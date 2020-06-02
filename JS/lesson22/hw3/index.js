const checkboxX = document.querySelector('.task-status')
const checkboxfunc = () => {
    console.log(checkboxX.checked)
}

checkboxX.addEventListener('change', checkboxfunc)