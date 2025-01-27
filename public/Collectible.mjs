import { dimensions } from "./gameCanvas.mjs";

class Collectible {
  constructor({ x, y, id }, score = 1) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    this.size = 10;
  }

  draw() {
    const ctx = dimensions.context;
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

/*
  Note: Attempt to export this for use
  in server.js
*/
try {
  module.exports = Collectible;
} catch (e) {}

export default Collectible;
