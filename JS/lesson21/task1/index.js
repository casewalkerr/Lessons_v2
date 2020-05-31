//  создать элемент в котором будем отрисовывать список
//  преобразить массив и добавить список элементов
//  добавить класс listItem элементам списка
//  добавить чекбокс + класс
//  списку добавить текст и чекбокс
//  элементы списка добавить в список
const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemElem = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItem = document.createElement('li');
            listItem.classList.add('list__item');
            if (done) {
                listItem.classList.add('list__item_done')
            }
            const checkBoxElem = document.createElement('input');
            checkBoxElem.classList.add('list__item-checkbox')
            checkBoxElem.setAttribute('type', 'checkbox');
            checkBoxElem.setAttribute('checked', done);
            checkBoxElem.checked = done;
            listItem.append(checkBoxElem, text);

            return listItem;
        });
    listElem.append(...listItemElem);
};

renderListItems(tasks);