class shapeBUTTON{
    constructor(x, y, w, h, col, col1, name){
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
        this.target = draw;
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener("mouseup", this.mUp.bind(this));
    }
    
    draw(){
        ctx.beginPath();
        if(this.name=="RECTANGLE"){ 
            ctx.rect(this.x, this.y, this.w, this.h);
        }
        if(this.name=="ELLIPSE"){
            ctx.beginPath();
            ctx.ellipse(this.x+(this.w/2), this.y+(this.h/2), (this.w/2), (this.h/2), 0, 0, 2 * Math.PI);
        }
        if(this.name=="TRIANGLE"){
            ctx.moveTo(this.x + this.w / 2, this.y);
            ctx.lineTo(this.x + this.w, this.y + this.h);
            ctx.lineTo(this.x, this.y + this.h);
            ctx.lineTo(this.x + this.w / 2, this.y);
        }
        if(this.name=="CIRCLE"){
            this.yRadius = this.h/2;
            this.xRadius = this.w/2; 
            ctx.arc(this.x+this.xRadius,this.y+this.yRadius,Math.abs(this.xRadius),0,2*Math.PI);
        }  
        if(this.name=="HEART"){
            this.midx= this.x+(this.w/2); //75
            this.y1 = this.y + (this.h*0.15); //
            this.y3 = (this.h*0.375) + this.y;
            this.y4 = (this.y+this.h);
            this.y5 = this.y + (this.h*0.12); 
            this.y6 = this.y + (this.h*0.55);
            this.y7 = this.y + (this.h*0.77); 
            this.x1 = this.x + (this.w*0.455); //70
            this.x2 = this.x + (this.w*0.273); //50
            this.x3 = this.x + (this.w*0.82);  //110   
            this.x4 = this.x + this.w;     //130
            this.x5 = this.x + (this.w*0.73); //100
            this.x6 = this.x + (this.w*0.59); // 85
            this.x7 = this.x + (this.w*0.18);
            ctx.moveTo(this.midx, this.y1);
            ctx.bezierCurveTo(this.midx, this.y5, this.x1, this.y, this.x2, this.y);
            ctx.bezierCurveTo(this.x, this.y, this.x, this.y3, this.x, (this.y3));
            ctx.bezierCurveTo(this.x, this.y6, this.x7, this.y7, this.midx, this.y4);
            ctx.bezierCurveTo(this.x3, this.y7, this.x4, this.y6, this.x4, (this.y3));
            ctx.bezierCurveTo(this.x4, this.y3, this.x4, this.y, this.x5, this.y);
            ctx.bezierCurveTo(this.x6, this.y, this.midx, this.y5, this.midx, (this.y1));
        } 
        if(this.name=="LINE"){
            ctx.rect(this.x, this.y, this.w, this.h);
        }
        ctx.fillStyle=this.col;
        ctx.fill();
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

    update(){
        this.draw();
        if(shapeBUTTON.selected==this){
            this.col = "white";
        }
    }
}
shapeBUTTON.selected = " ";


class Slider{
    constructor(x,y,w,h,col, col2){
        this.xR = x;
        this.yR = y;
        this.w = w;
        this.h = h;
        this.xC = x+50;
        this.R = h/2;
        this.col = col;
        this.col2 = col2;
        this.mouseDown = false;
        this.target = draw;
        this.move = false;
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
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        if (this.xR < this.xMouse && (this.xR+this.w) > this.xMouse && this.yMouse > this.yR && this.yMouse < (this.yR+this.h)){
            this.move = true;
        } 
        else{
            this.move = false;
        } 
    }
    
    mUp(e){
        this.mouseDown = false;
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
        this.rectangle();
        this.drawCircle(this.xC,this.h/2+this.yR, this.R);
    } 

    update(){
        this.draw();
        if (this.mouseDown == true && this.move==true){
            this.x = this.xMouse - this.xR;
            if (this.x < 0){
                this.x = 0;
            }
            if(this.x>this.w){
                this.x = this.w;
            }
            this.xC = this.x + this.xR;
        } 
        this.length = 2*this.xC/this.xR;
        this.target.Length(this.length);
        
        ctx.drawImage(imgObj, 5, 450, 200, 60);
    }
}