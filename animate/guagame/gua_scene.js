class GuaScene {
  constructor(game) {
    this.game = game
    this.elements = []
  }

  draw() {
    // for (var i = 0; i < this.elements.length; i++) {
    //   this.game.drawImage(this.elements[i])
    // }
    for (let e of this.elements) {
      e.draw()
    }
  }

  update() {
    for (let e of this.elements) {
      e.update()
    }
  }

  addElement(obj) {
    obj.scene = this
    this.elements.push(obj)
  }
}
