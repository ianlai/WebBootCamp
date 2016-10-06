var colors;
var pickedColor;
var mode;
var numSquares = 6;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById('colorDisplay');

var resetBtn = document.querySelector("#resetBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

init();

function init() {
    setSquaresListener();
    setButtonListener();
    reset();
}
function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    setSquaresDisplay();
    messageDisplay.textContent = "";
    h1.style.background = "rgb(62,1,175)";
}
function setSquaresListener() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!";
                resetBtn.textContent = "Replay";
                changeAllSquaresColor(pickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}
function setSquaresDisplay(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.visibility = "hidden";
    }
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.visibility = "visible";
        squares[i].style.background = colors[i];
    }
}
function setButtonListener(color) {
    easyBtn.addEventListener("click", function() {
        mode = "easy";
        this.classList.add("selected");
        hardBtn.classList.remove("selected");
        numSquares = 3;
        reset();
    });
    hardBtn.addEventListener("click", function() {
        mode = "hard";
        this.classList.add("selected");
        easyBtn.classList.remove("selected");
        numSquares = 6;
        reset();
    });
    resetBtn.addEventListener("click", function() {
        reset();
    });
}
function changeAllSquaresColor(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = color;
    }
}
function pickColor() {
    var pickedColor = Math.floor(Math.random() * colors.length);
    return colors[pickedColor];
}
function generateRandomColors(number) {
    var colorArray = [];
    for (var i = 0; i < number; i++) {
        colorArray[i] = randomColor();
    }
    return colorArray;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256); //0-255
    var g = Math.floor(Math.random() * 256); //0-255
    var b = Math.floor(Math.random() * 256); //0-255
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}
