const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var helicopterBody, packageBody, groundBody, helicopterImage, packageImage, helicopterSprite;

function preload(){
helicopterImage =  loadImage("helicopter.png");
packageImage = loadImage("package.png");
}

function setup(){
createCanvas(600,400);
engine = Engine.create();
world = engine.world;
var options={
    restitution : 0.1
}
var options2={
    isStatic : true
}
packageBody = Bodies.rectangle(100,50,50,50, options);
World.add(world,packageBody);
groundBody = Bodies.rectangle(300,350,650,20, options2);
World.add(world,groundBody);
//package.addImage = packageImage;
helicopterSprite = createSprite(100,50,80,80);
helicopterSprite.addImage = helicopterImage;
//World.add(world,helicopter);
}
function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(packageBody.position.x, packageBody.position.y, 50,50);
    rectMode(CENTER);
    rect(groundBody.position.x, groundBody.position.y, 650,20);
    drawSprites();
}