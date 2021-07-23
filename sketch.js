
var monkey , monkey_running
var banana ,bananaImage, obstacles, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
  
    FoodGroup = new Group()
    obstacleGroup = new Group()
}



function setup() {
  

  
  score=0
  survivalTime=0
 
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("monkey" , monkey_running)
  monkey.scale = 0.1
  

  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.wirth / 2
  console.log(ground.x)
  
  
}
   

function draw() {
  
    background("green")
  
  if(keyDown("space") && monkey.y >=300){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    food()
 }
  
  if(World.frameCount%300===0){
    obstacle()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
    
  }
   
  if(monkey.isTouching(obstacleGroup)){
     obstacleGroup.velocityX = 0 
     
  }
  
  
  
  
  
  
  drawSprites() 
  stroke("white")
   textSize(20)
   fill("white") 
  text("Score: "+ score, 20,50);
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50)
  
}

function food (){
  
  banana=createSprite(600,Math.round(random(120,200)))
  banana.addImage(bananaImage)
  banana.lifetime = 210
  banana.scale=0.1
  banana.velocityX=-3
  FoodGroup.add(banana)

}

function obstacle(){

  obstacles = createSprite(670,310,10,10)
  obstacles.addImage(obstaclesImage)
  obstacles.lifetime = 200
  obstacles.velocityX=-4
  obstacles.scale=0.2
  obstacleGroup.add(obstacles)

}
