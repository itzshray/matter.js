const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var ball, ground

function setup(){
createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var b_options={
restitution: 1
}
ball=Bodies.circle(160,160,20,b_options)
World.add(world,ball);
var g_options={
  isStatic: true
}
ground=Bodies.rectangle(200,350,400,20,g_options)
World.add(world,ground);
}

function draw(){
background("aqua");
Engine.update(engine);
fill("red")
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
rectMode(CENTER);
fill("green");
rect(ground.position.x,ground.position.y,400,20);

}


