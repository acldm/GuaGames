class SceneMain extends GuaScene {
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

    this.addElements(bg, this.pipes, this.ground, this.player,  this.score)
  }

  setInputs() {
    let self = this

    window.addEventListener('click', function(event) {
        self.player.jump()
    })
  }


  update() {
    if (this.player.collide(this.collider)) {
      let end = new SceneEnd(this.game, this.player, this.pipes, this.score)
      this.game.replaceScene(end)
    }
    else {
      super.update()
      let pipes = this.pipes.pipes
      this.score.collide(this.player, pipes)
    }
  }
}
