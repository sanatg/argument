var cat
var mouse
var gur 

function setup() {
  createCanvas(800,400);
  cat = createSprite(300, 200, 50, 50);
  mouses = createSprite(100,200,20,20)
  gur = createSprite(100,100,100,100);
}
function draw() {
  background(255,255,255);  
  mouses.x = mouseX
  mouses.y = mouseY
  ///////////////cat.velocityX =-3
 /////////////////////// mouses.velocityX =3
  if(isTouching(mouses,cat)){
    mouses.shapeColor = "red"
  }
  if(isTouching(mouses,gur)){
    mouses.shapeColor = "blue"
    gur.shapeColor = "red"
  }




  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2
    &&object1.y-object2.y<object2.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
///////////////mouses.shapeColor = "red"
///mouses.velocityX = mouses.velocityX*(-1)
//\\cat.velocityX = cat.velocityX*(-1)
return  true


  }








}























































