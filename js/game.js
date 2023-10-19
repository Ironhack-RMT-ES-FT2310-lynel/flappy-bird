console.log("en clase game.js")

class Game {

  constructor() {
    // seccion de propiedades del juego (cosas)

    // pollito
    this.pollito = new Pollito()

    // obstaculos
    // this.oneObstacle = new Obstacle()
    this.obstacleArr = []


    // timer
    this.timer = 0; // 60 veces por segundo

    // ejemplo de agregar elementos con setInterval
    // setInterval(() => {
    //   let newObstacle = new Obstacle()
    //   this.obstacleArr.push(newObstacle)
    // }, 2000)  

  }

  // seccion de metodos del juego (acciones)



  // aparecer y desaparecer de los obstaculos
  obstacleAppear = () => {

    // determinar, cuando voy a agregar elementos al array
    if (this.timer % 120 === 0) {

      // cuando el timer sea divisible entre 120 => han pasado 2 segundo

      let randomPosition = Math.random() * -100 // -100 y 0

      let newObstacleTop = new Obstacle("top", randomPosition)
      this.obstacleArr.push(newObstacleTop)

      let newObstacleBottom = new Obstacle("bottom", randomPosition + 300)
      this.obstacleArr.push(newObstacleBottom)

    }

  }
  
  
  // gameLoop
  gameLoop = () => {
    // console.log("ejecutando gameLoop")
    // console.log(this.timer)
    
    this.pollito.gravityEffect()
    // this.oneObstacle.automaticMovement()
    this.obstacleArr.forEach((eachObstacle) => {
      // esto moveria TODOS los tubos del array
      eachObstacle.automaticMovement()
    })
    this.obstacleAppear()
    
    // recursion
    this.timer++
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