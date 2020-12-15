let imagem;
let imagem2;
let imagem3;
let song;

var tela = 1;
var pergunta = 1;
var largura = 200;
var altura = 50;
var yMenu = 125;
var xMenu = 100;
var yMenu2 = 225;

var xInfo = 100;
var yInfo = 300;
var yInfo2 = 160;
var info = 1;

var xResposta = 100;
var yResposta = 80;
var yResposta2 = 180;
var yResposta3 = 280;

function preload() {
  imagem = loadImage('assets/background.png');
  imagem2 = loadImage('assets/programador.jpg');
  imagem3 = loadImage('assets/educadora.jpg');
  song = createAudio('assets/Temple of Time - Rememberance.mp3')
}


function setup() {
  createCanvas(400, 400);
  song.loop();
  song.volume(0.2);
}

function draw() {
  background(imagem);
  //tela menu
  if (tela == 1) {
    //tela inicial
    stroke(15);
    textSize(40)
    textAlign(CENTER);

    text("QuizGame", 200, 70);

    //botao iniciar
    rect(xMenu, yMenu, largura, altura);
    text("Start", 200, 165);

    //botao informações
    rect(xMenu, yMenu2, largura, altura);
    text("Info", 200, 265);


    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu && mouseY < yMenu + altura) {
      ellipse(50, 150, 30, 30);
    }

    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
      ellipse(50, 250, 30, 30);
    }

    if (mouseIsPressed && mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu && mouseY < yMenu + altura) {
      tela = 6;
    }

    if (mouseIsPressed && mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
      tela = 2;
    }
  }

  if (tela == 2) {
    //tela de informações 1
    if (info == 1) {
      textSize(20)
      textAlign(CENTER);
      text("Este jogo foi feito por Fernando Bezerra \n e tem como objetivo aprimorar as\n seguintes habilidades:\n(EF06LI19) Utilizar o presente do \nindicativo para identificar pessoas \n(verbo to be) e descrever rotinas diárias\n(EF06LI20) Utilizar o presente contínuo\n para descrever ações em progresso", 200, 100)

      textSize(40)
      //botão continuar
      rect(xInfo, yInfo, largura, altura)
      text("Continuar", 200, 340);
      //clique no botão continuar

      if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yInfo && mouseY < yInfo + altura) {
        ellipse(50, 325, 30, 30);
      }
      if (mouseIsPressed && mouseX > xInfo && mouseX < xInfo + largura && mouseY > yInfo && mouseY < yInfo + altura) {
        info = 2
      }
    }

    //tela de informações 2
    if (info == 2) {
      textSize(20);
      text("Programador", 90, 230);
      text("Educadora", 310, 230);
      textAlign(CENTER);
      text("Este jogo foi supervisionado pela\n educadora de inglês Indra Filgueiras.", 200, 100)

      textSize(40);
      rect(xInfo, yInfo2, largura, altura);
      text("Voltar", 200, 200);

      image(imagem2, 30, 250, 120, 120);
      image(imagem3, 250, 250, 120, 120);


      if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yInfo2 && mouseY < yInfo2 + altura) {
        ellipse(50, 185, 30, 30);
      }

      if (mouseIsPressed && mouseX > xInfo && mouseX < xInfo + largura && mouseY > yInfo2 && mouseY < yInfo2 + altura) {
        info = 1
        tela = 1
      }
    }
  }

  if (tela == 3) {
    //tela de perguntas
    textAlign(CENTER);

    if (pergunta == 1) {
      textSize(20);
      text("__ __ a teacher.\n(Eu sou um professor)", 200, 50);

      textSize(40);

      rect(xResposta, yResposta, largura, altura);
      text("He is", 200, 120)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        ellipse(50, 105, 30, 30);
      }
      rect(xResposta, yResposta2, largura, altura);
      text("They are", 200, 220)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        ellipse(50, 205, 30, 30);
      }
      rect(xResposta, yResposta3, largura, altura);
      text("I am", 200, 320)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        ellipse(50, 305, 30, 30);
      }

      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        tela = 4;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        tela = 5;
      }
    }
    if (pergunta == 2) {
      textSize(20);
      text("She__ __.\n(Ela está dirigindo)", 200, 50);

      textSize(40);

      rect(xResposta, yResposta, largura, altura);
      text("is driving", 200, 120)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        ellipse(50, 105, 30, 30);
      }
      rect(xResposta, yResposta2, largura, altura);
      text("drives", 200, 220)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        ellipse(50, 205, 30, 30);
      }
      rect(xResposta, yResposta3, largura, altura);
      text("to drive", 200, 320)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        ellipse(50, 305, 30, 30);
      }

      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        tela = 4;
      }
    }
    if (pergunta == 3) {
      textSize(20);
      text("We__ __ engineers.\n(Nós somos engenheiros)", 200, 50);

      textSize(40);

      rect(xResposta, yResposta, largura, altura);
      text("is", 200, 120)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        ellipse(50, 105, 30, 30);
      }
      rect(xResposta, yResposta2, largura, altura);
      text("are", 200, 220)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        ellipse(50, 205, 30, 30);
      }
      rect(xResposta, yResposta3, largura, altura);
      text("am", 200, 320)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        ellipse(50, 305, 30, 30);
      }

      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        tela = 4;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        tela = 5;
      }
    }
    if (pergunta == 4) {
      textSize(20);
      text("My wife__ __ the dogs.\n(Minha esposa está \nalimentando os cachorros)", 200, 20);

      textSize(40);

      rect(xResposta, yResposta, largura, altura);
      text("feeds", 200, 120)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        ellipse(50, 105, 30, 30);
      }
      rect(xResposta, yResposta2, largura, altura);
      text("is fed", 200, 220)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        ellipse(50, 205, 30, 30);
      }
      rect(xResposta, yResposta3, largura, altura);
      text("is feeding", 200, 320)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        ellipse(50, 305, 30, 30);
      }

      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        tela = 4;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        tela = 5;
      }
    }
    if (pergunta == 5) {
      textSize(20);
      text("The children__ __ in the garden.\n(As crianças estão brincando no jardim)", 200, 50);

      textSize(40);

      rect(xResposta, yResposta, largura, altura);
      text("play", 200, 120)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        ellipse(50, 105, 30, 30);
      }
      rect(xResposta, yResposta2, largura, altura);
      text("playing", 200, 220)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        ellipse(50, 205, 30, 30);
      }
      rect(xResposta, yResposta3, largura, altura);
      text("are playing", 200, 320)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        ellipse(50, 305, 30, 30);
      }

      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        tela = 4;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        tela = 5;
      }
    }
    if (pergunta == 6) {
      textSize(20);
      text("She __ married.\n(Ela é casada)", 200, 50);

      textSize(40);

      rect(xResposta, yResposta, largura, altura);
      text("is", 200, 120)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        ellipse(50, 105, 30, 30);
      }
      rect(xResposta, yResposta2, largura, altura);
      text("am", 200, 220)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        ellipse(50, 205, 30, 30);
      }
      rect(xResposta, yResposta3, largura, altura);
      text("are", 200, 320)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        ellipse(50, 305, 30, 30);
      }

      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        tela = 4;
      }
    }
    if (pergunta == 7) {
      textSize(20);
      text("They __ students.\n(Eles são estudantes)", 200, 50);

      textSize(40);

      rect(xResposta, yResposta, largura, altura);
      text("are", 200, 120)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        ellipse(50, 105, 30, 30);
      }
      rect(xResposta, yResposta2, largura, altura);
      text("am", 200, 220)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        ellipse(50, 205, 30, 30);
      }
      rect(xResposta, yResposta3, largura, altura);
      text("is", 200, 320)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        ellipse(50, 305, 30, 30);
      }

      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        tela = 4;
      }
    }
    if (pergunta == 8) {
      textSize(20);
      text("I __ on a chair.\n(Estou sentado numa cadeira)", 200, 50);

      textSize(40);

      rect(xResposta, yResposta, largura, altura);
      text("am sit", 200, 120)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        ellipse(50, 105, 30, 30);
      }
      rect(xResposta, yResposta2, largura, altura);
      text("am sitting", 200, 220)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        ellipse(50, 205, 30, 30);
      }
      rect(xResposta, yResposta3, largura, altura);
      text("sat down", 200, 320)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        ellipse(50, 305, 30, 30);
      }

      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        tela = 4;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        tela = 5;
      }
    }
    if (pergunta == 9) {
      textSize(20);
      text("The bus __ too long to come.\n(O ônibus demora muito para vir)", 200, 50);

      textSize(40);

      rect(xResposta, yResposta, largura, altura);
      text("took", 200, 120)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        ellipse(50, 105, 30, 30);
      }
      rect(xResposta, yResposta2, largura, altura);
      text("is taking", 200, 220)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        ellipse(50, 205, 30, 30);
      }
      rect(xResposta, yResposta3, largura, altura);
      text("takes", 200, 320)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        ellipse(50, 305, 30, 30);
      }

      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        tela = 4;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        tela = 5;
      }
    }
    if (pergunta == 10) {
      textSize(20);
      text("Jack __ his homework.\n(Jack está fazendo sua tarefa de casa)", 200, 50);

      textSize(40);

      rect(xResposta, yResposta, largura, altura);
      text("does", 200, 120)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        ellipse(50, 105, 30, 30);
      }
      rect(xResposta, yResposta2, largura, altura);
      text("did", 200, 220)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        ellipse(50, 205, 30, 30);
      }
      rect(xResposta, yResposta3, largura, altura);
      text("is doing", 200, 320)
      if (mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        ellipse(50, 305, 30, 30);
      }

      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta3 && mouseY < yResposta3 + altura) {
        tela = 4;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta2 && mouseY < yResposta2 + altura) {
        tela = 5;
      }
      if (mouseIsPressed && mouseX > xResposta && mouseX < xResposta + largura && mouseY > yResposta && mouseY < yResposta + altura) {
        tela = 5;
      }
    }
  }

  if (tela == 4) {
    //correto
    textSize(40);
    textAlign(CENTER);
    rect(100, 30, 200, 50);
    text("Correto!", 200, 200);
    text("Continuar", 200, 70);
    if (mouseX > 100 && mouseX < 300 && mouseY > 30 && mouseY < 80) {
      ellipse(50, 55, 30, 30);
    }
    if (mouseIsPressed && mouseX > 100 && mouseX < 300 && mouseY > 30 && mouseY < 80) {
      if (pergunta < 10) {
        pergunta++;
        tela = 3;
      }
      if (pergunta == 10) {
        pergunta = 1;
        tela = 7;
      }
    }
  }

  if (tela == 5) {
    //incorreto
    textSize(40);
    textAlign(CENTER);
    rect(100, 50, 200, 50);
    text("Incorreto!", 200, 200);
    text("Voltar", 200, 90)

    if (mouseX > 100 && mouseX < 300 && mouseY > 50 && mouseY < 100) {
      ellipse(50, 75, 30, 30);
    }

    if (mouseIsPressed && mouseX > 100 && mouseX < 300 && mouseY > 50 && mouseY < 100) {
      pergunta = 1;
      tela = 1;
    }
  }
  
  if (tela == 6) {
    //instrução
    textAlign(CENTER);
    rect(100, 30, 200, 50);
    textSize(20);
    text("O objetivo do jogo é completar frases\n de acordo com sua tradução.\n Boa sorte!", 200, 200);

    textSize(40);
    text("Continuar", 200, 70);

    if (mouseX > 100 && mouseX < 300 && mouseY > 30 && mouseY < 80) {
      ellipse(50, 55, 30, 30);
    }

    if (mouseIsPressed && mouseX > 100 && mouseX < 300 && mouseY > 30 && mouseY < 80) {
      tela = 3;
    }
  }
  
  if (tela == 7) {
    //tela de parabenização
    textSize(40);
    textAlign(CENTER);
    text("Congratulations!", 200, 50)
    rect(100, 330, 200, 50);
    text("Voltar", 200, 370);

    if (mouseX > 100 && mouseX < 300 && mouseY > 330 && mouseY < 380) {
      ellipse(50, 355, 30, 30);
    }

    if (mouseIsPressed && mouseX > 100 && mouseX < 300 && mouseY > 330 && mouseY < 380) {
      pergunta = 1;
      tela = 1;
    }

    textSize(20);
    text("Você respondeu todas as\nperguntas corretamente.", 200, 100)


  }
}