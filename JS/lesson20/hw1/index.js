
export class Order {
    constructor(price, city, type) {
        this.id = String(Math.random());
        this.price = price;
        this.dateCreated = new Date;
        this.isConfirmed = false;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.price > 1000) {
            return true;
        }
        return false;
    }

    confirOrder() {
        this.isConfirmed = true;
        this.dateCreated = new Date;
    }

    isValidType(type) {
        if (this.type == 'Buy' || this.type == 'Sell') {
            return true;
        }
        return false;
    }
}

const order = new Order(2000, 'Tokio', 'Buy');
console.log(order);