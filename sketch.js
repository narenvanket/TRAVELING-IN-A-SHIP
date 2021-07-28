var sea,seaImg
var shipImg,ship


function preload(){
  seaImg=loadImage("sea.png")
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


}

function setup(){
  createCanvas(400,400);
  
  sea=createSprite(200,200);
  sea.addImage(seaImg)
  sea.scale=0.3
  sea.velocityX=-4
  ship=createSprite(200,200);
  ship.addAnimation("ship",shipImg);
  ship.scale=0.3
  
}

function draw() {
  background("blue")
  if(sea.x < 0){
    sea.x = 200;
    

  }
  drawSprites();
  
 
}