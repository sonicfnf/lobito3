// Mover los personajes
var lobito, pajaro,zanahoria,ardilla, fondo,fondos,lobito1;
var lobit2,lobito3;

function preload(){
fondo = loadImage("juego/fondo.avif");
lobito =loadImage("juego/lobito/lobito1.png");
lobit2 =loadImage("juego/lobito/lobito3.jpg");

}

function setup(){
  createCanvas(1500,1000);
 fondos = createSprite(displayWidth/2,500,1000,800,displayHeight);
 fondos.addImage(fondo)
fondos.scale = 4;

lobito1 =createSprite(800,500,20 ,20)
lobito1.addImage(lobito)

lobito3 = createSprite(800,500,20,20)
lobito3.addImage(lobito3)

}

function draw(){
background(0)
if (keyDown("UP_ARROW")) {
 lobito1.velocityX =5; 
 lobito1.velocityY =-5;
}
if (keyDown("DOWN_ARROW")) {
 lobito1.velocityX = -5;
 lobito1.velocityY = 5; 
}
if (keyDown("RIGHT_ARROW")) {
  lobito1.velocityX = 5;
}
if (keyDown("LEFT_ARROW")) {
  lobito1.velocityX =-5;
  //aqui va el cambio de imagen

}
if (keyDown("space")) {
lobito1.velocityX = 0;
lobito1.velocityY = 0;
}








drawSprites()


}


