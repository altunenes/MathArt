for (var i = 0; i < 100; i++) {
  var line = document.createElement('div');
  line.style.position = 'absolute';
  line.style.left = i * 10 + 'px';
  line.style.width = '5px';
  line.style.height = '100%';
  line.style.backgroundColor = 'black';
  line.style.transform = 'rotate(' + i * 8 + 'deg)';
  document.body.appendChild(line);
}
