
export const finishList = () => {
    const listF = document.querySelector('.list');
    const listF2 = document.querySelector('.special');
    const elem1 = document.createElement('li');
    const elem4 = document.createElement('li');
    const elem6 = document.createElement('li');
    const elem8 = document.createElement('li');
    elem1.textContent = '1'
    elem4.textContent = '4'
    elem6.textContent = '6'
    elem8.textContent = '8'
    listF.prepend(elem1);
    listF.append(elem8);
    listF2.after(elem6);
    listF2.before(elem4);
}
finishList();