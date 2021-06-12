class Form {

  constructor() {
   this.title = createSprite(displayWidth/2 - 100,90);
   this.play = createSprite(displayWidth/2 - 100,displayHeight/2 -100)
  }
  hide(){
   
  }

  display(){
    if(mousePressedOver(this.play)){
      this.play.visible=false;
      gameState= "play";
       console.log(gameState)
    }



















    drawSprites() 
  

   
  }
}
