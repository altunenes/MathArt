for (var i = 0; i < 100; i++) {
  for (var j = 0; j < 100; j++) {
    var line = document.createElement('div');
    line.style.position = 'absolute';
    line.style.left = i * 10 + 'px';
    line.style.top = j * 10 + 'px';
    line.style.width = '2px';
    line.style.height = '6px';
    line.style.backgroundColor = '#000000';
    document.body.appendChild(line);
  }
}
     /*/   for (var i = 0; i < window.innerWidth; i += 10) {
  var line = document.createElement('div');
  line.style.position = 'absolute';
  line.style.left = i + 'px';
  line.style.width = '1px';
  line.style.height = '100%';
  line.style.backgroundColor = '#000000';
  line.style.transform = 'rotate(135deg)';
  document.body.appendChild(line);
}
/*/
