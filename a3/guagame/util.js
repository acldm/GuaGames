var e = sel => document.querySelector(sel)
var log = function(s) {
  e("#text-log").value += '\n' + s
}

var imageFromPath = function(path) {
  var img =new Image()
  img.src = path
  return img
}

var aInb = function(a, b1, b2) {
  return a >= b1 && a <= b2
}

var rectIntersects = function(o, b) {
  if (aInb(o.x, b.x, b.x+b.w) || aInb(b.x, o.x, o.x+o.w)) {
    if (aInb(o.y, b.y, b.y+b.h) || aInb(b.y, o.y, o.y + o.h)) {
      return true
    }
  }
  return false
}
