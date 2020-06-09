// let secondsPassed = 10;
export const timer = {
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

            console.log('id ' + this.intervalID)
        }, 1000);
    },
    getTimer() {
        let secondsFormatted = this.secondsPassed < 10
            ? `0${this.secondsPassed}`
            : this.secondsPassed;

        return `${this.minsPassed}: ${this.secondsFormatted} `;

    },
    stopTimer() {
        clearInterval(this.intervalID)

    },
    resetTimer() {

    }

}


// const user = {
//     name: 'Andrey',
//     sayHi() {
//         console.log(this);
//         console.log(`hello $`)
//     }
// }


// timer.startTimer();
// timer.stopTimer();