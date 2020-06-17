class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}`)
    }
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`)
    }
    setAge(value) {
        this.age = value;
        if (value < 0) {
            return false;
        }
        if (value >= 25) {
            console.log(this)
            this.requestNewPhoto()
        }
        return value;
    }
}



let user1 = new User('Test', 50)
// console.log(user1)
// user1.sayHi();
user1.setAge(30);

// let user2 = new User('Test', 50)
// console.log(user2)
// user1.sayHi();