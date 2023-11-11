"use strict";
let btnGroupWord = document.getElementById("btn-group-word");
let arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
let listData = ``;
arr.forEach(function (item) {
    listData += `<button type="button" class="btn btn-outline-dark btn-chose">${item}</button>
    `;
});
btnGroupWord.innerHTML = listData;
let c = document.getElementById("canvasgame");
let ctx = c.getContext("2d");
function* draw() {
    ctx.moveTo(20, 350);
    ctx.lineTo(300, 350);
    ctx.stroke();
    yield true;
    ctx.moveTo(25, 350);
    ctx.lineTo(25, 50);
    ctx.stroke();
    yield true;
    ctx.moveTo(25, 50);
    ctx.lineTo(170, 50);
    ctx.stroke();
    yield true;
    ctx.moveTo(170, 50);
    ctx.lineTo(170, 80);
    ctx.stroke();
    yield true;
    ctx.beginPath();
    ctx.arc(170, 100, 20, 0, 2 * Math.PI);
    ctx.stroke();
    yield true;
    ctx.moveTo(170, 120);
    ctx.lineTo(170, 200);
    ctx.stroke();
    yield true;
    ctx.moveTo(170, 120);
    ctx.lineTo(190, 150);
    ctx.stroke();
    yield true;
    ctx.moveTo(170, 120);
    ctx.lineTo(150, 150);
    ctx.stroke();
    yield true;
    ctx.moveTo(170, 200);
    ctx.lineTo(150, 250);
    ctx.stroke();
    yield true;
    ctx.moveTo(170, 200);
    ctx.lineTo(190, 250);
    ctx.stroke();
    yield false;
}
let drawstep = draw();
let arrListWord = ["ANY", "HELLO", "STRING", "NUMBER"];
let tu = arrListWord[1].split("");
console.log(tu);
let listTus = ``;
tu.forEach(function (item) {
    listTus += `<input data-value="${item}" class="form-control" disabled>`;
});
let wordContent = document.getElementById("word-content");
wordContent.innerHTML = listTus;
let btnChose = document.getElementsByClassName("btn-chose");
for (let index = 0; index < btnChose.length; index++) {
    let btnChosei = btnChose[index];
    btnChosei.onclick = function () {
        drawstep.next();
    };
}
