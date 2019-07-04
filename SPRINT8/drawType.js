class drawBUTTON{
    constructor(x, y, w, h, col, col1, button){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
        this.col1= col1;
        this.col1original = col1;
        this.coloriginal = col;
        this.mouseDown = false;
        this.target = draw;
        this.target1 = BUTTON;
        this.button = button;
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
    }
    
    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle=this.col;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.stroke();
    }

    text(){
        ctx.fillStyle=this.col1;
        var myFont= "bold italic 15px helvetica";
        ctx.font=myFont
        if(this.button == 1){  
            ctx.fillText("Change", this.x+22,(this.y+20));
            ctx.fillText("Background", this.x+4,(this.y+35));
            ctx.fillText("Colour", this.x+22,(this.y+50));
        }
        if(this.button == 2){
            ctx.fillText("Change", this.x+22,(this.y+25));
            ctx.fillText("Draw Colour", this.x+5,(this.y+42));
        }
        if(this.button == 3){
            ctx.fillText("Undo", this.x+25,(this.y+35));
        }
        if(this.button == 4){
            ctx.fillText("Reset", this.x+23,(this.y+35));
        }
        if(this.button == 5){
            ctx.fillText("Redo Last", this.x+8,(this.y+30));
            ctx.fillText("Undo", this.x+23,(this.y+42));
        }
    }

    mDown(e){
        this.mouseDown = true;
        if (this.inbounds==true){
            drawBUTTON.selected=this;
        }
    }
    
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        if (this.x < this.xMouse && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)){
            this.inbounds = true;
        }
        else{
            this.inbounds = false;
        }
    }
    
    mUp(e){
        this.mouseDown = false;
        if (this.inbounds == true){
            this.target.Clear(this.button);
        }
    }

    update(){
        this.draw();
        this.text();

        /*if(this.mouseDown == true && this.inbounds == true){
            this.col1 = this.coloriginal;
            this.col = this.col1original;
        }
        else{ 
            if(drawBUTTON.selected==this){
                this.col = this.col1original;
                this.col1 = this.coloriginal;
            }
            else{
                this.col1 = this.col1original;
                this.col = this.coloriginal; 
            }
        }

        if(this.button == 3 || this.button == 4){
            console.log(this.button)
            if(drawBUTTON.selected==this){
                this.col = this.col1original;
                this.col1 = this.coloriginal;
                console.log("button")
            }
            
        }*/
        /*if(this.button == 1){
            if(drawBUTTON.selected == this){
                this.col = this.col1original;
                this.col1 = this.coloriginal;

                this.col = "pink";
                this.col1 = "white";
            }
            else{
                this.col1 = this.col1original;
                this.col = this.coloriginal; 
            }
        }*/

        if(this.button == 3 || this.button == 4 || this.button == 5){
            if(this.mouseDown == true && this.inbounds == true){
                this.col1 = this.coloriginal;
                this.col = this.col1original;
            }
            else{
                this.col1 = this.col1original;
                this.col = this.coloriginal; 
            }
        }

        if(this.button==1 || this.button ==2){
            this.stay = true;
        }
        if(drawBUTTON.selected == this && this.stay == true){
            console.log("66")
            if(this.button == 1){
                this.col = "pink";
                this.col1 = "white";
                console.log("345")
            }
        }
        ctx.save();
    }
}
drawBUTTON.selected = " ";
