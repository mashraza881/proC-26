var dish,dishimg;
var dish2,dish2img;

function preload(){

dishimg=loadImage("images/dish.jpg")

}

function setup() {

  createCanvas(500,500);

  dish= createSprite(250,250,5,5);
  dish.addImage(dishimg)
  dish.scale=1
}
 

function draw(){
 
  background(rgb(102, 0, 51));

  drawSprites();
}

