// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//
//     hello () {
//         alert ("hello, " + this.name + "!");
//     }
// }
//
// let xiaoming = new Student("小明");
// xiaoming.hello();

// 平稳退化
function showPic(pic) {
    if (!document.getElementById("placeholder")) return false
    let source = pic.href
    let placeholder = document.getElementById("placeholder")
    let text = pic.title
    if (document.getElementById('description')) {
        let description = document.getElementById("description")
        description.firstChild.nodeValue = text
        placeholder.src= source
    }
    return true
}


function prepareGallery() {
    let gallery = document.getElementById("gallery")
    let links = gallery.getElementsByTagName('a')
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this)
        }
    }
}

function addLoadEvent(func) {
    let old_onload = window.onload
    if (typeof window.onload != 'function') {
        window.onload = func
    } else {
        window.onload = function () {
            old_onload()
            func()
        }
    }
}


addLoadEvent(prepareGallery)