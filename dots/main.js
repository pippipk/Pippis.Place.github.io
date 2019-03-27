console.log("main is called");

var objectSet = [ ]

var FDOne = new FiveDot(400,100, 120, colArray[1][8], colArray[1][0], colArray[0][6], 20);

//FDOne.update();


var FDTwo = new FiveDot(200,300,100,colArray[1][3], colArray[1][6], colArray[1][3], 20);
var FDThree = new FiveDot(600,300,120, colArray[1][5], colArray[1][0], colArray[1][3], 20);
var FDFour = new FiveDot(400,400,50, colArray[1][6], colArray[1][0], colArray[1][4], 10);

objectSet.push(FDOne,FDTwo,FDThree,FDFour);
objectSet.push(new FiveDotRotate(150,100,80, colArray[0][3], colArray[0][4], colArray[0][5], 10));
console.log(objectSet);
for (var i=0; i<objectSet.length; i++){
    objectSet[i].update();


}
