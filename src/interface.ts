export interface Score {
  [key: string]: number;
  playerA: number;
  playerB: number;
}

export interface Player {
  [key: string]: string;
  playerA: string;
  playerB: string;
}

export interface Display {
  displayBoard(boardData: Array<Array<any>>): void;
  updateBoard(): void;
  clearBoard(): void;
  updateScore(): void;
  declareWinner(): void;
  clearMessage(): void;
  bindHandler(clickHandler: (column: number, row: number) => void): void;
}
