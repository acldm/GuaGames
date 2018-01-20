class GuaGame {
  constructor(fps, images, callback) {
    window.fps = fps
    this.images = images
    this.callback = callback
    window.paused = false
    this.scene = null
    this.actions = {}
    this.keywords = {}
    this.canvas = document.querySelector("#id-canvas")
    this.context = this.canvas.getContext("2d")

    var self = this
    window.addEventListener("keydown", function(event) {
      self.keywords[event.key] = "down"
    })

    window.addEventListener("keyup", function(event) {
      self.keywords[event.key] = "up"
    })
    this.init()
  }

  drawImage(obj) {
    this.context.drawImage(obj.texture, obj.x, obj.y);
  }

  update() {

    if (window.paused == true) {
      return
    }
    this.scene.update()
  }

  draw() {
    this.scene.draw()
  }

  registerAction(key, callback) {
    this.actions[key] = callback
  }

  runloop() {
    var g = this
    var actions = Object.keys(g.actions)
    for (var i=0; i<actions.length; i++) {
      var key = actions[i]
      let kc = g.keywords[key]
      if (kc == "down") {
        g.actions[key]("down")
      }
      else if (kc == "up") {
        g.actions[key]("up")
        g.keywords[key] = null
      }
    }

    g.update()
    g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
    g.draw()
    setTimeout(function() {
      g.runloop()
    }, 1000/window.fps)
  }

  init() {
    var g = this
    var loads = []

    var names = Object.keys(g.images)
    for (let i=0; i<names.length; i++) {
      let name = names[i]
      let path = g.images[name]
      let img = new Image()
      img.src = path

      img.onload = function(e) {;
        g.images[name] = img
        loads.push(1)
        if (loads.length == names.length) {
          g._start()
        }
      }
    }
  }

  textureByName(name) {
    var g =this
    var img = g.images[name]
    return img
  }

  runWithScene(s) {
    var g = this
    g.scene = s
    setTimeout(function() {
      g.runloop()
    }, 1000/window.fps)
  }

  replaceScene(s) {
    this.scene = s
  }

  _start() {
    this.callback(this)
  }
}
