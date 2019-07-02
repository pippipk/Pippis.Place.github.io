console.log("main is called");

var draw = new Draw(5,5,990, 452); //boundary box called
var blue = new BUTTON(669,465,161, 75, "rgb(194, 193, 255, 0.6)", "rgb(194, 193, 255, 1)",draw); // blue colour button
var rectButton = new shapeBUTTON(334,543,166, 57, "grey", "white", draw, "RECTANGLE"); // button to change shape to rectangle
var elpButton = new shapeBUTTON(0,543,167, 57, "grey", "white", draw, "ELLIPSE"); // changes shape to ellipse
var triButton = new shapeBUTTON(499,543,166, 57, "grey", "white", draw, "TRIANGLE");
var circleButton = new shapeBUTTON(167,543,167, 57, "grey", "white", draw, "CIRCLE");
var lineButton = new shapeBUTTON(832,543,167, 57, "grey", "white", draw, "LINE");
var heartButton = new shapeBUTTON(665,543,167, 57, "grey", "white", draw, "HEART");
var purple = new BUTTON(836,465,161, 75, "rgb(253, 160, 255, 0.6)", "rgb(253, 160, 255, 1)",draw); // purple colour button
var yellow = new BUTTON(337,465,160, 75, "rgb(255, 230, 142, 0.6)", "rgb(255, 230, 142, 1)", draw);// yellow colour button
var green = new BUTTON(503,465,160, 75, "rgb(149, 178, 137, 0.6)","rgb(149, 178, 137, 1)", draw); // green colour button
var pink = new BUTTON(3,465,161, 75, "rgba(247, 165, 192, 0.6)","rgba(247, 165, 192, 1)",draw); // pink colour button
var orange = new BUTTON(170,465,161, 75, "rgb(249, 209, 152, 0.6)","rgb(249, 209, 152, 1)",draw); // orange colour button


function animate(){
    ctx.clearRect(0,0, width, height);
    // calling all the variables
    purple.update();
    yellow.update();
    green.update();
    pink.update();
    orange.update();
    blue.update();
    draw.update();
    rectButton.update();
    elpButton.update();
    ctx.save();
    triButton.update();
    lineButton.update();
    heartButton.update();
    circleButton.update();
    window.requestAnimationFrame(animate);
}
animate();