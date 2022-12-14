const parent = document.querySelector(".root");
const scoreElement = document.querySelector("#score");
const tiles = 9;
let score = 0;

let milli = 99;
let seconds = 14;
let timer;

function updateScore(point) {
  score += point;
  scoreElement.innerHTML = score;
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function randomColor() {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);
  return [red, green, blue];
}

function getDifferentColor(colors) {
  const random = randomNumber(0, 2);
  //   const tempColors = colors;
  const tempColors = [...colors];
  let singleColor = tempColors[random];
  if (singleColor > 150) {
    singleColor -= 50;
  } else {
    singleColor += 50;
  }
  tempColors[random] = singleColor;
  return `rgb(${tempColors[0]}, ${tempColors[1]}, ${tempColors[2]})`;
}

function startGame() {
  parent.innerHTML = "";
  const colors = randomColor();
  const randomNum = randomNumber(0, tiles - 1);
  for (i = 0; i < tiles; i++) {
    const tile = document.createElement("div");
    const isDifferent = randomNum == i;
    parent.appendChild(tile);

    if (isDifferent) {
      tile.style.backgroundColor = getDifferentColor(colors);
    } else {
      tile.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
    }

    tile.addEventListener("click", function () {
      if (isDifferent) {
        updateScore(1);
        // seconds++;
        startGame();
      } else {
        if (score == 1 || score == 0) {
          document.querySelector("h1").innerHTML = "GG";
        } else {
          updateScore(-2);
        }
      }
    });
  }
}

startGame();
