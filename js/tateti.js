(function() {
  const jugador1 = "X";
  const jugador2 = "O";
  let turno = jugador1;
  let tateti = new Array();
  
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
    if (tateti[0] [0] === tateti [0][1] === [0] [2] ) {
      hayGanador = true;
    } else if (tateti[1] [0] === tateti [1][1] === [1] [2] ) {
      hayGanador = true;
    } else if (tateti[2] [0] === tateti [2][1] === [2] [2] ) {
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
  });
})();