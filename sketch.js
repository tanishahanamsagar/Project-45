const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img;
var Eship, Eshipimg;
var Aship, Ashipimg;

function preload() {
    bg_img = loadImage("assets/z2.jpeg");
    Eshipimg = loadImage("assets/z10.png");
    Ashipimg = loadImage("assets/z8.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight);


    engine = Engine.create();
    world = engine.world;


    Eship = createSprite(700, 630, 70, 70);
    Eship.addImage(Eshipimg);
    Eship.scale = 1.9;

    Aship = createSprite(700, 150, 50, 50);
    Aship.addImage(Ashipimg);
    Aship.scale = 1;


    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(bg_img);

    if (keyIsDown(LEFT_ARROW)) {
        Eship.velocityX -= 5;

    }

    if (keyIsDown(RIGHT_ARROW)) {
        Eship.velocityX += 5;

    }


    drawSprites();

}