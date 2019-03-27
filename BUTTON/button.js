class RECTANGLE{
    constructor(x, y, w, h, col, col1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
        this.col1 = col1;
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.coloriginal = col;
        this.col1original = col1;
        this.color = 0;
        this.mouseDown = false;
        
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
        this.objectSet=[ ];
    }
    
    rectangle(){
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
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
        if (this.x < this.xMouse && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)&& this.mouseDown == true){
            RECTANGLE.selected=this;
            this.color += 1;
        }
    }
    
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        if (this.x < this.xMouse && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)){
            this.col1 = "grey";
            this.draw();
        }
        else{
            this.col1 = this.col1original;
            this.draw();
        }
    }
    
    mUp(e){
        this.mouseDown = false;
        console.log("mouse is up")
    }

    text(){
        ctx.fillStyle="black";
        var myFont= "bold italic 18px helvetica";
        ctx.font=myFont
        ctx.fillText("Button Selected", this.x+5,(this.y+40));
    }

    update(){
        this.draw();
        if(RECTANGLE.selected==this){
            this.text();
        }
    }


}
RECTANGLE.selected = " ";


