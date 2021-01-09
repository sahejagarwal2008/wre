var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies
var Constraint = Matter.Constraint 

var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15
var string
var ball
var bg = "sprites/maxresdefault.jpg"

function setup(){
    var canvas = createCanvas(1000,600)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500,150,1000,40)
     
    ball = new Ball(10,160,50,50)
    string = new String(ball.body,{x:150,y:150})
    ball1 = new Ball(250,160,50,50)
    string1 = new String(ball1.body,{x:250,y:150})
    ball2 = new Ball(350,160,50,50)
    string2 = new String(ball2.body,{x:350,y:150})
    ball3 = new Ball(450,160,50,50)
    string3 = new String(ball3.body,{x:450,y:150})
    ball4 = new Ball(550,160,50,50)
    string4 = new String(ball4.body,{x:550,y:150})
}



   

function draw(){
    Engine.update(engine)
    background("bg");
    ground.display();
   
    ball.display();
    string.display();
    ball1.display();
    string1.display();
    ball2.display();
    string2.display();
    ball3.display();
    string3.display();
    ball4.display();
    string4.display();
}


