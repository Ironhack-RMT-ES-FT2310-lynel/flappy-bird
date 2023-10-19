console.log("en clase game.js");

class Game {
  constructor() {
    // seccion de propiedades del juego (cosas)

    // pollito
    this.pollito = new Pollito();

    // obstaculos
    // this.oneObstacle = new Obstacle()
    this.obstacleArr = [];

    // timer
    this.timer = 0; // 60 veces por segundo

    // ejemplo de agregar elementos con setInterval
    // setInterval(() => {
    //   let newObstacle = new Obstacle()
    //   this.obstacleArr.push(newObstacle)
    // }, 2000)

    this.isGameOn = true;
  }

  // seccion de metodos del juego (acciones)

  // aparecer y desaparecer de los obstaculos
  obstacleAppear = () => {
    // determinar, cuando voy a agregar elementos al array
    if (this.timer % 120 === 0) {
      // cuando el timer sea divisible entre 120 => han pasado 2 segundo

      let randomPosition = Math.random() * -100; // -100 y 0

      let newObstacleTop = new Obstacle("top", randomPosition);
      this.obstacleArr.push(newObstacleTop);

      let newObstacleBottom = new Obstacle("bottom", randomPosition + 300);
      this.obstacleArr.push(newObstacleBottom);

      console.log(this.obstacleArr.length)

    }

  };
  
  // HACER DESAPARECER LOS OBSTACULOS
  obstacleDisapear = () => {
    if (this.obstacleArr[0].x < -60) {
      // this.obstacleArr.splice(0, 1)
      this.obstacleArr[0].node.remove() // remueve el nodo del DOM
      this.obstacleArr.shift() // lo elimina del array para que no se siga moviendo o colisionando.
    }
  }

  // colision de los obstaculos con el pollito
  collisionCheckPollitoObstacles = () => {
    this.obstacleArr.forEach((eachObstacle) => {
      // eachObstacle es cada obstaculo (w, h, x, y)
      // this.pollito es el unico pollito del juego (w, h, x, y)

      if (
        eachObstacle.x < this.pollito.x + this.pollito.w &&
        eachObstacle.x + eachObstacle.w > this.pollito.x &&
        eachObstacle.y < this.pollito.y + this.pollito.h &&
        eachObstacle.y + eachObstacle.h > this.pollito.y
      ) {
        // Collision detected!
        console.log("el pollito se entrello contra el obstaculo");
        this.gameOver()
      }
    });
  };

  // gameover funcion
  gameOver = () => {
    // 1. la recursion deberia terminar
    this.isGameOn = false;
    // 1.1 Si tenemos intervalos, deberiamos limpiarlos
    // 2. ocultar la pantalla de juego
    gameScreenNode.style.display = "none";
    // 3. mostrar la pantalla de Game Over
    gameOverScreenNode.style.display = "flex";
  }

  collisionCheckPollitoFloor = () => {

    if (this.pollito.y > 360) {
      this.gameOver()
    }

  }

  // gameLoop
  gameLoop = () => {
    // console.log("ejecutando gameLoop")
    // console.log(this.timer)

    this.pollito.gravityEffect();
    // this.oneObstacle.automaticMovement()
    this.obstacleArr.forEach((eachObstacle) => {
      // esto moveria TODOS los tubos del array
      eachObstacle.automaticMovement();
    });
    this.obstacleAppear();
    this.collisionCheckPollitoObstacles();
    this.obstacleDisapear()
    this.collisionCheckPollitoFloor()

    // recursion
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

// BONUS
// contador de puntos
// sonidos
// (animaciones) que el pollito cambie de posicion si va callendo
// boton para reiniciar el juego
// boton de pausa
