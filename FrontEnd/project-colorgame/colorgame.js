// var colors =[
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 0, 255)",
// 	"rgb(0, 255, 255)"
// ]
var colors = generateRandomColors(6);
var pickedColor = pickColor();

var h1 = document.querySelector("h1");

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById('colorDisplay');

var resetBtn = document.querySelector("#resetBtn");

colorDisplay.textContent = pickedColor;

setSquaresDisplay();

for(var i = 0; i < squares.length; i++){

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!";
			resetBtn.textContent = "Replay";
			changeAllSquaresColor(pickedColor);
			h1.style.background = clickedColor;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

resetBtn.addEventListener("click",function(){
	reset();
});

function reset(){
	colors = generateRandomColors(6);
	
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	setSquaresDisplay();
	messageDisplay.textContent = "";
}

function setSquaresDisplay(color){
	for(var i=0; i<colors.length ; i++){
		squares[i].style.background = colors[i];
	}
}

function changeAllSquaresColor(color){
	for(var i=0; i<colors.length ; i++){
		squares[i].style.background=color;
	}
}
function pickColor(){
	var pickedColor = Math.floor(Math.random() * colors.length);
	return colors[pickedColor];
}
function generateRandomColors(number){
	var colorArray = [];
	for(var i=0; i<number;i++){
		colorArray[i] = randomColor();
	}
	return colorArray;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);  //0-255
	var g = Math.floor(Math.random() * 256);  //0-255
	var b = Math.floor(Math.random() * 256);  //0-255
	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color; 

}