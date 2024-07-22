const keys = document.querySelectorAll("h2");
const content = document.querySelector(".content");
const toptop = document.querySelector(".top");


window.onkeydown = keeeey = (e)=> {
    toptop.classList.add("hidden")
    content.classList.add("show")
    keys[0].innerHTML = e.key;
    keys[1].innerHTML = e.keyCode;
    keys[2].innerHTML = e.code;

    
}

