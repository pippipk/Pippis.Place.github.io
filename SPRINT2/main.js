console.log("main is called");
 

var elp = new ELLIPSE(200,30, 770,530, "rgb(249, 209, 152, 0.5)")


function animate(){
    ctx.clearRect(0,0, width, height);
    elp.update();
    ctx.save();
    window.requestAnimationFrame(animate);
}
animate();