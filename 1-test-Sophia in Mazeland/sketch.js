var maze1,maze2,maze3,maze4,maze5,maze6,maze7;
var maze8,maze9,maze10,maze11,maze12,maze13,maze14;
var maze15,maze16,maze17,maze18,maze19,maze20, maze21, maze22, maze23;
var trophy,sofia;
var trophyIMG,sofiaAnim;
var boundary,boundary2,boundary3,boundary4, left, right, Up, Down;
var leftIMG, RightIMG, UpIMG, DownIMG, youwinIMG,BridIMG,TreeIMG;
var gameState = 0;
var Bird, TreeWon, youWonback;
var restart, restartIMG;
var UpFill, DownFill, LeftFill, RightFill, UpF, DownF, LeftF, RightF;
var RulesButton, RulesBIMG;
var Rules, RulesIMG;
var RulesBack, RulesBackIMG;
var Arrow;
var arrowStartPosition;
var majeGroup;
var next, nextIMG;

function preload(){
    sofiaAnim = loadAnimation("assets/bird1.png","assets/bird2.png","assets/brd3.png");
    trophyIMG =loadImage("assets/tree-removebg-preview.png_2.png");
    leftIMG = loadImage("assets/left.png");
    RightIMG = loadImage("assets/Right.png");
    UpIMG = loadImage("assets/up.png");
    DownIMG = loadImage("assets/down.png");
    youwinIMG = loadImage("assets/youwin.png");
    restartIMG = loadImage("assets/R.png");
    TreeIMG = loadImage("assets/wontree.png");
    RightFill = loadImage("assets/RightFill.png");
    LeftFill = loadImage("assets/LeftFill.png");
    UpFill = loadImage("assets/UpFill.png");
    DownFill = loadImage("assets/DownFill.png");
    RulesIMG = loadImage("assets/Rules.png");
    RulesBackIMG = loadImage("assets/RulesBack.png");
    RulesBIMG = loadImage("assets/RulesButton.png");
    nextIMG = loadImage("assets/Next.png");
}

