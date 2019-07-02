class BUTTON{ //this is the class for the buttons that change the colour of the drawings
    constructor(x, y, w, h, col){
        this.x = x; // this is the x value for the rectangle that is the button
        this.y = y; // this is the y value
        this.w = w; // this is the width to set how wide the button will be
        this.h = h; // this is the height that will set how tall the button will be
        this.col = col; // this is the button colour
        this.col1= "black"; // this is the border colour for the button
        this.col1original = "black"; // as the border colour changes when the mouse hovers over the button this is storing the original variable 
        this.mouseDown = false; // this boolean variable stores whether or not the mouse is down
        this.target = rect; // the target is the rectangle class so this is what sends variables to the rectangle function when drawing the shapes
        this.element = canvas; // this adds listeners in the canvas which is the main box on the screen
        this.element.addEventListener('mousedown', this.mDown.bind(this)); // this adds a mouse down listener to make the screen interactive
        this.element.addEventListener('mousemove', this.mMove.bind(this)); // this adds a mouse moving listener
        this.element.addEventListener("mouseup", this.mUp.bind(this)); // this adds a mouse up listener when the mouse is up
    }
    
    rectangle(){
        // this is the rectangle function to create the rectangular colour buttons
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle=this.col;
        ctx.fill();
        ctx.strokeStyle=this.col1;
        ctx.lineWidth = 6;
        ctx.stroke();
    }

    draw(){
        ctx.beginPath();
        this.rectangle();
    }

    mDown(e){
        this.mouseDown = true; // when the mouse down event happens the mouseDown variable changes from false to true
        if (this.x < this.xMouse && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)&& this.mouseDown == true){
            // if the mouse is clicked in the bounds of the button the button is selected
            BUTTON.selected=this; // the button is selected
            this.target.Colour(this.col); // sends the button colour (the colour selected) is sent to the target class to change the 
            //colour of the drawings and border colour is sent to change the text colour (if the 'Select a shape!' is on the screen) to show what colour is selected
        }
    }
    
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY; //variable stores the values of the mouse when ever it moves 
        if (this.x < this.xMouse && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)){
            // this if statement determines if the mouse values are within the bounds of the button to see if the mouse is hovering over the button
            this.col1 = "grey"; // if the mouse is over the button the border colour of the button changes to black to show the user their mouse is over a button 
        
        }
        else{ 
            this.col1 = this.col1original;
        }
    }
    
    mUp(e){
        this.mouseDown = false; //when the mouse up event happens the mouseUp variable changes from true to false
    }

    text(){
        ctx.fillStyle="black";
        var myFont= "bold italic 20px helvetica";
        ctx.font=myFont
        ctx.fillText("SELECTED", this.x+22,(this.y+45));
    }

    update(){
        this.draw();
        if(BUTTON.selected==this){
            this.text();
        }
    }
}
BUTTON.selected = " ";
