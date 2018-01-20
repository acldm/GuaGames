var Block = function(position, game) {
 var p = position
 var o = game.imageByName('block')
 o.x = p[0]
 o.y = p[1]
 o.alive = true
 o.live= p[2] || 1

 o.kill = function() {
   o.live = o.live - 1
   log(o.live)
   if (o.live <= 0) {
     o.alive = false
   }
 }

 o.collide = function(b) {
   return o.alive && rectIntersects(o, b)
 }

 return o
}
