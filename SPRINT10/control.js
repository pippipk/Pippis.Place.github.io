class Draw{
    constructor(x, y, wB, hB){
        this.xB = x; // this is the x value for the boundary box
        this.yB = y; //this is the y value for the boundary box
        this.wB = wB; // this is the width of the boundary box
        this.hB = hB; // this is the height of the boundary box
        this.backgroundCol = colArray[8][1];
        this.textCol = colArray[3][0]; // this is the starting colour for the instructive text on the screen
        this.mouseDown = false; // this sets the value for the mouse down as false as the mouse is not down when the 
        //programme opens
        this.element = canvas; // this is to add the listeners to the canvas
        this.element.addEventListener('mousedown', this.mDown.bind(this)); // this adds an event for when the mouse goes 
        //down
        this.element.addEventListener('mousemove', this.mMove.bind(this)); // this is an event for when the mouse moves
        this.element.addEventListener("mouseup", this.mUp.bind(this)); // this is an event for when the mouse comes up
        this.objectSet=[ ]; // this is the object list where all the drawings pushed onto the screen will be stored so 
        //they can all remain on the screen
        this.objectSet2 = [ ]; // these are the other object sets where the redid objects are stored
        this.objectSet3 = [];
        this.redotrue = false;
        this.undo = 0 ; // these are the conditions that allow an object to be redid
        this.redo = 0;
        this.push = 0;
    }

    draw(){
        this.drawRect(this.x, this.y, this.w, this.h, this.textCol1); //this draws the rectangle outline box on the screen so 
        //the user can see where the shape will be pushed and what the shape will look like
    }

    textColour(c){
        this.textCol = c; //this is the text colour defined in the button class for the instructive colour text on the 
        //screen, this changes each time the mouse hovers over a different colour
    }

    Colour(c, c1, c2){
        this.col = c; // this is sent from the button class and is the colour of the shapes drawn on screen. It changes 
        // each time a different colour button is pushed
        this.brushCol = c1;
        this.textCol1 = c2; // this is also defined in the button class and is the colour of the shape instructive text
        // this changes each time a different coloured button pushed and so does the color of the text 
    }

    Clear(c){
        this.button = c; // this stores the button id of the undo buttons

        if(this.button == 1){
            if(this.col){ // if the button is the change background color buttons then the background color changes to the selected color
                this.backgroundCol = this.col;
            }
        }

        if(this.button == 2){ // if the button selected is the change to original color button then the color changes back
            this.backgroundCol = colArray[8][1];
        }

        if(this.objectSet == 0 && (this.button==5|this.button==3)){
            this.push = 0; // if there is nothing pushed yet then nothing can be undid or redid
    
        }
        if(this.objectSet.length==0 && this.objectSet3.length==0){
                    // this stops things from being undid or redid before anything has been drawn
        }
        else{
            if(this.button == 5){
                this.redotrue = true; // if redo button is pushed objects can be redid under specific requirements
                this.redo += 1;
                if(this.redo==1){
                    this.push += 1;
                    this.objectSet2.push(this.objectSet3[this.objectSet3.length-1]);
                    this.undo=1;
                }
            }
            else{
                this.redo=0; 
            };

            if(this.button == 3){ // if the undo button is pushed then object will be popped from their set
                for(var i=0; i<this.push; i++){

                }
                this.redotrue = false;
                this.redo = 0;
                this.objectSet3.push(this.objectSet[this.objectSet.length-1])
                if(this.undo==1){ // if an object was redid this makes sure it is the first to get undid
                    this.objectSet3.pop();
                    this.objectSet2.pop();
                    this.undo -= 1;
                }
                else{
                    this.objectSet.pop();
                    if(this.undo > 1){
                        this.undo += 1;
                    }
                    else{
                        this.undo -= 1;
                    }
                }
            };

            if(this.button == 4){ // this is the reset button this reset all the object sets and background color
                this.redotrue = false;
                this.objectSet = [];
                this.objectSet2 = [ ];
                this.objectSet3 = [ ];
                this.backgroundCol = colArray[8][1];
            };
        }
        
    }

    Length(l){
        this.length = l; // this is the width for the line and brush functions determined by the slider in the shape button file
    }

    Shape(c){
        this.shape = c; // this is defined in the shapeButtons class when a different shape button is pushed
        //and is the shape that will be drawn. It will be either ellipse, rectangle, or triangle
    }

    mDown(e){
        this.x = e.offsetX;
        this.y = e.offsetY;
        // variables x and y are instantiated and defined by the point where the mDown event occurs
        this.mouseDown = true;
        // when the mDown event occurs the mouseDown variable becomes true
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY; // variables xMouse and yMouse are instantiated are defined by the point of the mouse 
        // on the screen everytime the mouse moves
        if (this.col && this.shape && (this.xB+4) < this.xMouse && (this.xB+4) < this.x && (this.xB-4+this.wB) > this.x && (this.xB-4+this.wB) > this.xMouse && this.yMouse > (this.yB+4) && this.yMouse < (this.yB-4+this.hB)&& this.y > (this.yB+4) && this.y < (this.yB-4+this.hB)){
            this.inbounds = true;//if there is a colour and shape selected and the mouse is within the boundary box then 
            // inbounds becomes true
        }
        else{
            // if the mouse isn't in the bounds box or if the user hasn't picked a colour or a shape yet than inbound will 
            // not be true
            this.inbounds = false;
        }
    }

    mUp(e){ 
        this.mouseDown = false; // when the mUp event occurs the mouseDown variable comes false as the mouse is no longer 
        // down
        if(this.inbounds){
            // when the mouse comes up and inbounds is true a shape is pushed into the object set
            if(this.shape=="RECTANGLE"){ // if the shape button pushed is a rectangle then the rectangle shape will be 
                //pushed using the values defined by the point where the mDown occured and where the mouse was dragged to 
                // before the mouse came up
                var draw = new Rect(this.x, this.y, this.w, this.h, this.col);
            }
            if(this.shape=="ELLIPSE"){
                // if the ellipse button was pushed an ellipse will be drawn
                var draw = new Ellipse(this.x, this.y, this.w, this.h, this.col);
            }
            if(this.shape=="TRIANGLE"){
                // if the triangle button was pushed a triangle will be drawn
                var draw = new Triangle(this.x, this.y, this.w, this.h, this.col);
            }
            if(this.shape=="CIRCLE"){// if the circle button was pushed a circle will be drawn
                var draw = new Circle(this.x, this.y, this.xRadius, this.yRadius, this.col);
            }  
            if(this.shape=="HEART"){// if the heart button was pushed a heart will be drawn
                var draw = new Heart(this.x, this.y, this.w, this.h, this.col);
            } 
            if(this.shape=="LINE"){// if the line button was pushed a line will be drawn
                var draw = new Line(this.x, this.y, this.xMouse, this.yMouse, this.col, this.length);
            }
            if(this.shape!=="BRUSH"){ // for all of the buttons except for the brush button, the objects are pushed into the object set
                this.objectSet.push(draw);
                this.redo = 0;
                if(this.redotrue==true){ // this tells the redo function an object has been added to the object set
                    this.undo+=1;
                }
               
            }
            
        }

    }

    update(){
        ctx.save(); // this saves the buttons on the screen before the clip function clips them 
        this.boundaryRect(this.xB,this.yB, this.wB ,this.hB, this.backgroundCol); // this calls the boundary box function
        // it uses the values given in main to create the the boundary box, here the colour of the bounds box is also 
        //defined as black
        ctx.clip(); // this the clip function that removes the excess drawing from around the bounds box

        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update(); // this updates the drawings onto the canvas so the user can see what they've drawn
        }
        this.text(); // the calls the text function
        
        this.w = this.xMouse - this.x;
        this.h = this.yMouse - this.y; // the height and width of the rectangles and shapes are calculated here using x 
        // and y (where the mouse has gone down) and xMouse and yMouse (where the mouse has moved to)
        this.yRadius = this.h/2; // this is the radius values for the circle function
        this.xRadius = this.w/2; 

        if(this.inbounds){
           if(this.shape == "BRUSH"){ // this tells the brush button to draw when it is selected
                this.drawLine(this.xMouse,this.yMouse,this.length); // this draws the small circle guide onscreen to show the user where they will draw
                if(this.mouseDown==true){ // when the mouse is down circles are continuously pushed to create a brush effect
                    var line = new BRUSH(this.xMouse, this.yMouse, this.length, this.brushCol);
                    this.objectSet.push(line);
                }
            }
           
        }
        
        if(this.inbounds && this.mouseDown && this.shape !== "BRUSH"){
            this.draw(); // if the mouse is down for all the shapes except the brush the rectangle guide will be drawn on screen as the user drags their shape
        }

        for(var i=0; i<this.push; i++){ // this updates the drawings from the redo object set
            if (this.objectSet2[this.objectSet2.length-(i+1)] == null){ // this makes sure it doesn't update until their is an object in the list to avoid undefined errors
            }
            else{
                this.objectSet2[this.objectSet2.length-(i+1)].update();
            }  
        }

        ctx.restore(); // this restores the saved features after the clip function
    }


    text(){
        if(this.col){
            if(this.shape){ // if there is no shape or color selected then the instructive text will appear on screen
            
            }
            else{
                // if a shape button hasn't been pushed but a colour button has then text appears on screen in button class
                ctx.fillStyle=this.textCol1;
                var myFont= "bold italic 50px helvetica";
                ctx.font=myFont;
                ctx.fillText("Select a shape!", 435, 290); // the text instructs the user to select a shape
            }
        }
        else{
            // if no colour button has been pushed yet then text will appear on the screen
            ctx.fillStyle=this.textCol; // the colour is defined by the colour selected in button class  
            var myFont= "bold italic 50px helvetica";
            ctx.font=myFont;
            ctx.fillText("Select a colour!", 435, 290); // the text tells the user to select a colour
        }
    }

    drawRect(x,y,w,h, c1){
        // this is the function to draw the outline rectangle 
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = c1;
        ctx.stroke();
    }

    drawLine(x,y,l){//this is the function to draw the circle guide for the brush 
        ctx.beginPath();
        ctx.arc(x,y,l,0,2*Math.PI);
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.textCol1;
        ctx.stroke();
    }

    boundaryRect(x,y,w,h, c1){
        // this is the function to draw the boundary box 
        ctx.beginPath();
        ctx.rect(x,y,w,h); // the boundary box is a rectangle shape
        ctx.lineWidth = 6;
        ctx.fillStyle = c1;
        ctx.fill();
        ctx.strokeStyle = colArray[0][0]; // the boundary box has a black outline
        ctx.stroke();
    }

}


