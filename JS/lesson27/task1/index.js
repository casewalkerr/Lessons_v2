
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }))
localStorage.setItem('name', JSON.stringify('Tom'))
localStorage.setItem('age', JSON.stringify(17))

export const getLocalStorage = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            const newValue;
            try {
                newValue = JSON.parse(value)
            } catch (e) {
                newValue = value;
            }
            return {
                ...acc,
                [key]: newValue,
            }
        }, {})
}

console.log(getLocalStorage())