class RECTY{
    constructor(xB, yB,wB, hB){
        this.yB = yB;
        this.xB = xB;
        this.wB = wB;
        this.hB = hB;
        this.mouseDown = false;
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
        this.objectSet=[ ];
    }

    draw(){
        this.drawRect(this.x, this.y, this.w, this.h, this.col);
    }

    Colour(c){
       this.col = c;
    }

    mDown(e){
        this.x = e.offsetX;
        this.y = e.offsetY;
        this.mouseDown = true;
    }

    mUp(e){ 
        this.mouseDown = false;
        if(this.inbounds){
            var draw = new Rect(this.x, this.y, this.w, this.h, this.col);
            this.objectSet.push(draw);
        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        if (this.col && this.xB < this.xMouse && this.xB < this.x && (this.xB+this.wB) > this.x && (this.xB+this.wB) > this.xMouse && this.yMouse > 26 && this.yMouse < (this.yB+this.hB)&& this.y > this.yB && this.y < (this.yB+this.hB)){
            this.inbounds = true;
        }
        else{
            this.inbounds = false;
        }
    }

    drawRect(x,y,w,h, c1){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = c1;
        ctx.stroke();
    }

    boundaryRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.stroke();
    }

    update(){
        this.boundaryRect(this.xB,this.yB, this.wB ,this.hB, "black");
        this.w = this.xMouse - this.x;
        this.h = this.yMouse - this.y;
        if(this.inbounds && this.mouseDown){
            this.draw();
        }
        
        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
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