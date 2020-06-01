
export const finishForm = () => {
    const form = document.querySelector('.login-form');
    const inputFirst = document.querySelector('input[type = "text"]')
    inputFirst.type = 'password'
    // inputFirst.setAttribute('type', 'password')
    const input = document.createElement('input');
    // input.setAttribute('type', "text")
    // input.setAttribute('name', 'login')
    input.type = 'text';
    input.name = 'login';
    form.prepend(input);
}

finishForm();