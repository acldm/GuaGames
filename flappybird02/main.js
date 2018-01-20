var blocks = []
var __main__ = function() {
  var images = {
    bird0: 'img/bird1.png',
    bg: 'img/city.png',
    ground: 'img/ground.png',
    pipe: 'img/pipe.png',

    number0: 'img/number/number0.jpg',
    number1: 'img/number/number1.jpg',
    number2: 'img/number/number2.jpg',
    number3: 'img/number/number3.jpg',
    number4: 'img/number/number4.jpg',
    number5: 'img/number/number5.jpg',
    number6: 'img/number/number6.jpg',
    number7: 'img/number/number7.jpg',
    number8: 'img/number/number8.jpg',
    number9: 'img/number/number9.jpg',

    ready: 'img/ready.png',
    tap: 'img/tap.png',
  }
  var game = new GuaGame(60,images, function(g) {
    var scene = new SceneTitle(game)
    g.runWithScene(scene)
  })

}

__main__()
