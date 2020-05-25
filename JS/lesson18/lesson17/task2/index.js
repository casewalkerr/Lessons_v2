'use strict';
const wallet = {
    transactions: [2, 5, 65, 76, 44],
    getMax(){
        // return Math.max.apply(null, this.transactions)
        return Math.max(...this.transactions);
    },getMin(){
        // return Math.min.apply(null, this.transactions)
        return Math.min(...this.transactions);
    }
}
console.log(wallet.getMax());
console.log(wallet.getMin());