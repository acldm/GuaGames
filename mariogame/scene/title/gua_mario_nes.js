class GuaMarioNes {
  constructor(game) {
    this.flipX = false
    this.game = game
    this.dataOffset = 32784
    this.data = this.game.bytes.slice(this.dataOffset)
    this.context = this.game.context
    this.columnsOfNumber = 2
    this.rowsOfNumber = 4

    this.pixelWidth = 2
    this.blockSize = 8
    this.x = 100
    this.y = 200
    this.w = this.pixelWidth * this.blockSize *  this.columnsOfNumber
    this.h = this.pixelWidth * this.blockSize *  this.rowsOfNumber

    this.animations = {
      'idle' : [],
      'run' : []
    }

    this.frameIndex = 0
    this.frameCount = 8

    this.vy = 0
    this.gy = 10
    this.rotation = 0
  }

  drawBlock(context, bytes, x, y, pixelWidth) {

    let color = {
      0 : 'white',
      1 : '#FE1000',
      2 : '#FFB010',
      3 : '#AA3030',
    }
    let w = pixelWidth
    let h = pixelWidth
    for (let i=0; i < 8; i++) {
        let p1 = bytes[i]
        let p2 = bytes[i+8]
      for (let j=0; j < 8; j++) {
        let c1 = p1 >> (7 - j) & 1
        let c2 = p2 >> (7 - j) & 1
        let pixel = (c2 << 1) + c1
        if (pixel == 0) {
          continue
        }
        let px = x + j *pixelWidth
        let py = y + i * pixelWidth
        context.fillStyle = color[pixel]
        context.fillRect(px, py, w, h)
      }
    }
  }

  drawSprite() {
    let context = this.context
    let pixelWidth = this.pixelWidth
    let blockSize = 8
    let numberPerOfIndex = this.frameIndex * (this.columnsOfNumber * this.rowsOfNumber * 16)
    let offset = numberPerOfIndex
    for (let i=0; i<this.rowsOfNumber; i++) {
      for (let j=0; j<this.columnsOfNumber; j++) {
        let x = j * pixelWidth * blockSize
        let y = i * pixelWidth * blockSize
        this.drawBlock(context, this.data.slice(offset), x, y, pixelWidth)
        offset += 16
      }
    }
  }

  static new(game)  {
    return new this(game)
  }

  update() {
    if (this.rotation < 45) {
      this.rotation += 5
    }

    this.vy += this.gy*0.05
    this.y += this.vy

    if (this.y > 360) {
      this.y = 360
    }

    this.frameCount--
    if(this.frameCount == 0) {
      this.frameCount = 8
      this.frameIndex += 1
      this.frameIndex %= 3
    }
  }

  draw() {
      let context = this.game.context;
      context.save()
      let w2 = this.w/2
      let h2 = this.h/2
      context.translate(this.x + w2, this.y + h2)
      if (this.flipX) {
        context.scale(-1, 1)
      }
      //context.rotate(this.rotation * Math.PI / 180)
      context.translate(-w2, -h2)
      this.drawSprite()
      context.restore()
  }

  move(x, keyState) {
    if (x<0) {
      this.flipX = true
    } else {
      this.flipX = false
    }

    this.x += x
  }

  changeAnimationName(name) {
    this.animationName = name
  }

  frames() {
    return this.animations[this.animationName]
  }
}
