class BOUNDARY{
    constructor(x, y, w, h, col){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
        this.mouseDown = false;
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
        this.objectSet=[ ];
    }

    draw(){
        this.drawRect(this.xR, this.yR, this.wR, this.hR, this.col);
    }

    mDown(e){
        this.xR = e.offsetX;
        this.yR = e.offsetY;
        this.mouseDown = true;
    }

    mUp(e){ 
        this.mouseDown = false;
        if(this.inbounds){
        var draw = new Rect(this.xR, this.yR, this.wR, this.hR, this.col);
        this.objectSet.push(draw);
        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        if (this.x < this.xMouse && this.x < this.xR && (this.x+this.w) > this.xR && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)){
            this.inbounds = true;
        }
        else{
            this.inbounds = false;
        }
    }

    drawRect(x,y,w,h, col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = col;
        ctx.stroke();
    }

    update(){
        this.drawRect(this.x, this.y, this.w, this.h, "white");
        this.wR = this.xMouse - this.xR;
        this.hR = this.yMouse - this.yR;
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
