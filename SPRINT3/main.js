console.log("main is called");
 
var rect = new RECTY(210,28,770, 533);
var blue = new BUTTON(40,390,150, 80, "rgb(194, 193, 255, 0.5)");
var purple = new BUTTON(40,480,150, 80, "rgb(253, 160, 255, 0.5)");
var yellow = new BUTTON(40,210,150, 80, "rgb(255, 230, 142, 0.5)");
var green = new BUTTON(40,300,150, 80, "rgb(149, 178, 137, 0.5)");
var pink = new BUTTON(40,30,150, 80, "rgba(247, 165, 192, 0.5)");
var orange = new BUTTON(40,120,150, 80, "rgb(249, 209, 152, 0.5)");


function animate(){
    ctx.clearRect(0,0, width, height);
    rect.update();
    purple.update();
    yellow.update();
    green.update();
    pink.update();
    orange.update();
    blue.update();
    ctx.save();
    window.requestAnimationFrame(animate);
}
animate();