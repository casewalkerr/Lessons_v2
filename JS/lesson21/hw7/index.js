
export const createButton = buttonText => {
    // const create = document.createElement('button')
    // create.textContent = buttonText;
    // return document.querySelector('body').append(create);
    const create = document.createElement('button')
        .textContent = buttonText;
    return document.querySelector('body').append(create);
}

createButton('war');