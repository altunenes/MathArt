document.addEventListener("DOMContentLoaded", function() {

    var frequency = 44;
    var amplitude = 1;
    var phase = 0;
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;
    var radius = Math.min(centerX, centerY);
    var numCircles = 55;
    var numPoints = 3;
    var circleRadius = radius / numCircles;
    var circlePoints = [];
    for (var i = 0; i < numCircles; i++) {
      circlePoints[i] = [];
      for (var j = 0; j < numPoints; j++) {
        circlePoints[i][j] = {
          x: centerX + Math.sin(4 * Math.PI * j / numPoints) * circleRadius * (i + 1),
          y: centerY + Math.cos(2 * Math.PI * j / numPoints) * circleRadius * (i + 1)
        };
      }
    }
    var canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    var context = canvas.getContext('2d');
    var draw = function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < numCircles; i++) {
        context.beginPath();
        context.moveTo(circlePoints[i][0].x, circlePoints[i][0].y);
        for (var j = 1; j < numPoints; j++) {
          context.lineTo(circlePoints[i][j].x, circlePoints[i][j].y);
        }
        context.closePath();
        context.strokeStyle = 'hsl(' + (360 * i / numCircles) + ', 100%, 50%)';
        context.stroke();
      }
      for (var i = 0; i < numCircles; i++) {
        for (var j = 0; j < numPoints; j++) {
          circlePoints[i][j].x += Math.sin(2 * Math.PI * frequency * j / numPoints + phase) * amplitude;
          circlePoints[i][j].y += Math.cos(2 * Math.PI * frequency * j / numPoints + phase) * amplitude;
        }
      }
      phase += 0.01;
      requestAnimationFrame(draw);
    };
    draw();
    document.body.style.backgroundColor = "white";
    
    var colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = '#ffffff';
    colorPicker.style.position = 'absolute';
    colorPicker.style.top = '70';
    colorPicker.addEventListener('change', function(e) {
      document.body.style.backgroundColor = e.target.value;
    });
    document.body.appendChild(colorPicker);
    var slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 1;
    slider.max = 10;
    slider.value = 1;
    slider.style.position = 'fixed';
    slider.style.top = '0';
    slider.style.right = '70px';
    slider.oninput = function() {
      context.lineWidth = slider.value;
    };
    document.body.appendChild(slider);
    var slider2 = document.createElement('input');
    slider2.type = 'range';
    slider2.min = 0;
    slider2.max = 100;
    slider2.value = 50;
    slider2.style.position = 'absolute';
    slider2.style.top = '0';
    slider2.style.left = '30px';
    slider2.oninput = function() {
      frequency = slider2.value / 100;
    };
    document.body.appendChild(slider2);
    
    var slider3 = document.createElement('input');
    slider3.type = 'range';
    slider3.min = 0;
    slider3.max = 100;
    slider3.value = 50;
    slider3.style.position = "absolute";
    slider3.style.top = "0px";
    slider3.style.left="310px"
    slider3.oninput = function() {
      amplitude = slider3.value / 100;
    };
    document.body.appendChild(slider3);
    
    
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
    twitter.href = 'https://twitter.com/altunenes';
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
    });
    
