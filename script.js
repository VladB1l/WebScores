let submit = document.getElementById("submit");
let registration = document.getElementById("registration");
let clos = document.getElementById("close");
let popup = document.getElementById("popup");
let scroll_top = document.getElementById("scroll_top");
let main = document.querySelector("main")
let standings = document.querySelector(".standings")
let standings_button = document.querySelector(".standings_button")
let info = document.getElementById("info")
let info_text = document.getElementById("info_text")
let right_menu = document.querySelector(".right_menu")
let logo = document.querySelector(".logo img")
let game = document.getElementById("game")


window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        scroll_top.hidden = false
    } else {
        scroll_top.hidden = true
    }
}

logo.addEventListener('click', function () {
    game.hidden = false
    ball.hidden = false;
})

let currentDroppable = null;
ball.onmousedown = function (event) {
    ball.style.zIndex = 1000;
    document.body.append(ball);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }

    document.addEventListener('mousemove', onMouseMove);
    ball.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;
        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest('.droppable');

        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                game.firstElementChild.firstElementChild.lastElementChild.hidden = true
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                game.firstElementChild.firstElementChild.lastElementChild.hidden = false
            }
        }
    };

    ball.ondragstart = function () {
        return false;
    };
}
/////-------------------------------------------------------------------------------------------------------------------------------------
/////-------------------------------------------------------------------------------------------------------------------------------------
/////-------------------------------------------------------------------------------------------------------------------------------------
/////-------------------------------------------------------------------------------------------------------------------------------------
/////-------------------------------------------------------------------------------------------------------------------------------------
function Right_menu(event) {
    const target = event.target.closest("button");
    const action = target.dataset.action;

    switch (action) {
        case 'pressButton':
            press_btn.addEventListener("mousedown", menu);
            press_btn.addEventListener("mouseup", menu);
            break;
        case 'registration':
            popup.hidden = false
            break;
        case 'changeColor':
            document.body.style.backgroundColor = "#0f5c76";
            setTimeout(() => document.body.style.background = "", 3000);
            break;
        default:
            // якщо натиснута кнопка без data-action
            break;
    }
}

right_menu.addEventListener('click', Right_menu);

class Tabble_menu {
    handleEvent(event) {
        let target = event.target;
        let releted = event.relatedTarget ? event.relatedTarget.tagName : 'undefined'
        let parent = target.closest('tr');
        if (target.tagName == "TH")
            return;
        if (!target.closest('tr'))
            return;
        switch (event.type) {
            case "mouseover":
                parent.style.backgroundColor = "whitesmoke"
                console.log(`~~~Елемент з якого пішов курсор "${releted}"`)
                break;
            case "mouseout":
                parent.style.backgroundColor = "white"
                console.log(`Елемент на який пішов  курсор "${releted}"`)
                break;
            case "click":
                console.log(parent)
                console.log(target)
                if (parent.dataset.counter != undefined) {
                    parent.value++;
                }
                break;
        }
    }
}
tr_collection = document.querySelectorAll(".standings tr")
for (const tr of tr_collection) {
    tr.value = 0;
}
let tabble_menu = new Tabble_menu();
standings.addEventListener("mouseover", tabble_menu);
standings.addEventListener("mouseout", tabble_menu);
standings.addEventListener("click", tabble_menu);



standings_button.addEventListener('click', ShowValues)
function ShowValues(event) {
    info_text.innerHTML = ""
    for (const tr of tr_collection) {
        if (tr.value != 0) {
            info_text.innerHTML += `Ви натиснули на  команду "${tr.children[1].textContent}" ${tr.value} раз(и/ів) <br>`
        }
    }
    info.hidden = false
}


function Change_style() {
    let radius = scroll_top.style.borderRadius
    if (radius == "30px") {
        scroll_top.style.borderRadius = "10px"
    } else {
        scroll_top.style.borderRadius = "30px"
    }
}

function Go_top() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scroll_top.addEventListener("click", Change_style);
scroll_top.addEventListener("click", Go_top);
scroll_top.addEventListener("contextmenu", function (event) {
    alert(`Подія відбулась на елементі "${event.currentTarget.tagName}" `)
})
scroll_top.addEventListener("contextmenu", function () {
    let answer = confirm("Чи хочете ви, щоб при натисканні лівою кнопкою нічого не відбувалося?")
    if (answer == true) {
        scroll_top.removeEventListener("click", Change_style)
        scroll_top.removeEventListener("click", Go_top)
    }
})

class Button_menu {
    handleEvent(event) {
        switch (event.type) {
            case "mousedown":
                press_btn.innerHTML = `Натиснута ${event.currentTarget.tagName}`;
                break;
            case "mouseup":
                press_btn.innerHTML = "<img src='./Img/click.png' alt='click'>";
                break;
        }
    }
}
let menu = new Button_menu();
// press_btn.addEventListener("mousedown", menu);
// press_btn.addEventListener("mouseup", menu);

/////-------------------------------------------------------------------------------------------------------------------------------------
/////-------------------------------------------------------------------------------------------------------------------------------------
/////-------------------------------------------------------------------------------------------------------------------------------------
/////-------------------------------------------------------------------------------------------------------------------------------------
/////-------------------------------------------------------------------------------------------------------------------------------------


clos.onclick = function () {
    popup.hidden = true
}

// registration.onclick = function () {
//     popup.hidden = false
// }

submit.onclick = function () {
    let Name = document.querySelector(".FName").value;
    let Last_Name = document.querySelector(".LName").value;
    let PWord = document.querySelector(".PWord").value;

    confirmation = confirm(` Ваше ім'я: ${Name};  \n Ваше прізвище: ${Last_Name}; \n Ваш пароль: ${PWord}; `);
    if (confirmation == true) {
        location.href = "https://www.google.com/";
    }
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

// function switchMode() {
//     document.body.style.backgroundColor = "#0f5c76";
//     setTimeout(() => document.body.style.background = "", 3000);
// }

function FuncInner() {
    // elements колекція querySelectorAll('h1')
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
    alert(main.children[1].textContent)
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
        for (let span of span_collection) {
            span.remove();
        }
    }
}

