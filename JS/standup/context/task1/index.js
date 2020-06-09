// let secondsPassed = 10;
const timer = {
    minsPassed: 0,
    secondsPassed: 0,
    intervalID: null,
    // startTimer() {
    //     lose context
    // const adder = function () {
    //         this.secondsPassed += 1;
    //         console.log(this.secondsPassed);

    //     };
    // fix contect
    //     const newAdder = adder.bind(this);
    //     setInterval(newAdder, 1000)
    // },
    startTimer() {
        this.intervalID = setInterval(() => {
            console.log(this)
            this.secondsPassed += 1;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }

        }, 1000);
        // console.log('id ' + this.intervalID)
    },


    stopTimer() {
        clearInterval(this.intervalID)

    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
    getTime() {
        return `${this.minsPassed}:${this.secondsPassed < 10 ?
            '0' + this.secondsPassed : this.secondsPassed}`
    },

}
export { timer };

// const user = {
//     name: 'Andrey',
//     sayHi() {
//         console.log(this);
//         console.log(`hello $`)
//     }
// }


// timer.startTimer();
// timer.stopTimer();