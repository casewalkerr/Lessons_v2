const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emaliErrorElem = document.querySelector('.error-text_email')
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => value ? undefined : 'Required';
const isEmail = value => value.includes('@') ? undefined : 'Shold be an email';

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired],
}

const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(',');
}




const onEmailChange = event => {
    const errorText = validate('email', event.target.value)
    emaliErrorElem.textContent = errorText;
    // console.log(event.target.value)
    // event.target.value
}
const onPasswordChange = event => {
    const errorText = validate('password', event.target.value)
    passwordErrorElem.textContent = errorText;
}



emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);


const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();                   // отмена defaul
    const formData = [...new FormData(formElem)]
        .reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {});
    alert(JSON.stringify(formData));
}


formElem.addEventListener('submit', onFormSubmit)