function setup(){
createCanvas(400, 600);
scaleFactor = min(windowWidth / width, windowHeight / height);
resizeCanvas(width * scaleFactor, height * scaleFactor);
arrowStartPosition = createVector(width / 2, height / 2);
  //Arrow
   Arrow = createSprite(World.mouseX, World.mouseY, 5,5);
//majeGroup
mazeGroup = createGroup();

if(gameState == 0){
    //mazes
    maze1 = createSprite(72, 0, 10, 100);
    mazeGroup.add(maze1);
    maze2 = createSprite(0, 72, 100,10);
    mazeGroup.add(maze2);
    maze3 = createSprite(118, 0, 10, 210);
    mazeGroup.add(maze3);
    maze4 = createSprite(77, 110, 95, 10);
    mazeGroup.add(maze4);
    maze5 = createSprite(0, 145,400,10);
    mazeGroup.add(maze5);
    maze6 = createSprite(159, 0, 10, 210);
    mazeGroup.add(maze6);
    maze7 = createSprite(249, 110, 190,10);
    mazeGroup.add(maze7);
    maze8 = createSprite(295, 145,100,10 );
    mazeGroup.add(maze8);
    maze9 = createSprite(200, 200,10,100);
    mazeGroup.add(maze9);
    maze10 = createSprite(125, 256,160,10 );
    mazeGroup.add(maze10);
    maze11 = createSprite(250, 200,10,100);
    mazeGroup.add(maze11);
    maze12 = createSprite(305, 250,118,10);
    mazeGroup.add(maze12);
    maze13 = createSprite(347, 0,10,100);
    mazeGroup.add(maze13);
    maze14 = createSprite(279, 50,142,10);
    mazeGroup.add(maze14);
    maze15= createSprite(250, 254,10,80);
    mazeGroup.add(maze15);
    maze16 = createSprite(155, 294,200,10);
    mazeGroup.add(maze16);
    //maze17= createSprite(50, 345,12,112);
    maze18 = createSprite(50,215 ,10,75);
    mazeGroup.add(maze18);
    maze19 = createSprite(355, 370,10,74);
    mazeGroup.add(maze19);
    maze20 = createSprite(350, 179,10,77);
    mazeGroup.add(maze20);
    maze21 = createSprite(224, 338,257,11);
    mazeGroup.add(maze20);
    maze22 = createSprite(359, 271,10,40);
    mazeGroup.add(maze22);
    
}
    //trophy
    trophy = createSprite(300, 380,50,50);
    trophy.addAnimation("Tree", trophyIMG);
    trophy.scale = 0.3;
    
    //sofia
    sofia = createSprite(10, 10,11,11);
    sofia.addAnimation("flying Sofia", sofiaAnim);
    sofia.scale = 0.05;

    //Boundary
    boundary = createSprite(200,410,1000,5);
    boundary2 = createSprite(200,0,1000,5);
    boundary3 = createSprite(0,200,5,1000);
    boundary4 = createSprite(400,200,5,1000);

    //Controller    
    UpF = createSprite(190, 455, 10,10)
    UpF.addAnimation("UpFill", UpFill);
    UpF.scale = 0.2;

    Up = createSprite(190, 455, 10, 10);
    Up.addAnimation("up", UpIMG);
    Up.scale = 0.2;

    Down = createSprite(190, 555, 10,10);
    Down.addAnimation("down", DownIMG);
    Down.scale = 0.2;

    DownF = createSprite(190, 555, 10,10)
    DownF.addAnimation("DownFill", DownFill);
    DownF.scale = 0.2;

    left = createSprite(100, 505, 10,10);
    left.addAnimation("left", leftIMG);
    left.scale = 0.2;

    LeftF = createSprite(100, 505, 10,10)
    LeftF.addAnimation("LeftFill", LeftFill);
    LeftF.scale = 0.2;

    RightF = createSprite(280, 505, 10,10)
    RightF.addAnimation("RightFill", RightFill);
    RightF.scale = 0.2;

    right = createSprite(280, 505, 10,10);
    right.addAnimation("right", RightIMG);
    right.scale = 0.2;

    
    restart = createSprite(40, 450, 50, 50);
    restart.addAnimation("Restrat",restartIMG);
    restart.scale = 0.04;
    //restart.debug = true;
    restart.setCollider("circle",5,10,650);

    RulesButton = createSprite(365 ,430, 100, 30);
    RulesButton.addAnimation("button", RulesBIMG);
    RulesButton.scale = 0.6;

    Rules = createSprite(200,210, 350, 380);
    Rules.addAnimation("Rules",RulesIMG);

    RulesBack = createSprite(355,40,50,50);
    RulesBack.addAnimation("RulesBack", RulesBackIMG);
    RulesBack.scale = 0.5;
    Rules.visible = false;
    RulesBack.visible = false;

    next = createSprite(305, 430, 100,  30);
    next.addAnimation("nextLevel", nextIMG);
    next.scale = 0.57;

}
function resetArrowPosition() {
    Arrow.position.x = arrowStartPosition.x;
    Arrow.position.y = arrowStartPosition.y;
  }  


//Sofia
function createShofia(){
    sofia = createSprite(10, 10,11,11);
    sofia.addAnimation("flying Sofia", sofiaAnim);
    sofia.scale = 0.05;
    }

  

