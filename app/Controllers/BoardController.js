import { ProxyState } from "../AppState.js";


//Private
function _drawBoard(){
  
  let template = ''
  let board = document.getElementById('chess-board')

  for(let i = 0; i < ProxyState.boardPostitions.length; i++) {
    if(i < 8 || i >= 16  && i < 24 || i >= 32 && i < 40 || i >= 48 && i < 56 ){
      if(i % 2 != 0){
        template += /*html*/`
        <div onclick="app.gameController.showMoves('${ProxyState.boardPostitions[i]}', '${i}')" class="chess-square dark-square" id="${ProxyState.boardPostitions[i]}"><p></p></div>
        `
      } else {
        template += /*html*/`
        <div onclick="app.gameController.showMoves('${ProxyState.boardPostitions[i]}', '${i}')" class="chess-square light-square" id="${ProxyState.boardPostitions[i]}"><p></p></div>
        `
      }
      
    } else {
      if(i % 2 == 0){
        template += /*html*/`
        <div onclick="app.gameController.showMoves('${ProxyState.boardPostitions[i]}', '${i}')" class="chess-square dark-square" id="${ProxyState.boardPostitions[i]}"><p></p></div>
        `
      } else {
        template += /*html*/`
        <div onclick="app.gameController.showMoves('${ProxyState.boardPostitions[i]}', '${i}')" class="chess-square light-square" id="${ProxyState.boardPostitions[i]}"><p></p></div>
        `
      }
    }
    
  }
  board.innerHTML = template
  ProxyState.positions = [

    document.getElementById('a8'),
    document.getElementById('b8'),
    document.getElementById('c8'),
    document.getElementById('d8'),
    document.getElementById('e8'),
    document.getElementById('f8'),
    document.getElementById('g8'),
    document.getElementById('h8'),
  
    document.getElementById('a7'),
    document.getElementById('b7'),
    document.getElementById('c7'),
    document.getElementById('d7'),
    document.getElementById('e7'),
    document.getElementById('f7'),
    document.getElementById('g7'),
    document.getElementById('h7'),
  
  
    document.getElementById('a6'),
    document.getElementById('b6'),
    document.getElementById('c6'),
    document.getElementById('d6'),
    document.getElementById('e6'),
    document.getElementById('f6'),
    document.getElementById('g6'),
    document.getElementById('h6'),
  
    document.getElementById('a5'),
    document.getElementById('b5'),
    document.getElementById('c5'),
    document.getElementById('d5'),
    document.getElementById('e5'),
    document.getElementById('f5'),
    document.getElementById('g5'),
    document.getElementById('h5'),
  
    document.getElementById('a4'),
    document.getElementById('b4'),
    document.getElementById('c4'),
    document.getElementById('d4'),
    document.getElementById('e4'),
    document.getElementById('f4'),
    document.getElementById('g4'),
    document.getElementById('h4'),
  
    document.getElementById('a3'),
    document.getElementById('b3'),
    document.getElementById('c3'),
    document.getElementById('d3'),
    document.getElementById('e3'),
    document.getElementById('f3'),
    document.getElementById('g3'),
    document.getElementById('h3'),
  
    document.getElementById('a2'),
    document.getElementById('b2'),
    document.getElementById('c2'),
    document.getElementById('d2'),
    document.getElementById('e2'),
    document.getElementById('f2'),
    document.getElementById('g2'),
    document.getElementById('h2'),
  
    document.getElementById('a1'),
    document.getElementById('b1'),
    document.getElementById('c1'),
    document.getElementById('d1'),
    document.getElementById('e1'),
    document.getElementById('f1'),
    document.getElementById('g1'),
    document.getElementById('h1')
  
  ]
}

function _startGame() {

  // RNBKQBNR
  // PPPPPPPP
  // ........
  // ........
  // ........
  // ........
  // pppppppp
  // rnbkqbnr
  
  _writeNotation()

}

function _writeNotation(){
  const notation = ProxyState.currentNotation
  const positions = ProxyState.positions
  let returnNotation = []
  for(let i = 0; i < notation.length; i++){
    if(notation[i] == 'p'){
      returnNotation[i] = ProxyState.icons.whitePawnIcon
    }
    if(notation[i] == 'r'){
      returnNotation[i] = ProxyState.icons.whiteRookIcon
    }
    if(notation[i] == 'n'){
      returnNotation[i] = ProxyState.icons.whiteKnightIcon
    }
    if(notation[i] == 'b'){
      returnNotation[i] = ProxyState.icons.whiteBishopIcon
    }
    if(notation[i] == 'q'){
      returnNotation[i] = ProxyState.icons.whiteQueenIcon
    }
    if(notation[i] == 'k'){
      returnNotation[i] = ProxyState.icons.whiteKingIcon
    }

    if(notation[i] == 'P'){
      returnNotation[i] = ProxyState.icons.blackPawnIcon
    }
    if(notation[i] == 'R'){
      returnNotation[i] = ProxyState.icons.blackRookIcon
    }
    if(notation[i] == 'N'){
      returnNotation[i] = ProxyState.icons.blackKnightIcon
    }
    if(notation[i] == 'B'){
      returnNotation[i] = ProxyState.icons.blackBishopIcon
    }
    if(notation[i] == 'Q'){
      returnNotation[i] = ProxyState.icons.blackQueenIcon
    }
    if(notation[i] == 'K'){
      returnNotation[i] = ProxyState.icons.blackKingIcon
    }

    if(notation[i] == '.'){
      returnNotation[i] = ProxyState.icons.blankIcon
    }
  }

  for(let i = 0; i < positions.length; i++){
    positions[i].innerHTML = returnNotation[i]
  }
  if(ProxyState.whiteTurn){
    document.getElementById('current-turn').innerText = 'White'
  }else{
    document.getElementById('current-turn').innerText = 'Black'
  }
}

//Public
export default class BoardController {
  constructor() {
    _drawBoard()
    _startGame()
    ProxyState.on('currentNotation', _writeNotation)
  }

}
