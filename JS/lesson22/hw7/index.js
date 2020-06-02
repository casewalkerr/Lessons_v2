const input = document.querySelector('.text-input')
const funcInput = (event) => {
    console.log(event.target.value)
}
input.addEventListener('change', funcInput)