class shapeBUTTON{
    constructor(x, y, w, h, col, col1, target, name){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
        this.col1= col1;
        this.col1original = col1;
        this.coloriginal = col;
        this.name = name;
        this.mouseDown = false;
        this.target = target;
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
    }
    
    rectangle(){
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle=this.col;
        ctx.fill();
    }

    draw(){
        ctx.beginPath();
        this.rectangle();
    }

    mDown(e){
        this.mouseDown = true;
        if (this.x < this.xMouse && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)&& this.mouseDown == true){
            this.target.Shape(this.name);
            shapeBUTTON.selected=this;
        }
    }
    
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        if (this.x < this.xMouse && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)){
            this.col1 = this.coloriginal;
            this.col = this.col1original;
        }
        else{ 
            if(shapeBUTTON.selected==this){

            }
            else{
                this.col1 = this.col1original;
                this.col = this.coloriginal; 
            }
        }
    }
    
    mUp(e){
        this.mouseDown = false;
    }

    text(){
        ctx.fillStyle=this.col1;
        var myFont= "bold italic 20px helvetica";
        ctx.font=myFont
        ctx.fillText(this.name, this.x+20,this.y+35);
    }

    update(){
        this.draw();
        this.text();
        if(shapeBUTTON.selected==this){
            this.col = "white";
        }
    }
}
shapeBUTTON.selected = " ";