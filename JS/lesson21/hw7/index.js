
export const createButton = buttonText => {
    // const create = document.createElement('button')
    // create.textContent = buttonText;
    // return document.querySelector('body').append(create);
    const createB = document.createElement('button')
    createB.textContent = buttonText;
    return document.querySelector('body').append(createB);
}

createButton('war');