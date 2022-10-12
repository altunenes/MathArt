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
      if (frequency > 8080) {
        frequency = 10;
      }
      requestAnimationFrame(animate);
    };
    animate();
    document.body.style.overflow = 'hidden';

var frequency = 10;
var frequencyText = document.createElement('div');
frequencyText.style.position = 'absolute';
frequencyText.style.top = '0';
frequencyText.style.right = '0';
frequencyText.style.color = 'red';
document.body.appendChild(frequencyText);
var updateFrequencyText = function() {
  frequencyText.innerHTML = frequency;
  requestAnimationFrame(updateFrequencyText);
};
updateFrequencyText();
    
 var style = document.createElement('style');
style.innerHTML = '* { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }';
document.head.appendChild(style);
 var frequencyLabel = document.createElement('div');
frequencyLabel.style.position = 'absolute';
frequencyLabel.style.top = '0';
frequencyLabel.style.right = '40';
frequencyLabel.style.color = 'red';
frequencyLabel.innerHTML = 'frequency:';
document.body.appendChild(frequencyLabel);
});
