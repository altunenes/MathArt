for (var i = 1; i < 37; i++) {
        var line = document.createElement('div');
        line.style.width = '6px';
        line.style.height = '340px';
        line.style.backgroundColor = 'blue';
        line.style.position = 'absolute';
        line.style.left = '300px';
        line.style.top = '30px';
        line.style.transform = 'translate(' + (i * 10) + 'px, 0px)';
        document.body.appendChild(line);
      }
   document.body.style.overflow = 'hidden';
   var angle = 0;
   var spin = function() {
     angle += 0.05;
     for (var i = 1; i < 37; i++) {
       var line = document.body.children[i];
       line.style.transform = 'translate(' + (i * 10) + 'px, 0px) rotate(' + (angle + i * 60) + 'deg)';
     }
     requestAnimationFrame(spin);
   };

var i = 0;
var interval = setInterval(function() {
  rect2.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  i++;

}, 10);
var slider = document.createElement('input');
slider.type = 'range';
slider.min = 0;
slider.max = 300;
slider.value = 24;
slider.style.position = 'absolute';
slider.style.left = '10px';
slider.style.top = '10px';
slider.style.width = '200px';
document.body.appendChild(slider);


var slider2 = document.createElement('input');
slider2.type = 'range';
slider2.min = 0;
slider2.max = 180;
slider2.value = 60;
slider2.style.position = 'absolute';
slider2.style.left = '10px';
slider2.style.top = '40px';
slider2.style.width = '200px';
document.body.appendChild(slider2);


var speed = 0.7;
slider.oninput = function() {
  speed = slider.value / 100;
};

var colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.value = '#ff0000';
colorPicker.style.position = 'absolute';
colorPicker.style.left = '10px';
colorPicker.style.top = '10px';
document.body.appendChild(colorPicker);
colorPicker.oninput = function() {
  document.body.style.backgroundColor = colorPicker.value;
};
var rog2 = 60;
slider2.oninput = function() {
  rog2= slider2.value;
};
var spin = function() {
  angle += speed;
  for (var i = 0; i < 37; i++) {
    var line = document.body.children[i];
    line.style.transform = 'translate(' + (i * 10) + 'px, 0px) rotate(' + (angle + i * rog2) + 'deg)';
    line.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
  }
  requestAnimationFrame(spin);
};
requestAnimationFrame(spin);

var i = 0;
var interval = setInterval(function() {
  document.body.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  i++;

}, 500);
