var Scene = function(game) {
  var o = {
    game : game,
  }
  var ball = Ball(game)
  blocks = loadlevel(game, 1)
  var score = 0

  var paddle = Paddle(game)

  game.registerAction("a", function() {
    paddle.moveLeft()
  })

  game.registerAction("d", function() {
    paddle.moveRight()
  })

  game.registerAction("f", function() {
    ball.fire()
  })

  o.draw = function() {
    game.context.fillStyle ="#233"
    game.context.fillRect(0, 0, 400, 300)

    game.drawImage(paddle)
    game.drawImage(ball)
    game.context.fillText("分数:" + score, 10, 290)

    for (let i=0; i<blocks.length; i++) {
      if (blocks[i].alive) {
        game.drawImage(blocks[i])
      }
    }
  }

  o.update = function() {

    if (ball.y > paddle.y + paddle.h) {
      var sceneEnd = new SceneEnd(game)
      game.replaceScene(sceneEnd)
    }
    ball.move()

    if (paddle.collide(ball)) {
      ball.反弹()
    }

    for (let i=0; i<blocks.length; i++) {
      if (blocks[i].collide(ball)) {
        blocks[i].kill()
        ball.反弹()
        score += 100
      }
    }

    var dragEnable = false
    game.canvas.addEventListener("mousedown", function(e) {
      let x = e.offsetX
      let y = e.offsetY

      if (ball.atPoint(x, y)) {
        dragEnable = true
      }
    })

    game.canvas.addEventListener("mousemove", function(e) {
      let x = e.offsetX
      let y = e.offsetY

      if (dragEnable == true) {
        ball.x = x
        ball.y = y
      }
    })

    game.canvas.addEventListener("mouseup", function(e) {
      dragEnable = false
    })
  }

  return o
}
