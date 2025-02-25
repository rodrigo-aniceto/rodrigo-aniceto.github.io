let running = false;
let gridSize = 50;
let totalX = 500;
let totalY = 500;

class Rato {
  constructor(posX, posY, destX, destY, orientacao) {
    this.posX = posX;
    this.posY = posY;
    this.destX = destX;
    this.destY = destY;
    this.orientacao = orientacao;
    let cellX = Math.floor(posX / gridSize);
    let cellY = Math.floor(posY / gridSize);
    gridRatos[`${cellX},${cellY}`] = true;
  }

  verificaColisaoMove(vel) {
    if (this.orientacao === "h") {
      if (this.posX + vel < this.destX) {
        //se o grid na posição seguinte não está ocupado
        let gridX = Math.floor(this.posX / gridSize);
        let gridY = Math.floor(this.posY / gridSize);
        let gridnewX = Math.floor((this.posX + vel) / gridSize);
        delete gridRatos[`${gridX},${gridY}`];
        if (!gridRatos[`${gridnewX},${gridY}`]) {
          this.posX = this.posX + vel;
          gridRatos[`${gridnewX},${gridY}`] = true;
        } else {
          gridRatos[`${gridX},${gridY}`] = true;
          this.orientacao = "v";
        }
      } else if (this.posX - vel > this.destX) {
        let gridX = Math.floor(this.posX / gridSize);
        let gridY = Math.floor(this.posY / gridSize);
        let gridnewX = Math.floor((this.posX - vel) / gridSize);
        delete gridRatos[`${gridX},${gridY}`];
        if (!gridRatos[`${gridnewX},${gridY}`]) {
          this.posX = this.posX - vel;
          gridRatos[`${gridnewX},${gridY}`] = true;
        } else {
          gridRatos[`${gridX},${gridY}`] = true;
          this.orientacao = "v";
        }
      } else {
        if (Math.abs(this.posY - this.destY) > vel) {
          //ainda não chegou ao destino
          this.orientacao = "v";
        }
      }
    } else if (this.orientacao === "v") {
      if (this.posY + vel < this.destY) {
        let gridX = Math.floor(this.posX / gridSize);
        let gridY = Math.floor(this.posY / gridSize);
        let gridnewY = Math.floor((this.posY + vel) / gridSize);
        delete gridRatos[`${gridX},${gridY}`];
        if (!gridRatos[`${gridX},${gridnewY}`]) {
          this.posY = this.posY + vel;
          gridRatos[`${gridX},${gridnewY}`] = true;
        } else {
          gridRatos[`${gridX},${gridY}`] = true;
          this.orientacao = "h";
        }
      } else if (this.posY - vel > this.destY) {
        let gridX = Math.floor(this.posX / gridSize);
        let gridY = Math.floor(this.posY / gridSize);
        let gridnewY = Math.floor((this.posY - vel) / gridSize);
        delete gridRatos[`${gridX},${gridY}`];
        if (!gridRatos[`${gridX},${gridnewY}`]) {
          this.posY = this.posY - vel;
          gridRatos[`${gridX},${gridnewY}`] = true;
        } else {
          gridRatos[`${gridX},${gridY}`] = true;
          this.orientacao = "h";
        }
      } else {
        if (Math.abs(this.posX - this.destX) > vel) {
          this.orientacao = "h";
        }
      }
    }
  }
}

class Comida {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.destX = -1;
    this.destY = -1;
    gridComidas[`${posX},${posY}`] = true;
  }
}

let ratos = [];
let comidas = [];
let gridComidas = {};
let gridRatos = {};

function setup() {
  var mycanvas = createCanvas(totalX, totalY);
  mycanvas.parent("spacework");
  //mycanvas.mousePressed(handleCanvasClick);

  ratos.push(new Rato(35, 360, -1, -1, "h"));
  //ratos.push(new Rato(175, 10, -1, -1, "v"));
  //ratos.push(new Rato(200, 410, -1, -1, "h"));
  ratos.push(new Rato(400, 10, -1, -1, "v"));
  ratos.push(new Rato(300, 410, -1, -1, "h"));
  //ratos.push(new Rato(200, 10, -1, -1, "v"));

  comidas.push(new Comida(180, 180));
  comidas.push(new Comida(100, 110));
  comidas.push(new Comida(280, 150));
  comidas.push(new Comida(380, 280));
  comidas.push(new Comida(80, 480));

  comidas.push(new Comida(380, 170));
  comidas.push(new Comida(200, 10));
  comidas.push(new Comida(15, 350));
  comidas.push(new Comida(40, 310));
  comidas.push(new Comida(80, 360));

  comidas.push(new Comida(275, 70));
  comidas.push(new Comida(300, 80));
  comidas.push(new Comida(150, 80));
  comidas.push(new Comida(340, 300));
  comidas.push(new Comida(180, 30));

  frameRate(60);
  background(0);
}

