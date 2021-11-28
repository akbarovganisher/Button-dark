let content = document.querySelector('.content');
let btn = document.querySelector('.btn');
let text = document.querySelector('.text');
let link = document.querySelector('a');
let box = document.querySelector('.box');
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let blue = document.querySelector('.blue');
let magenta = document.querySelector('.magenta');


btn.onclick = function () {
    btn.classList.toggle('active');
    content.classList.toggle('active');
    text.classList.toggle('active');
    link.classList.toggle('active');
}

link.onclick = function () {
    box.classList.toggle('active');
}

red.onclick = function () {
    content.classList.toggle('focus1');
}

yellow.onclick = function () {
    content.classList.toggle('focus2');
}

blue.onclick = function () {
    content.classList.toggle('focus3');
}

magenta.onclick = function () {
    content.classList.toggle('focus4');
}