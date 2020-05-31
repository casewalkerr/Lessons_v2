

const getTitleElement = () => {
    const titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return titleElem;
}
const getinputElement = () => {
    const inputElem = document.querySelector('input[type = "text"]');
    console.dir(inputElem);
    return inputElem;
}

export { getTitleElement, getinputElement }

getinputElement();
getTitleElement();