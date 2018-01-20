class SceneTitle extends GuaScene {
  constructor(game) {
    super(game)
    this.setup()
    this.setInputs()
    this.debugModeEnabled = false
  }

  setup() {
    let bg = GuaImage.new(this.game, 'bg')
    this.ground = Ground.new(this.game)
    this.ground.y = 420
    this.mario = new GuaMarioNes(this.game)
    this.addElements(bg, this.ground)
    this.addElements(this.mario)

  }

  setInputs() {
    let self = this
    this.game.registerAction('a', function(state) {
        self.mario.move(-2, state)
    })

    this.game.registerAction('d', function(state) {
        self.mario.move(2, state)
    })
  }
}
