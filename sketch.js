const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, world;

function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world();
  box=new Box(200,200,50,50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  box.display();
}