class Point{

    constructor(x,y,w,h,col){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.R = this.h/2;
        this.col = col;
        this.mouseDown = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
    }

    mDown(e){
        this.mouseDown = true;      
    }
    
    mMove(e){
        if (this.mouseDown == true){
            console.log("mouse is down");
            this.x = e.offsetX;
            this.y = e.offsetY;
        }   
    }
    
    mUp(e){
        this.mouseDown = false;
        console.log("mouse is up")
    }

    drawCircle(x,y,R, col){
        ctx.beginPath();
        ctx.arc(x,y,R,0,2*Math.PI);
        ctx.fillStyle = col;
        ctx.fill();
    }

    rectangle(){
        ctx.rect(this.x, this.y, 500, 200);
        ctx.fillStyle=this.col;
        ctx.fill();
    }

    draw(){
        ctx.beginPath();
        //this.drawCircle(this.x,this.y, this.R, "rgba(2,2,2,0)");
        this.rectangle();
    } 

    update(){
        this.draw();
    }


}