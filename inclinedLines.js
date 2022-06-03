var lines = [];
var speed = 1;
function moveLines() {
  for (var i = 0; i < lines.length; i++) {
    lines[i].style.left = parseInt(lines[i].style.left) + speed + 'px';
    if (parseInt(lines[i].style.left) > window.innerWidth) {
      lines[i].style.left = '0px';
    }
  }
}
for (var i = 0; i < 100; i++) {
  var line = document.createElement('div');
  line.style.position = 'absolute';
  line.style.left = i * 10 + 'px';
  line.style.width = '5px';
  line.style.height = '100%';
  line.style.backgroundColor = 'black';
  line.style.transform = 'rotate(' + i * 8 + 'deg)';
  document.body.appendChild(line);
  lines.push(line);
}
setInterval(moveLines, 10);
