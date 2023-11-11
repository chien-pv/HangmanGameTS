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
  listData += `<button type="button" class="btn btn-outline-dark">${item}</button>
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

let drowstep = document.getElementById("drowstep") as HTMLElement;

drowstep.onclick = function () {
  drawstep.next();
};
