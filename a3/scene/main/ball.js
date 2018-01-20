var Ball = function(game) {
  var o = game.imageByName('ball')
  o.x = 150
  o.y = 150
  o.speedX = 5
  o.speedY = 5
  o.fired = false

 o.fire = function() {
   o.fired = true;
 }

 o.move = function() {
   if (o.fired) {
     o.x += o.speedX
     o.y += o.speedY
   }

   if (o.x < 0 || o.x > 400) {
     o.speedX = -o.speedX
   }

   if (o.y < 0 || o.y > 300) {
     o.speedY = -o.speedY
   }
 }

 o.反弹 = function() {
   o.speedY = -o.speedY
 }

 o.atPoint = function(x,y) {
   return x >= o.x && x <= o.x+o.w && y >= o.y && y <= o.y+o.h
 }

 return o
}
