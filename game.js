class Game {
    constructor() {
      this.players = new Map();
      this.collectibles = new Set();
      this.width = 640;
      this.height = 480;
    }
  
    addPlayer(id) {
      this.players.set(id, {
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        score: 0,
        id: id
      });
    }
  
    removePlayer(id) {
      this.players.delete(id);
    }
  
    generateCollectible() {
      return {
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        value: 1,
        id: Date.now()
      };
    }
  }
  
  class Player {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speed = 5;
      this.size = 20;
    }
  
    move(dir) {
      switch(dir) {
        case 'up': this.y -= this.speed; break;
        case 'down': this.y += this.speed; break;
        case 'left': this.x -= this.speed; break;
        case 'right': this.x += this.speed; break;
      }
    }
  
    draw(ctx) {
      ctx.fillStyle = 'blue';
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  } 