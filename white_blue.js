var neuron = document.createElement('div');
	neuron.style.width = '100px';
	neuron.style.height = '100px';
	neuron.style.backgroundColor = '#00FF00';
	neuron.style.borderRadius = '50%';
	neuron.style.position = 'absolute';
	neuron.style.top = '50%';
	neuron.style.left = '80%';
	neuron.style.marginTop = '-50px';
	neuron.style.marginLeft = '-50px';
	neuron.style.transition = 'all 0.5s';
	document.body.appendChild(neuron);


	var neuronSpike = function() {
	  neuron.style.backgroundColor = '#FF0000';
	  neuron.style.width = '250px';
	  neuron.style.height = '250px';
	  neuron.style.marginTop = '-75px';
	  neuron.style.marginLeft = '-75px';
	  setTimeout(function() {
	    neuron.style.backgroundColor = '#00FF00';
	    neuron.style.width = '200px';
	    neuron.style.height = '200px';
	    neuron.style.marginTop = '-50px';
	    neuron.style.marginLeft = '-50px';
	  }, 500);
	};


	neuronSpike();
	setInterval(neuronSpike, 1000);


	var backgroundColor = '#FFFFFF';
	var changeBackgroundColor = function() {
	  if (backgroundColor === '#FFFFFF') {
	    backgroundColor = '#FF0000';
	  } else {
	    backgroundColor = '#FFFFFF';
	  }
	  document.body.style.backgroundColor = backgroundColor;
	};


	changeBackgroundColor();
	setInterval(changeBackgroundColor, 5000);


	var neuron2 = document.createElement('div');
	neuron2.style.width = '100px';
	neuron2.style.height = '100px';
	neuron2.style.backgroundColor = '#00FF00';
	neuron2.style.borderRadius = '50%';
	neuron2.style.position = 'absolute';
	neuron2.style.top = '50%';
	neuron2.style.left = '10%';
	neuron2.style.marginTop = '-50px';
	neuron2.style.marginLeft = '-50px';
	neuron2.style.transition = 'all 0.5s';
	document.body.appendChild(neuron2);


	var neuronSpike2 = function() {
	  neuron2.style.backgroundColor = '#FF0000';
	  neuron2.style.width = '250px';
	  neuron2.style.height = '250px';
	  neuron2.style.marginTop = '-75px';
	  neuron2.style.marginLeft = '-75px';
	  setTimeout(function() {
	    neuron2.style.backgroundColor = '#00FF00';
	    neuron2.style.width = '200px';
	    neuron2.style.height = '200px';
	    neuron2.style.marginTop = '-50px';
	    neuron2.style.marginLeft = '-50px';
	  }, 500);
	};


	var lookHere = document.createElement('div');
	lookHere.innerHTML = 'look here';
	lookHere.style.position = 'absolute';
	lookHere.style.top = '50%';
	lookHere.style.left = '50%';
	lookHere.style.transform = 'translate(-50%, -50%)';
	lookHere.style.fontSize = '100px';
	document.body.appendChild(lookHere);
	var colors = ['yellow', 'green'];
	var colorIndex = 0;
	var size = 100;
	var sizeDirection = -1;
	setInterval(function() {
	  lookHere.style.color = colors[colorIndex];
	  colorIndex = (colorIndex + 1) % colors.length;
	  size += sizeDirection;
	  if (size < 10) {
	    sizeDirection = 1;
	  } else if (size > 100) {
	    sizeDirection = -1;
	  }
	  lookHere.style.fontSize = size + 'px';
	}, 100);
	neuronSpike2();
	setInterval(neuronSpike2, 1000);

var neuron3 = document.createElement('div');
	neuron3.style.width = '100px';
	neuron3.style.height = '100px';
	neuron3.style.backgroundColor = '#00FF00';
	neuron3.style.borderRadius = '50%';
	neuron3.style.position = 'absolute';
	neuron3.style.top = '20%';
	neuron3.style.left = '50%';
	neuron3.style.marginTop = '-50px';
	neuron3.style.marginLeft = '-50px';
	neuron3.style.transition = 'all 0.5s';
	document.body.appendChild(neuron3);


	var neuronSpike3 = function() {
	  neuron3.style.backgroundColor = '#FF0000';
	  neuron3.style.width = '150px';
	  neuron3.style.height = '150px';
	  neuron3.style.marginTop = '-75px';
	  neuron3.style.marginLeft = '-75px';
	  setTimeout(function() {
	    neuron3.style.backgroundColor = '#00FF00';
	    neuron3.style.width = '100px';
	    neuron3.style.height = '100px';
	    neuron3.style.marginTop = '-50px';
	    neuron3.style.marginLeft = '-50px';
	  }, 500);
	};


	neuronSpike3();
	setInterval(neuronSpike3, 1000);


	var neuron4 = document.createElement('div');
	neuron4.style.width = '100px';
	neuron4.style.height = '100px';
	neuron4.style.backgroundColor = '#00FF00';
	neuron4.style.borderRadius = '50%';
	neuron4.style.position = 'absolute';
	neuron4.style.top = '80%';
	neuron4.style.left = '50%';
	neuron4.style.marginTop = '-50px';
	neuron4.style.marginLeft = '-50px';
	neuron4.style.transition = 'all 0.5s';
	document.body.appendChild(neuron4);


	var neuronSpike4 = function() {
	  neuron4.style.backgroundColor = '#FF0000';
	  neuron4.style.width = '150px';
	  neuron4.style.height = '150px';
	  neuron4.style.marginTop = '-75px';
	  neuron4.style.marginLeft = '-75px';
	  setTimeout(function() {
	    neuron4.style.backgroundColor = '#00FF00';
	    neuron4.style.width = '100px';
	    neuron4.style.height = '100px';
	    neuron4.style.marginTop = '-50px';
	    neuron4.style.marginLeft = '-50px';
	  }, 500);
	};


	neuronSpike4();
	setInterval(neuronSpike4, 1000);
var canvas = document.createElement('canvas');
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   document.body.appendChild(canvas);
   var ctx = canvas.getContext('2d');
   ctx.fillStyle = 'black';
   for (var i = 0; i < window.innerWidth; i += 10) {
     ctx.fillRect(i, 0, 5, window.innerHeight);
   }

	var slider = document.createElement('input');
slider.type = 'range';
slider.min = 0;
slider.max = 100;
slider.value = 0;
slider.style.position = 'absolute';
slider.style.top = '0';
slider.style.left = '0';
slider.style.width = '100%';
slider.style.zIndex = '100';
slider.oninput = function() {
  document.body.style.filter = 'blur(' + slider.value + 'px)';
};
document.body.appendChild(slider);
});
