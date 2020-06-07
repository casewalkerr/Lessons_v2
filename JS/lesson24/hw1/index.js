// 1 создаем переменные в которые помещаем даты
// 2 находим разницу между датами в днях, часах, минутах, секундах
// 3 возращаем в формате `23d 23h 34m 34s`

const getDiff = (startDate, EndDate) => {
    const start = new Date(startDate);
    const end = new Date(EndDate);
    const differ = Math.abs(start - end);
    // const difDays = Math.floor(Math.abs((start - end) / (60 * 60 * 24 * 1000)))
    // const difHours = Math.abs(start.getHours() - end.getHours())
    // const difMinutes = Math.abs(start.getMinutes() - end.getMinutes())
    // const difSeconds = Math.abs(start.getSeconds() - end.getSeconds())
    const difDays = Math.floor(differ / (1000 * 60 * 60 * 24))
    const difHours = Math.floor(differ / (1000 * 60 * 60) % 24)
    const difMinutes = Math.floor(differ / (1000 * 60) % 60)
    const difSeconds = Math.floor(differ / 1000) % 60
    return `${difDays}d ${difHours}h ${difMinutes}m ${difSeconds}s`
}
const startDate = new Date(2032, 11, 20, 15, 34, 50)
const EndDate = new Date(2031, 10, 20, 15, 34, 55);
console.log(getDiff(startDate, EndDate))

// 682d 12h 59m 55s
// 29d 0h 0m 5s