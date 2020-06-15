

export const shmoment = nowValue => {
    let data = new Date(nowValue)

    const countTime = {
        add(unit, value) {
            let addVal = {
                milliseconds: (value) => (data.setMilliseconds(data.getMilliseconds() + value)),
                seconds: (value) => (data.setSeconds(data.getSeconds() + value)),
                minutes: (value) => (data.setMinutes(data.getMinutes() + value)),
                hours: (value) => (data.setHours(data.getHours() + value)),
                days: (value) => (data.setDate(data.getDate() + value)),
                months: (value) => (data.setMonth(data.getMonth() + value)),
                years: (value) => (data.setFullYear(data.getFullYear() + value))
            }
            data = new Date(addVal[unit](value))
            // console.log(data)
            return countTime;
        },
        subtract(unit, value) {
            let substVal = {
                milliseconds: (value) => (data.setMilliseconds(data.getMilliseconds() - value)),
                seconds: (value) => (data.setSeconds(data.getSeconds() - value)),
                minutes: (value) => (data.setMinutes(data.getMinutes() - value)),
                hours: (value) => (data.setHours(data.getHours() - value)),
                days: (value) => (data.setDate(data.getDate() - value)),
                months: (value) => (data.setMonth(data.getMonth() - value)),
                years: (value) => (data.setFullYear(data.getFullYear() - value))
            }
            data = new Date(substVal[unit](value))
            return countTime;
        },
        result() {
            return data;
        },
    }

    return countTime;
}


// console.log(shmoment(new Date(2088, 7, 7, 7, 7)).add('years', 5).subtract('days', 3).result())