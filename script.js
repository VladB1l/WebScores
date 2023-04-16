let submit = document.getElementById("submit");
let registration = document.getElementById("registration");

window.onscroll = function() {
    scrollFunction()
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
    clos();
}

let close = document.getElementById("close");
close.onclick = function () {
    clos()
}

function clos() {
    popup.classList.toggle("hide")
}

submit.onclick = function () {
    let Name = document.querySelector(".FName").value;
    let Last_Name = document.querySelector(".LName").value;
    let PWord = document.querySelector(".PWord").value;

    confirmation = confirm(` Ваше ім'я: ${Name};  \n Ваше прізвище: ${Last_Name}; \n Ваш пароль: ${PWord}; `)
    if (confirmation == false) {
        clos();
        clos();
    }
    if (confirmation == true) {
        location.href = "index.html"
    }
}

let switchMode = document.getElementById("switchMode")
switchMode.onclick = function () {
    let body = document.querySelector("body")
    body.style.backgroundColor = "#0f5c76"
    setTimeout(() => body.style.background = "rgb(238, 238, 238)", 3000);
}
