objectSet = []; // this creates the object set list

var draw = new Draw(280,15,705, 570); //boundary box called
var rectButton = new shapes(74,330,35, 50, colArray[0][0], colArray[4][2], "RECTANGLE"); // button to change shape to rectangle created
var elpButton = new shapes(117,340,50, 35, colArray[0][0], colArray[4][2], "ELLIPSE"); // button to change shape to ellipse is created
var triButton = new shapes(168,330,50, 50, colArray[0][0], colArray[4][2], "TRIANGLE"); // button for triangle is created
var circleButton = new shapes(15,330,50, 50, colArray[0][0], colArray[4][2], "CIRCLE"); // circle button created
var brushButton = new shapes(30,382,200, 60, colArray[0][0], colArray[4][2], "BRUSH"); // brush button created
var lineButton = new shapes(30,450,200, 60, colArray[0][0], colArray[4][2], "LINE"); // brush button created
var heartButton = new shapes(215,330,50, 50, colArray[0][0], colArray[4][2], "HEART"); // heart button is created

var box = new drawBUTTON(15,15,250,290, colArray[8][2], colArray[8][2]); // box for design feature is created to separate color buttons 
//from other buttons, I didn't hard code this so it can be moved or made bigger if more colours are added as buttons

var slide = new Slider(20,500, 240, 10,"white", "black"); // slider to change brush side is created
objectSet.push(draw, rectButton, elpButton, triButton, circleButton, brushButton, heartButton, lineButton, box, slide);
// buttons and objects are pushed in to the object set

//colour buttons are created in rows of 3x4
for(var j=0; j<4; j++){
    for(var i=0; i<3; i++){
        if(j==0 && i==0){
            // for first button, the black button required a different colour of text, white, whereas all the other buttons have black text, so the black is defined separately
            var temp = new BUTTON(29,30,70, 60, colArray[0][0],colArray[0][0], colArray[4][2]);
        } // colours for all the objects are defined in the colArray in init.js
        else{
            var temp = new BUTTON(29+76*i, 30+66*j, 70, 60, colArray[j+4][i], colArray[j][i], colArray[0][0]);
        }
        objectSet.push(temp); // buttons are pushed into object set
    }
} 

// the other 5 buttons are defined 
for(var i=0; i<5; i++){
    if(i<2){ // the purple buttons to change colours are created
       // var temp = new drawBUTTON(34+112*i, 300, 100, 60, colArray[8][0], colArray[0][0], i+1);
    }
    if(i>1){ // the buttons for the undo, reset and redo are created
        var temp = new drawBUTTON(9+90*(i-2), 526, 81, 60, colArray[8][1], colArray[0][0], i+1);
    }
    objectSet.push(temp); // they are pushed into the object set
}

// creating the brush image
var imgObj = new Image();
imgObj.src = 'brush.png'; // this is the image source

var imgObj2 = new Image();
imgObj2.src = 'pencil.png';

function animate(){
    ctx.clearRect(0,0, width, height);
    //this clears the canvas
    
    // calling all the variables
    // this updates the objects in the object set onto the screen
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    window.requestAnimationFrame(animate);
}
animate();