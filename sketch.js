
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyImage;
function preload()
{
	boyImage=loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree1=new Tree(600,530,150,580);
mango1=new Mango(550,360,20,20);
mango2=new Mango(640,350,20,20);
mango3=new Mango(570,330,20,20);
mango4=new Mango(590,390,20,20);
mango5=new Mango(630,380,20,20);
stone1=new Stone(200,620,15,15);
ground1=new Ground(400,690,800,10);
chain1=new chain(stone1.body,{x:250,y:600})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
stone1.display();
chain1.display();
ground1.display();
image(boyImage,200,650,70,150);
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
//	fly();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body
	}
}
