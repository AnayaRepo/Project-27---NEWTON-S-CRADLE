
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//stiffness: 0.04,
//lenght: 10,

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(800, 550);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2, height/4, width/2, 30);

	bobDiameter =50;
	startBobPositionX = 400;
	startBobPositionY = 400;

	bobObject1 = new Bob(startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter);
	bobObject2 = new Bob(startBobPositionX-bobDiameter, startBobPositionY, bobDiameter);
	bobObject3 = new Bob(startBobPositionX, startBobPositionY, bobDiameter);
	bobObject4 = new Bob(startBobPositionX+bobDiameter, startBobPositionY, bobDiameter);
	bobObject5 = new Bob(startBobPositionX+bobDiameter*2, startBobPositionY, bobDiameter);

	rope1 = new Rope(bobObject1.body, roof.body, bobDiameter/50, 0);
	rope2 = new Rope(bobObject2.body, roof.body, bobDiameter/50, 0);
	rope3 = new Rope(bobObject3.body, roof.body, bobDiameter/50, 0);
	rope4 = new Rope(bobObject4.body, roof.body, bobDiameter/50, 0);
	rope5 = new Rope(bobObject5.body, roof.body, bobDiameter/50, 0);

	//rope1 = new Rope(roof.body, bobObject1.body, bobDiameter/50, 0);
	//rope2 = new Rope(roof.body, bobObject2.body, bobDiameter/50, 0);
	//rope3 = new Rope(roof.body, bobObject3.body, bobDiameter/50, 0);
	//rope4 = new Rope(roof.body, bobObject4.body, bobDiameter/50, 0);
	//rope5 = new Rope(roof.body, bobObject5.body, bobDiameter/50, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  Engine.update(engine);

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject5.body, bobObject2.body.position,{x:550, y:-670});
	}
}
