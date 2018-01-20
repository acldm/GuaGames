var Paddle = function(game) {
  var o = game.imageByName('paddle')
  o.x = 150
  o.y = 240
  o.speed = 10

  o.move = function(x) {
   o.x += x
   if (o.x < 0) {
     o.x = 0
   }

   if (o.x > 400 - o.image.width) {
     o.x = 400 - o.image.width
   }
  }
  o.moveLeft = function() {
   o.move(-o.speed)
  }

 o.moveRight = function() {
   o.move(o.speed)
 }

 o.collide = function(ball) {
   /*if (ball.x > o.x && ball.x < o.x + o.image.width) {
     if (o.y < ball.y + ball.image.height ) {
       return true
     }
   }*/
   return rectIntersects(o, ball) 

   //return false
 }

 return o
}
