var canvas, backgroundImage
var form
var distance = 0;
var gameState = "start" ;
var spaceBackground 
var spaceBackgroundImage
var spaceship
function preload(){
  spaceBackgroundImage = loadImage("images/galaxybackground.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

   form = new Form();
 
}

 
 function draw(){
   background("white");
  text(mouseX + "," + mouseY, mouseX,mouseY);
  form.display();
if(gameState=== "play"){
  spaceBackground = createSprite(displayWidth/2,displayHeight/2);
spaceBackground.addImage(spaceBackgroundImage)
spaceBackground.scale = 5;
spaceBackground.velocityY=10;
spaceship = createSprite(400,200);
if(keyDown("right")){
  spaceship.x=spaceship.x+5;
}
if(keyDown("left")){
  spaceship.x= spaceship.x-5;
}
}
 }
 