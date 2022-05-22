for (var i = 0; i < 18; i++) {
	  var line = document.createElement('div');
	  line.style.width = '6px';
	  line.style.height = '340px';
	  line.style.backgroundColor = 'white';
	  line.style.position = 'absolute';
	  line.style.left = '300px';
	  line.style.top = '30px';
	  line.style.transform = 'translate(' + (i * 10) + 'px, 0px)';
	  document.body.appendChild(line);
	}
document.body.style.overflow = 'hidden';
var angle = 0;
var spin = function() {
  angle += 0.5;
  for (var i = 0; i < 18; i++) {
    var line = document.body.children[i];
    line.style.transform = 'translate(' + (i * 10) + 'px, 0px) rotate(' + (angle + i * 60) + 'deg)';
  }
  requestAnimationFrame(spin);
};
requestAnimationFrame(spin);
var circle2 = document.createElement('div');
circle2.style.width = '10px';
circle2.style.height = '10px';
circle2.style.backgroundColor = 'yellow';
circle2.style.position = 'absolute';
circle2.style.left = '300px';
circle2.style.top = '170px';
circle2.style.borderRadius = '50%';
document.body.appendChild(circle2);
var circle3 = document.createElement('div');
circle3.style.width = '10px';
circle3.style.height = '10px';
circle3.style.backgroundColor = 'yellow';
circle3.style.position = 'absolute';
circle3.style.left = '520px';
circle3.style.top = '170px';
circle3.style.borderRadius = '50%';
document.body.appendChild(circle3);
var circle4 = document.createElement('div');
circle4.style.width = '10px';
circle4.style.height = '10px';
circle4.style.backgroundColor = 'yellow';
circle4.style.position = 'absolute';
circle4.style.left = '390px';
circle4.style.top = '300px';
circle4.style.borderRadius = '50%';
document.body.appendChild(circle4);
document.body.style.backgroundColor = 'black';
var circle = document.createElement('div');
circle.style.width = '10px';
circle.style.height = '10px';
circle.style.backgroundColor = 'green';
circle.style.position = 'absolute';
circle.style.left = '400px';
circle.style.top = '170px';
circle.style.borderRadius = '50%';
document.body.appendChild(circle);
document.body.removeChild(circle);
var interval = setInterval(function() {
  document.body.appendChild(circle);
  setTimeout(function() {
    document.body.removeChild(circle);
  }, 1000);
}, 2000);
