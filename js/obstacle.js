class Obstacle {

  constructor( type, yPosition ) {
    // type => o "top" o "bottom"

    // nodo
    this.node = document.createElement("img")
    if (type === "top") {
      this.node.src = "./images/obstacle_top.png"
    } else {
      this.node.src = "./images/obstacle_bottom.png"
    }
    gameBoxNode.append(this.node)

    // dimensiones de obstaculos
    this.w = 60 // weight => ancho
    this.h = 200 // heigth => alto
    this.x = 540 // posicion en el eje X (desde la derecha)
    this.y = yPosition // posicion en el eje Y (desde arriba)
    // aleatorio entre -100 y 0

    // ajustar los valores en el DOM
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`
    this.node.style.position = "absolute"
    this.node.style.left = `${this.x}px`
    this.node.style.top = `${this.y}px`

    // velocidad del obstaculos
    this.speed = 2;
  }

  // movimiento de los obstaculos
  automaticMovement = () => {

    this.x -= this.speed
    this.node.style.left = `${this.x}px`

  }

}