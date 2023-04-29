let submit = document.getElementById("submit");
let registration = document.getElementById("registration");
let clos = document.getElementById("close");
let switchMode = document.getElementById("switchMode");



window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    let top = document.getElementById("top")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        top.classList.remove("hide");
    } else {
        top.classList.add("hide");
    }
}


registration.onclick = function () {
    popup.classList.remove("hide");
}

clos.onclick = function () {
    popup.classList.add("hide");
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
    let body = document.querySelector("body");
    body.style.backgroundColor = "#0f5c76";
    setTimeout(() => body.style.background = "", 3000);
    
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
    f_string > s_string ?  alert(`Перший рядок "${f_string}" більше за другий "${s_string}"`) :
    f_string < s_string ?  alert(`Перший рядок "${f_string}" менше за другий "${s_string}"`) :  alert(`Перший рядок "${f_string}" дорівнює другому "${s_string}"`);
}

function FuncInner(){
    for(let element of elements){
        element.innerHTML = prompt("Ви можете змінити текст заголовку цього сайту", "WebScores")
    }
}

function FuncOuter(){
    let selector = prompt("Напишіть селектор CSS елемента, якого ви хочите подивитися код");
    let variables = document.querySelectorAll(selector);
    for (let variable of variables) {
      alert(variable.outerHTML);  
    }
}
