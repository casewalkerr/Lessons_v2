const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
export const dayOfWeek = (date, days) => {
    const getDay = new Date(date).getDate();
    const futureInDate = new Date(date).setDate(getDay + days);
    return weekDays[new Date(futureInDate).getDay()];
}

// const result = dayOfWeek(new Date(2020, 06, 13), 3);
// console.log(result)