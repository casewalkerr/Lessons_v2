
const handleCk = (event) => {
    if (event.target.classList.contains('list-item')) {
        console.log(event.target.textContent);
    }
};
document.querySelector('.List').addEventListener('click', handleCk)

const listItemElem = document.querySelector('.list');

