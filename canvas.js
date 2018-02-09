var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");

var clear = document.getElementById("clear");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

var requestID;

var animate = function(){

    var radius = 0;
    var growth = 1;
    
    var beginCircle = function(){
	clearCanvas();
	context.beginPath();
	context.arc(350, 250, radius, 0, 2*Math.PI);
	context.fill();
	context.stroke();
	radius = radius + growth;
	if (radius == 0 || radius == canvas.height/2){
	    growth = growth * -1;
	}
	console.log(radius);
	requestID = window.requestAnimationFrame(beginCircle);
	console.log(requestID);
    }

    beginCircle();
}

start.addEventListener("click", animate);

var animateDVD = function(){

    var x = 40;
    var xchange = Math.abs(Math.floor(Math.random()*10 - 5));
    var y = 100;
    var ychange = Math.abs(Math.floor(Math.random()*10 - 5));
    var radius = 20;
    
    var beginDVD = function(){
	clearCanvas();
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI);
	context.fill();
	context.stroke();

	console.log(x);
	x = x + xchange;
	y = y + ychange;
	
	if (x <= radius || x >= canvas.width - radius){
	    xchange = -1 * xchange;
	}
	if (y <= radius || y >= canvas.height - radius){
	    ychange = -1 * ychange;
	}
	
	requestID = window.requestAnimationFrame(beginDVD);
	console.log(requestID);
    }

    beginDVD();
}

start2.addEventListener("click", animateDVD);

var stopit = function(){
    window.cancelAnimationFrame(requestID);
}

stop.addEventListener("click", stopit);

var clearCanvas = function(){
    window.cancelAnimationFrame(requestID);
    context.clearRect(0, 0, canvas.width, canvas.height);
}

clear.addEventListener("click", clearCanvas);
