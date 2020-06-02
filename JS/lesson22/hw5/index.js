const button = document.querySelector('.single-use-btn');
const funcButton = () => {
    console.log('clicked')
    button.removeEventListener('click', funcButton)
}
button.addEventListener('click', funcButton)