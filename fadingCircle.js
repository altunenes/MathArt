var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = canvas.width / 2;
var speed = 0.1;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = '#00f';
  ctx.fill();
  radius += speed;
  if (radius > canvas.width / 2) {
    speed = -speed;
  }
  if (radius < 0) {
    speed = -speed;
  }
  requestAnimationFrame(draw);
}
draw();
