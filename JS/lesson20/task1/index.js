
export class User {

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
        this.age = value
        if(value < 0) {
            return false;
        }
        if(value >= 25) {
            this.requestNewPhoto();
        }
        return value;
    }

    static createEmpty() {
        const user = new User ('', null);
        return user;
    }
}
console.log(User.createEmpty());
const user1 = new User('Case', 26);
user1.sayHi();
user1.requestNewPhoto();
user1.setAge(22);