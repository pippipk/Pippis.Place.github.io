console.log("main is called");

var rect = new RECTY(789, 577); //boundary box called
var blue = new BUTTON(3,327,183, 75, "rgb(194, 193, 255, 0.6)", "rgb(194, 193, 255, 1)",rect); // blue colour button
var rectButton = new shapeBUTTON(0,543,189, 57, "black", "white", rect, "RECTANGLE", 0); // button to change shape to rectangle
var elpButton = new shapeBUTTON(0,486,189, 57, "black", "white", rect, "ELLIPSE", 20); // changes shape to ellipse
var purple = new BUTTON(3,408,183, 75, "rgb(253, 160, 255, 0.6)", "rgb(253, 160, 255, 1)",rect); // purple colour button
var yellow = new BUTTON(3,165,183, 75, "rgb(255, 230, 142, 0.6)", "rgb(255, 230, 142, 1)", rect);// yellow colour button
var green = new BUTTON(3,246,183, 75, "rgb(149, 178, 137, 0.6)","rgb(149, 178, 137, 1)", rect); // green colour button
var pink = new BUTTON(3,3,183, 75, "rgba(247, 165, 192, 0.6)","rgba(247, 165, 192, 1)",rect); // pink colour button
var orange = new BUTTON(3,84,183, 75, "rgb(249, 209, 152, 0.6)","rgb(249, 209, 152, 1)",rect); // orange colour button


function animate(){
    ctx.clearRect(0,0, width, height);
    // calling all the variables
    purple.update();
    yellow.update();
    green.update();
    pink.update();
    orange.update();
    blue.update();
    rect.update();
    rectButton.update();
    elpButton.update();
    ctx.save();
    window.requestAnimationFrame(animate);
}
animate();