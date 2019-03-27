class Slider{

    constructor(x,y,w,h,col, col2){
        this.xR = x;
        this.yR = y;
        this.w = w;
        this.h = h;
        this.xC = x+50;
        this.R = h/8;
        this.col = col;
        this.col2 = col2;
        this.mouseDown = false;
        this.move = true;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
    }

    mDown(e){
        this.mouseDown = true;  
        this.mouseUp = false;    
    }
    
    mMove(e){
        if (this.mouseDown == true && this.move==true){
            console.log("mouse is down");
            this.x = e.offsetX - this.xR;
            if (this.x < 0){
                this.x = 0;
            }
            if(this.x>this.w){
                this.x = this.w;
            }
            this.xC = this.x + this.xR;
        }   
    }
    
    mUp(e){
        this.mouseDown = false;
        console.log("mouse is up")
        this.mouseUp = true;
    }

    drawCircle(x,y,R){
        ctx.beginPath();
        ctx.arc(x,y,R,0,2*Math.PI);
        ctx.fillStyle = this.col2;
        ctx.fill();
    }

    rectangle(){
        ctx.rect(this.xR, this.yR, this.w, this.h);
        ctx.fillStyle=this.col;
        ctx.fill();
    }

    draw(){
        ctx.beginPath();
        this.drawCircle(this.xC,this.h/2+this.yR, this.R);
        this.rectangle();
    } 

    update(){
        this.draw();
        

    }


}