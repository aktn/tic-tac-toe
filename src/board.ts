import { Display } from "./interface";

class Board implements Display {
  /**
   * @param{string} htmlTag
   * @param {string} className
   * @return {HTMLElement}
   */
  createElement = (htmlTag: string, className?: string): HTMLElement => {
    const htmlElement = document.createElement(htmlTag);
    if (className) htmlElement.classList.add(className);
    return htmlElement;
  };

  /*
   * Get all available elements from DOM
   * @param { string } selector
   * @return { NodeList }
   */
  getAllCells = (selector: string) =>
    <NodeList>document.querySelectorAll(selector);

  createBoard(): void {
    throw new Error("Method not implemented.");
  }
  updateBoard(): void {
    throw new Error("Method not implemented.");
  }

  /*
   * Clear all cells in the board to empty string
   */
  clearBoard(): void {
    const cells = this.getAllCells(".col");
    cells.forEach(cell => {
      cell.textContent = "";
    });
  }

  displayScore(): void {
    throw new Error("Method not implemented.");
  }
  updateScore(): void {
    throw new Error("Method not implemented.");
  }
  declareWinner(): void {
    throw new Error("Method not implemented.");
  }

  displayBoard = (data: Array<string>): void => {};

  /*
   * Bind when clicking on the board of the cell & activate callback function
   */
  bindHandler(clickHandler: (column: number, row: number) => void): void {
    document.addEventListener("click", (event: Event) => {
      const clicked = <HTMLElement>event.target;
      const activated = clicked.className === "column";
      if (activated) {
        const column = +clicked.parentElement!.dataset.row!;
        const row = +clicked.dataset.col!;
        clickHandler(column, row);
      }
    });
  }

  /**
   * Declare if there is a winner or stalemate
   */
  printMessage = (winner: string): void => {
    const message = this.createElement("div", "message");
    const player = winner === "a" ? "Player A" : "Player B";
    message.textContent = winner ? `${player} wins!` : `No winner :(`;

    const game = document.querySelector("#game");
    game.append(message);
  };

  /* Remove printed message */
  clearMessage = (): void => {
    const message = document.querySelector(".message");
    message.remove();
  };
}

export default Board;
