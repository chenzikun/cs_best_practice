/*
alert("hello world!");

var x="python";


if (x==="python") {
    alert(x)
}

// 测试true 和 false
while (true) {
    alert("function 测试！")
}

a = ! true;
alert(a)

// 测试 ||
if (5>3 || 3>5) {
    alert("briliant")
}

// 测试 &&
if (5>3 && 3>5) {
    alert("briliant")
}else{
    alert("sad")
}

var name = '小明';
var age = 20;
alert(`你好, ${name}, 你今年${age}岁了!`);


var s = 'Hello, world!';
alert(s.length);



// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
*/

class Student {
    constructor(name) {
        this.name = name;
    }

    hello () {
        alert ("hello, " + this.name + "!");
    }
}


var xiaoming = new Student("小明")
xiaoming.hello();
