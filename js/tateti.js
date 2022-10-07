(function() {
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

  const btn00 = document.getElementById("btn00");
  btn00.addEventListener("click", function(evento) {
    tateti[0,0] = turno;
    btn00.textContent = turno;
    cambiarTurno();
  });
  const btn01 = document.getElementById("btn01");
  btn01.addEventListener("click", function(evento) {
    tateti[0,1] = turno;
    btn01.textContent = turno;
    cambiarTurno();
  });
  const btn02 = document.getElementById("btn02");
  btn02.addEventListener("click", function(evento) {
    tateti[0,2] = turno;
    btn02.textContent = turno;
    cambiarTurno();
  });
  const btn10 = document.getElementById("btn10");
  btn10.addEventListener("click", function(evento) {
    tateti[1,0] = turno;
    btn10.textContent = turno;
    cambiarTurno();
  });
  const btn11 = document.getElementById("btn11");
  btn11.addEventListener("click", function(evento) {
    tateti[1,1] = turno;
    btn11.textContent = turno;
    cambiarTurno();
  });
  const btn12 = document.getElementById("btn12");
  btn12.addEventListener("click", function(evento) {
    tateti[1,2] = turno;
    btn12.textContent = turno;
    cambiarTurno();
  });
  const btn20 = document.getElementById("btn20");
  btn20.addEventListener("click", function(evento) {
    tateti[2,0] = turno;
    btn20.textContent = turno;
    cambiarTurno();
  });
  const btn21 = document.getElementById("btn21");
  btn21.addEventListener("click", function(evento) {
    tateti[2,1] = turno;
    btn21.textContent = turno;
    cambiarTurno();
  });
  const btn22 = document.getElementById("btn22");
  btn22.addEventListener("click", function(evento) {
    tateti[2,2] = turno;
    btn22.textContent = turno;
    cambiarTurno();
  });
})();