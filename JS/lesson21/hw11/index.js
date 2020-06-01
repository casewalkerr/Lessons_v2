
const squaredNumbers = () => {
    const numbers = document.querySelectorAll('.number');
    for (let el of numbers) {
        const sqr = el.dataset.number ** 2;
        el.dataset.squaredNumber = sqr;
    }


}

// squaredNumbers();


