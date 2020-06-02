const input = document.querySelector('.text-input')
const funcInput = () => {
    console.log(event.target.value)
}
input.addEventListener('change', funcInput)