class Rect{ // this is the rectangle class that draws the rectangle shapes
    constructor(x, y, w, h, col){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h); // this creates the rectangle
        ctx.fillStyle=this.col;
        ctx.fill();
    }

    update(){
        this.draw();
    }
}

class Ellipse{ // this class draws the ellipse shapes
    constructor(x,y,w,h,col){
        this.x = (x)+(w/2);
        this.y = (y)+(h/2);
        this.w = Math.abs(w)/2;
        this.h = Math.abs(h)/2;
        this.col = col;
    }

    update(){
        this.drawElp();
    }

    drawElp(){
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.w, this.h, 0, 0, 2 * Math.PI); // this is the ellipse function
        ctx.fillStyle = this.col;
        ctx.fill();
    }
}

class Triangle{ // this class draws the triangles 
    constructor(x,y,w,h,col){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.col = col;
    }

    update(){
        this.drawTri();
    }

    drawTri(){
        ctx.beginPath(); // the triangle is a series of three lines that connect and fill
        ctx.moveTo(this.x + this.w / 2, this.y);
        ctx.lineTo(this.x + this.w, this.y + this.h);
        ctx.lineTo(this.x, this.y + this.h);
        ctx.lineTo(this.x + this.w / 2, this.y);
        ctx.fillStyle = this.col;
        ctx.fill();
    }
     
}

