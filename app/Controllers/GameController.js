import { ProxyState } from "../AppState.js";
import { positionsService } from "../Services/PositionsService.js"

//Public
export default class GameController {
  constructor() {
    
  }
  showMoves(id, number){
  
    // RESETS BOARD
    ProxyState.boardPostitions.forEach(bp =>
      document.getElementById(bp).childNodes[0].classList.remove('selected')
    )
    ProxyState.boardPostitions.forEach(bp =>
      document.getElementById(bp).childNodes[0].classList.remove('capture')
    )
    ProxyState.boardPostitions.forEach((bp, i) =>
      document.getElementById(bp).setAttribute("onclick", `app.gameController.showMoves('${ProxyState.boardPostitions[i]}','${i}')`)
    )
    
    console.log("update", id, ProxyState.currentNotation[number])
  
    
    // MOVES IF WHITE TURN
    if(ProxyState.whiteTurn){ //--TODO remove // for turn function
      // MOVES FOR WHITE PAWN
      if(ProxyState.currentNotation[number] == 'p'){
        positionsService.moveWhitePawn(id, number)
      }
      // MOVES FOR BLACK KNIGHT
      if(ProxyState.currentNotation[number] == 'n'){
        positionsService.moveWhiteKnight(id, number)
      }
    }

    // MOVES AVAILABLE IF IT IS NOT WHITES TURN
    if(!ProxyState.whiteTurn){ //--TODO remove // for turn function
      // MOVES FOR BLACK PAWN
      if(ProxyState.currentNotation[number] == 'P'){
        positionsService.moveBlackPawn(id, number)
      }
      // MOVES FOR BLACK KNIGHT
      if(ProxyState.currentNotation[number] == 'N'){
        positionsService.moveBlackKnight(id, number)
      }
    }
  }

  move(item, id, number, move){
    if(ProxyState.whiteTurn){
      ProxyState.whiteTurn = false
    } else {
      ProxyState.whiteTurn = true
    }
    console.log('move the', item, 'at', id, 'from', number, 'to', move)
    if(ProxyState.currentNotation[move] == '.'){
      ProxyState.currentNotation[move] = item
      ProxyState.currentNotation[number] = '.'
      ProxyState.currentNotation = ProxyState.currentNotation
      ProxyState.boardPostitions.forEach((bp, i) =>
        document.getElementById(bp).setAttribute("onclick", `app.gameController.showMoves('${ProxyState.boardPostitions[i]}','${i}')`)
      )
    }
  }

  capture(item, id, number, cap){
    if(ProxyState.whiteTurn){
      ProxyState.whiteTurn = false
    } else {
      ProxyState.whiteTurn = true
    }
    console.log(`The ${item} on ${id} moves from ${number} to ${cap} and takes the ${ProxyState.currentNotation[cap]} on ${ProxyState.positions[cap].id}`)
    ProxyState.currentNotation[number] = '.'
    ProxyState.currentNotation[cap] = item
    ProxyState.currentNotation = ProxyState.currentNotation
    ProxyState.boardPostitions.forEach((bp, i) =>
      document.getElementById(bp).setAttribute("onclick", `app.gameController.showMoves('${ProxyState.boardPostitions[i]}','${i}')`)
    )
  }

}
