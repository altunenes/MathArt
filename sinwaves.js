document.addEventListener("DOMContentLoaded", function() {

    var frequency = 10;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);
    var context = canvas.getContext('2d');
    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);
    context.fillStyle = '#fff';
    var x, y, i, j;
    var animate = function() {
      context.fillStyle = '#000';
      context.fillRect(0, 0, width, height);
      context.fillStyle = '#fff';
      for (i = 0; i < width; i += 1) {
        for (j = 0; j < height; j += 1) {
          x = i / width * 2 - 1;
          y = j / height * 2 - 1;
          if (Math.sin(Math.sqrt(x * x + y * y) * frequency) > 0) {
            context.fillRect(i, j, 1, 1);
          }
        }
      }
      frequency += 10;
      if (frequency > 500) {
        frequency = 10;
      }
      requestAnimationFrame(animate);
    };
    animate();
    document.body.style.overflow = 'hidden';


});
