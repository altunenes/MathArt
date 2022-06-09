var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
for (var i = 0; i < canvas.width; i += 12) {
  ctx.moveTo(i, 0);
  ctx.lineTo(canvas.width, i);
  ctx.stroke();
}
