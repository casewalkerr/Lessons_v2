 export const callbackPromt = {
    message: 'Tell me number',
    showPrompt() {
        prompt(this.message)
    },
    showDeferredPrompt (ms) {
        setTimeout(this.showPrompt.bind(this),ms)
    }
}
callbackPromt.showDeferredPrompt(4000)