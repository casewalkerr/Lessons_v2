
export const addImage = (imgSrc) => {
    const p = new Promise((resolve, reject) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        const onImageloaded = () => {
            const { width, height } = imgElem;
            resolve({ width, height });
        }

        imgElem.addEventListener('load', onImageloaded)

        imgElem.addEventListener('error', () => reject(new Error('Image load failed')))
    })

    return p;
}

const imgSrc = 'https://img.drive.ru/i/0/5dc2d276ec05c4452e000203.jpg';

// const result = addImage(imgSrc)

// console.log(result)



// const onImageLoaded = (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     const { width, height } = data;
//     const sizeElem = document.querySelector('.image=size');
//     sizeElem.textContent = `${width} x ${height}`
// }
