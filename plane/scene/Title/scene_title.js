class TitleScene extends GuaScene {
  constructor(game) {
    super(game)
    this.setup()
  }

  setup() {
    var g = this.game
    this.game.registerAction('k', function() {
      var s = Scene.new(g)
      g.replaceScene(s)
    })
    let title = TitleLabel.new(this.game,"开始游戏")
    this.addElement(title)
    let pp = GuaParticleSystem.new(this.game)
    this.addElement(pp)
  }
}
