class Ground extends GuaImage {
  constructor(game) {
    super(game, 'ground')
    this.vx = 3
  }

  update() {
    super.update()
    //this.x -= this.vx
    if (this.x < -72) {
      this.x = 0
    }
  }
}
