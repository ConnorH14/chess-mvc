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
      if(ProxyState.currentNotation[Number(number) - ProxyState.moves.pawn.start] == '.'){
        showMoves.push(Number(number) - ProxyState.moves.pawn.start)
      }
    }
    if(ProxyState.currentNotation[Number(number) - ProxyState.moves.pawn.normal] == '.'){
      showMoves.push(Number(number) - ProxyState.moves.pawn.normal)
    }

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
      if(ProxyState.currentNotation[Number(number) + ProxyState.moves.pawn.start] == '.'){
        showMoves.push(Number(number) + ProxyState.moves.pawn.start)
      }
    }
    if(ProxyState.currentNotation[Number(number) + ProxyState.moves.pawn.normal] == '.'){
      showMoves.push(Number(number) + ProxyState.moves.pawn.normal)
    }

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

  moveWhiteKnight(id, number){
    console.log(`move the ${ProxyState.currentNotation[number]} on ${id}`)
    let showMoves = []
    let showCaptures = []

    const positions = ProxyState.positions

    if(ProxyState.boardPostitions[number].toString()[1] != '7' && ProxyState.boardPostitions[number].toString()[1] != '8'){
      if(ProxyState.boardPostitions[number].toString()[0] != 'a'){
        showMoves.push(Number(number) - ProxyState.moves.knight.yLeft)
      }
      if(ProxyState.boardPostitions[number].toString()[0] != 'h'){
        showMoves.push(Number(number) - ProxyState.moves.knight.yRight)
      }
    }
    if(ProxyState.boardPostitions[number].toString()[1] != '2' && ProxyState.boardPostitions[number].toString()[1] != '1'){
      if(ProxyState.boardPostitions[number].toString()[0] != 'h'){
        showMoves.push(Number(number) + ProxyState.moves.knight.yLeft)
      }
      if(ProxyState.boardPostitions[number].toString()[0] != 'a'){
        showMoves.push(Number(number) + ProxyState.moves.knight.yRight)
      }
    }
    if(ProxyState.boardPostitions[number].toString()[0] != 'a' && ProxyState.boardPostitions[number].toString()[0] != 'b'){
      showMoves.push(Number(number) - ProxyState.moves.knight.xNormal)
      showMoves.push(Number(number) + ProxyState.moves.knight.xInverse)
    }

    if(ProxyState.boardPostitions[number].toString()[0] != 'g' && ProxyState.boardPostitions[number].toString()[0] != 'h'){
      showMoves.push(Number(number) - ProxyState.moves.knight.xInverse)
      showMoves.push(Number(number) + ProxyState.moves.knight.xNormal)
    }
    
    for(let i = 0; i < showMoves.length; i++){
      if(positions[showMoves[i]] && ProxyState.currentNotation[showMoves[i]] == '.'){
        document.getElementById(positions[showMoves[i]].id).childNodes[0].classList.add('selected')
        document.getElementById(positions[showMoves[i]].id).setAttribute("onclick", `app.gameController.move('n', '${id}','${number}','${showMoves[i]}')`)
      }
    }
    
    for(let i = 0; i < showMoves.length; i++){
      if(showMoves[i] <= 64){
        if(ProxyState.currentNotation[showMoves[i]] != '.'){
          showCaptures.push(showMoves[i])
        }
      }
    }

    for(let i = 0; i < showCaptures.length; i++){
      if(showMoves[i] <= 64 && (!positions[showCaptures[i]].childNodes[0].childNodes[0].childNodes[0].classList.contains('white-piece'))){
        console.log()
        document.getElementById(positions[showCaptures[i]].id).childNodes[0].classList.add('capture')
        document.getElementById(positions[showCaptures[i]].id).setAttribute("onclick", `app.gameController.capture('n', '${id}','${number}','${showCaptures[i]}')`)
      }
    }
  }

  moveBlackKnight(id, number){
    console.log(`move the ${ProxyState.currentNotation[number]} on ${id}`)
    let showMoves = []
    let showCaptures = []

    const positions = ProxyState.positions

    if(ProxyState.boardPostitions[number].toString()[1] != '7' && ProxyState.boardPostitions[number].toString()[1] != '8'){
      if(ProxyState.boardPostitions[number].toString()[0] != 'a'){
        showMoves.push(Number(number) - ProxyState.moves.knight.yLeft)
      }
      if(ProxyState.boardPostitions[number].toString()[0] != 'h'){
        showMoves.push(Number(number) - ProxyState.moves.knight.yRight)
      }
    }
    if(ProxyState.boardPostitions[number].toString()[1] != '2' && ProxyState.boardPostitions[number].toString()[1] != '1'){
      if(ProxyState.boardPostitions[number].toString()[0] != 'h'){
        showMoves.push(Number(number) + ProxyState.moves.knight.yLeft)
      }
      if(ProxyState.boardPostitions[number].toString()[0] != 'a'){
        showMoves.push(Number(number) + ProxyState.moves.knight.yRight)
      }
    }
    if(ProxyState.boardPostitions[number].toString()[0] != 'a' && ProxyState.boardPostitions[number].toString()[0] != 'b'){
      showMoves.push(Number(number) - ProxyState.moves.knight.xNormal)
      showMoves.push(Number(number) + ProxyState.moves.knight.xInverse)
    }

    if(ProxyState.boardPostitions[number].toString()[0] != 'g' && ProxyState.boardPostitions[number].toString()[0] != 'h'){
      showMoves.push(Number(number) - ProxyState.moves.knight.xInverse)
      showMoves.push(Number(number) + ProxyState.moves.knight.xNormal)
    }
    
    for(let i = 0; i < showMoves.length; i++){
      if(positions[showMoves[i]] && ProxyState.currentNotation[showMoves[i]] == '.'){
        document.getElementById(positions[showMoves[i]].id).childNodes[0].classList.add('selected')
        document.getElementById(positions[showMoves[i]].id).setAttribute("onclick", `app.gameController.move('N', '${id}','${number}','${showMoves[i]}')`)
      }
    }
  }
}

export const positionsService = new PositionsService()