export class Spotrsman {
    constructor(name) {
        console.log('Watch')
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`);
    }
}

export class Swimmer extends Spotrsman {
    constructor(name, swimStyle) {
        super(name)
        this.swimStyle = swimStyle;
    }
    swim() {
        console.log(`${this.name} is swimming ${this.swimStyle}`)
    }
}

// const s = new Swimmer('Tom', 'breast')
// console.log(s)
// s.swim()