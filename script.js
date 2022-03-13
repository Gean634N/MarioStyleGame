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

// [PLAYER]
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
    onGround: () => {
      // A variavel 'Player.velocity.y' é necessária para que essa igualdade não seja verdadeira quando o personagem  tenta pular.
      return Player.position.y + Player.height + Player.velocity.y > canvas.height
    },
    update: () => {
      //[GRAVITY]
      Player.position.y += Player.velocity.y;
      Player.position.x += Player.velocity.x;
      (Player.onGround()) // testa se o personagem está no ção
        ? Player.velocity.y = 0 // se sim muda a velocidade para 0(zero)
        : Player.velocity.y += gravity; // se não incrementa a velocidade
    }
  }
  return Player;
}

const player = creatPlayer();
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

const animate = () => {
  requestAnimationFrame(animate);
  player.update();
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  player.draw(ctx);

  // MOVIMENTAÇÂO HORIZONTAL
  if (keys.right.pressed) {
    player.velocity.x = 5;
  } else if (keys.left.pressed) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }
}
animate();

addEventListener('keydown', ({ key }) => {
  switch (key) {
    case "d": // DIREITA
      keys.right.pressed = true;
      break;
    case "a": // ESQUERDA
      keys.left.pressed = true;
      break;
    case "w": // CIMA
      if (player.onGround()) player.velocity.y -= 20;
      break;
    case "s": // BAIXO
      break;
  }
});
addEventListener('keyup', ({ key }) => {
  switch (key) {
    case "d": // DIREITA
      keys.right.pressed = false;
      break;
    case "a": // ESQUERDA
      keys.left.pressed = false;
      break;
    case "s": // BAIXO
      break;
  }
});