const canvas = document.getElementById('game_screen');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;

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

// Creat a player in a functional js code
const creatPlayer = () => {
  const Player = {
    position: {
      x: 100,
      y: 100
    },
    velocity: {
      x: 0,
      y: 0
    },
    width: 25,
    height: 25,
    draw: (c) => {
      c.fillStyle = '#545d68'
      c.fillRect(Player.position.x, Player.position.y, Player.width, Player.height);
    },
    update: () => {
      if (Player.position.y + Player.height > canvas.height) Player.velocity.y = 0;
      else Player.position.y += Player.velocity.y;
      Player.velocity.y += gravity;
    }
  }
  return Player;
}

const player = creatPlayer();

const animate = () => {
  requestAnimationFrame(animate);
  player.update();
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  player.draw(ctx);
}
animate();