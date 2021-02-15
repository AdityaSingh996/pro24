
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,650,1400,20);
    rubber = new Rubber(300,200);
    hammer = new Hammer(500,650);
	stone = new Stone(400,600);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  ground.display();
  rubber.display();
  hammer.display();
  stone.display();
 
}



