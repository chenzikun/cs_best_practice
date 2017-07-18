
class Student {
    constructor(name) {
        this.name = name;
    }

    hello () {
        alert ("hello, " + this.name + "!");
    }
}

let xiaoming = new Student("小明");
// xiaoming.hello();
