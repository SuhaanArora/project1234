
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1700, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball (200,500,20,20)

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  fill("red")
  rect (400,650,3000,20);
  drawSprites();
  ball.display();
  
}



