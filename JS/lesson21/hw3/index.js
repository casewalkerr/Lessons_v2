

const getTitle = () => {
    const getTitle = document.querySelector('.title')
    console.log(getTitle.textContent);
    return getTitle.textContent;
}

const getDescription = () => {
    const getDesc = document.querySelector('.about');
    console.log(getDesc.innerText);
    return getDesc;
}
const getPlans = () => {
    const getPlan = document.querySelector('.plans');
    console.log(getPlan.innerHTML);
    return getPlan.innerHTML;
}
const getGoal = () => {
    const getG = document.querySelector('.goal');
    console.log(getG.outerHTML);
    return getG.outerHTML;
}
getTitle();
getDescription();
getPlans();
getGoal();
export { getTitle, getDescription, getPlans, getGoal }