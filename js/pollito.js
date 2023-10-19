class Pollito {

  constructor() {
    // nodo
    this.node = document.createElement("img") // crear el nodo
    this.node.src = "./images/flappy.png" // darle imagen
    gameBoxNode.append(this.node) // añadirlo al DOM

    // dimensiones y posicion del pollito
    this.w = 50 // weight => ancho
    this.h = 50 // heigth => alto
    this.x = 70 // posicion en el eje X (desde la derecha)
    this.y = 200 // posicion en el eje Y (desde arriba)


    // ajustar los valores en el DOM
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`
    this.node.style.left = `${this.x}px`
    this.node.style.top = `${this.y}px`
    this.node.style.position = "absolute" // para poder posicionar al pollito en el eje X o Y


    // velocidad del pollito
  }

  // salto del pollito
  // efecto de gravedad al pollito
  // colision de los obstaculos con el pollito

}