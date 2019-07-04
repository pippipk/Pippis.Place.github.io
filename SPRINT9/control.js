class Draw{
    constructor(x, y, wB, hB){
        this.xB = x; // this is the x value for the boundary box
        this.yB = y; //this is the y value for the boundary box
        this.wB = wB; // this is the width of the boundary box
        this.hB = hB; // this is the height of the boundary box
        this.backgroundCol = '#fafad2';
        this.textCol = "rgb(0,0,255)"; // this is the starting colour for the instructive text on the screen
        this.mouseDown = false; // this sets the value for the mouse down as false as the mouse is not down when the 
        //programme opens
        this.element = canvas; // this is to add the listeners to the canvas
        this.element.addEventListener('mousedown', this.mDown.bind(this)); // this adds an event for when the mouse goes 
        //down
        this.element.addEventListener('mousemove', this.mMove.bind(this)); // this is an event for when the mouse moves
        this.element.addEventListener("mouseup", this.mUp.bind(this)); // this is an event for when the mouse comes up
        this.objectSet=[ ]; // this is the object list where all the drawings pushed onto the screen will be stored so 
        //they can all remain on the screen
        this.objectSet2 = [ ];
        this.objectSet3 = [];
        this.redotrue = false;
        this.undo = 0 ;
        this.redo = 0;
        this.okay=false;
        console.log(this.okay);
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

    backgroundCol(c){
        this.backgroundCol = c;
    }

    Clear(c){
        this.button = c;

        if(this.objectSet == 0){
            this.push = 0;
        }
        if(this.objectSet.length==0 && this.objectSet3.length==0){

        }
        else{
            console.log("start")
            if(this.button == 5){
                this.redotrue = true;
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

            if(this.button == 3){
                for(var i=0; i<this.push; i++){

                }
                this.redotrue = false;
                this.redo = 0;
                console.log("redo", this.redo)
                this.objectSet3.push(this.objectSet[this.objectSet.length-1])
                if(this.undo==1){
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

            if(this.button == 4){
                this.redotrue = false;
                this.objectSet = [];
                this.objectSet2 = [ ];
                this.objectSet3 = [ ];
                this.backgroundCol = '#fafad2';
            };
        }
        
    }

    Length(l){
        this.length = l;
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

        if(this.inbounds == true){
            //if(this.undo>)
            //this.objectSet2 = [ ];
            //this.redo = false;
            
        }
        console.log("no of objects", this.objectSet2.length)
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
        if(this.objectSet.length!==0){
            //this.redo+=1;
        }
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
            if(this.shape=="CIRCLE"){
                var draw = new Circle(this.x, this.y, this.xRadius, this.yRadius, this.col);
            }  
            if(this.shape=="HEART"){
                var draw = new Heart(this.x, this.y, this.w, this.h, this.col);
            } 
            if(this.shape=="LINE"){
                var draw = new Line(this.x, this.y, this.xMouse, this.yMouse, this.col, this.length);
            }
            if(this.shape!=="BRUSH"){
                this.objectSet.push(draw);
                
                this.redo = 0;
                if(this.redotrue==true){
                    this.undo+=1;
                }
               
            }
            
        }

    }

    update(){
        ctx.save();
        console.log(this.undo)
        this.boundaryRect(this.xB,this.yB, this.wB ,this.hB, this.backgroundCol); // this calls the boundary box function
        // it uses the values given in main to create the the boundary box, here the colour of the bounds box is also 
        //defined as black
        ctx.clip();

        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
        this.text(); // the calls the text function
        
        this.w = this.xMouse - this.x;
        this.h = this.yMouse - this.y; // the height and width of the rectangles and shapes are calculated here using x 
        // and y (where the mouse has gone down) and xMouse and yMouse (where the mouse has moved to)
        this.yRadius = this.h/2;
        this.xRadius = this.w/2; 

        if(this.inbounds){
           if(this.shape == "BRUSH"){
                this.drawLine(this.xMouse,this.yMouse,this.length);
                if(this.mouseDown==true){
                    var line = new BRUSH(this.xMouse, this.yMouse, this.length, this.brushCol);
                    this.objectSet.push(line);
                    //this.objectSet2 = [ ];
                }
            }
           
        }
        
        if(this.inbounds && this.mouseDown && this.shape !== "BRUSH"){
            this.draw(); // if the mouse is 
        }
        //console.log(this.redo)
        //console.log(this.objectSet2.length)
        for(var i=0; i<this.push; i++){
            if (this.objectSet2[this.objectSet2.length-(i+1)] == null){
            }
            else{
                this.objectSet2[this.objectSet2.length-(i+1)].update();
            }  
        }

        ctx.restore();
    }


    text(){
        if(this.col){
            if(this.shape){
            
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

    drawLine(x,y,l){
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
        ctx.strokeStyle = "black"; // the boundary box has a grey outline
        ctx.stroke();
    }

}


class Rect{
    constructor(x, y, w, h, col){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle=this.col;
        ctx.fill();
    }

    update(){
        this.draw();
    }
}

class Ellipse{
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
        ctx.ellipse(this.x, this.y, this.w, this.h, 0, 0, 2 * Math.PI);
        ctx.fillStyle = this.col;
        ctx.fill();
    }
}

class Triangle{
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
        ctx.beginPath();
        ctx.moveTo(this.x + this.w / 2, this.y);
        ctx.lineTo(this.x + this.w, this.y + this.h);
        ctx.lineTo(this.x, this.y + this.h);
        ctx.lineTo(this.x + this.w / 2, this.y);
        ctx.fillStyle = this.col;
        ctx.fill();
    }
     
}

class Circle{
    constructor(x,y,xR, yR,col){
        this.col = col;
        if(xR>0 && yR<0){
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
        if(Math.abs(xR)>Math.abs(yR)){
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
        ctx.arc(this.x,this.y,Math.abs(this.R),0,2*Math.PI);
        ctx.fillStyle = this.col;
        ctx.fill();
    }
}

class Heart{
    constructor(x,y, w,h,col){
        this.col = col;
        this.midx= x+(w/2); //75
        this.x = x; //20
        this.y1 = y + (h*0.15); //
        this.y = y;
        this.y3 = (h*0.375) + y;
        this.y4 = (y+h);
        this.y5 = y + (h*0.12); 
        this.y6 = y + (h*0.55);
        this.y7 = y + (h*0.77); 
        this.x1 = x + (w*0.455); //70
        this.x2 = x + (w*0.273); //50
        this.x3 = x + (w*0.82);  //110   
        this.x4 = x + w;     //130
        this.x5 = x + (w*0.73); //100
        this.x6 = x + (w*0.59); // 85
        this.x7 = x + (w*0.18); //40
    }

    update(){
        this.drawHeart();
    }

    drawHeart(){
        ctx.beginPath();
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

class BRUSH{
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
        ctx.arc(this.x,this.y,this.length,0,2*Math.PI);
        ctx.fillStyle = this.col;
        ctx.fill();
    }
     
}

class Line{
    constructor(x,y,xM,yM,col, l){
        this.x = x;
        this.y = y;
        this.xM = xM;
        this.yM = yM;
        this.col = col;
        this.l = l;
    }

    update(){
        this.drawLine();
    }

    drawLine(){
        ctx.beginPath();
        ctx.lineWidth = this.l;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.xM, this.yM);
        ctx.strokeStyle = this.col;
        ctx.stroke();
    }
     
}