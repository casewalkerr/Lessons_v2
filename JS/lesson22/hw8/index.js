const checkbox = document.querySelector('.task-status')
const funcCheckbox = (event) => {
    console.log(event.target.checked)
}
checkbox.addEventListener('change', funcCheckbox)