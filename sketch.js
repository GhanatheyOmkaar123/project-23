var helicopterIMG, helicopterSprite,packageSprite, packageIMG;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 647, width, 10 , {isStatic:true} );
	 World.add(world, ground);

     packageSprite = createSprite(width/2, 200, 50, 50);
     packageSprite.addImage(packageIMG);
     packageSprite.scale = 0.2;

	 helicopterSprite=createSprite(width/2, 200, 0,10);
	 helicopterSprite.addImage(helicopterIMG);
	 helicopterSprite.scale=0.6;

box1 = new Box(335,645,15,50);
box2 = new Box(375,645,100,15);
box3 = new Box(435,645,15,50);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  
box1.display();
box2.display();
box3.display();
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === "Down_Arrow") {
    Matter.Body.setStatic(packageSprite,false);	
  }
}



