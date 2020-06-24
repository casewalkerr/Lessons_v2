
const listElem = document.querySelector('.list');

const handleCk = (event) => {
    if (!event.target.classList.contains("list-item")) return;
    console.log(event.target.textContent);
}

listElem.addEventListener('click', handleCk)