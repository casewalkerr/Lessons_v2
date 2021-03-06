// 1 при нажатии на кнопку создать запись с текстом и добавить в список
// 2 после добавления почистить поле ввода,если поле пустое не добавлять задачу
// 3 создать событие на чекбокс 
// 4 сравнить значение id  на чекбоксе если элемент чек присвоить значение done
// algo:
// 1. create array of tasks - and create 5 test tasks +++
// 2. write renderTasks (tasks) fucn that render all tasks
// 3. addEventListener for .list
// 4. addEventListener for create button
// 5. checkbox handler - update task in the array and render tasks
// 6. create handler - create task object and put to the array and render tasks

const tasks = [
    { text: 'Buy milk', done: false, id: '1', date: new Date(), doneDate: null },
    { text: 'Pick up Tom from airport', done: false, id: '2', date: new Date(), doneDate: null },
    { text: 'Visit party', done: false, id: '3', date: new Date(), doneDate: null },
    { text: 'Visit doctor', done: true, id: '4', date: new Date(), doneDate: new Date() },
    { text: 'Buy meat', done: true, id: '5', date: new Date(), doneDate: new Date() },
];
const listElem = document.querySelector('.list');
const renderTasks = (tasksList) => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => {
            if (a.done !== b.done) return a.done - b.done
            if (a.done) return new Date(b.doneDate) - new Date(a.doneDate)
            return new Date(b.date) - new Date(a.date)
        })
        .map((task) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-task-id', task.id);
            checkbox.checked = task.done;
            checkbox.classList.add('list__item-checkbox');
            if (task.done) {
                listItemElem.classList.add('list__item_done');
            };
            listItemElem.append(checkbox, task.text);
            return listItemElem;
        });
    //console.log(tasksElems)
    listElem.append(...tasksElems);
};
renderTasks(tasks);

const inputAdd = document.querySelector('.task-input')

const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createTask);
function createTask(event) {
    const input = document.querySelector('.task-input');
    if (!input.value) return;
    tasks.push({
        text: input.value,
        done: false,
        id: `${tasks.length + 1}`,
        date: new Date(),
        doneDate: null
    })

    input.value = '';
    renderTasks(tasks);
}

listElem.addEventListener('click', updateTask);



function updateTask(event) {
    const classes = event.target.classList;
    // console.log(classes);
    const checkbox = event.target;
    // console.log(checkbox);
    if (!classes.contains('list__item-checkbox')) return;


    const task = tasks.find(task => task.id === event.target.dataset.taskId);
    // console.log(task)
    // task.done = true
    task.done = checkbox.checked;
    task.doneDate = new Date()

    renderTasks(tasks);
}


// listElem.innerHTML = '';


    // TODO update task
    // TODO render tasks again


