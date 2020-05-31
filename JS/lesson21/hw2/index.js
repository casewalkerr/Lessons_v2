

const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology')
    console.dir(elementsList);
    return elementsList;
}

const getItemsArray = () => {
    const NodeList = Array.from(document.querySelectorAll('.tool'));
    console.dir(NodeList);
    return NodeList;
}
getItemsList();
getItemsArray();

export { getItemsArray, getItemsList }