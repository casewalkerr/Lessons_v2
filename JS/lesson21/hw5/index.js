

export const setButton = buttonText => {
    // const setB = document.querySelector('body')
    // return setB.innerHTML = '<button>button text</button>'
    return document.querySelector('body')
        .innerHTML = `<button>${buttonText}</button>`
}
setButton('ggwp')
