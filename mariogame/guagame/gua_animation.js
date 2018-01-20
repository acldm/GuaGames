class GuaAnimation {
  constructor(game) {
    this.flipX = false
    this.game = game
    this.animations = {
      'idle' : [],
      'run' : []
    }
    this.animationName = "idle"
    this.texture = this.frames()[0]
    for (let i=0; i<1; i++) {
      let name = `bird${i}`
      let t = game.textureByName(name)
      this.animations['run'].push(t)
    }

    for (let i=0; i<1; i++) {
      let name = `bird${i}`
      let t = game.textureByName(name)
      this.animations['idle'].push(t)
    }


    this.w = this.texture.width
    this.h = this.texture.height
    this.frameIndex = 0
    this.frameCount = 5

    this.vy = 0
    this.gy = 10
    this.rotation = 0
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

    if (this.y > 396) {
      this.y = 396
    }

    this.frameCount--
    if(this.frameCount == 0) {
      this.frameCount = 5
      this.frameIndex = (this.frameIndex + 1) % this.frames().length
      this.texture = this.frames()[this.frameIndex]
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
      context.rotate(this.rotation * Math.PI / 180)
      context.translate(-w2, -h2)
      context.drawImage(this.texture, 0, 0)
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
    console.log(name);
    this.animationName = name
  }

  frames() {
    return this.animations[this.animationName]
  }
}
