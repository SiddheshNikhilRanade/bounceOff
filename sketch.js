var fixedRect, MovingRect

function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug="true";
  MovingRect=createSprite(100,200,50,80);
  MovingRect.shapeColor="green";
  MovingRect.debug="true";
  MovingRect.velocityX=5;
  fixedRect.velocityX=-5;
}

function draw() {
  background("black");  
  bounceOff(MovingRect,fixedRect);
  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2){
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
  
    }
    if(object1.y-object2.y<object2.height/2+object1.height/2
      &&object2.y-object1.y<object2.height/2+object1.width/2){
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);


    
    
  
    } 




 }