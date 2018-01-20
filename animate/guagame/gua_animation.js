class GuaAnimation {
  constructor(game) {
    this.x = 100
    this.y = 200
    this.filpX = false
    this.game = game
    this.animations = {
      'idle' : [],
      'run' : []
    }
    this.animationName = "idle"

    for (let i=0; i<6; i++) {
      let name = `w${i}`
      let t = game.textureByName(name)
      this.animations['run'].push(t)
    }

    for (let i=0; i<1; i++) {
      let name = `w${i}`
      let t = game.textureByName(name)
      this.animations['idle'].push(t)
    }

    this.texture = this.frames()[0]
    this.w = this.texture.width
    this.h = this.texture.height
    this.frameIndex = 0
    this.frameCount = 5
  }



  static new(game)  {
    return new this(game)
  }

  update() {
    this.frameCount--
    if(this.frameCount == 0) {
      this.frameCount = 5
      this.frameIndex = (this.frameIndex + 1) % this.frames().length
      this.texture = this.frames()[this.frameIndex]
    }
  }

  draw() {
    let context = this.game.context;
    if (this.filpX) {
      context.save()
      let x =this.x +this.w/2
      context.translate(x, 0)
      context.scale(-1, 1)
      context.translate(-x, 0)
      context.drawImage(this.texture, this.x, this.y)
      context.restore()
    }
    else {
      this.game.drawImage(this)
    }
  }

  move(x, keyState) {

    if (x<0) {
      this.filpX = true
    } else {
      this.filpX = false
    }

    let animStateName = {
      'up' : 'idle',
      'down' : 'run'
    }
    this.changeAnimationName(animStateName[keyState])
    this.x += x
  }

  changeAnimationName(name) {
    this.animationName = name
  }

  frames() {
    return this.animations[this.animationName]
  }
}
