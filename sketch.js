
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperB, dustbin1, dustbin2, dustbin3, ground
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
   
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperB = new Paper(50,100,30)
	paperB.debug = true
	ground = new Ground(600,height,1200,40)

	dustbin1 = new Dustbin(1000,365,200,20)
	dustbin2 = new Dustbin(1100,255,25,100)
	dustbin3 = new Dustbin(900,255,25,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGray");
  paperB.Display()
  ground.Display()
  dustbin1.Display()
  dustbin2.Display()
  dustbin3.Display()
  drawSprites();
  keypressed();

}

function keypressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paperB.body,paperB.body.position, {x:10,y:-10})
	}
}

