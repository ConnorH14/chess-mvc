import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  
  whiteTurn = true
  moves = {
    pawn: {
      start: 16,
      normal: 8,
      captureRight: 7,
      captureLeft: 9
    }
  }
  
  boardPostitions = [
    'a8','b8','c8','d8','e8','f8','g8','h8',
    'a7','b7','c7','d7','e7','f7','g7','h7',
    'a6','b6','c6','d6','e6','f6','g6','h6',
    'a5','b5','c5','d5','e5','f5','g5','h5',
    'a4','b4','c4','d4','e4','f4','g4','h4',
    'a3','b3','c3','d3','e3','f3','g3','h3',
    'a2','b2','c2','d2','e2','f2','g2','h2',
    'a1','b1','c1','d1','e1','f1','g1','h1'
  ]

  icons = {
    whitePawnIcon: '<div class="selector"><p><i class="fas fa-chess-pawn white-piece"></i></p></div>',
    whiteRookIcon: '<div class="selector"><p><i class="fas fa-chess-rook white-piece"></i></p></div>',
    whiteKnightIcon: '<div class="selector"><p><i class="fas fa-chess-knight white-piece"></i></p></div>',
    whiteBishopIcon: '<div class="selector"><p><i class="fas fa-chess-bishop white-piece"></i></p></div>',
    whiteQueenIcon: '<div class="selector"><p><i class="fas fa-chess-queen white-piece"></i></p></div>',
    whiteKingIcon: '<div class="selector"><p><i class="fas fa-chess-king white-piece"></i></p></div>',
  
    blackPawnIcon: '<div class="selector"><p><i class="fas fa-chess-pawn black-piece"></i></p></div>',
    blackRookIcon: '<div class="selector"><p><i class="fas fa-chess-rook black-piece"></i></p></div>',
    blackKnightIcon: '<div class="selector"><p><i class="fas fa-chess-knight black-piece"></i></p></div>',
    blackBishopIcon: '<div class="selector"><p><i class="fas fa-chess-bishop black-piece"></i></p></div>',
    blackQueenIcon: '<div class="selector"><p><i class="fas fa-chess-queen black-piece"></i></p></div>',
    blackKingIcon: '<div class="selector"><p><i class="fas fa-chess-king black-piece"></i></p></div>',
  
    blankIcon: '<div class="selector"><p></p></div>'
  }

  startingNotation = ['R','N','B','Q','K','B','N','R','P','P','P','P','P','P','P','P','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','p','p','p','p','p','p','p','p','r','n','b','q','k','b','n','r']
  
  currentNotation = ['R','N','B','Q','K','B','N','R','P','P','P','P','P','P','P','P','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','p','p','p','p','p','p','p','p','r','n','b','q','k','b','n','r']

  positions = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
