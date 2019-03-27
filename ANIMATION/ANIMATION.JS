console.log("animation is called");

objectSet = [];

var BBOne = new bouncingBall(300,200,190,270, colArray[0][8], 10, 2, 2);
var BBTwo = new bouncingBall(300,200,190,270, colArray[0][7], 10, -3, 3);
var BBThree = new bouncingBall(300,200,190,270, colArray[0][6], 10, 5, 2);
objectSet.push(BBOne, BBTwo, BBThree);

function animate(){
    ctx.clearRect(0, 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update()
    }


    window.requestAnimationFrame(animate);
}

animate();