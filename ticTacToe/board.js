class Board {
  constructor(size = 3) {
    this.grid = () => {
      let array = [];
      for (let i = 0; i < size; i++) {
        array.push(new Array(size));
      }
      return array;
    };
  }

  horizontalWin(mark) {
    for (let i = 0; i < this.grid.length; i++) {
      let row = this.grid[i];
      return row.every((el) => el === mark);
    }
  }

  verticalWin(mark) {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        let space = this.grid[j][i];
        if (space !== mark) return false;
      }
    }
    return true;
  }

  diagonalWin() {
    for (let i = 0; i < this.grid.length; i++) {
      let space = this.grid[i][i];
      if (space !== mark) return false;
    }
    reversedGrid = this.grid.reverse();
    for (let i = 0; i < reversedGrid.length; i++) {
      let space = reversedGrid[i][i];
      if (space !== mark) return false;
    }
    return true;
  }

  won(mark) {
    return (
      this.horizontalWin(mark) ||
      this.verticalWin(mark) ||
      this.diagonalWin(mark)
    );
  }

  winner(mark) {
    console.log(`${mark} has won!`);
  }

  empty(pos) {
    return this.grid[pos[0]][pos[1]] === undefined;
  }

  placeMark(pos, mark) {
    if (this.empty(pos)) this.grid[pos[0]][pos[1]] = mark;
  }
}

export default Board;
