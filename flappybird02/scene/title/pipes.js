class Pipes {
  constructor(game) {
    this.game = game
    this.pipes = []
    this.pipeSpace = 120
    this.pipeSpeed = 2
    this.管子横向间距 = 200
    this.columnsOfPipe = 3

    for (let i=0; i< this.columnsOfPipe; i++) {

      let p1 = GuaImage.new(game, "pipe")
      p1.x = 500 + i * this.管子横向间距
      let p2 = GuaImage.new(game, "pipe")
      p2.flipY = true
      p2.x = p1.x
      this.resetPipePosition(p1, p2)
      this.pipes.push(p1)
      this.pipes.push(p2)
    }
  }

  debug() {
      this.pipeSpace = config.pipe_space.value
      this.管子横向间距 = config.管子横向间距.value
      this.pipeSpeed = config.pipe_speed.value
  }

  static new(game) {
    return new this(game)
  }
  resetPipePosition(p1, p2) {
    p1.y = randomAtoB(-200, 0)
    p2.y = p1.y +p1.h + this.pipeSpace
  }

  static new(game, x, y) {
    return new this(game, x, y)
  }

  update() {
    for (let i=0; i< this.pipes.length/2; i+=1) {
      let p1 = this.pipes[i*2]
      let p2 = this.pipes[i*2+1]

      p1.x -= this.pipeSpeed
      p2.x -= this.pipeSpeed

      if (p1.x <= -p1.w) {
        p1.x = this.管子横向间距 * this.columnsOfPipe + p1.x
        p2.x = p1.x
        this.resetPipePosition(p1, p2)
      }
    }
  }

  draw() {
      let context = this.game.context;

      for (let p of this.pipes) {
        context.save()
        let w2 = p.w/2
        let h2 = p.h/2
        context.translate(p.x + w2, p.y + h2)
        let scaleX= p.flipX ? -1 : 1
        let scaleY = p.flipY ? -1 : 1
        context.scale(scaleX, scaleY)
        context.rotate(p.rotation * Math.PI / 180)
        context.translate(-w2, -h2)
        context.drawImage(p.texture, 0, 0)
        context.restore()
      }

  }
}
