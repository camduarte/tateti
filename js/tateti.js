(function() {
  const pizarra = document.getElementById("pizarra");
  const pincel = pizarra.getContext("2d");
  const colorMarron = "rgb(208, 122, 0)";
  const colorGris = "rgb(76, 78, 74)";

  // Ubicación de los símbolos.
  const posX00 = 15;
  const posY00 = 91;
  
  const posX01 = 115;
  const posY01 = 91;
  
  const posX02 = 213;
  const posY02 = 91;
 
  const posX10 = 10;
  const posY10 = 191;
 
  const posX11 = 108; 
  const posY11 = 191;
  
  const posX12 = 208;
  const posY12 = 191;

  const posX20 = 2;
  const posY20 = 291;

  const posX21 = 102;
  const posY21 = 291;

  const posX22 = 200;
  const posY22 = 291;

  const jugador1 = "X";
  const jugador2 = "O";
  let juegoActivo = false;
  let turno = jugador1;

  // array 3x3 representando la tabla del tatetí.
  let tateti;

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
   */
  function verificarGanador() {
    let hayGanador = false;
    //combinaciones ganadoras.
    if (tateti[0][0] != undefined && tateti[0][0] === tateti [0][1] && tateti[0][0] === tateti[0][2] ) {
      hayGanador = true;
      dibujarRaya(0,50,300,50);
    } else if (tateti[1][0] != undefined && tateti[1][0] === tateti [1][1] && tateti[1][0] === tateti[1][2] ) {
      hayGanador = true;
      dibujarRaya(0,150,300,150);
    } else if (tateti[2][0] != undefined && tateti[2][0] === tateti [2][1] && tateti[2][0] === tateti[2][2] ) {
      hayGanador = true;
      dibujarRaya(0,250,300,250);
    } else if (tateti[0][0] != undefined && tateti[0][0] === tateti [1][0] && tateti[0][0] === tateti[2][0] ) {
      hayGanador = true;
      dibujarRaya(50,0,30,300);
    } else if (tateti[0][1] != undefined && tateti[0][1] === tateti [1][1] && tateti[0][1] === tateti[2][1] ) {
      hayGanador = true;
      dibujarRaya(150,0,130,300);
    } else if (tateti[0][2] != undefined && tateti[0][2] === tateti [1][2] && tateti[0][2] === tateti[2][2] ) {
      hayGanador = true;
      dibujarRaya(250,0,230,300);
    } else if (tateti[0][0] != undefined && tateti[0][0] === tateti [1][1] && tateti[0][0] === tateti[2][2] ) {
      hayGanador = true;
      dibujarRaya(0,0,300,300);
    } else if (tateti[0][2] != undefined && tateti[0][2] === tateti [1][1] && tateti[0][2] === tateti[2][0] ) {
      hayGanador = true;
      dibujarRaya(300,0,0,300);
    }

    if(hayGanador) {
      juegoActivo = false;
    } else {
      cambiarTurno();
    }
  }
  
  /**
   * Dibuja la tabla del tatetí.
   */
  function dibujarTateti() {
    pincel.strokeStyle = colorMarron;
    pincel.lineWidth = 8;
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
   * 
   * @param xInicio Posición inicial en el eje x de la raya. 
   * @param yInicio Posición inicial en el eje y de la raya.
   * @param xFin Posición final en el eje x de la raya.
   * @param yFin Posición final en el eje y de la raya.
   */
  function dibujarRaya(xInicio, yInicio, xFin, yFin) {
    pincel.strokeStyle = colorGris;
    pincel.lineWidth = 5;

    pincel.beginPath();
    pincel.moveTo(xInicio,yInicio);
    pincel.lineTo(xFin,yFin);
    pincel.stroke();
  }

  /**
   * Dibuja X o O según corresponda.
   * 
   * @param x la posición en el eje x del símbolo.
   * @param y la posición en el eje y del símbolo.
   */
  function dibujarSimbolo(x,y) {
    pincel.fillStyle =  colorMarron;
    pincel.font = "75px 'Press Start 2P', cursive";

    if(x > 0 && x < 100 && y > 0 && y < 100 && tateti[0][0] == undefined) {
      tateti[0][0] = turno;
      pincel.fillText(turno, posX00, posY00);
      verificarGanador();
    } else if(x > 100 && x < 200 && y > 0 && y < 100 && tateti[0][1] == undefined) {
      tateti[0][1] = turno;
      pincel.fillText(turno, posX01, posY01);
      verificarGanador();
    } else if(x > 200 && x < 300 && y > 0 && y < 100 && tateti[0][2] == undefined) {
      tateti[0][2] = turno;
      pincel.fillText(turno, posX02, posY02);
      verificarGanador();
    } else if(x > 0 && x < 100 && y > 100 && y < 200 && tateti[1][0] == undefined) {
      tateti[1][0] = turno;
      pincel.fillText(turno, posX10, posY10);
      verificarGanador();
    } else if(x > 100 && x < 200 && y > 100 && y < 200 && tateti[1][1] == undefined) {
      tateti[1][1] = turno;
      pincel.fillText(turno, posX11, posY11);
      verificarGanador();
    } else if(x > 200 && x < 300 && y > 100 && y < 200 && tateti[1][2] == undefined) {
      tateti[1][2] = turno;
      pincel.fillText(turno, posX12, posY12);
      verificarGanador();
    } else if(x > 0 && x < 100 && y > 200 && y < 300 && tateti[2][0] == undefined) {
      tateti[2][0] = turno;
      pincel.fillText(turno, posX20, posY20);
      verificarGanador();
    } else if(x > 100 && x < 200 && y > 200 && y < 300 && tateti[2][1] == undefined) {
      tateti[2][1] = turno;
      pincel.fillText(turno, posX21, posY21);
      verificarGanador();
    } else if(x > 200 && x < 300 && y > 200 && y < 300 && tateti[2][2] == undefined) {
      tateti[2][2] = turno;
      pincel.fillText(turno, posX22, posY22);
      verificarGanador();
    }
  }

  /**
   * Inicia el juego.
   */
  function iniciarJuego() {
    tateti = new Array(3);
    tateti[0] = new Array(3);
    tateti[1] = new Array(3);
    tateti[2] = new Array(3);
    dibujarTateti();
    juegoActivo = true;
  }

  /**
   * Reinicia el juego.
   */
  function reiniciarJuego(){
    pincel.clearRect(0, 0, pizarra.width, pizarra.height); // limpio la pizarra.
    iniciarJuego();
  }

  iniciarJuego();

  pizarra.addEventListener("click", function(evento) {
    if(juegoActivo) {
      const rect = pizarra.getBoundingClientRect();
      const x = evento.clientX - rect.left;
      const y = evento.clientY - rect.top;
      dibujarSimbolo(x, y);
    }
  });

  const btnJuegoNuevo = document.getElementById("btn-nuevo-juego");
  btnJuegoNuevo.addEventListener("click", function() {
    reiniciarJuego();
  });
})();