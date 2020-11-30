
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine , world;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var hanger;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 =  new Ball(200,100,20);
	ball2 =  new Ball(350,250,20);
	ball3 =  new Ball(400,250,20);
	ball4 =  new Ball(450,250,20);
	ball5 =  new Ball(500,250,20);

	
	hanger =  new Hanger(400,100,250,20);
	
	rope1 = new Rope(ball1.body,{x:300,y:100});
	rope2 = new Rope(ball2.body,{x:350,y:100});
	rope3 = new Rope(ball3.body,{x:400,y:100});
	rope4 = new Rope(ball4.body,{x:450,y:100});
	rope5 = new Rope(ball5.body,{x:500,y:100});

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ball1.display();
  ball2.display(); 
  ball3.display(); 
  ball4.display(); 
  ball5.display(); 

  hanger.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}
function keyPressed(){
    if (keyCode == UP_ARROW){
	    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:0});
    }
}


