class shapes{ // this is the class that creates the shape buttons to allow the user to draw different shapes on the canvas
    constructor(x, y, w, h, col, col1, name){
        this.x = x; // this is the x value for the button
        this.y = y; // this is the y value for the button
        this.w = w; // this is the width
        this.h = h; // this is the height
        this.col = col; // this is the first colour of the button
        this.col1= col1; // this is the colour of the button when it is selected
        this.coloriginal = col; // this stores the first colour of the button so it can be changed back to this when the button is no longer selected
        this.name = name; // this is the name of the shape that refers the object to a shape on to appear on screen
        this.mouseDown = false; // mouse down variable is initially set to false as the mouse is up
        this.target = draw; // this is the target class where the selected shape is set to
        this.wB = w; // this is the image width
        this.hB = h; // this is the image height
        this.wB2 = w + 15; // this is the image width when it is selected  
        this.hB2 = h + 5; // this is the image height when it is selected
        this.wBoriginal = w; // this stores the original width  
        this.hBoriginal = h; // this stores the original height
        this.element = canvas; // this brings events on to the canvas 
        this.element.addEventListener('mousedown', this.mDown.bind(this)); // this is the mouse down event 
        this.element.addEventListener('mousemove', this.mMove.bind(this)); // this is the mouse move event
        this.element.addEventListener("mouseup", this.mUp.bind(this)); // this is the mouse up event
    }
    
    draw(){
        ctx.beginPath(); // this starts drawing the shapes 
        if(this.name=="RECTANGLE"){ 
            ctx.rect(this.x, this.y, this.w, this.h); // a rectangle is drawn for the rectangle button
        }
        if(this.name=="ELLIPSE"){ // an ellipse is drawn for the 
            ctx.ellipse(this.x+(this.w/2), this.y+(this.h/2), (this.w/2), (this.h/2), 0, 0, 2 * Math.PI);
        }
        if(this.name=="TRIANGLE"){ // this draws a triangle as a series of lines
            ctx.moveTo(this.x + this.w / 2, this.y);
            ctx.lineTo(this.x + this.w, this.y + this.h);
            ctx.lineTo(this.x, this.y + this.h);
            ctx.lineTo(this.x + this.w / 2, this.y);
        }
        if(this.name=="CIRCLE"){ // this draws a circle
            this.yRadius = this.h/2;
            this.xRadius = this.w/2;  // radius is defined
            ctx.arc(this.x+this.xRadius,this.y+this.yRadius,Math.abs(this.xRadius),0,2*Math.PI);
        }  
        if(this.name=="HEART"){ // this draws a heart as a series of bezier curves that connect
            this.midx= this.x+(this.w/2); 
            this.y1 = this.y + (this.h*0.15);
            this.y3 = (this.h*0.375) + this.y;
            this.y4 = (this.y+this.h);
            this.y5 = this.y + (this.h*0.12); 
            this.y6 = this.y + (this.h*0.55);
            this.y7 = this.y + (this.h*0.77); 
            this.x1 = this.x + (this.w*0.455); 
            this.x2 = this.x + (this.w*0.273);
            this.x3 = this.x + (this.w*0.82);   
            this.x4 = this.x + this.w;     
            this.x5 = this.x + (this.w*0.73); 
            this.x6 = this.x + (this.w*0.59);
            this.x7 = this.x + (this.w*0.18);
            ctx.moveTo(this.midx, this.y1);
            ctx.bezierCurveTo(this.midx, this.y5, this.x1, this.y, this.x2, this.y);
            ctx.bezierCurveTo(this.x, this.y, this.x, this.y3, this.x, (this.y3));
            ctx.bezierCurveTo(this.x, this.y6, this.x7, this.y7, this.midx, this.y4);
            ctx.bezierCurveTo(this.x3, this.y7, this.x4, this.y6, this.x4, (this.y3));
            ctx.bezierCurveTo(this.x4, this.y3, this.x4, this.y, this.x5, this.y);
            ctx.bezierCurveTo(this.x6, this.y, this.midx, this.y5, this.midx, (this.y1));
        } 
        if(this.name=="BRUSH"){ // this draws an invisible button for the brush that allows the brush button to be selected
            ctx.rect(this.x, this.y, this.w, this.h);
        }
        if(this.name !== "BRUSH"){
            ctx.fillStyle=this.col; // this fills all the buttons with colour except the brush button as this is invisible to the user 
            ctx.fill();
        }
    }

    mDown(e){
        this.mouseDown = true; // when the mouse is down, mouseDown is set to true
        if (this.inbounds == true){ // if in bounds the button becomes selected and sends the corresponding shape name to the target class to draw this shape
            this.target.Shape(this.name);
            shapes.selected=this;
        }   
    }
    
