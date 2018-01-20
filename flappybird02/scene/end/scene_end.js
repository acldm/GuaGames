class SceneEnd extends GuaScene {
  constructor(game, player, pipes, score) {
    super(game)
    this.player = player
    this.pipes = pipes
    this.score = score

    this.setup()
    this.setInputs()
  }

  setup() {
    let bg = GuaImage.new(this.game, 'bg')
    this.ground = Ground.new(this.game)
    this.ground.y = 420

    this.addElements(bg, this.pipes, this.ground, this.player,  this.score)
  }

  setInputs() {
    let self = this
  }

  update() {
    this.player.update()
  }

  getCollider(actor, collide, callback) {
    for (let p of this.collider) {
      if (collide(actor, p)) {
        callback()
      }
    }
  }
}
