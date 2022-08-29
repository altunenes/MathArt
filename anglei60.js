for (var i = 0; i < 36; i++) {
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
     for (var i = 0; i < 24; i++) {
       var line = document.body.children[i];
       line.style.transform = 'translate(' + (i * 10) + 'px, 0px) rotate(' + (angle + i * 60) + 'deg)';
     }
     requestAnimationFrame(spin);
   };
document.body.style.backgroundColor = 'black';
var i = 0;
var interval = setInterval(function() {
  rect2.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  i++;
}, 10);
var slider = document.createElement('input');
slider.type = 'range';
slider.min = 0;
slider.max = 55555555555555;
slider.value = 24;
slider.style.position = 'absolute';
slider.style.left = '10px';
slider.style.top = '10px';
slider.style.width = '200px';
document.body.appendChild(slider);
var speed = 0.7;
slider.oninput = function() {
  speed = slider.value / 100;
};
var spin = function() {
  angle += speed;
  for (var i = 0; i < 36; i++) {
    var line = document.body.children[i];
    line.style.transform = 'translate(' + (i * 10) + 'px, 0px) rotate(' + (angle + i * 80) + 'deg)';
    line.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
  }
  requestAnimationFrame(spin);
};
requestAnimationFrame(spin);
