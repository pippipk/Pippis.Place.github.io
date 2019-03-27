console.log("testobject js called")

class TestObejct{
    constructor(canvas){
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        this.w = 0;
        this.h = 0;
        

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
        this.objectSet=[];
    }

    mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
    }

    mUp(e){
        this.mouseDown = false;
        var myR = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, "rgba(255,0,0,0.5)");
        this.objectSet.push(myR);
        console.log(this.objectSet);
    }

    update(){
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        if(this.mouseDown){
            console.log("mouse is down");
            this.draw();
        }
        for( var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);
    }



    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(200,230,20)";
        ctx.stroke();
    }
}