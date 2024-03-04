import Game from './Game';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();

  let intervalId = setInterval(() => {
    const index = Math.floor(Math.random() * 16);
    game.curTileIndex = index;
    game.matrix[game.curTileIndex].appendChild(game.goblin);
    if (game.gameOver) {
      clearInterval(intervalId);
    }
  }, 1000);
});
