import { Player, Display } from "./interface";
import Board from "./board";

class App {
  /*
   * currentPlayer will be switched between PlayerA & PlayerB
   * board will be depicted on page as 3 rows & 3 colums
   */
  currentPlayer: string;
  players: Player;
  display: Display;
  board: Array<Array<string>>;
  wait: number;

  constructor(display: Display) {
    this.board = this.createBoard();
    this.players = { playerA: "x", playerB: "o" };
    this.display = display;
    this.wait = 2000;
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

  /*
   * Tick the cell on the board to determine whether the game still continues or
   * found a winner or switch a player.
   */
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
  endGame = (winner?: string): void => {
    setTimeout(() => {
      this.resetGame();
    }, this.wait);
  };

  /*
   * Reset the board to its initial state
   */
  resetGame = (): void => {
    this.display.clearBoard();
    this.board = this.createBoard();
  };
}

const app = new App(new Board());
//app.startGame();
