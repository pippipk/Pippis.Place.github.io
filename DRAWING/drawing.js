console.log("drawing js called")
canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

// complete drawing of a rectangle
ctx.strokeStyle = "rgb(255,100,90)";
ctx.fillStyle = 'rgb(204,255,255)';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.rect(200,200, 400, 150);
ctx.stroke();
ctx.fill();

// drawing of a circle
ctx.fillStyle='rgb(255,100,90)';
ctx.strokeStyle='rgb(51,153,255)';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.arc(200,60, 50, 0, 2*Math.PI); // ctx.arc(x, y, R, start angle, 2*MathPI)
ctx.stroke();
ctx.fill();

// add text
ctx.fillStyle="rgb(255,150,205)";
var myFont= "bold italic 30px helvetica";
ctx.font=myFont
ctx.fillText("Hello World xx", 250,300);

// draw line
ctx.strokeStyle="rgb(255,150,205)";
ctx.lineWidth=5;
ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(800,200);
ctx.stroke();

ctx.strokeStyle="rgb(51,153,255)";
ctx.lineWidth=4;
ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(800,400);
ctx.stroke();

//draw polyline with closure
ctx.strokeStyle="rgb(255,150,205)";
ctx.fillStyle="rgb(255,255,153)";
ctx.lineWidth=10;
ctx.beginPath();
ctx.moveTo(0, 500);
ctx.lineTo(500,500);
ctx.lineTo(800,550);
ctx.lineTo(400,550);
ctx.closePath();
ctx.stroke();
ctx.fill();

// function to draw circle
function drawCircle(x,y,R, fillC, strokeC, lwidth, fill, stroke){
    ctx.beginPath();
    ctx.arc(x,y,R,2*MathPI);
    if (fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if (stroke == true){
        ctx.strokeStyle = strokeC;
        ctx.lineWidth = lwidth;
        ctx.stroke();
    }
}