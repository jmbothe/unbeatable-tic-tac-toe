const board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function colorSpace(space) {
  return /[0-8]/.test(space) ? `${space}`.gray : `${space}`.yellow;
}

function showBoard(gameState) {
  Object.entries(gameState.players).forEach(player => player[1].moves.forEach(move =>
    board.splice(move, 1, player[1].symbol)));

  console.clear();
  console.log(`
    ${colorSpace(board[0])} | ${colorSpace(board[1])} | ${colorSpace(board[2])}
   ${'===+===+==='}
    ${colorSpace(board[3])} | ${colorSpace(board[4])} | ${colorSpace(board[5])}
   ${'===+===+==='}
    ${colorSpace(board[6])} | ${colorSpace(board[7])} | ${colorSpace(board[8])}
  `);
}

function greeting() {
  console.clear();
  console.log('Welcome to Tic Tac Toe!\n'.bgWhite.black);
}

function pleaseWait(playerSymbol) {
  console.log(`Please wait, Player ${playerSymbol} is choosing her move...`);
}

function gameOver(winner) {
  console.log(`GAME OVER: ${winner ? winner.symbol : 'NOBODY'} WINS!\n`.yellow);
  console.log('Thanks for playing. Run "npm start" to play again :)\n');
  console.log(`${'Brought to you by:'} ${'JMBOTHE'.trap.rainbow}\n`);
}

function error() {
  console.log('\nSorry, there was an error processing your input\n');
}

module.exports = {
  showBoard,
  greeting,
  pleaseWait,
  gameOver,
  error,
};
