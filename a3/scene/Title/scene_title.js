class TitleScene extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('k', function() {
      var s = Scene(game)
      game.replaceScene(s)

    })
  }

  draw() {
    this.game.context.fillText("Game Start!", 100, 100)
  }
}
