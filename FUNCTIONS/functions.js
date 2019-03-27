// function to draw circle
function drawCircle(x,y,R, fillC, strokeC, lwidth, fill, stroke){
    ctx.beginPath();
    ctx.arc(x,y,R,2*Math.PI);
    if (fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if (stroke == true){
        ctx.strokeStyle = strokeC;
        ctx.lineWidth = lwidth;
        ctx.stroke();
    }
}


function drawGradient(x,y,w,h, fillC, fillC1, fillC2, strokeC, lwidth, fill, stroke){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    if (fill == true){
        var my_gradient=ctx.createLinearGradient(x,y,w,h);
        my_gradient.addColorStop(0,fillC);
        my_gradient.addColorStop(0.5,fillC1);
        my_gradient.addColorStop(1,fillC2);
        ctx.fillStyle = my_gradient;
        ctx.fill();
    }
    if (stroke == true){
        ctx.strokeStyle = strokeC;
        ctx.lineWidth = lwidth;
        ctx.stroke();
    }
}

drawGradient(10,350,200,200,"rgb(255,102,102)", "rgb(255,255,153)", "rgb(0,153,204)", "rgb(0,0,0)",2,true,false);