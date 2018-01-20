const rectCollide = function(x1, y1, w1, h1, x2, y2, w2, h2) {
  if (x1 > x2 + w2 || y1 > y2 + h2 || x2 > x1 + w1 || y2 > y1 + h1) {
      return false
    }
    else {
      return true
    }
}

const simpleRectCollide = function(a, b) {
  return rectCollide(a.x, a.y, a.w, a.h,
                      b.x, b.y, b.w, b.h)
}

class Bullet extends GuaImage {
  constructor(game) {
    super(game, 'bullet')
    this.setup()
  }

  setup() {
    this.alive = true
    this.speed = 2
  }

  draw() {
    if (!this.alive) {
      return
    }
    super.draw()
  }

  update() {
    if (!this.alive) {
      return
    }
    this.speed = config.bullet_speed
    this.y -= this.speed

    let elements = this.game.scene.enemies;
    for (let e of elements) {
      let isCollide = simpleRectCollide(this, e)

      if (isCollide) {
        let pp = GuaParticleSystem.new(this.game)
        this.game.scene.addElement(pp)
        pp.init(e.x, e.y)
        e.setup()
        this.alive = false
        break
      }
    }
  }
}
