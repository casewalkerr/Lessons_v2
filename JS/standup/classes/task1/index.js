
export function User(name, age) {
    // let user = {};
    // Object.assign(user, { name })
    // Object.assign(age, { age })
    // return user;
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function () {
    console.log(`Hi I am ${this.name}`)
}
User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`)
}
User.prototype.setAge = function (value) {
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

let user1 = new User('Test', 50)
// console.log(user1)
// user1.sayHi();
user1.setAge(30);

// let user2 = new User('Test', 50)
// console.log(user2)
// user1.sayHi();