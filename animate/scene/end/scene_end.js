class SceneEnd extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('r', function(e) {
      var s = new TitleScene(game)
      game.replaceScene(s)
    })
  }

  draw() {
    this.game.context.fillText("Game Over! Press r to continue", 100, 100)
  }
}
