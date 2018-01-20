
const randomAtoB = function(start, end) {
  let s = (Math.random() * (end - start)) + start + 1
  return Math.floor(s)
}

class Enemy extends GuaImage {
  constructor(game) {
    name = "enemy" + randomAtoB(0, 4)
    super(game, name)
    this.setup()
  }

  setup() {
    this.x = randomAtoB(0, 340)
    this.y = -randomAtoB(0,200)
    this.speed = randomAtoB(1,4)
    console.log(this.w, this.h);
  }
  update() {
    this.y += this.speed
    if (this.y > 600) {
      this.setup()
    }
  }
}
