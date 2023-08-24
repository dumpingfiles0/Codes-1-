var maze1,maze2,maze3,maze4,maze5,maze6,maze7;
var maze8,maze9,maze10,maze11,maze12,maze13,maze14;
var maze15,maze16,maze17,maze18,maze19,maze20;
var trophy,sofia;
var trophyIMG,sofiaAnim;
var boundary, canvas;

function preload(){
    sofiaAnim = loadAnimation("assets/bird1.png","assets/bird2.png","assets/brd3.png");
    trophyIMG =loadImage("assets/tree-removebg-preview.png_2.png")

}

function setup(){
    
canvas = createCanvas(displayWidth*2.5, displayHeight*2.5);


    //mazes
    maze1 = createSprite(72, 0,10, 100);
    maze1.x = displayWidth/2.5;
    maze2 = createSprite(0, 72, 100,10);
    maze2.y = displayHeight/2.5;
    maze3 = createSprite(118, 0, 10, 210);
    maze3.x = (maze1.x + displayWidth/2.5);
    // maze4 = createSprite(77, 110, 95, 10);
    // maze5 = createSprite(0, 145,400,10);
    // maze6 = createSprite(159, 0, 10, 210);
    // maze7 = createSprite(249, 110, 190,10);
    // maze8 = createSprite(295, 145,100,10 );
    // maze9 = createSprite(200, 200,10,100);
    // maze10 = createSprite(125, 256,160,10 );
    // maze11 = createSprite(250, 200,10,100);
    // maze12 = createSprite(305, 250,118,10);
    // maze13 = createSprite(347, 0,10,100);
    // maze14 = createSprite(279, 50,142,10);
    // maze15= createSprite(250, 254,10,80);
    // maze16 = createSprite(155, 294,200,10);
    // maze17= createSprite(50, 345,12,112);
    // maze18 = createSprite(50,215 ,10,75);
    // maze19 = createSprite(355, 366,10,70);
    // maze20 = createSprite(350, 179,10,77);
    // maze21 = createSprite(242, 338,230,11);
    // maze22 = createSprite(359, 271,10,40);

    // //trophy
    // trophy = createSprite(300, 380,50,50);
    // trophy.addAnimation("Tree", trophyIMG);
    // trophy.scale = 0.3;

    //Sofia
    sofia = createSprite(10, 10,11,11);
    sofia.x = displayWidth/20;
    sofia.y = displayHeight/30
    sofia.addAnimation("flying Sofia", sofiaAnim);
    sofia.scale = 0.2;

}

function draw(){
    background(rgb(223,223,180));

    maze1.height = displayHeight/1.8;
    maze1.width = displayWidth/20;

    maze2.height = displayHeight/30;
    maze2.width = displayWidth/1.5;

    console.log(maze1.height);
    drawSprites();
}