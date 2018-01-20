
class TitleScene extends GuaScene {
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

    this.addElement(bg)
    this.addElement(this.pipes)
    this.addElement(this.ground)
    this.addElement(this.player)
    this.addElement(this.tap)
    this.addElement(this.ready)

    this.addElement(this.score)

    let self = this
    this.GameState = {
      'ready' : () => {
        self.ground.update()
      },
      'run' : self.rungame,
      'over' : () => {
        self.player.update()
      },
    }

    this.gameCurrentState = this.GameState.ready
  }

  setInputs() {
    let self = this

    this.game.registerAction('a', function(state) {
        self.player.move(-2, state)
    })

    this.game.registerAction('d', function(state) {
        self.player.move(2, state)
    })

    window.addEventListener('click', function(event) {
      if (self.gameCurrentState == self.GameState.ready) {
        self.gameCurrentState = self.GameState.run
        self.delElement(self.tap)
        self.delElement(self.ready)
      }

      if (self.gameCurrentState == self.GameState.run) {
        self.player.jump()
      }
    })
  }


  update() {
    this.gameCurrentState && this.gameCurrentState()
  }

  rungame() {
    super.update()

    let pipes = this.pipes.pipes
    for (let i = 0; i<pipes.length; i+=2) {
      let p = pipes[i]
      if (Math.abs(p.x - this.player.x) <= 1) {
        this.score.addScore()
      }
    }
  }

  getCollider(actor, collide, callback) {
    for (let p of this.collider) {
      if (collide(actor, p)) {
        callback()
      }
    }
  }


  changeGameState(state) {
    this.gameCurrentState = state
  }
}
