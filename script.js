const canvas = document.getElementById('game_screen');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

/** Reference Colors
 *  Gray1: #adbac7
 *  Gray2: #909dab
 *  Gray3: #768390
 *  Gray4: #636e7b
 *  Gray5: #545d68
 *  Gray6: #444c56
 *  Gray7: #373e47
 *  Gray8: #2d333b
 *  Gray9: #22272e
 *  Gray0: #cdd9e5
 */

canvas.style.background = '#22272e';


class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    },
      this.width = 100,
      this.height = 100
  }

  draw() {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

const creatPlayer = () => {
  const Player = {
    position: {
      x: 100,
      y: 100
    },
    width: 25,
    height: 25,
    draw: (c) => {
      c.fillStyle = '#545d68'
      c.fillRect(Player.position.x, Player.position.y, Player.width, Player.height);
    }
  }
  return Player;
}

// const player = new Player();

const player = creatPlayer();
player.draw(ctx);