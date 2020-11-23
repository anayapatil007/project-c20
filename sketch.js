var car,wall;
var speed, weight;



function setup() {
  createCanvas(800,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(700,200,60,height/2);
  wall.shapecolor = color(80,80,80);
  speed = random(5,12);
  car.velocityX=speed;
  
if (wall.x - car.x <= wall.widht/2 + car.width/2){
  car.velocityX = 0;
  var deformation = 0.5 *weight * speed * speed /22509;
}
if (deformation<180){
  car.shapecolor = color(255,0,0);
}


if (deformation<180 && deformation >100 ){
  car.shapecolor = color(230,230,0);
}
if (deformation<180){
  car.shapecolor = color(0,255,0);
}


 
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}