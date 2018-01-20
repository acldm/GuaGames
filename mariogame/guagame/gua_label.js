class TitleLabel {
  constructor(game, title) {
    this.game = game
    this.title  = title
    this.setup()
  }

  static new(game, title) {
    let i = new this(game, title)
    return i
  }

  setup() {
    this.x = 100
    this.y = 100
  }

  draw() {
    this.game.context.fillText(this.title, this.x, this.y)
  }

  update() {

  }
}
