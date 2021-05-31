const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box1,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box=new Box(200,200,50,100);
    box1=new Box(200,300,100,50);
   ground=new Ground(200,375,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display()
    box1.display()
    ground.display()

}