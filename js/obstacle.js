class Obstacle {

  constructor() {
    // nodo
    this.node = document.createElement("img")
    this.node.src = "./images/obstacle_top.png"
    gameBoxNode.append(this.node)

    // dimensiones de obstaculos
    this.w = 60 // weight => ancho
    this.h = 200 // heigth => alto
    this.x = 540 // posicion en el eje X (desde la derecha)
    this.y = 0 // posicion en el eje Y (desde arriba)

    // ajustar los valores en el DOM
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`
    this.node.style.position = "absolute"
    this.node.style.left = `${this.x}px`
    this.node.style.top = `${this.y}px`

    // velocidad del obstaculos
  }

  // movimiento de los obstaculos

}