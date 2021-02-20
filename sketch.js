const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1; 
var block1, block2, block3, block4, block5, block6, block7,
block8, block9, block10, block11, block12, block13, block14, 
block15, block16, block17, block18, block19, block20, block21, 
block22, block23,block24, block25, block26, block27, block28, 
block29, block30, block31, block32;
var ball;

var score = 0;


function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution:1.5

  }
  ball = Bodies.circle(200,300,20, options)
  World.add(world,ball);
   
  slingshot = new SlingShot(this.ball,{x:100,y:150})



  ground = new Ground(600,height,1200,20);


  stand1 = new Stand(390,300,310,20)
  stand2 = new Stand(770,200,310,20)
  
   
//level 1
  block1 = new Box(300,275,30,40)
  block2 = new Box(330,275,30,40)
  block3 = new Box(360,275,30,40)
  block4 = new Box(390,275,30,40)
  block5 = new Box(420,275,30,40)
  block6 = new Box(450,275,30,40)
  block7 = new Box(480,275,30,40)
  //level 2
  block8 = new Box(330,235,30,40)
  block9 = new Box(360,235,30,40)
  block10 = new Box(390,235,30,40)
  block11 = new Box(420,235,30,40)
  block12 = new Box(450,235,30,40)
  //level 3
  block13 = new Box(360,195,30,40)
  block14 = new Box(390,195,30,40)
  block15 = new Box(420,195,30,40)
  //top
  block16 = new Box(390,155,30,40)

  //second level
  
  //level 1
  block17 = new Box(680,175,30,40)
  block18 = new Box(710,175,30,40)
  block19 = new Box(740,175,30,40)
  block20 = new Box(770,175,30,40)
  block21 = new Box(800,175,30,40)
  block22 = new Box(830,175,30,40)
  block23 = new Box(860,175,30,40)
  //level 2
  block24 = new Box(710,150,30,40)
  block25 = new Box(740,150,30,40)
  block26 = new Box(770,150,30,40)
  block27 = new Box(800,150,30,40)
  block28 = new Box(830,150,30,40)
  //level 3
  block29 = new Box(740,125,30,40)
  block30 = new Box(770,125,30,40)
  block31 = new Box(800,125,30,40)
  //top
  block32 = new Box(770,100,30,40)
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  ground.display();

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)


  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  block29.display();
  block30.display();
  block31.display();

  block32.display();

  slingshot.display();

  text("SCORE:"+score,890,40);

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  setTimeout(()=>{ slingshot.fly(); },150);
}