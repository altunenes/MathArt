document.addEventListener("DOMContentLoaded", function() {



var fourier = document.createElement('div');
fourier.innerHTML = '<canvas id="fourier" width="1000" height="600"></canvas>';
document.body.appendChild(fourier);

var canvas = document.getElementById('fourier');
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var x = 0;
var y = 0;
var radius = 0;
var angle = 1;
var speed = 0.001;
var numCircles = 800;
var circles = [];

for (var i = 0; i < numCircles; i++) {
  circles.push({
    radius: i + 1,
    speed: (i + 1) * speed,
    angle: 0
  });
}

draw();

var rainbow = false;
var rainbowCheckbox = document.createElement('input');
rainbowCheckbox.type = 'checkbox';
rainbowCheckbox.checked = rainbow;
rainbowCheckbox.onchange = function() {
  rainbow = rainbowCheckbox.checked;
};
document.body.appendChild(rainbowCheckbox);

var rainbowLabel = document.createElement('label');
rainbowLabel.innerHTML = 'Rainbow';
document.body.appendChild(rainbowLabel);


function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.moveTo(width / 2, height / 2);
  x = 0;
  y = 0;
  for (var i = 0; i < numCircles; i++) {
    var circle = circles[i];
    circle.angle += circle.speed;
    x += circle.radius * Math.cos(circle.angle);
    y += circle.radius * Math.sin(circle.angle);
    /*/magic happens here :))))) /*/
    ctx.lineTo(width / 2+ x, height / 2 + y);
  }
  if (rainbow) {
    ctx.strokeStyle = 'hsl(' + (angle * 360) + ', 100%, 50%)';
    angle += 0.01;
  } else {
    ctx.strokeStyle = 'black';
  }
  ctx.stroke();
  requestAnimationFrame(draw);
}

var circleSize = document.createElement('input');
circleSize.type = 'number';
circleSize.value = numCircles;
circleSize.onchange = function() {
  numCircles = circleSize.value;
  circles = [];
  for (var i = 0; i < numCircles; i++) {
    circles.push({
      radius: i + 1,
      speed: (i + 1) * speed,
      angle: 0
    });
  }
};
document.body.appendChild(circleSize);

var circleSizeLabel = document.createElement('label');
circleSizeLabel.innerHTML = 'Phase';
document.body.appendChild(circleSizeLabel);

var speedSlider = document.createElement('input');
speedSlider.type = 'range';
speedSlider.min = 0;
speedSlider.max = 0.001;
speedSlider.step = 0.00001;
speedSlider.value = speed;
speedSlider.onchange = function() {
  speed = speedSlider.value;
  for (var i = 0; i < numCircles; i++) {
    circles[i].speed = (i + 1) * speed;
  }
};
document.body.appendChild(speedSlider);

var speedLabel = document.createElement('label');
speedLabel.innerHTML = 'Speed';
document.body.appendChild(speedLabel);

var controls = document.createElement('div');
controls.style.position = 'absolute';
controls.style.right = '0';
controls.style.top = '0';
controls.style.padding = '10px';
controls.style.background = 'white';
controls.style.border = '1px solid black';
controls.appendChild(circleSizeLabel);
controls.appendChild(circleSize);
controls.appendChild(document.createElement('br'));
controls.appendChild(speedLabel);
controls.appendChild(speedSlider);
controls.appendChild(document.createElement('br'));
controls.appendChild(rainbowCheckbox);
controls.appendChild(rainbowLabel);
document.body.appendChild(controls);

ctx.lineWidth=4;

var widthSlider = document.createElement('input');
widthSlider.type = 'range';
widthSlider.min = 1;
widthSlider.max = 20;
widthSlider.step = 1;
widthSlider.value = 1;
widthSlider.onchange = function() {
  ctx.lineWidth = widthSlider.value;
};
controls.appendChild(document.createElement('br'));
controls.appendChild(widthSlider);

var widthLabel = document.createElement('label');
widthLabel.innerHTML = 'thickness';
controls.appendChild(widthLabel);
var inverse = document.createElement('button');
inverse.innerHTML = 'Inverse';
inverse.onclick = function() {
  speed = -speed;
  speedSlider.value = speed;
  for (var i = 0; i < numCircles; i++) {
    circles[i].speed = (i + 1) * speed;
  }
};
controls.appendChild(document.createElement('br'));
controls.appendChild(inverse);
var bgColor = document.createElement('input');
bgColor.type = 'color';
bgColor.value = '#ffffff';
bgColor.onchange = function() {
  document.body.style.background = bgColor.value;
};
controls.appendChild(document.createElement('br'));
controls.appendChild(bgColor);
var github = document.createElement('a');
github.href = 'https://github.com/altunenes';
github.innerHTML = 'GitHub';
github.style.position = 'fixed';
github.style.bottom = '0';
github.style.right = '0';
github.style.padding = '10px';
github.style.backgroundColor = '#333';
github.style.color = '#fff';
document.body.appendChild(github);
var twitter = document.createElement('a');
twitter.href = 'https://twitter.com/emportent';
twitter.innerHTML = 'Twitter';
twitter.style.position = 'fixed';
twitter.style.bottom = '0';
twitter.style.right = '100px';
twitter.style.padding = '10px';
twitter.style.backgroundColor = '#333';
twitter.style.color = '#fff';
document.body.appendChild(twitter);
document.body.style.overflow = 'hidden';

github.innerHTML = '<i class="fa fa-github"></i>';
twitter.innerHTML = '<i class="fa fa-twitter"></i>';
var fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
document.head.appendChild(fontAwesome);



var widthInput = document.createElement('input');
widthInput.type = 'number';
widthInput.value = width;
widthInput.onchange = function() {
  width = widthInput.value;
  canvas.width = width;
};
controls.appendChild(document.createElement('br'));
controls.appendChild(widthInput);
var widthLabel = document.createElement('label');
widthLabel.innerHTML = 'Width';
controls.appendChild(widthLabel);
var heightInput = document.createElement('input');
heightInput.type = 'number';
heightInput.value = height;
heightInput.onchange = function() {
  height = heightInput.value;
  canvas.height = height;
};
controls.appendChild(document.createElement('br'));
controls.appendChild(heightInput);
var heightLabel = document.createElement('label');
heightLabel.innerHTML = 'Height';
controls.appendChild(heightLabel);

controls.style.padding = '20px';
controls.style.background = 'rgba(255, 255, 255, 0.8)';
controls.style.border = '1px solid rgba(255, 0, 0, 0.8)';
controls.style.fontFamily = 'sans-serif';
controls.style.fontSize = '16px';
circleSize.style.width = '50px';
speedSlider.style.width = '200px';
widthSlider.style.width = '200px';
inverse.style.width = '100px';
inverse.style.height = '30px';
inverse.style.fontSize = '16px';
inverse.style.background = '#333';
inverse.style.color = '#fff';
inverse.style.border = '1px solid #333';
inverse.style.borderRadius = '5px';
inverse.style.cursor = 'pointer';
inverse.onmouseover = function() {
  inverse.style.background = '#fff';
  inverse.style.color = '#333';
};
inverse.onmouseout = function() {
  inverse.style.background = '#333';
  inverse.style.color = '#fff';
};
widthInput.style.width = '50px';
heightInput.style.width = '50px';
});
