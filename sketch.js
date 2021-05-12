var wall,thickness;
var bullet,speed,weight;



function setup() {
  speed=random(223,321);
  thickness=random(22,83);

  weight=random(30,52);
  bullet=createSprite(50,200,70,20);
  wall=createSprite(1200,200,thickness,height);
  wall.debug=true;
  bullet.debug=true;
  wall.shapeColor=color("white");  
  bullet.shapeColor=color("brown");
  bullet.velocityX=speed;
  createCanvas(1600,400);
}

function draw() {
 
  
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  background("black");  
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}