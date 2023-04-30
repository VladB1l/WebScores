let submit = document.getElementById("submit");
let registration = document.getElementById("registration");
let clos = document.getElementById("close");
let switchMode = document.getElementById("switchMode");
let popup = document.getElementById("popup");
let scroll_top = document.getElementById("scroll_top");
let main = document.querySelector("main")


window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scroll_top.hidden = false
    } else {
        scroll_top.hidden = true
    }
}


registration.onclick = function () {
    popup.hidden = false
}

clos.onclick = function () {
    popup.hidden = true
}


submit.onclick = function () {
    let Name = document.querySelector(".FName").value;
    let Last_Name = document.querySelector(".LName").value;
    let PWord = document.querySelector(".PWord").value;

    confirmation = confirm(` Ваше ім'я: ${Name};  \n Ваше прізвище: ${Last_Name}; \n Ваш пароль: ${PWord}; `);
    if (confirmation == true) {
        location.href = "index.html";
    }
}

switchMode.onclick = function () {
    document.body.style.backgroundColor = "#0f5c76";
    setTimeout(() => document.body.style.background = "", 3000);

}

function FuncString() {
    let f_string = prompt("Введіть перший рядок для порівняння");
    let s_string = prompt("Введіть другий рядок для порівняння");
    // if (f_string > s_string) {
    //     alert(`Перший рядок "${f_string}" більше за другий "${s_string}"`)
    // } else if (f_string < s_string) {
    //     alert(`Перший рядок "${f_string}" менше за другий "${s_string}"`)
    // } else {
    //     alert(`Перший рядок "${f_string}" дорівнює другому "${s_string}"`)
    // }
    f_string > s_string ? alert(`Перший рядок "${f_string}" більше за другий "${s_string}"`) :
        f_string < s_string ? alert(`Перший рядок "${f_string}" менше за другий "${s_string}"`) : alert(`Перший рядок "${f_string}" дорівнює другому "${s_string}"`);
}

function FuncInner() {
    for (let element of elements) {
        element.innerHTML = prompt("Ви можете змінити текст заголовку цього сайту", "WebScores")
    }
}

function FuncOuter() {
    let selector = prompt("Напишіть селектор CSS елемента, якого ви хочите подивитися код");
    let variables = document.querySelectorAll(selector);
    for (let variable of variables) {
        alert(variable.outerHTML);
    }
}

function FuncTextContent() {
    alert(main.textContent)
}


function FuncNodeValue() {
    alert(main.childNodes[1].nodeValue)
}

let new_button = document.createElement('button');
new_button.innerHTML = `<img src="./Img/object.png" alt="object">`
document.body.firstElementChild.children[1].prepend(new_button)


let textNode = document.createTextNode(".");
main.children[1].append(textNode);


new_button.onclick = function () {
    new_span = document.createElement("span")
    new_span.innerHTML = 'Доданий span'
    new_span.style.color = "white"
    new_span.style.padding = "25px"
    new_span.style.cursor = "pointer"
    new_button.before(new_span)

    new_span.onclick = function () {
        let span_collection = document.querySelectorAll("body span")
        span_collection.length > 1 ? FuncRemove(span_collection) : FuncReplace();
    }
    function FuncReplace() {
        new_span.replaceWith("Замінений текст")
    }
    
    function FuncRemove(span_collection) {
        for (const span of span_collection) {
            span.remove();
        }
    }
}
