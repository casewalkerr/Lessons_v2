export const setButton = (buttonText) => {
    // const button = `<button>${buttonText}</button>`;
    // document.querySelector('body').innerHTML = button;
    const newButton = document.createElement('button');
    newButton.textContent = buttonText;
    document.querySelector('body').append(newButton)
}