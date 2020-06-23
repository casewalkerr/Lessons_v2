const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const emailErrorText = document.querySelector('.error-text_email');
const passwordErrorText = document.querySelector('.error-text_password');

const formElem = document.querySelector('form')

// validate
//  handle Submit: gather form data, create object, show alert 
// 

const validateEmali = () => {
    console.log('validateEmail')
}

const validatePassword = () => {
    console.log('validatePassword')
}

emailInput.addEventListener('input', validateEmali)
passwordInput.addEventListener('input', validatePassword)
const handleSubmit = (event) => {
    event.preventDefault();
    // const formData = new FormData(formElem);
    // const formObj = Object > fromEntries(formData)
    alert(JSON.stringify(Object.fromEntries(new FormData(formElem))))
    console.log(event);
}

formElem.addEventListener('submit', handleSubmit)

