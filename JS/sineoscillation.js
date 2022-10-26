document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var time = 1;
  var speed = 0.01;
  var frequency = 1;
  var amplitude = 180;
  
  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    for (var i = 0; i < width; i++) {
      ctx.lineTo(i, height / 2+ Math.sin(  i * frequency*Math.PI/180+time) * amplitude);
    }
    ctx.strokeStyle = 'hsl(' + (time * 100) + ', 100%, 50%)';
    ctx.lineWidth = 1;
    ctx.stroke();
    time += speed;
    requestAnimationFrame(draw);
  }
  draw();
  
  var increaseButton = document.createElement('button');
  increaseButton.innerHTML = '+';
  increaseButton.onclick = function() {
    amplitude += 10;
  };
  document.body.appendChild(increaseButton);
  var decreaseButton = document.createElement('button');
  decreaseButton.innerHTML = '-';
  decreaseButton.onclick = function() {
    amplitude -= 10;
  };
  document.body.appendChild(decreaseButton);
  
  increaseButton.style.position = 'absolute';
  increaseButton.style.top = '0';
  increaseButton.style.left = '50%';
  decreaseButton.style.position = 'absolute';
  decreaseButton.style.top = '0';
  decreaseButton.style.left = '45%';
  
  
  var colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.value = '#ffffff';
  colorPicker.oninput = function() {
    document.body.style.backgroundColor = colorPicker.value;
  };
  document.body.appendChild(colorPicker);
  
  colorPicker.style.position = 'absolute';
  colorPicker.style.top = '0';
  colorPicker.style.right = '0';
  
  var frequencyInput = document.createElement('input');
  frequencyInput.type = 'number';
  frequencyInput.value = frequency;
  frequencyInput.oninput = function() {
    frequency = frequencyInput.value;
  };
  document.body.appendChild(frequencyInput);
  
  frequencyInput.style.position = 'absolute';
  frequencyInput.style.top = '10px';
  frequencyInput.style.left = '0';
  
  var frequencyLabel = document.createElement('div');
  frequencyLabel.innerHTML = 'frequency';
  document.body.appendChild(frequencyLabel);
  frequencyLabel.style.position = 'absolute';
  frequencyLabel.style.top = '35px';
  frequencyLabel.style.left = '0';
  var amplitudeLabel = document.createElement('div');
  amplitudeLabel.innerHTML = 'amplitude';
  document.body.appendChild(amplitudeLabel);
  amplitudeLabel.style.position = 'absolute';
  amplitudeLabel.style.top = '25px';
  amplitudeLabel.style.left = '45%';
  var bgColorLabel = document.createElement('div');
  bgColorLabel.innerHTML = 'bg color';
  document.body.appendChild(bgColorLabel);
  bgColorLabel.style.position = 'absolute';
  bgColorLabel.style.top = '25px';
  bgColorLabel.style.right = '0';
  
  var labels = document.getElementsByTagName('div');
  for (var i = 0; i < labels.length; i++) {
    labels[i].style.fontFamily = 'sans-serif';
    labels[i].style.fontSize = '18px';
    labels[i].style.color = 'black';
  }
  
  
  var time2 = 1;
  var speed2 = 0.01;
  
  function draw2() {
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    for (var i = 0; i < width; i++) {
      ctx.lineTo(i, height / 2+ Math.cos(  i * frequency*Math.PI/180+time) * amplitude );
    }
    ctx.strokeStyle = 'hsl(' + (time2 * 100) + ', 100%, 50%)';
    ctx.lineWidth = 2;
    ctx.stroke();
    time2 += speed2;
    requestAnimationFrame(draw2);
  }
  draw2();
  
  
  var time= 1;
  var speed3 = 0.1;
  
  
  function draw3() {
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    for (var i = 15; i < width; i++) {
      ctx.lineTo(i, height / 2+ Math.asin(  i * frequency*Math.PI/180+time) * amplitude );
    }
    ctx.strokeStyle = 'hsl(' + (time * 100) + ', 100%, 50%)';
    ctx.lineWidth = 2;
    ctx.stroke();
    time += speed3;
    requestAnimationFrame(draw3);
  }
  draw3();
  
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
  
  /* Under the construction. the next part is about a new illusion that uses background motion.
    var rightArrow = document.createElement('div');
    rightArrow.innerHTML = '→';
    rightArrow.style.fontSize = '100px';
    rightArrow.style.color = 'black';
    rightArrow.style.position = 'absolute';
    rightArrow.style.top = '40%';
    rightArrow.style.left = '50%';
    document.body.appendChild(rightArrow);
    var leftArrow = document.createElement('div');
    leftArrow.innerHTML = '←';
    leftArrow.style.fontSize = '100px';
    leftArrow.style.color = 'black';
    leftArrow.style.position = 'absolute';
    leftArrow.style.top = '40%';
    leftArrow.style.left = '50%';
    document.body.appendChild(leftArrow);
  function changeDirection() {
      if (rightArrow.style.display === 'none') {
        rightArrow.style.display = 'block';
        leftArrow.style.display = 'none';
      } else {
        rightArrow.style.display = 'none';
        leftArrow.style.display = 'block';
      }
    }
    setInterval(changeDirection, 5000);
    function changeColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      rightArrow.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
      leftArrow.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    setInterval(changeColor, 5
    );
    /*var dusts = [];
    var dustSize = 4;
    var dustSpeed = 1;
    var dustColor = 'red';
    function drawDusts() {
      ctx.clearRect(0, 0, width, height);
      for (var i = 0; i < dusts.length; i++) {
        ctx.fillStyle = dustColor;
        ctx.fillRect(dusts[i].x, dusts[i].y, dustSize, dustSize);
      }
      requestAnimationFrame(drawDusts);
    }
    drawDusts();
    function moveDusts() {
      for (var i = 0; i < dusts.length; i++) {
        if (rightArrow.style.display === 'block') {
          dusts[i].x += dustSpeed;
        } else {
          dusts[i].x -= dustSpeed;
        }
      }
    }
    setInterval(moveDusts, 5);
    function addDusts() {
      for (var i = 0; i < 10; i++) {
        var dust = {
          x: Math.random() * width,
          y: Math.random() * height
        };
        dusts.push(dust);
      }
    }
    setInterval(addDusts, 1000); */
  
  
  });


