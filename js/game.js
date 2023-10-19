console.log("en clase game.js")

class Game {

  constructor() {
    // seccion de propiedades del juego (cosas)

    // pollito
    this.pollito = new Pollito()

    // obstaculos
      // nodo
      // dimensiones de obstaculos
      // velocidad del obstaculos

    // timer
    this.timer = 0; // 60 veces por segundo

  }

  // seccion de metodos del juego (acciones)



  // aparecer y desaparecer de los obstaculos
  // movimiento de los obstaculos
  
  // gameLoop
  gameLoop = () => {
    // console.log("ejecutando gameLoop")
    this.timer++
    // console.log(this.timer)


    // recursion
    requestAnimationFrame( this.gameLoop )

  }

  // gameover funcion

  
}


// BONUS
// contador de puntos
// sonidos
// (animaciones) que el pollito cambie de posicion si va callendo
// boton para reiniciar el juego
// boton de pausa