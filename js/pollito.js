class Pollito {

  constructor() {
    // nodo
    this.node = document.createElement("img") // crear el nodo
    this.node.src = "./images/flappy.png" // darle imagen
    gameBoxNode.append(this.node) // añadirlo al DOM

    // dimensiones y posicion del pollito
    this.w = 45 // weight => ancho
    this.h = 40 // heigth => alto
    this.x = 70 // posicion en el eje X (desde la derecha)
    this.y = 200 // posicion en el eje Y (desde arriba)


    // ajustar los valores en el DOM
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`
    this.node.style.position = "absolute" // para poder posicionar al pollito en el eje X o Y
    this.node.style.left = `${this.x}px`
    this.node.style.top = `${this.y}px`


    // velocidad del pollito
    this.gravitySpeed = 2;
    this.jumpSpeed = 38;
  }

  // efecto de gravedad al pollito
  gravityEffect = () => {
    // console.log("efecto de gravedad")

    this.y += this.gravitySpeed; // actualiza el valor
    this.node.style.top = `${this.y}px` // actualiza el DOM


  }

  // salto del pollito  
  jump = () => {

    if (this.y > this.jumpSpeed) {
      // no nos permite saltar si el pollito al saltar, saldrian del canvas
      this.y -= this.jumpSpeed
      this.node.style.top = `${this.y}px` // actualiza el DOM
    }

    // si quieren un salto más progresivo
    // crear un booleano que dice si el pollito está saltando o no
    // cambiar el booleano a true y 3 segundos despues lo cambia a false
    // el salto estará en el gameLoop

  }


  

}