

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventslistElem = document.querySelector('.events-list')


const logTarget = (text, color) => {
    eventslistElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green')

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey')

divElem.addEventListener('click', logGreyDiv, { capture: true });
divElem.addEventListener('click', logGreenDiv);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

const clear = document.querySelector('.clear-btn')
const clearBtn = () => {
    eventslistElem.innerHTML = '';
}
clear.addEventListener('click', clearBtn);

const attachHandlers = document.querySelector('.attach-handlers-btn')

const attach = () => {
    divElem.addEventListener('click', logGreyDiv, { capture: true })
    divElem.addEventListener('click', logGreenDiv)

    spanElem.addEventListener('click', logGreySpan, true)
    spanElem.addEventListener('click', logGreenSpan)

    pElem.addEventListener('click', logGreyP, true)
    pElem.addEventListener('click', logGreenP)
}
attachHandlers.addEventListener('click', attach)

const removeHandlers = document.querySelector('.remove-handlers-btn')

const removeH = () => {
    divElem.removeEventListener('click', logGreyDiv)
    divElem.removeEventListener('click', logGreenDiv)

    spanElem.removeEventListener('click', logGreySpan)
    spanElem.removeEventListener('click', logGreenSpan)

    pElem.removeEventListener('click', logGreyP)
    pElem.removeEventListener('click', logGreenP)
}
removeHandlers.addEventListener('click', removeH)
