class undoBUTTON{
    constructor(x, y, w, h, col, col1, button){
        this.x = x; // this is the x value for the button
        this.y = y; // this is the y value
        this.w = w; // this is the width value
        this.h = h; // this is the height
        this.col = col; // this is the color of the button
        this.col1= col1; // this is the color of the text
        this.col1original = col1; // this stores the colors so they can change back to the original
        this.coloriginal = col;
        this.mouseDown = false; 
        this.target = draw; // the target class is the draw class in the control object
        this.button = button; // this stores the id of the button so each button can perform a different task
        this.element = canvas; // this adds the listeners the canvas 
        this.element.addEventListener('mousedown', this.mDown.bind(this)); // this is the mouse down event
        this.element.addEventListener('mousemove', this.mMove.bind(this)); // this is the mosue move event
        this.element.addEventListener("mouseup", this.mUp.bind(this)); // this is the mouse up event
    }
    
    draw(){
        ctx.beginPath(); // this draws the buttons on the canvas
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle=this.col;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = colArray[0][0];
        ctx.stroke();
    }

    text(){
        ctx.fillStyle=this.col1; // this adds text to the buttons to tell the user which each button is for
        var myFont= "bold italic 15px helvetica";
        ctx.font=myFont
        if(this.button == 1){   // this is the change background color button
            ctx.fillText("Change Background Color", this.x+9,(this.y+18));
        }
        if(this.button == 2){  // this is the change background to original button
            ctx.fillText("Original Background Color", this.x+8,(this.y+18));
        }
        if(this.button == 3){ // this is the undo button
            ctx.fillText("Undo", this.x+20,(this.y+35));
        }
        if(this.button == 4){ // this is the reset button
            ctx.fillText("Reset", this.x+19,(this.y+35));
        }
        if(this.button == 5){//this is the redo button
            ctx.fillText("Redo Last", this.x+4,(this.y+30));
            ctx.fillText("Undo", this.x+21,(this.y+42));
        }
    }

    mDown(e){
        this.mouseDown = true; // if the mouse goes down and inbounds the button is selected
    }
    
    mMove(e){
        this.xMouse = e.offsetX; // this stores the x and y value of the mouse position
        this.yMouse = e.offsetY;
        if (this.x < this.xMouse && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)){
            this.inbounds = true; // this is the bounds test
        }
        else{
            this.inbounds = false; // if not in bounds this is false
        }
    }
    
    mUp(e){
        this.mouseDown = false;
        if (this.inbounds == true){
            this.target.Clear(this.button); // if in bounds, this sends the button id to the control object so it know what operations to perform
        }
    }

    update(){
        this.draw(); // this draws the buttons on the screen
        this.text(); // this draws the text on the buttons

            if(this.mouseDown == true && this.inbounds == true){
                this.col1 = this.coloriginal; // this changes the color of the buttons when the mouse hovers over it
                this.col = this.col1original;
            }
            else{
                this.col1 = this.col1original;
                this.col = this.coloriginal;  //this changes the color of the buttons when the mouse is no longer hovering over it
            }
        ctx.save();
    }
}
