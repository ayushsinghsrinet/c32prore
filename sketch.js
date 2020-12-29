const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint
var world,engine;

var tests=[]
var test,test2,test3,test4;

var t;

var t2;

 var backimg;

var platform1,platform2,platform3;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27;

var score=0
var gamestate="onsling"
function preload() {
backimg=loadImage("c29img.jpg")
}
function setup(){
    t=createCanvas(1200,600)
engine=Engine.create()
world=engine.world

test=new ball(200,200,30)
t2=new slingshoot(test.body,{x:200,y:100})

platform1=new platform(550,402,350,50)
platform2=new platform(900,272,300,40)

box1=new box(450,350,60,60)
box2=new box(500,350,60,60)
box3=new box(550,350,60,60)
box4=new box(600,350,60,60)
box5=new box(650,350,60,60)
box6=new box(470,310,60,60)
box7=new box(520,310,60,60)
box8=new box(570,310,60,60)
box9=new box(620,310,60,60)
box10=new box(490,250,60,60)
box11=new box(540,250,60,60)
box12=new box(580,250,60,60)
box13=new box(490,180,60,60)
box14=new box(560,180,60,60)
box15=new box(520,120,60,60)
box16=new box(800,220,60,60)
box17=new box(840,250,60,60)
box18=new box(900,250,60,60)
box19=new box(950,250,60,60)
box20=new box(1000,250,60,60)
box21=new box(860,200,60,60)
box22=new box(900,200,60,60)
box23=new box(940,200,60,60)
box24=new box(880,150,60,60)
box25=new box(900,150,60,60)
box26=new box(890,100,60,60)
platform3=new platform(150,350,300,40)

test2=new ball(70,10,30)
test3=new ball(100,10,30)
test4=new ball(130,10,30)

tests.push(test4)
tests.push(test3)
tests.push(test2)
tests.push(test)
}
function draw(){
    
        background(backimg)
    
   
    textSize(20)
    fill(0);
    text("points"+score,1110,50)
    Engine.update(engine)
   
    
   

 test.display()
 test2.display()
 test3.display()
 test4.display()
 t2.display()
 platform1.display()
 platform2.display()
 
box1.display();
box1.score()
box2.display();
box2.score()
box3.display();
box3.score()
box4.display();
box4.score()
box5.display();
box5.score()
box6.display();
box6.score()
box7.display();
box7.score()
box8.display();
box8.score()
box9.display();
box9.score()
box10.display();
box10.score()
box11.display();
box11.score()
box12.display();
box13.score()
box13.display();
box13.score()
box14.display();
box14.score()
box15.display();
box15.score()
box16.display();
box16.score()
box17.display();
box17.score()
box18.display();
box18.score()
box19.display();
box19.score()
box20.display();
box20.score()
box21.display();
box21.score()
box22.display();
box22.score()
box23.display();
box23.score()
box24.display();
box24.score()
box25.display();
box25.score()
box26.display();
platform3.display()
}
function mouseDragged(){
    if(gamestate!=="launched"){
    Matter.Body.setPosition(tests[tests.length-1].body,{x:mouseX,y:mouseY})
    Matter.Body.applyForce(tests[tests.length-1],tests[tests.length-1].body.setPosition,{x:5,y:-10})
    return false
}
}
function mouseReleased(){

    t2.fly()
    tests.pop()
    gamestate="launched"
    return false
}

function keyPressed(){
    if(keyCode===32&&gamestate==="launched"){
    t2.attach(tests[tests.length-1].body)
    Matter.Body.setPosition(tests[tests.length-1].body,{x:200,y:200})
    gamestate="onsling"
}
}

//async function getbackimg(){
 //var response =await fetch("https://worldclockapi.com/api/json/utc/now") 
 // var responsejson= await response.json()
////v//ar date=responsejson.currentDateTime
//var hour=date.slice(11,13)
//if(hour>=06&&hour<15){
 //   backimg=loadImage("Cyberpunk.jpg")

//}
//else{
 //   backimg=loadImage("c29img.jpg")
//}
//}