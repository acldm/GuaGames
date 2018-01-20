class GuaScene {
  constructor(game) {
    this.game = game
    this.elements = []
    this.debugModeEnabled = false
  }

  draw() {
    for (let e of this.elements) {
      e.draw()
    }
  }

  update() {
    if (this.debugModeEnabled) {
      for (let e of this.elements) {
        e.debug && e.debug()
      }
    }

    for (let e of this.elements) {
      e.update()
    }

  }

  addElement(obj) {
    obj.scene = this
    this.elements.push(obj)
  }

  addElements() {
    for (let i=0; i< arguments.length; i++) {
      this.elements.push(arguments[i])
    }
  }

  delElement(obj) {
    let index = this.elements.indexOf(obj)
    console.log(index);
    if (index!=-1)
      this.elements.splice(index,1)
  }
}
