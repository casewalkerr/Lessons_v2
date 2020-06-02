const buttonClick = document.querySelector('.search__btn')
const Input = document.querySelector('.search__input')
const funcButton = () => {
    console.log(Input.value)
}
buttonClick.addEventListener('click', funcButton)