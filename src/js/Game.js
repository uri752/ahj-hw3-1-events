export default class Game {
  constructor() {
    this.board = document.getElementById('board');
    this.result = document.getElementById('result');
    const goblin = document.getElementById('goblin');
    goblin.className = 'goblin';
    this.goblin = goblin;
    this.curTileIndex = -1;
    
    this.score = 0;
    this.missCount = 0;
    this.gameOver = false; 

    this.generateMatrix();

    this.onTileClick = this.onTileClick.bind(this);
    this.board.addEventListener('click', this.onTileClick);
  }

  generateMatrix() {
    const newIndex = Math.floor(Math.random() * 16);
    this.matrix = [
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,

    ];

    for (let index = 0; index < this.matrix.length; index += 1) {
      // this.matrix.forEach((item, index, arr) => {
      const tile = document.createElement('span');
      tile.className = 'tile';
      this.board.appendChild(tile);
      if (index === newIndex) {
        tile.appendChild(this.goblin);
      }
      // item = tile;
      this.matrix[index] = tile;
    }

    this.curTileIndex = newIndex;
  }

  onTileClick(e) {
    const target = e.target;
    const elGoblin = target.closest('.goblin');        
    if (elGoblin != null) {
      this.score++;
    } else {
      this.missCount++;
    }
    if (this.missCount >= 5) {
      this.result.innerText = "GAME OVER";
      this.board.removeEventListener('click', this.onTileClick);
      this.gameOver = true;
    } else {
      this.result.innerText = `Счет: ${this.score}     Количество промахов: ${this.missCount}`;
    }


  }

}
