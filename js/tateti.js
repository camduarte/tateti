(function() {
  const pizarra = document.getElementById("pizarra");
  const pincel = pizarra.getContext("2d");
  const colorMarron = "rgb(208, 122, 0)"

  // Ubicación de los símbolos.
  const posX00 = 25;
  const posY00 = 91;
  
  const posX01 = 125;
  const posY01 = 91;
  
  const posX02 = 225;
  const posY02 = 91;
 
  const posX10 = 25;
  const posY10 = 191;
 
  const posX11 = 125; 
  const posY11 = 191;
  
  const posX12 = 225;
  const posY12 = 191;

  const posX20 = 25;
  const posY20 = 291;

  const posX21 = 125;
  const posY21 = 291;

  const posX22 = 225;
  const posY22 = 291;

  const jugador1 = "X";
  const jugador2 = "O";
  let turno = jugador1;

  // array 3x3 representado el tablero del tateti.
  const tateti = new Array(3);
  tateti[0] = new Array(3);
  tateti[1] = new Array(3);
  tateti[2] = new Array(3);

  /**
   * Cambia el turno del jugador.
   */
  function cambiarTurno()  {
    switch(turno) {
      case jugador1:
        turno = jugador2;
        break;
      case jugador2:
        turno = jugador1;
        break;
      default:
        console.log ("Esto no debería ocurrir.");
        break;
    }
  }
  
  /**
   * Verifica si hay un ganador.
   * @returns El jugador ganador.
   */
  function verificarGanador () {
    let hayGanador = false;
    //combinaciones ganadoras.
    if (tateti[0][0] === tateti [0][1] === [0][2] ) {
      hayGanador = true;
    } else if (tateti[1][0] === tateti [1][1] === [1][2] ) {
      hayGanador = true;
    } else if (tateti[2][0] === tateti [2][1] === [2][2] ) {
      hayGanador = true;
    }
    return hayGanador;
  }
  
  /**
   * Permite al jugador escoger una posición dentro del tateti.
   * @param {La posición dentro del tateti.} posicion 
   */
  function jugar(posicion) {
    tateti [posicion] = turno;
    if (verificarGanador) {
      aler ("Gana " + turno);
    } else {
      cambiarTurno();
    }
  }

  /**
   * Dibuja el tateti.
   */
  function dibujarTateti() {
    pincel.strokeStyle = colorMarron;
    pincel.lineWidth = 6;
    pincel.beginPath();

    pincel.moveTo(100,0);
    pincel.lineTo(80,300);
    pincel.moveTo(200,0);
    pincel.lineTo(180,300);
    
    pincel.moveTo(0,100);
    pincel.lineTo(300, 100);
    pincel.moveTo(0, 200);
    pincel.lineTo(300, 200);

    pincel.stroke();
  }

  /**
   * Dibuja X o O según corresoponda.
   * 
   * @param x la posición en el eje x del símbolo.
   * @param y la posición en el eje y del símbolo.
   */
  function dibujarSimbolo(x,y) {
    let pressStart2PFuente = new FontFace("Press Start 2P", "url(https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK3nRivN04w.woff2) format('woff2')");

    pressStart2PFuente.load().then((font) => {   
    document.fonts.add(font);
    console.log("Font loaded");

    pincel.fillStyle =  colorMarron;
    pincel.font = "75px 'Press Start 2P', cursive";

    if((x > 0 && x < 100) && (y > 0 && y < 100)) {
      pincel.fillText(turno, posX00, posY00);
    } else if((x > 100 && x < 200) && (y > 0 && y < 100)) {
      pincel.fillText(turno, posX01, posY01);
    } else if((x > 200 && x < 300) && (y > 0 && y < 100)) {
      pincel.fillText(turno, posX02, posY02);
    } else if((x > 0 && x < 100) && (y > 100 && y < 200)) {
      pincel.fillText(turno, posX10, posY10);
    } else if((x > 100 && x < 200) && (y > 100 && y < 200)) {
      pincel.fillText(turno, posX11, posY11);
    } else if((x > 200 && x < 300) && (y > 100 && y < 200)) {
      pincel.fillText(turno, posX12, posY12);
    } else if((x > 0 && x < 100) && (y > 200 && y < 300)) {
      pincel.fillText(turno, posX20, posY20);
    } else if((x > 100 && x < 200) && (y > 200 && y < 300)) {
      pincel.fillText(turno, posX21, posY21);
    } else if((x > 200 && x < 300) && (y > 200 && y < 300)) {
      pincel.fillText(turno, posX22, posY22);
    }
    });
  }

  dibujarTateti();

  pizarra.addEventListener("click", function(evento) {
    const rect = pizarra.getBoundingClientRect();
    const x = evento.clientX - rect.left;
    const y = evento.clientY - rect.top;
    dibujarSimbolo(x, y);
    cambiarTurno();
  });
})();