    mMove(e){
        this.xMouse = e.offsetX; // the x value of the mouse position is stored
        this.yMouse = e.offsetY; // this is the mouse's y value
        if (this.x < this.xMouse && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)){
            this.inbounds = true; // if the mouse is within the button in bounds is true
        }
        else{ 
            this.inbounds = false; // if the mouse is not over the button in bounds is false
        }
    }
    
    mUp(e){
        this.mouseDown = false; // mouseDown is set to false again when the mouse comes up
    }

    update(){
        if(this.name == "BRUSH"){ // this draws the brush image on the screen for the brush button
            ctx.drawImage(imgObj, this.x, this.y, this.wB, this.hB);
        }

        if(this.inbounds==true){
            this.col = this.col1; // this changes the button colour when the mouse hovers over
        }
        else{
            if(shapes.selected==this){ // if the mouse doesn't hover over the button but it is selected, the colour won't change back

            }
            else{ // if the mouse does not hover over the button anymore the colour changes back to the original
                this.col = this.coloriginal; 
            }
        }

        this.draw(); // this calls the draw function to draw the buttons
        if(shapes.selected==this){ // if the brush button is selected the size will changed to show the user it is selected
            this.wB = this.wB2; 
            this.hB = this.hB2;
        }
        else{ 
            this.wB = this.wBoriginal; // when it is not selected the size will change
            this.hB = this.hBoriginal;
        }
    }
}
shapes.selected = " "; //this creates this static variable which is accessible everywhere


class Slider{ // this is the class to create the slider which determines the line width
    constructor(x,y,w,h,col, col2){
        this.xR = x; // this is the x value for the slider bar
        this.yR = y; // this is the y value for the slider bar
        this.w = w; // this is the width
        this.h = h; // the is the height
        this.xC = x+50; // this is the x value of the circle that slides on the bar
        this.R = h/2; // this is the radius of the circle
        this.col = col; // this is the colour of the slider bar
        this.col2 = col2; // this is the color of the circle
        this.mouseDown = false; // mouse down is set to false as the mouse is up when the program opens
        this.target = draw; // the target class is the draw class
        this.inbounds = false; // this is for a bounds check
        this.element = canvas; // this adds the events to the canvas
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
    }

    mDown(e){
        this.mouseDown = true;  // when the mouse is down the mouse down variable is set to true 
    }
    
    mMove(e){
        this.xMouse = e.offsetX; // the x position of the mouse is stored
        this.yMouse = e.offsetY; // the y position of the mouse is stored
        if (this.xR < this.xMouse && (this.xR+this.w) > this.xMouse && this.yMouse > this.yR && this.yMouse < (this.yR+this.h)){
            this.inbounds = true; // bounds check to see if the slider can move
        } 
        else{
            this.inbounds = false; // if not in bounds this variable is false
        } 
    }
    
    mUp(e){
        this.mouseDown = false; // when the mouse is up the mouse down is false
    }

    drawCircle(x,y,R){ // this draws the circle that slides along the slider bar this what the users mouse moves
        ctx.beginPath();
        ctx.arc(x,y,R,0,2*Math.PI); // this draws the circle
        ctx.fillStyle = this.col2; // this sets the fill colour
        ctx.fill(); // this fills the circle with colour
    }

    rectangle(){ // this draws the rectangle bar that is the slider bar
        ctx.rect(this.xR, this.yR, this.w, this.h); // this draws the rectangle
        ctx.fillStyle=this.col; // this sets the colour for the bar
        ctx.fill(); // this fills the colour
    }

    draw(){
        ctx.beginPath(); // this starts the drawing of the slider
        this.rectangle(); // this calls the rectangle bar 
        this.drawCircle(this.xC,this.h/2+this.yR, this.R); // this calls the circle on the slider bar
    } 

    update(){
        this.draw(); // this calls the draw function to draw the slider
        if (this.mouseDown == true && this.inbounds==true){ // if the mouse is down on the slider the mouse will move
            this.x = this.xMouse - this.xR; // this is the value of the mouse in relation to the length of the slider 
            if (this.x < 0){
                this.x = 0; // if x is a negative value x becomes 0 so the slider can't be dragged off the bar or off the screen
            }
            if(this.x>this.w){
                this.x = this.w; // if x is greater than the the upper limit of the slider bar x equals the width 
            }
            this.xC = this.x + this.xR; // this changes the position of the circle being moved on the slider as the mouse moves
        } 
        this.length = 2*this.xC/this.xR; // this defines the length in relation to the position of the slider that will be used as the brush size
        this.target.Length(this.length); // this sends the length to the control object
        
        
    }
}