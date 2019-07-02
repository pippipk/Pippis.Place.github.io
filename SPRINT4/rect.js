class RECTY{
    constructor(wB, hB){
        this.wB = wB;
        this.hB = hB;
        this.textCol = "rgb(255, 230, 142, 1)";
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

    textColour(c){
        this.textCol = c;
    }

    Colour(c, c1){
        this.col = c;
        this.textCol1 = c1;
    }

    Shape(c){
        this.shape = c;
    }

    mDown(e){
        this.x = e.offsetX;
        this.y = e.offsetY;
        this.mouseDown = true;
    }

    mUp(e){ 
        this.mouseDown = false;
        if(this.inbounds){
            if(this.shape=="RECTANGLE"){
                var draw = new Rect(this.x, this.y, this.w, this.h, this.col);
            }
            if(this.shape=="ELLIPSE"){
                var draw = new ellipse(this.xElp, this.yElp, Math.abs(this.w)/2, Math.abs(this.h)/2, this.col);
            }
        this.objectSet.push(draw);
        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        if (this.col && this.shape && 200 < this.xMouse && 200 < this.x && (200+this.wB) > this.x && (200+this.wB) > this.xMouse && this.yMouse > 10 && this.yMouse < (10+this.hB)&& this.y > 10 && this.y < (10+this.hB)){
            this.inbounds = true;
        }
        else{
            this.inbounds = false;
        }
    }

    text(){
        if(this.col){
            if(this.shape){

            }
            else{
                ctx.fillStyle=this.textCol1;
                var myFont= "bold italic 50px helvetica";
                ctx.font=myFont;
                ctx.fillText("Select a shape!", 390, 300);
            }
        }
        else{
            ctx.fillStyle=this.textCol;
            var myFont= "bold italic 50px helvetica";
            ctx.font=myFont;
            ctx.fillText("Select a colour!", 390, 300);
        }
    }

    drawRect(x,y,w,h, c1){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = c1;
        ctx.stroke();
    }

    boundaryRect(x,y,w,h, c1){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 2.5;
        ctx.fillStyle = c1;
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke();
    }

    update(){
        this.boundaryRect(200,10, this.wB ,this.hB, "black");
        this.text();
        this.w = this.xMouse - this.x;
        this.h = this.yMouse - this.y;
        this.xElp = (this.x)+this.w/2
        this.yElp = (this.y)+this.h/2
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
        ctx.ellipse(this.x, this.y, this.w, this.h, 0, 0, 2 * Math.PI);
        ctx.fillStyle = this.col;
        ctx.fill();
    }
}