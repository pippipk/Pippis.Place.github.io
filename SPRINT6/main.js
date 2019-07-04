console.log("main is called");

var draw = new Draw(280,15,705, 570); //boundary box called
var rectButton = new shapeBUTTON(80,400,35, 50, "black", "white", "RECTANGLE"); // button to change shape to rectangle
var elpButton = new shapeBUTTON(124,410,60, 35, "black", "white", "ELLIPSE"); // changes shape to ellipse
var triButton = new shapeBUTTON(40,460,50, 50, "black", "white", "TRIANGLE");
var circleButton = new shapeBUTTON(20,400,50, 50, "black", "white", "CIRCLE");
var lineButton = new shapeBUTTON(4,450,200, 60, "black", "white", "LINE");
var BGButton = new drawBUTTON(34,300,100, 60, "#cc99ff", "black", 1);
var drawButton = new drawBUTTON(146,300,100,60, "#cc99ff", "black", 2);
var box = new drawBUTTON(15,15,250,360, "#ffe6ff", "#ffe6ff");
var undoButton = new drawBUTTON(2,500,90,60, "#fafad2", "black", 3);
var resetButton = new drawBUTTON(100,500,90,60, "#fafad2", "black", 4);
var heartButton = new shapeBUTTON(100,460,50, 50, "black", "white", "HEART");
var aqua = new BUTTON(181,162,70, 60, "rgb(0,255,255,0.6)", "rgb(0,255,255)", "black"); // aqua colour button
var magenta = new BUTTON(181,228,70, 60, "rgb(255,0,255, 0.55)", "rgb(255,0,255)", "black"); // pink colour button
var pink = new BUTTON(29, 96, 70,60, "rgb(	255,105,180	,0.6)", "rgb(	255,105,180	)", "black")
var green = new BUTTON(105,162,70, 60, "rgb(0,255,0,0.6)", "rgb(0,255,0)", "black");// green colour button
var blue = new BUTTON(29,228,70, 60, "rgb(0,0,255,0.6)","rgb(0,0,255)", "black"); // blue colour button
var red = new BUTTON(105,96,70, 60, "rgba(255,0,0,0.6)","rgba(255,0,0)", "black"); // red colour button
var yellow = new BUTTON(29,162,70, 60, "rgb(255,255,0,0.6)","rgb(255,255,0)", "black");// yellow colour button
var black = new BUTTON(29,30,70, 60, "black","black", "white");
var orange = new BUTTON(181,96,70,60, "rgb(255,140,0,0.6)", "rgb(255,140,0)", "black");
var brown = new BUTTON(105, 30,70,60, "rgb(102, 51, 0,0.6)", "rgb(102, 51, 0)", "black");
var purple = new BUTTON(105,228,70,60, "rgb(102, 0, 204,0.6)", "rgb(102, 0, 204)", "black");
var white = new BUTTON(181,30,70, 60, "white","gainsboro", "black");
var slide = new Slider(15,560, 175, 10,"WHITE", "black");

//var myCanvas = document.getElementById('myCanvas');
var imgObj = new Image();
imgObj.src = 'brush.png';

imgObj.onload = function(){
    //Draw the image onto the canvas.
    ctx.drawImage(imgObj, 0, 0);
    console.log ("image")
    //console.log(myCanvas.toDataURL('image/jpg'));
}

function animate(){
    ctx.clearRect(0,0, width, height);
    // calling all the variables
    box.update();
    magenta.update();
    green.update();
    blue.update();
    brown.update();
    red.update();
    pink.update();
    purple.update();
    orange.update();
    //seafoam.update();
    BGButton.update();
    undoButton.update();
    resetButton.update();
    drawButton.update();
    yellow.update();
    aqua.update();
    draw.update();
    rectButton.update();
    elpButton.update();
    triButton.update();
    //lineButton.update();
    heartButton.update();
    circleButton.update();
    white.update();
    black.update();
    slide.update();
    window.requestAnimationFrame(animate);
}
animate();