class GuaParticleSystem {
  constructor(game) {
    this.game = game
    this.setup()
  }

  static new(game) {
    let i = new this(game)
    return i
  }

  init(x, y) {
    this.x = x
    this.y = y
  }

  setup() {
    this.x = 100
    this.y = 150
    this.numberOfParticles = 10
    this.particles = []
    this.alive = 60
  }

  draw() {
    for (let p of this.particles) {
      p.draw()
    }
  }

  ifDestroy() {
    this.alive--
    if (this.alive <= 0) {
      let e = this.game.scene.elements
      let index = e.indexOf(this)
      if (index != -1) {
        e.splice(index, 1)
      }
    }
  }

  update() {
    this.ifDestroy()

    this.particles = this.particles.filter((item) => {return item.alive > 0})
    if (this.particles.length < this.numberOfParticles) {
      let p = Particle.new(this.game)
      let vx = randomAtoB(-10, 10)
      let vy = randomAtoB(-10, 10)
      p.init(this.x, this.y, vx, vy)
      this.addParticle(p)
    }

    for (let p of this.particles) {
      p.update()
    }
  }

  addParticle(p) {
    this.particles.push(p)
  }
}

class Particle extends GuaImage {
  constructor(game) {
    super(game, 'fire')
    this.setup()
  }

  setup() {
    this.alive = 60
  }

  init(x, y, vx, vy) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    //console.log(this.vx, this.vy);
  }

  update() {
    this.alive--
    this.x += this.vx
    this.y += this.vy
    //加速度
    let factor =  0.01
    this.vx += factor * this.vx
    this.vy += factor * this.vy
  }

}
