const matrix = [
  "                         ".split(""),
  " *  *****          ***** ".split(""),
  "    *   *          *   * ".split(""),
  "    *   *          *   * ".split(""),
  "    **           *    ** ".split(""),
  "                      *  ".split(""),
  "          **             ".split(""),
  "          *****          ".split(""),
  "              * *        ".split(""),
  "     **       *          ".split(""),
  "     **       *          ".split(""),
  "     *                   ".split(""),
  "     ******              ".split(""),
  "         *               ".split(""),
  "       ****              ".split(""),
  "                         ".split(""),
  "                         ".split(""),
  "                         ".split(""),
  "                         ".split(""),
  "                         ".split(""),
  "                         ".split(""),
  "                         ".split(""),
  "                         ".split(""),
  "                         ".split(""),
  "                         ".split(""),
];

let running = false;

const tempMatrix = matrix.map((row) => row.map(() => " "));

function updateMap() {
  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[row].length - 1; col++) {
      let aux = 0;
      if (matrix[row + 1][col + 1] === "*") aux++;
      if (matrix[row - 1][col - 1] === "*") aux++;
      if (matrix[row + 1][col - 1] === "*") aux++;
      if (matrix[row - 1][col + 1] === "*") aux++;
      if (matrix[row + 1][col] === "*") aux++;
      if (matrix[row - 1][col] === "*") aux++;
      if (matrix[row][col + 1] === "*") aux++;
      if (matrix[row][col - 1] === "*") aux++;

      if (matrix[row][col] === "*") {
        if (aux < 2) {
          tempMatrix[row][col] = " ";
        } else if (aux == 2 || aux == 3) {
          tempMatrix[row][col] = "*";
        } else {
          tempMatrix[row][col] = " ";
        }
      } else if (matrix[row][col] === " ") {
        if (aux == 3) tempMatrix[row][col] = "*";
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = tempMatrix[i][j];
    }
  }
}

function setup() {
  var mycanvas = createCanvas(500, 500);
  mycanvas.parent("spacework");
  mycanvas.mousePressed(handleCanvasClick);

  frameRate(4);
}

function draw() {
  background(0);

  fill("#ff0");

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (matrix[j][i] === "*") {
        circle(i * 20 + 20, j * 20 + 20, 12);
      }
    }
  }
  if (running) {
    updateMap();
  }
}

function handleCanvasClick() {
  if (!running) {
    let i, j;
    if (mouseX < 20) {
      i = 0;
    } else {
      i = Math.floor((mouseX - 10) / 20);
    }

    if (mouseY < 20) {
      j = 0;
    } else {
      j = Math.floor((mouseY - 10) / 20);
    }

    if (matrix[j][i] === "*") {
      matrix[j][i] = " ";
    } else if (matrix[j][i] === " ") {
      matrix[j][i] = "*";
    }
  }
}

const play_button = document.getElementById("playbutton");
const pause_button = document.getElementById("pausebutton");

const play_button_img = document.getElementById("play-img");
const pause_button_img = document.getElementById("pause-img");

// Mudar imagem ao clicar no botão
play_button.addEventListener("click", function () {
  if (!running) {
    running = true;
    play_button_img.src = "assets/img/play_u.png";
    pause_button_img.src = "assets/img/pause.png";
  }
});

pause_button.addEventListener("click", function () {
  if (running) {
    running = false;
    play_button_img.src = "assets/img/play.png";
    pause_button_img.src = "assets/img/pause_u.png";
  }
});
