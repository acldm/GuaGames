class Scene extends GuaScene {
  constructor(game) {
    super(game)
        console.log(this.game)
    this.setInputs()
    this.setup()
  }

  static new(game) {
    let i = new this(game)
    return i
  }

  setup() {
    let game = this.game
    this.enemies = []
    this.numberOfEnemies = 8
    this.bg = GuaImage.new(game, 'sky')
    this.player = Player.new(game)
    this.player.x = 100
    this.player.y = 100
    this.addElement(this.bg)
    this.addElement(this.player)
    this.addEnemies()
  }
  addEnemies() {
    var es = []
    for (let i=0; i<this.numberOfEnemies; i++) {
      var e = Enemy.new(this.game)
      es.push(e)
      this.addElement(e)
    }
    this.enemies = es;
  }
  setInputs() {
    let g = this.game
    let s = this
    g.registerAction('a', function() {
      s.player.moveLeft()
    })

    g.registerAction('w', function() {
      s.player.moveUp()
    })

    g.registerAction('s', function() {
      s.player.moveDown()
    })

    g.registerAction('d', function() {
      s.player.moveRight()
    })

    g.registerAction('j', function() {
      s.player.fire()
    })

  }

  update() {
    super.update()
  }

}