class Circle{ // this is the circle class 
    constructor(x,y,xR, yR,col){
        this.col = col;
        if(xR>0 && yR<0){ // this determines how the circle will be positioned relative to the rectangle shaped outline box the user creates
            this.x = x+xR;
            this.y = y+yR;
        }
        else if(xR<0){
            this.x = x+xR;
            this.y = y+yR;
        }
        else{
            this.x = x+xR;
            this.y = y+yR;
        }
        if(Math.abs(xR)>Math.abs(yR)){ // this removes negative radiuses by making them all positive. this avoids errors
            this.R = yR;
        }
        else{
            this.R = xR;
        }
    }

    update(){
        this.drawCircle();
    }

    drawCircle(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,Math.abs(this.R),0,2*Math.PI); // the circle is a completed arc
        ctx.fillStyle = this.col;
        ctx.fill();
    }
}

class Heart{ // this is the heart class that draws the hearts
    constructor(x,y, w,h,col){
        this.col = col;
        this.midx= x+(w/2); 
        this.x = x;
        this.y1 = y + (h*0.15);
        this.y = y;
        this.y3 = (h*0.375) + y;
        this.y4 = (y+h);
        this.y5 = y + (h*0.12); 
        this.y6 = y + (h*0.55);
        this.y7 = y + (h*0.77); 
        this.x1 = x + (w*0.455);
        this.x2 = x + (w*0.273);
        this.x3 = x + (w*0.82);  
        this.x4 = x + w;  
        this.x5 = x + (w*0.73); 
        this.x6 = x + (w*0.59);
        this.x7 = x + (w*0.18); 
    }

