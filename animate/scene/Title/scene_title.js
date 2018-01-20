class TitleScene extends GuaScene {
  constructor(game) {
    super(game)
    this.setup()
    this.setInputs()
  }

  setup() {
    var label = TitleLabel.new(this.game, "Animation!")
    let bg = GuaImage.new(this.game, 'sky')
    this.player = GuaAnimation.new(this.game)

    this.player.x = 100
    this.player.y = 360
    this.addElement(bg)
    this.addElement(this.player)
  }

  setInputs() {
    let self = this

    this.game.registerAction('a', function(state) {
        self.player.move(-2, state)
    })

    this.game.registerAction('d', function(state) {
        self.player.move(2, state)
    })
  }
}
