//var boyimage


function preload(){
 // boyimage=loadImage("images/boy 2.png")
  
  
  
  }
function setup() {
  createCanvas(400,400);
 var boy=createSprite(20, 30,20,20);
 var wall1 = createSprite(50, 50,20,100);
 wall1.shapeColor=("blue");
var wall2  = createSprite(390,50,20,100);
wall2.shapeColor=("yellow");
var wall3 = createSprite(0, 210,200,20);
wall3.shapeColor=("pink");
var wall4  = createSprite(350, 150,100,20);
wall4.shapeColor=("blue");
var wall5  = createSprite(300, 300,100,20);
wall5.shapeColor=("red");
var wall6  = createSprite(348, 348,20,150);
wall6.shapeColor=("yellow");
var wall7  = createSprite(200, 97,100,20);
wall7.shapeColor=("pink");
var wall8  = createSprite(110, 35,100,20);
wall8.shapeColor=("blue");
var wall9  = createSprite(99, 140,20,90);
wall9.shapeColor=("red");
var wall10  = createSprite(150, 180,20,90);
wall10.shapeColor=("yellow");
var wall11  = createSprite(137,300 ,20,90);
wall11.shapeColor=("pink");
var wall12  = createSprite(70,300 ,90,20);
wall12.shapeColor=("blue");
var wall13  = createSprite(220,150 ,90,20);
wall13.shapeColor=("red");
var wall14  = createSprite(193,4 ,90,20);
wall14.shapeColor=("yellow");
var wall15 = createSprite(250,200 ,90,20);
wall15.shapeColor=("pink");
var wall16 = createSprite(220,249 ,90,20);
wall16.shapeColor=("blue");
var wall17 = createSprite(299,49 ,90,20);
wall17.shapeColor=("RED");
var wall18 = createSprite(334,110 ,90,20);
wall18.shapeColor=("BROWN");
var wall19 = createSprite(210,329 ,20,90);
wall19.shapeColor=("PURPLE");
var wall20= createSprite(300,250 ,20,80);
wall20.shapeColor=("BROWN");
var wall21= createSprite(50,390 ,90,20);
wall21.shapeColor=("PURPLE");
var wall22= createSprite(300,350 ,20,80);
wall22.shapeColor=("PURPLE");
//boy.addImage(boyimage)


 
}

function draw() {
 
  background("green"); 


  drawSprites();
}
