var r1;
var r2;
var a,b;
var r3,r4,r5,r6;
function setup(){
  createCanvas(1200,500);
  r1 = createSprite(650,400,50,200);
  r2 = createSprite(700,200,200,50);
  r3 = createSprite(60,40,50,200);
  r4 = createSprite(370,20,200,50);

}

function draw(){
  background("yellow");
  r1.shapeColor = "black";
  r2.shapeColor = "black";

  r1.x = mouseX;
  r1.y = mouseY;
  if(touch(r1,r2)){
    r1.shapeColor = "red";
    r2.shapeColor = "red";
  }

  if(touch(r1,r3)){
    r1.shapeColor = "red";
    r3.shapeColor = "red";
  }

  else{
    r1.shapeColor = "black";
  r2.shapeColor = "black";


  }


  
  drawSprites();
}

function touch(a,b){
  if(a.x - b.x < a.width/2 + b.width/2 &&  b.x - a.x < a.width/2 + b.width/2 && a.y - b.y < a.height/2 + b.height/2 && b.y - a.y < a.height/2 + b.height/2){
      return true;
  }

  else {
    return false;
  }
}