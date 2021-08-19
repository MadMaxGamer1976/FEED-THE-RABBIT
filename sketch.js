var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var redLeaf,orangeLeaf,redLeafImg,orangeLeafImg;
var rand;

function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");

  redLeafImg = loadImage("redImage.png");

  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  drawSprites();

  rand = Math.round(random(1,3));

  if (frameCount % 80 == 0){
    if (rand == 1){
      createApples();
    }
    else if (rand == 2){
      createRedLeaves();
    }
    else {
      createOrangeLeaves();
    }
  }


}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY = 3; 
  apple.scale = 0.05;
  apple.lifetime = 100;
}

function createRedLeaves(){
  redLeaf = createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redLeafImg);
  redLeaf.velocityY = 3;
  redLeaf.scale = 0.05;
  redLeaf.lifetime = 100;
}

function createOrangeLeaves(){
  orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.velocityY = 3;
  orangeLeaf.scale = 0.05;
  orangeLeaf.lifetime = 100;
}
