'use strict';

function User (name, age) {
    this.name = name;
    this.age = age; 
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
}

User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`)
}

User.prototype.setAge = function(value) {
    this.age = value;
    if(value < 0) {
        return false;
    };
    if(value >= 25) {
        return console.log(`New photo request was sent for ${this.name}`);
    }
    return value;
}

export {User};
const user1 = new User('Case', 26);
const user2 = new User('Walker', 16);
const user3 = new User('God', 27);

user1.sayHi();
user2.requestNewPhoto();
user3.setAge(234);