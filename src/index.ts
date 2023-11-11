let btnGroupWord = document.getElementById("btn-group-word") as HTMLElement;

let arr: string[] = [
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

let listData: string = ``;
arr.forEach(function (item) {
  listData += `<button type="button" class="btn btn-outline-dark btn-chose">${item}</button>
    `;
});

btnGroupWord.innerHTML = listData;

let c = document.getElementById("canvasgame") as HTMLCanvasElement;
let ctx: any = c.getContext("2d");
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

let arrListWord: string[] = ["ANY", "HELLO", "STRING", "NUMBER"];

let tu: string[] = arrListWord[1].split("");
console.log(tu);
let listTus: string = ``;
tu.forEach(function (item) {
  listTus += `<input data-value="${item}" class="form-control" disabled>`;
});

let wordContent = document.getElementById("word-content") as HTMLElement;

wordContent.innerHTML = listTus;

let btnChose = document.getElementsByClassName("btn-chose") as HTMLCollection;

for (let index = 0; index < btnChose.length; index++) {
  let btnChosei = btnChose[index] as HTMLElement;
  btnChosei.onclick = function () {
    drawstep.next();
  };
}
