class Bird extends GuaAnimation {
  constructor(game, x, y) {
    super(game)
    this.x = x
    this.y = y
    this.speed = 8
  }

  static new(game, x, y) {
    let i = new this(game, x, y)
    return i
  }

  update() {
    super.update()
    let scene = this.game.scene
    scene.getCollider(this, rectIntersects, ()=>{scene.changeGameState(scene.GameState.over)})
  }

  jump() {
    this.rotation = -45
    this.vy = -this.speed
  }

  debug() {
    this.speed = config.bird_speed.value
  }
}
