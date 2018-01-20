class SceneTitle extends GuaScene {
  constructor(game) {
    super(game)
    this.setup()
    this.setInputs()
    this.debugModeEnabled = false
  }

  setup() {
    let bg = GuaImage.new(this.game, 'bg')
    this.player = Bird.new(this.game, 64, 240)
    this.pipes = Pipes.new(this.game)
    this.score = Score.new(this.game)
    this.ground = Ground.new(this.game)
    this.ground.y = 420
    this.collider = this.pipes.pipes.concat([this.ground])
    this.tap = GuaImage.new(this.game, 'tap')
    this.tap.x = 85
    this.tap.y = 220
    this.ready = GuaImage.new(this.game, 'ready')
    this.ready.x = 50
    this.ready.y = 150

    this.addElements(bg, this.pipes, this.ground, this.player, this.tap, this.ready, this.score)
  }

  setInputs() {
    let self = this

    this.game.registerAction('k', function(state) {
      let main = new SceneMain(self.game)
      main.ground.x = self.ground.x
      self.game.replaceScene(main)
    })
  }

  update() {
    this.ground.update()
  }
}
