
const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
}

const getLineSeats = () => {
    return generateNumbersRange(1, 10)
        .map(SeatNumber => `
    <div 
       class ="sector__seat" data-seat-number="${SeatNumber}"
    ></div>
  `).join('');
}

const getSectorLines = () => {
    const seatsString = getLineSeats()
    return generateNumbersRange(1, 10)
        .map(lineNumber => `
    <div 
       class ="sector__line" data-line-number="${lineNumber}"
    >${seatsString}</div>
  `).join('');
}



const arenaElem = document.querySelector('.arena')

const renderArena = () => {
    const linesSttring = getSectorLines();
    const sectorString = generateNumbersRange(1, 3)
        .map(sectorNumber => `
        <div 
           class ="sector" data-sector-number="${sectorNumber}"
        >${linesSttring}</div>
      `).join('');
    arenaElem.innerHTML = sectorString;
}

const onSeatSelect = event => {
    const isSeat = event.target.classList.contains('sector__seat');
    if (!isSeat) {
        return;
    }

    const seatNumber = event.target.dataset.seatNumber;
    const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
    const sectoruNumber = event.target.closest('.sector').dataset.sectorNumber;

    const selectedSeatElem = document.querySelector('.board__selected-seat');
    selectedSeatElem.textContent = `S ${seatNumber} - L ${lineNumber} - S${sectoruNumber}`

}
arenaElem.addEventListener('click', onSeatSelect);

renderArena();

