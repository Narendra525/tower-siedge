const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constrainedLog,slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1=new Ground(920,240,300,20)
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(1020,200,50,50);
    box2 =  new Box(945,200,50,50);

    box3 = new Box(900,200,50,50)
    box4 = new Box(820,200,50,50)
    box5 = new Box(855,150,50,50)
    box6 = new Box(920,150,50,50)
    box7= new Box(980,150,50,50)
    box8=new Box(885,90,50,50)
    box9=new Box(950,90,50,50)
    box10=new Box(920,40,50,50)
   
   
  

    bird = new Bird(100,100);
    
    slingShot=new slingshot(bird.body,{x:200,y:100})


    
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    ground1.display();
  
      
    box1.display();
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
   
    
   // log6.display()
   slingShot.display()
    
    bird.display();
    platform.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly()

    
}