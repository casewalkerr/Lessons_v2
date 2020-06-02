const btn = document.querySelectorAll('.btn')
// console.log(btn)
const hahdleClick = () => {
    console.log(event.target.textContent)
}

[...btn].map(el => el.addEventListener('click', hahdleClick))
