console.log("main is called");

var box = new BOUNDARY(200,30, 770,530, "rgba(247, 165, 192, 0.5)")


function animate(){
    ctx.clearRect(0,0, width, height);
    box.update();
    window.requestAnimationFrame(animate);
}
animate();