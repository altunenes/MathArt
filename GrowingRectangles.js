var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var rects = [];
var rect = function(x, y, w, h, color) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color;
  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };
  this.update = function() {
    this.x += Math.random() * 2 - 1;
    this.y += Math.random() * 2 - 1;
    this.w += Math.random() * 2 - 1;
    this.h += Math.random() * 2 - 1;
  };
};
for (var i = 0; i < 100; i++) {
  rects.push(new rect(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 10, Math.random() * 10, '#' + Math.random().toString(16).substr(2, 6)));
}
var animate = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < rects.length; i++) {
    rects[i].update();
    rects[i].draw();
  }
  requestAnimationFrame(animate);
};
animate();