function draw(){
    background(rgb(223,223,180));
    scale(scaleFactor);

    Arrow.position.x = arrowStartPosition.x;
    Arrow.position.y = arrowStartPosition.y;

    const scaledMouseX = mouseX / scaleFactor;
    const scaledMouseY = mouseY / scaleFactor;

    drawSprites();
    sofia.bounceOff(boundary);
    sofia.bounceOff(boundary2);
    sofia.bounceOff(boundary3);
    sofia.bounceOff(boundary4);

    UpF.visible = false;
    DownF.visible = false;
    LeftF.visible = false;
    RightF.visible = false;
    Arrow.visible = false;

//colliders
//Up.debug = true;
Up.setCollider("rectangle", 13, -30,230, 280);

//left.debug = true;
left.setCollider("rectangle",-30,-13,300,260);

//right.debug = true;
right.setCollider("rectangle",30,-13,300,260);

// Down.debug = true;
Down.setCollider("rectangle", 13, 35,230, 290);

//Controls
    if(mouseDidMove()){
            Arrow.x = scaledMouseX;
            Arrow.y = scaledMouseY;
        }

if(Arrow.collide(RulesButton)){
    console.log("Rules");
    Rules.visible = true;
    RulesBack.visible = true;    
}

if(Arrow.collide(RulesBack)){
    Rules.visible = false;
    RulesBack.visible = false;
}


    if ((keyDown("up") || Arrow.collide(Up)) && Rules.visible == false) {
            sofia.velocityX = 0
            sofia.velocityY = -1
            UpF.visible = true;
            console.log("w");
        }

    if ((keyDown(DOWN_ARROW) || Arrow.collide(Down)) && Rules.visible == false) {
            sofia.velocityX = 0
            sofia.velocityY = 1
            DownF.visible = true;
            console.log("o");
        }
    if ((keyDown("left") || Arrow.collide(left)) && Rules.visible == false) {
            sofia.velocityX = -1
            sofiavelocityY = 0
            LeftF.visible = true;
            console.log("r");
        }
        
    if ((keyDown("right") || Arrow.collide(right)) && Rules.visible == false) {
            sofia.velocityX = 1 
            sofia.velocityY = 0
            RightF.visible = true;
            console.log("k");
        }
console.log(gameState);    


if(gameState == 0){
    //BounceOFF

    restart.visible = false;
    next.visible = false;

    if (sofia.isTouching(mazeGroup)) {
        sofia.destroy();
        createShofia();
        }
        if (sofia.isTouching(trophy)) { 
            gameState = 1;
            sofia.destroy();
            trophy.destroy()   
        }  

    }

    if(gameState == 1){
        restart.visible = true;
        next.visible = true;
        youWonback = createSprite(200,205,400,410);
        youWonback.shapeColor = "white"

        TreeWon = createSprite(200, 250, 20, 20);
        TreeWon.addAnimation("wontree", TreeIMG);
        TreeWon.scale = 1.5;

        Bird = createSprite(200,230, 50,50);
        Bird.addAnimation("youwin", youwinIMG);
        Bird.scale = 0.5

    //     if ((Arrow.isTouching(restart) || keyDown("R") )&& gameState ==1){
    //         //console.log("GM");
    //         youWonback.destroy();
    //         Bird.destroy();
    //         TreeWon.destroy();
    //         gameState = gameState - 1;
    //         restart.visible = false;
    //         setup();
    //         draw();
    // }
    //console.log("GM");
    //mazeGroup.destroy();
    //sofia.destroy();    
    if (Arrow.isTouching(next)){
            //console.log("GM");
            youWonback.destroy();
            Bird.destroy();
            TreeWon.destroy();
            gameState = gameState + 1;
            restart.visible = false;
            setup();
            draw();
        }
    }
    
    if(gameState == 2){
        level2();
        //setup();
        restart.visible = false;
        next.visible = false;

    if (sofia.isTouching(mazeGroup)) {
        sofia.destroy();
        createShofia();
        }
    }

}

function level2() {
   // mazeGroup.destroy();
     maze1 = createSprite(72, 0, 10, 100);
     mazeGroup.add(maze1);
     maze2 = createSprite(0, 72, 100,10);
     mazeGroup.add(maze2);
     maze3 = createSprite(118, 58, 10, 80);
     mazeGroup.add(maze3);
     maze4 = createSprite(45, 110, 95, 10);
     mazeGroup.add(maze4);
     maze5 = createSprite(0, 145,400,10);
     mazeGroup.add(maze5);
     maze6 = createSprite(159, 60, 10, 92);
     mazeGroup.add(maze6);
     maze7 = createSprite(249, 110, 190,10);
     mazeGroup.add(maze7);
     maze8 = createSprite(340, 145,100,10 );
     mazeGroup.add(maze8);
     maze9 = createSprite(200, 212,10,80);
     mazeGroup.add(maze9);
     maze10 = createSprite(125, 256,160,10 );
     mazeGroup.add(maze10);
     maze11 = createSprite(250, 200,10,100);
     mazeGroup.add(maze11);
     maze12 = createSprite(330, 275,90,10);
     mazeGroup.add(maze12);
     maze13 = createSprite(347, 0,10,100);
     mazeGroup.add(maze13);
     maze14 = createSprite(279, 50,142,10);
     mazeGroup.add(maze14);
     maze15= createSprite(250, 254,10,80);
     mazeGroup.add(maze15);
     maze16 = createSprite(155, 294,200,10);
     mazeGroup.add(maze16);
     maze17= createSprite(43, 363,12,71);
     mazeGroup.add(maze17);
     maze23= createSprite(90, 328,12,60);
     mazeGroup.add(maze23);
     maze18 = createSprite(50,215 ,10,75);
     mazeGroup.add(maze18);
     maze19 = createSprite(355, 355,10,95);
     mazeGroup.add(maze19);
     maze20 = createSprite(330, 179,10,77);
     mazeGroup.add(maze20);
     maze21 = createSprite(242, 338,230,11);
     mazeGroup.add(maze21);
     maze22 = createSprite(370, 251,10,40);
     mazeGroup.add(maze22);
     //setup();
}

function windowResized() {
    scaleFactor = min(windowWidth / width, windowHeight / height);
    resizeCanvas(width * scaleFactor, height * scaleFactor);
   
  }