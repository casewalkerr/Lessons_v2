const setButton = (buttonText) => {
    // const button = `<button>${buttonText}</button>`;
    // document.querySelector('body').innerHTML = button;
    document.createElement('button');
    button.textContent = buttonText;
    document.querySelector('body').append(button)
}