    update(){
        this.drawHeart();
    }

    drawHeart(){
        ctx.beginPath(); // the heart is a series of bezier curves that connect and are filled
        ctx.moveTo(this.midx, this.y1);
        ctx.bezierCurveTo(this.midx, this.y5, this.x1, this.y, this.x2, this.y);
        ctx.bezierCurveTo(this.x, this.y, this.x, this.y3, this.x, (this.y3));
        ctx.bezierCurveTo(this.x, this.y6, this.x7, this.y7, this.midx, this.y4);
        ctx.bezierCurveTo(this.x3, this.y7, this.x4, this.y6, this.x4, (this.y3));
        ctx.bezierCurveTo(this.x4, this.y3, this.x4, this.y, this.x5, this.y);
        ctx.bezierCurveTo(this.x6, this.y, this.midx, this.y5, this.midx, (this.y1));
        ctx.fillStyle = this.col;
        ctx.fill();
    }
}

class BRUSH{ // this is the brush class 
    constructor(x,y,l, col){
        this.x = x;
        this.y = y;
        this.col = col;
        this.length = l;
    }

    update(){
        this.drawLine();
    }

    drawLine(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.length,0,2*Math.PI); // this draws small circles every time the users mouse moves when it is held down
        ctx.fillStyle = this.col;
        ctx.fill();
    }
     
}

class Line{ // this is the line class
    constructor(x,y,xM,yM,col, l){
        this.x = x;
        this.y = y;
        this.xM = xM;
        this.yM = yM;
        this.col = col;
        this.l = l; // the line and brush class both get their length value form the slider
    }

    update(){
        this.drawLine();
    }

    drawLine(){ // this draws a line connecting the start and finish point of the users mouse movement
        ctx.beginPath();
        ctx.lineWidth = this.l;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.xM, this.yM);
        ctx.strokeStyle = this.col;
        ctx.stroke();
    }
     
}