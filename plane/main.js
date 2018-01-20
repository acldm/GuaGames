
var debugControl = function(game ,turn) {
  if (turn == false) {
    return;
  }

  window.addEventListener("keydown", function(e) {
    var k = e.key
    if (k == 'p') {
      window.paused = !window.paused
    }
    else if ("123456".includes(k)) {
      //blocks = loadlevel(game, k)
    }
  })

  var fpsControl = document.querySelector("#fpsControl")

  fpsControl.addEventListener('input', function(e) {
    window.fps = fpsControl.value
  })
}
var loadlevel = function(game, n) {
  n = n - 1
  level = levels[n]
  var blocks = []
  for (let i=0; i<level.length; i++) {
    block = Block(level[i], game)
    blocks.push(block)
  }
  console.log(blocks);
  return blocks
}

var blocks = []
var __main__ = function() {
  var images = {
    sky:'img/bg.png',
    player:'img/player.png',
    bullet:'img/bullet.png',
    enemy0:'img/enemy0.png',
    enemy1:'img/enemy1.png',
    enemy2:'img/enemy2.png',
    enemy3:'img/enemy3.png',
    enemy4:'img/enemy4.png',
    fire:'img/fire.png',
  }
  var game = new GuaGame(60,images, function(g) {
    var scene = new TitleScene(game)
    g.runWithScene(scene)
  })

  debugControl(game, true)

}

__main__()
