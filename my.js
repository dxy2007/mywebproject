var canvas = document.getElementById('canvas');

var pen = canvas.getContext('2d');

// pen.fillRect(0,0,50,50);

// add path

pen.rect(0,0,1000,1000)

// filling
pen.font = '30px Arial';

pen.fillText("hello world",10,50)
// pen.fill();

pen.stroke();