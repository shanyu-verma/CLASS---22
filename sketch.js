const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,ground;
var ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var stat = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,10,stat);
  World.add(world,ground);
var option = {
  isStatic : true
}

  object = Bodies.rectangle(200,100,50,50,option);
  World.add(world,object);

  var boun = {
    restitution : 1
  }
  
  ball = Bodies.circle(50,50,30,boun);
  World.add(world,ball);


  console.log(object);


  }

function draw() {
  background(0);  
  Engine.update(engine);
  drawSprites();
  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}