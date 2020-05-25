
export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    countTimer: 0,
    startTimer() {
        this.countTimer = setInterval(()=>{
            this.secondsPassed++;
            if(this.secondsPassed == 60){
                this.minsPassed++
                this.secondsPassed = 0;
            }
        },1000)
    },
    getTime() {
        return ` ${this.secondsPassed}:${this.minsPassed < 10 ?
        '0' + this.minsPassed: this.minsPassed}`
    },
    stopTimer() {
        clearInterval(this.countTimer);
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }
}