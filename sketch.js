

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball1, ground1, basket1,wall1,wall2;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


  Engine.run(engine);
  ball1=new ball(100,550,50);
  ground1=new ground(400,555,800,9);
  basket1=new basket(600,545,160,20);
  wall1=new wall(520,510,20,80);
  wall2=new wall(680,510,20,80);
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyCode===UP_ARROW){

Matter.Body.applyForce(ball1.body,ball1.body.position,x=5,y=-5);
	
	
	}
	basket1.display();
	wall2.display();
  ground1.display();
  ball1.display();
  wall1.display();
  drawSprites();
 
 
}




