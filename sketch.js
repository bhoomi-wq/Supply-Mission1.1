//declaring global variable and matter
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//preload the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//Create sprite
    box1 = createSprite(500, 610, 20,100);
	box1.shapeColor=color("red")

	box2 = createSprite(300,610, 20,100);
	box2.shapeColor=color("red")

	box3 = createSprite(400,650, 200,20);
	box3.shapeColor=color("red")

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    //engine work with world
	engine = Engine.create();
	world = engine.world;


   //Create packagebody with gravity effect
	packageBody = Bodies.circle(width/2 , 200 , 5 ,{isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground with gravity effect
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	//Create boxes with gravity effect
	box1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, box1);

	box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, box2);

	box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, box3);

   //to run the engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite position with packagebody
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

   //the package body fall only on press of the Down arrow key.
   Matter.Body.setStatic(packageBody,false);
    
  }
}



