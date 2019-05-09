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
  createBoard(): void;
  updateBoard(): void;
  clearBoard(): void;
  displayScore(): void;
  updateScore(): void;
  declareWinner(): void;
  clearMessage(): void;
  bindHandler(): void;
}
