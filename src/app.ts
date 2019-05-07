import "./interface.ts";

class App {
  /*
   * currentPlayer will be switched between PlayerA & PlayerB
   * board will be depicted on page as 3 rows & 3 colums
   */
  currentPlayer: string;
  board: Array<Array<string>>;

  constructor() {}

  /**
   * Creating a game board
   */
  createBoard = () => {};

  /*
   * Display the board once the game has been activated
   */
  startGame(): void {}

  tickOnCell = (row: number, column: number) => {};

  /*
   * Switch player's turn after each click
   */
  switchPlayer = (): void => {};

  /*
   *  Check if the player has won the game
   */
  winnerFound = (row: number, column: number): boolean => {
    //   if(){

    //   }
    return false;
  };

  /*
   * Clear the board if either the game ends or user reset it
   */
  endGame = (): void => {};
}

const app = new App();
//app.startGame();
