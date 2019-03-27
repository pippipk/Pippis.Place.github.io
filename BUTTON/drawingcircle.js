class CIRCLE{
    constructor(x, y, R,col){
        this.x = x;
        this.y = y;
        this.col = col;
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.radius = 0;
        this.mouseDown = false;


       this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
        this.objectSet=[ ];
    }
    
    rectangle(){
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle=this.fill;
        ctx.fill();
    }

    draw(){
        ctx.beginPath();
        this.rectangle();
    }

    draw1(){
        ctx.beginPath();
        this.drawCircle(this.xMouseStart, this.yMouseStart, this.R, "rgba(255, 181, 193, 0.1)");
    }

    mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
        /*if (this.mouseDown=true){
            console.log("mouse is down");
            this.col = "rgba(255, 181, 193, 0.1)";
            
        }*/
    }
    
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        if (this.xMouse > this.x && this.yMouse == this.y){
            this.col = "rgba(255, 181, 193, 0.1)";
            this.draw();

        }
    }
    
    mUp(e){
        this.mouseDown = false;
        console.log("mouse is up")
        /*if (this.mouseDown=true){
            console.log("mouse is down");
            this.col = "blue";
            this.draw();
        }*/
    }

    update(){
        this.draw();
        //this.radius = this.yMouse - this.yMouseStart;
        //this.R = Math.abs(this.radius);
        //if(this.mouseDown){
        
        for( var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
    }

}


