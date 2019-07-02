class ellipse{
    constructor(x,y,w,h,col){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.col = col;
    }

    update(){
        this.drawElp();
    }

    drawElp(){
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.w, this.h, Math.PI, 0, 2 * Math.PI);
        ctx.fillStyle = this.col;
        ctx.fill();
    }
}

class ELLIPSE{
    constructor(x,y,w,h, col){
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
        this.objectSet=[];
    }

    draw(){
        this.drawRect(this.xMouseStart,this.yMouseStart, this.wE, this.hE, this.col);
        this.drawElp(this.xElp,this.yElp, Math.abs(this.wE)/2, Math.abs(this.hE)/2, this.col);
    }

    mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
    }
    
    mMove(e){
        this.xC = e.offsetX;
        this.yC = e.offsetY;
        if (this.x < this.xC &&this.x < this.xMouseStart && (this.x+this.w) > this.xMouseStart && (this.x+this.w) > this.xC && this.yC > this.y && this.yC < (this.y+this.h)){
            this.inbounds = true;
        }
        else{
            this.inbounds = false;
        }
    }

    mUp(e){
        this.mouseDown = false;
        if(this.inbounds){
            var elp = new ellipse(this.xElp, this.yElp, Math.abs(this.wE)/2, Math.abs(this.hE)/2, this.col);
            this.objectSet.push(elp);
        }
    }

    drawRect(x,y,w,h,col){
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.strokeStyle=col;
        ctx.stroke();
    }

    drawElp(x,y,w,h,col){
        ctx.beginPath();
        ctx.ellipse(x, y, w, h, Math.PI, 0, 2 * Math.PI);
        ctx.strokeStyle=col;
        ctx.stroke();
    }

    update(){
        this.drawRect(this.x, this.y, this.w, this.h, "white");
        this.hE = (this.yC - this.yMouseStart);
        this.wE = (this.xC - this.xMouseStart);
        this.xElp = (this.xMouseStart)+this.wE/2
        this.yElp = (this.yMouseStart)+this.hE/2

        if(this.inbounds && this.mouseDown){
            this.draw();
        }
        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
    }
}