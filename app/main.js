import BoardController from "./Controllers/BoardController.js"
import GameController from "./Controllers/GameController.js"

class App {
  boardController = new BoardController()

  gameController = new GameController()

}

window["app"] = new App();
