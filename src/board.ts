import { Display } from "./interface";

class Board implements Display {
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
  clearMessage(): void {
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
}

export default Board;
