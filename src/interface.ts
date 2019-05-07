interface Score {
  [key: string]: number;
  playerA: number;
  playerB: number;
}

interface Player {
  [key: string]: string;
  playerA: string;
  playerB: string;
}

interface Display {
  createBoard(): void;
  updateBoard(): void;
  clearBoard(): void;
  displayScore(): void;
  updateScore(): void;
  declareWinner(): void;
  clearMessage(): void;
}
