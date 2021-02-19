import { read } from "fs";
import Board from "./board.js";
class Game {
  constructor(readerInterface) {
    this.reader = readerInterface;
    this.board = new Board();
    this.player1 = new Player("X");
    this.player2 = new Player(":O");
  }

  switchPlayers() {}

  run(reader, completionCallback) {
    if (this.board.won(currentPlayer.mark)) {
      return this.board.winner(currentPlayer.mark);
    }
    reader.question("Where do you want to place your mark?", (answer) => {
      mappedArr = answer.split(",").map((e) => parseInt(e));
      this.board.placeMark(mappedArr, currentPlayer.mark);
      this.switchPlayers();
      this.run(reader, completionCallback);
    });
  }
}
