var rect = document.createElement('div');
rect.style.backgroundColor = '#00f';
rect.style.width = '180px';
rect.style.height = '180px';
rect.style.position = 'absolute';
rect.style.left = '20%';
rect.style.top = '30%';
document.body.appendChild(rect);
var rect2 = document.createElement('div');
rect2.style.backgroundColor = 'blue';
rect2.style.width = '180px';
rect2.style.height = '180px';
rect2.style.position = 'absolute';
rect2.style.left = '52%';
rect2.style.top = '30%';
document.body.appendChild(rect2);
document.body.appendChild(rect);
var rect3 = document.createElement('div');
rect3.style.backgroundColor = 'blue';
rect3.style.width = '180px';
rect3.style.height = '180px';
rect3.style.position = 'absolute';
rect3.style.left = '52%';
rect3.style.top = '30%';
rect3.style.transform = 'rotate(45deg)';
document.body.appendChild(rect);
var rect4 = document.createElement('div');
rect4.style.backgroundColor = 'yellow';
rect4.style.width = '180px';
rect4.style.height = '180px';
rect4.style.position = 'absolute';
rect4.style.left = '20%';
rect4.style.top = '30%';
rect4.style.transform = 'rotate(45deg)';
document.body.appendChild(rect3);
document.body.appendChild(rect4);
var blue= false;
var interval = setInterval(function() {
  if (yellow) {
    rect4.style.backgroundColor = 'blue';
  } else {
    rect4.style.backgroundColor = 'yellow';
  }
  blue= !blue;
}, 50);
var blue= false;
var interval = setInterval(function() {
  if (yellow) {
    rect3.style.backgroundColor = 'yellow';
  } else {
    rect3.style.backgroundColor = 'blue';
  }
  blue= !blue;
}, 50);
var yellow= false;
var interval = setInterval(function() {
  if (yellow) {
    rect.style.backgroundColor = 'yellow';
  } else {
    rect.style.backgroundColor = 'blue';
  }
  yellow= !yellow;
}, 50);
var blue= false;
var interval = setInterval(function() {
  if (yellow) {
    rect2.style.backgroundColor = 'yellow';
  } else {
    rect2.style.backgroundColor = 'blue';
  }
  blue= !blue;
}, 50);
/* dsa */
var spin = document.createElement('div');
spin.style.position = 'absolute';
spin.style.left = '20%';
spin.style.top = '30%';
spin.style.width = '180px';
spin.style.height = '180px';
spin.style.backgroundColor = '#00f';
spin.style.backgroundImage = 'linear-gradient(to bottom right, blue 0 25%, yellow 25% 50%, blue 50% 75%, yellow 75% 100%)';
spin.style.transform = 'rotate(0deg)';
spin.style.transition = 'transform 1s linear';
document.body.appendChild(spin);
function spinAround() {
  spin.style.transform = 'rotate(' + (parseInt(spin.style.transform.match(/\d+/)) + 10) + 'deg)';
}
setInterval(spinAround, 24);

var spin2 = document.createElement('div');
spin2.style.position = 'absolute';
spin2.style.left = '52%';
spin2.style.top = '30%';
spin2.style.width = '180px';
spin2.style.height = '180px';
spin2.style.backgroundColor = '#00f';
spin2.style.backgroundImage = 'linear-gradient(to bottom right, blue 0 25%, yellow 25% 50%, blue 50% 75%, yellow 75% 100%)';
spin2.style.transform = 'rotate(0deg)';
spin2.style.transition = 'transform 1s linear';
document.body.appendChild(spin2);
function spinAround() {
  spin2.style.transform = 'rotate(' + (parseInt(spin2.style.transform.match(/\d+/)) + 10) + 'deg)';
}
setInterval(spinAround, 24);

document.body.style.backgroundColor = 'gray';
var slider4 = document.createElement('input');
   slider4.type = 'range';
   slider4.min = '0';
   slider4.max = '25';
   slider4.value = '0';
   slider4.style.position = 'absolute';
   slider4.style.top = '25%';
   slider4.style.right = '75%';
   slider4.style.transform = 'translate(-50%, -50%)';
   document.body.appendChild(slider4);
   slider4.addEventListener('change', function() {
     document.body.style.filter = 'blur(' + slider4.value + 'px)';
   });
