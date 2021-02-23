const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var log, slingshot;

var engine, world;
var platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(150, 305, 300, 170);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

    log8= new Log(330,235,30,40);
    log9= new Log(360,235,30,40);
    log10= new Log(390,235,30,40);
    log11= new Log(420,235,30,40);
    log12= new Log(450,235,30,40);
    log13= new Log(360,195,30,40);
    log14= new Log(390,195,30,40);
    log15= new Log(420,195,30,40);
    log16= new Log(390,155,30,40);

}

function draw(){
    
    Engine.update(engine);
    log8.display();
    log9.display();
    ground.display();
    log10.display();

    log11.display();
    log12.display();
    log13.display();
    log14.display();

    log15.display();
    log16.display;

    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(log.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
