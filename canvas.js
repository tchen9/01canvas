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
	context.arc(250, 250, radius, 0, 2*Math.PI);
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

var stopit = function(){
    window.cancelAnimationFrame(requestID);
}

stop.addEventListener("click", stopit);

var clearCanvas = function(){
    window.cancelAnimationFrame(requestID);
    context.clearRect(0, 0, 500, 500);
}

clear.addEventListener("click", clearCanvas);
