export const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];
const getDayOfWeek = (date, days) => {
    const getDay = new Date(date).getDate();
    const futureInDate = new Date(date).setDate(getDay + days);
    return weekDays[new Date(futureInDate).getDay()];
}

const result = getDayOfWeek(new Date(2020, 06, 13), 3);
console.log(result)