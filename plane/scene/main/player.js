class Player extends GuaImage {
  constructor(game) {
    super(game, 'player')
    this.setup()
  }

  setup() {
    this.speed = 4
    this.cooldown = 3
  }

  moveLeft() {
    this.x -= this.speed
  }

  moveRight() {
    this.x += this.speed
  }

  moveUp() {
    this.y -= this.speed
  }

  moveDown() {
    this.y += this.speed
  }

  fire() {
    //console.log(this.cooldown);
    if (this.cooldown == 0) {
      this.cooldown = config.bullet_cooldown
      var x = this.x + this.w / 2
      var y = this.y
      var b = Bullet.new(this.game)
      b.x = x
      b.y = y
      this.scene.addElement(b)
    }
  }

  update() {
    this.speed = config.player_speed
    if (this.cooldown != 0) {
      this.cooldown--
    }
  }
}
