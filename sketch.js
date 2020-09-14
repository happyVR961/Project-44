
// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;
var car, carimg; 
var bg, bgimg;
var obstacle1, obstacle1img;
var obstacle2, obstacle2img;
var obstacle3, obstacle3img; 
function preload()
{
	carimg = loadImage("purple car.png");
	obstacle1img = loadImage("blue car (1).png");
	obstacle2img = loadImage("red car (2).png");
	obstacle3img = loadImage("orange car (2).png");
}

function setup() {
	createCanvas(800, 600);
	car  = createSprite(150,300,50,50);
	car.addImage("carss", carimg);
	car.scale = 0.2;
	// engine = Engine.create();
	// world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("black");
  if (keyDown("UP_ARROW")){
	  car.y = car.y - 5
  }
  if (keyDown("DOWN_ARROW")){
	  car.y = car.y + 5;
  }
  obstacles1();
  obstacles2();
  obstacles3();
  drawSprites();
 
}

function obstacles1(){
	// var a = random(100,150);
	 if(frameCount % 200===0){
	   console.log("hello");
	 obstacle1 = createSprite(800,400,50,50);
	 obstacle1.addImage("plan1", obstacle1img);
	 obstacle1.scale = 0.06;
	 obstacle1.velocityX = -4;
	 obstacle1.y = random(10,580);
	 obstacle1.lifetime = 220;
}
}

function obstacles2(){
	// var a = random(100,150);
	 if(frameCount % 250===0){
	   console.log("hello");
	 obstacle2 = createSprite(800,400,50,50);
	 obstacle2.addImage("plan2", obstacle2img);
	 obstacle2.scale = 0.2;
	 obstacle2.velocityX = -4;
	 obstacle2.y = random(10,580);
	 obstacle2.lifetime = 220;
}
}

function obstacles3(){
	// var a = random(100,150);
	 if(frameCount % 300===0){
	   console.log("hello");
	 obstacle3 = createSprite(800,400,50,50);
	 obstacle3.addImage("plan2", obstacle3img);
	 obstacle3.scale = 0.2;
	 obstacle3.velocityX = -4;
	 obstacle3.y = random(10,580);
	 obstacle3.lifetime = 220;
}
}


