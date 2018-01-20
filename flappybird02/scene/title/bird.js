class Bird extends GuaAnimation {
  constructor(game, x, y) {
    super(game)
    this.x = x
    this.y = y
    this.speed = 8
    this.alive = true
  }

  static new(game, x, y) {
    let i = new this(game, x, y)
    return i
  }

  update() {
    super.update()
  }

  jump() {
    if (this.alive) {
      this.rotation = -45
      this.vy = -this.speed
    }
  }

  debug() {
    this.speed = config.bird_speed.value
  }

  collide(objs) {
    for (let p of objs) {
      if (rectIntersects(this, p)) {
        this.alive = false
        return true
      }
    }

    return false
  }
}
