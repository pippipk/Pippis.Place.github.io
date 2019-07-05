// ----------------- set up code includes resolution management
var myScale = 0;

function setupCanvas(canvas) {
// Get the device pixel ratio, falling back to 1.
var dpr = window.devicePixelRatio || 1;
myScale=dpr;
// Get the size of the canvas in CSS pixels.
var rect = canvas.getBoundingClientRect();
console.log(rect.width);
console.log(rect.height);
// Give the canvas pixel dimensions of their CSS
// size * the device pixel ratio.
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
var ctx = canvas.getContext('2d');
// Scale all drawing operations by the dpr, so you
// don't have to worry about the difference.
ctx.scale(dpr, dpr);
return ctx;
}
// basic drawing on the canvas with no functions
var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas'); 
const width = canvas.width/myScale;
const height = canvas.height/myScale;

var colArray=[
    [ "black", "rgb(102, 51, 0)", "grey"], // this is my colArray where all the colour for my program will be accessed from
    ["rgb(255,105,180)","rgba(255,0,0)","rgb(255,140,0)"],
    ["rgb(255,255,0)","rgb(0,255,0)", "rgb(0,255,255)"],
    ["rgb(0,0,255)","rgb(102, 0, 204)","rgb(255,0,255)"],
    ["black", "rgb(102, 51, 0,0.6)", "white"], 
    ["rgb(255,105,180,0.6)","rgba(255,0,0,0.6)","rgb(255,140,0,0.6)"],
    ["rgb(255,255,0,0.6)","rgb(0,255,0,0.6)", "rgb(0,255,255,0.6)"],
    ["rgb(0,0,255,0.6)", "rgb(102, 0, 204,0.6)","rgb(255,0,255,0.5)"],
    ["#cc99ff", "#fafad2", "#ffe6ff"]
        ]