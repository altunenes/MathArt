var gaussian = function(x, mu, sigma) {
  return Math.exp(-(x-mu)*(x-mu)/(2*sigma*sigma)) / (sigma * Math.sqrt(2*Math.PI));
};
var mu = 5;
var sigma = 3;
var x = -5;
var dx = 0.1;
var points = [];
var maxY = gaussian(mu, mu, sigma);
var canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);
  for (var i = 0; i < points.length; i++) {
    ctx.lineTo(i * canvas.width / points.length, canvas.height - points[i] * canvas.height / maxY);
  }
  ctx.stroke();
  points.push(gaussian(x, mu, sigma));
  x += dx;
  if (x > 5) {
    x = -5;
    points = [];
  }
  setTimeout(draw, 30);
};
draw();

ctx.lineWidth = 5;

var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);
  for (var i = 0; i < points.length; i++) {
    ctx.lineTo(i * canvas.width / points.length, canvas.height - points[i] * canvas.height / maxY);
  }
  ctx.stroke();
  ctx.fillStyle = 'black';
  for (var i = 0; i < points.length; i++) {
    ctx.fillText(points[i].toFixed(2), i * canvas.width / points.length, canvas.height - points[i] * canvas.height / maxY);
  }
  points.push(gaussian(x, mu, sigma));
  x += dx;
  if (x > 5) {
    x = -5;
    points = [];
  }
  setTimeout(draw, 100);
};

var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);
  for (var i = 0; i < points.length; i++) {
    ctx.lineTo(i * canvas.width / points.length, canvas.height - points[i] * canvas.height / maxY);
  }
  ctx.stroke();
  ctx.fillStyle = 'black';
  for (var i = 0; i < points.length; i++) {
    ctx.fillText(points[i].toFixed(2), i * canvas.width / points.length, canvas.height - points[i] * canvas.height / maxY);
  }
  points.push(gaussian(x, mu, sigma));
  x += dx;
  if (x > 5) {
    x = -5;
    points = [];
  }
  setTimeout(draw, 100);
};

document.body.style.backgroundColor = 'black';

var slider = document.createElement('input');
slider.type = 'range';
slider.min = 0;
slider.max = 100;
slider.value = 25;
document.body.appendChild(slider);

var slider2 = document.createElement('input');
slider2.type = 'range';
slider2.min = 5;
slider2.max = 10;
slider2.value = 5;
document.body.appendChild(slider2);

var slider3 = document.createElement('input');
slider3.type = 'range';
slider3.min = 1;
slider3.max = 10;
slider3.value = 3;
document.body.appendChild(slider3);

var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);
  for (var i = 0; i < points.length; i++) {
    ctx.lineTo(i * canvas.width / points.length, canvas.height - points[i] * canvas.height / maxY);
  }
  ctx.strokeStyle = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  ctx.stroke();
  ctx.fillStyle = 'black';
  for (var i = 0; i < points.length; i++) {
    ctx.fillStyle = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    ctx.font = slider.value + 'px Arial';
    ctx.fillText(points[i].toFixed(2), i * canvas.width / points.length, canvas.height - points[i] * canvas.height / maxY);
  }
  points.push(gaussian(x, slider2.value, slider3.value));
  x += dx;
  if (x > 25) {
    x = -5;
    points = [];
  }
  setTimeout(draw, 5);
};

var slider4 = document.createElement('input');
slider4.type = 'range';
slider4.min = 0;
slider4.max = 100;
slider4.value = 5;
document.body.appendChild(slider4);

/* set the thickness of the line by the slider4 */
var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);
  for (var i = 0; i < points.length; i++) {
    ctx.lineTo(i * canvas.width / points.length, canvas.height - points[i] * canvas.height / maxY);
  }
  ctx.strokeStyle = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  ctx.lineWidth = slider4.value;
  ctx.stroke();
  ctx.fillStyle = 'black';
  for (var i = 0; i < points.length; i++) {
    ctx.fillStyle = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    ctx.font = slider.value + 'px Arial';
    ctx.fillText(points[i].toFixed(2), i * canvas.width / points.length, canvas.height - points[i] * canvas.height / maxY);
  }
  points.push(gaussian(x, slider2.value, slider3.value));
  x += dx;
  if (x > 25) {
    x = -5;
    points = [];
  }
  setTimeout(draw, 5);};
