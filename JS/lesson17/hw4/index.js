
export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(fN){
        let res = fN.split(' ');
        this.firstName = res[0];
        this.lastName = res[1];
        console.log(res[0])
        console.log(res[1])
    }
}
const g = user.setFullName('John Doe');