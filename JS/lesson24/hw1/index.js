// 1 создаем переменные в которые помещаем даты
// 2 находим разницу между датами в днях, часах, минутах, секундах
// 3 возращаем в формате `23d 23h 34m 34s`

export const getDiff = (startDate, EndDate) => {
    const start = new Date(startDate);
    const end = new Date(EndDate);
    const difDays = Math.floor(Math.abs(start - end) / (60 * 60 * 24 * 1000))
    const difHours = Math.abs(start.getHours() - end.getHours())
    const difMinutes = Math.abs(start.getMinutes() - end.getMinutes())
    const difSeconds = Math.abs(start.getSeconds() - end.getSeconds())
    return `${difDays}d ${difHours}h ${difMinutes}m ${difSeconds}s`
}
const startDate = new Date(2031, 08, 20, 15, 34, 50)
const EndDate = new Date(2019, 10, 07, 1, 34, 55);
console.log(getDiff(startDate, EndDate))
