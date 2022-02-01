var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var center = {x: canvas.width / 2, y: canvas.height / 2};
var radius = Math.min(canvas.width, canvas.height) / 2;
var angle = 0;
var step = Math.PI / 5;
var color = 'yellow';
var opacity = 24;
var lineWidth = 12;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.globalAlpha = opacity;
  ctx.beginPath();
  ctx.arc(center.x, center.y, radius, angle, angle + step);
  ctx.stroke();
  angle += step;
  if (angle > Math.PI * 2) {
    angle -= Math.PI * 2;
  }
}
setInterval(draw, 1000 / 55);