function medirDistancia(ax, bx, ay, by) {
  n = ax - bx;
  m = ay - by;

  if (n < 0) {
    n = n * -1;
  }
  if (m < 0) {
    m = m * -1;
  }
  return n + m;
}

function procuraComidaProxima(x, y) {
  let dist = 1000; //só enxerga se estiver a menos de 300 de distancia
  let dx = -1;
  let dy = -1;
  for (let com of comidas) {
    let d = medirDistancia(x, com.posX, y, com.posY);
    if (d < dist) {
      dx = com.posX;
      dy = com.posY;
      dist = d;
    }
  }
  return { destX: dx, desty: dy };
}

function moveComida() {
  for (let com of comidas) {
    let direcao = 0;
    if (com.posX == com.destX) {
      direcao = direcao + 2;
    }
    if (com.posY == com.destY) {
      direcao = direcao + 1;
    }
    if (direcao == 3 || com.destX == -1 || com.destY == -1) {
      com.destX = Math.floor(Math.random() * totalX) + 1;
      com.destY = Math.floor(Math.random() * totalY) + 1;
    } else {
      if (direcao == 0) {
        direcao = Math.floor(Math.random() * 2) + 1;
      }
      if (direcao == 1) {
        if (
          com.posX < com.destX &&
          !gridComidas[`${com.posX + 1},${com.posY}`]
        ) {
          delete gridComidas[`${com.posX},${com.posY}`];
          com.posX = com.posX + 1;
          gridComidas[`${com.posX},${com.posY}`] = true;
        } else if (
          com.posX > com.destX &&
          !gridComidas[`${com.posX - 1},${com.posY}`]
        ) {
          delete gridComidas[`${com.posX},${com.posY}`];
          com.posX = com.posX - 1;
          gridComidas[`${com.posX},${com.posY}`] = true;
        }
      } else if (direcao == 2) {
        if (
          com.posY < com.destY &&
          !gridComidas[`${com.posX},${com.posY + 1}`]
        ) {
          delete gridComidas[`${com.posX},${com.posY}`];
          com.posY = com.posY + 1;
          gridComidas[`${com.posX},${com.posY}`] = true;
        } else if (
          com.posY > com.destY &&
          !gridComidas[`${com.posX},${com.posY - 1}`]
        ) {
          delete gridComidas[`${com.posX},${com.posY}`];
          com.posY = com.posY - 1;
          gridComidas[`${com.posX},${com.posY}`] = true;
        }
      }
    }
  }
}

function removeComida(x, y) {
  comidas = comidas.filter((obj) => !(obj.posX === x && obj.posY === y));
  delete gridComidas[`${x},${y}`];

  //gerar uma nova só por diversão
  newX = Math.floor(Math.random() * totalX) + 1;
  newY = Math.floor(Math.random() * totalY) + 1;
  comidas.push(new Comida(newX, newY));
}

function moveRatos() {
  for (let rat of ratos) {
    if (
      (rat.destX === -1 && rat.destY === -1) ||
      !gridComidas[`${rat.destX},${rat.destY}`]
    ) {
      let result = procuraComidaProxima(rat.posX, rat.posY);
      rat.destX = result.destX;
      rat.destY = result.desty;
    }
    //movimenta e depois verifica se chegou no destino
    if (rat.destX != -1 && rat.destY != -1) {
      rat.verificaColisaoMove(2);
      if (
        Math.abs(rat.posX - rat.destX) <= 2 &&
        Math.abs(rat.posY - rat.destY) <= 2
      ) {
        removeComida(rat.destX, rat.destY);
        rat.destX = -1;
        rat.destY = -1;
      }
    }
  }
}

function draw() {
  if (running) {
    background(0);
    console.log("comidas: ", comidas);
    console.log("grid: ", gridComidas);
    moveComida();
    moveRatos();

    fill("#ff0");
    for (let com of comidas) {
      circle(com.posX, com.posY, 5);
    }

    fill("#33f");
    for (let rat of ratos) {
      circle(rat.posX, rat.posY, 12);
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
