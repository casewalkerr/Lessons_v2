
const handleCk = () => {
    if (event.target.classList.contains('list-item')) {
        console.log(event.target.textContent);
    }
};
document.querySelector('.List').addEventListener('click', handleCk)

