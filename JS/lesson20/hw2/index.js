
// создать класс User 
// присвоить ему поля без возможности модификации через get
// создать класс UserRepository 
// присвоить поле users для массива использовать Object.freeze
// создать методы    
class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get sessionId() {
        return this._sessionId;
    }
}

class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
    getUserNames() {
        return this._users.map(el => el.name)
    }
    getUserIds() {
        return this._users.map(el => el.id)
    }
    getUserNameById(id) {
        return this._users.filter(el => el.id == id).name
    }
}

const user1 = new User('23', 'Case', '77')
console.log(user1)

