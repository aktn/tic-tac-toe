import { Player } from "./interface";

class App {
  /*
   * currentPlayer will be switched between PlayerA & PlayerB
   * board will be depicted on page as 3 rows & 3 colums
   */
  currentPlayer: string;
  players: Player;
  board: Array<Array<string>>;

  constructor() {
    this.board = this.createBoard();
    this.players = { playerA: "x", playerB: "o" };
  }

  /**
   * Creating a game board
   */
  createBoard = (): Array<Array<string>> => [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  /*
   * Display the board once the game has been activated
   */
  startGame(): void {}

  tickOnCell = (row: number, column: number) => {};

  /*
   * Switch player's turn after each click
   */
  switchPlayer = (): void => {
    this.currentPlayer =
      this.currentPlayer === this.players.playerA
        ? this.players.playerB
        : this.players.playerA;
  };

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

  /*
   * Reset the board to its initial state
   */
  resetGame = (): void => {
    this.board = this.createBoard();
  };
}

const app = new App();
//app.startGame();
