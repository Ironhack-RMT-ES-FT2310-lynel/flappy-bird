// * DOM ELEMENTS & GLOBAL VARIABLES
let startBtnNode = document.querySelector("#start-btn")
let splashScreenNode = document.querySelector("#splash-screen")
let gameScreenNode = document.querySelector("#game-screen")
let gameBoxNode = document.querySelector("#game-box")




// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  // creariamos nuestro gameLoop
  // iniciariamos el gameLoop
  let gameObject = new Game()
  console.log(gameObject)

  gameObject.gameLoop()

}





// * EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)




