import { Display } from "./interface";

class board {
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

export default board;
