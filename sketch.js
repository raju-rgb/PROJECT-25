
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground1 , dustbin1 , paper1 ;

function setup() {
	var canvas = createCanvas(1600,700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=new Dustbin(1200,660);
	paper1=new Paper(200,200,50);
	ground1=new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background("pink");
  ground1.display();
  dustbin1.display();
  paper1.display();
  //keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position, {x:220,y:-300})
	}
}


