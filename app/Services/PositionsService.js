import { ProxyState } from "../AppState.js"

class PositionsService {
  moveWhitePawn(id, number){
    let showMoves = []
    let showCaptures = []

    const positions = ProxyState.positions
    const captureLeft = ProxyState.currentNotation[Number(number) - ProxyState.moves.pawn.captureLeft]
    const captureRight = ProxyState.currentNotation[Number(number) - ProxyState.moves.pawn.captureRight]

    let checkLeft
    let checkRight

    if(document.getElementById(positions[Number(number) - ProxyState.moves.pawn.captureLeft].id).childNodes[0].childNodes[0].childNodes[0]){
      checkLeft = document.getElementById(positions[Number(number) - ProxyState.moves.pawn.captureLeft].id).childNodes[0].childNodes[0].childNodes[0].classList.contains('white-piece')
    }
    if(document.getElementById(positions[Number(number) - ProxyState.moves.pawn.captureRight].id).childNodes[0].childNodes[0].childNodes[0]){
      checkRight = document.getElementById(positions[Number(number) - ProxyState.moves.pawn.captureRight].id).childNodes[0].childNodes[0].childNodes[0].classList.contains('white-piece')
    }

    // CAPTURES
    if(captureLeft != '.' && !checkLeft && (ProxyState.boardPostitions[number].toString()[0] != 'a')){
      showCaptures.push(Number(number) - ProxyState.moves.pawn.captureLeft)
    }
    if(captureRight != '.' && !checkRight && (ProxyState.boardPostitions[number].toString()[0] != 'h')){
      showCaptures.push(Number(number) - ProxyState.moves.pawn.captureRight)
    }

    // MOVES
    if((ProxyState.currentNotation[number] == ProxyState.startingNotation[number]) && (ProxyState.currentNotation[Number(number) - 8] == '.')){
      showMoves.push(Number(number) - ProxyState.moves.pawn.start)
    }
    showMoves.push(Number(number) - ProxyState.moves.pawn.normal)

    // ADD AND RESET
    showMoves.forEach(move =>
      document.getElementById(positions[move].id).childNodes[0].classList.add('selected')
    )
    showMoves.forEach(move =>
      document.getElementById(positions[move].id).setAttribute("onclick", `app.gameController.move('p', '${id}','${number}','${move}')`)
    )
    showCaptures.forEach(cap =>
      document.getElementById(positions[cap].id).childNodes[0].classList.add('capture')
    )
    showCaptures.forEach(cap =>
      document.getElementById(positions[cap].id).setAttribute("onclick", `app.gameController.capture('p', '${id}','${number}','${cap}')`)
    )
  }

  moveBlackPawn(id, number){
    let showMoves = []
    let showCaptures = []

    const positions = ProxyState.positions
    const captureLeft = ProxyState.currentNotation[Number(number) + ProxyState.moves.pawn.captureLeft]
    const captureRight = ProxyState.currentNotation[Number(number) + ProxyState.moves.pawn.captureRight]

    let checkLeft
    let checkRight

    if(document.getElementById(positions[Number(number) + ProxyState.moves.pawn.captureLeft].id).childNodes[0].childNodes[0].childNodes[0]){
      checkLeft = document.getElementById(positions[Number(number) + ProxyState.moves.pawn.captureLeft].id).childNodes[0].childNodes[0].childNodes[0].classList.contains('black-piece')
    }
    if(document.getElementById(positions[Number(number) + ProxyState.moves.pawn.captureRight].id).childNodes[0].childNodes[0].childNodes[0]){
      checkRight = document.getElementById(positions[Number(number) + ProxyState.moves.pawn.captureRight].id).childNodes[0].childNodes[0].childNodes[0].classList.contains('black-piece')
    }
    
    // CAPTURES
    if(captureLeft != '.' && !checkLeft && (ProxyState.boardPostitions[number].toString()[0] != 'h')){
      showCaptures.push(Number(number) + ProxyState.moves.pawn.captureLeft)
    }
    if(captureRight != '.' && !checkRight && (ProxyState.boardPostitions[number].toString()[0] != 'a')){
      showCaptures.push(Number(number) + ProxyState.moves.pawn.captureRight)
    }

    // MOVES
    if((ProxyState.currentNotation[number] == ProxyState.startingNotation[number]) && (ProxyState.currentNotation[Number(number) + 8] == '.')){
      showMoves.push(Number(number) + ProxyState.moves.pawn.start)
    }
    showMoves.push(Number(number) + ProxyState.moves.pawn.normal)

    // ADD AND RESET
    showMoves.forEach(move =>
      document.getElementById(positions[move].id).childNodes[0].classList.add('selected')
    )
    showMoves.forEach(move =>
      document.getElementById(positions[move].id).setAttribute("onclick", `app.gameController.move('P', '${id}','${number}','${move}')`)
    )
    showCaptures.forEach(cap =>
      document.getElementById(positions[cap].id).childNodes[0].classList.add('capture')
    )
    showCaptures.forEach(cap =>
      document.getElementById(positions[cap].id).setAttribute("onclick", `app.gameController.capture('P', '${id}','${number}','${cap}')`)
    )
  }
}

export const positionsService = new PositionsService()