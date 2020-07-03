 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5,roofObj;
var base,chain1,world,render,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

    roofObj=new g(width/2,height/4,width/7,20);
    bob1Diameter=40;
    startbobPositionX=width/2;
    startbobPositionY=height/4+500;
    bobObj1= new ball(startbobPositionX-bobDiameter*2,startbobPositionY,bobDiameter);
    bobObj2= new ball(startbobPositionX-bobDiameter,startbobPositionY,bobDiameter);
    bobObj3= new ball(startbobPositionX,startbobPositionY,bobDiameter);
    bobObj4= new ball(startbobPositionX+bobDiameter,startbobPositionY,bobDiameter);
    bobObj5= new ball(startbobPositionX+bobDiameter*2,startbobPositionY,bobDiameter);

    var render=Render.create({
    element: document.body,
    engine: engine,
    options:{
    width: 1200,
    height:700,
    wireFrames: false,
    }
    });
    
chain1=new Chain(bobObj1.body,roofObj.body-bobDiameter*2,0);
chain2=new Chain(bobObj2.body,roofObj.body-bobDiameter*1,0);
chain3=new Chain(bobObj3.body,roofObj.body,0,0);
chain4=new Chain(bobObj4.body,roofObj.body,bobDiameter*1,0);
chain5=new Chain(bobObj5.body,roofObj.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roofObj.display();
  bobObj1.display();
  chain2.display();
  bobObj2.display();
  chain3.display();
  bobObj3.display();
  chain4.display();
  bobObj4.display();
  chain5.display();
  bobObj5.display();
 
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){
  Matter.body.applyForce(bobObj1.body,bobObj1.body.position,{x:-50,y:-45});
}
}

function drawLine(Constraint){
  bobBodyPosition=Constraint.bodyA.position;
  roofBodyPosition=Constraint.bodyB.position;
  roofBodyOffset=Constraint.pointB;
  roofBodyX=roofBodyPosition.x=roofBodyOffset.x;
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
  line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY)
}