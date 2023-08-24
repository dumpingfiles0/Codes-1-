var box, boxImg;
var getstarted, getstartedimg;
var gameState = 1;
var Text, textImg;

var male, maleImg, female, femaleImg;
var back1, back1Img;
var genderText, genderImg

//male ag grp
var agText, agTextImg;
var age1, ag2, ag3, ag4, ag5, ag6, ag7, ag8;
var agImg, ag2Img, ag3Img, ag4Img, ag5Img, ag6Img, ag7Img, ag8Img;

//female ag grp
var fagText;
var fage1, fag2, fag3, fag4, fag5, fag6, fag7, fag8;


function preload() {
  getstartedimg = loadImage("images/started.png");
  boxImg = loadImage("images/giftbox.png");
  textImg = loadImage("images/suggestinggift.png");
  maleImg = loadImage("images/male.png");
  femaleImg = loadImage("images/female.png");
  genderImg = loadImage("images/genderselect.png");
  agTextImg = loadImage("images/aggrptext.png")
 agImg = loadImage("images/mag1.png");
 ag2Img = loadImage("images/mag2.png");
 ag3Img = loadImage("images/mag3.png");
 ag4Img = loadImage("images/mag4.png");
 ag5Img = loadImage("images/mag5.png");
 ag6Img = loadImage("images/mag6.png");
 ag7Img = loadImage("images/mag7.png");
 ag8Img = loadImage("images/mag8.png");
 back1Img = loadImage("images/back1.png")
 }

function setup(){
  canvas = createCanvas(displayWidth *3, displayHeight *3); 
 
 if(gameState === 1){ 
  getstarted = createSprite(displayWidth + 180, displayHeight*2,500,100)
  getstarted.addImage(getstartedimg)
  getstarted.scale = 2

  box = createSprite(displayWidth + 180, 0, 500, 500);
  box.addImage(boxImg)
  box.velocityY = 23

  Text = createSprite(displayWidth + 180, displayHeight, 10 ,10);
  Text.addImage(textImg);
  Text.scale = 2

  camera.position.x = getstarted.x;
  camera.position.y = displayHeight;  
 }

// gamestate 2 elements......

  back1 = createSprite(displayWidth + 180, displayHeight + 800, 400,150);
  back1.visible = false;
  back1.scale = 1.3;
  back1.addImage(back1Img)
  
  male = createSprite(displayWidth + 180, displayHeight - 200, 400, 200);
  male.addImage(maleImg);
  male.scale = 2;
  male.visible = false;

  female = createSprite(displayWidth + 180, displayHeight + 100, 400, 200);
  female.addImage(femaleImg);
  female.scale = 2;
  female.visible = false;

  genderText = createSprite(displayWidth + 450, displayHeight - 400, 10 ,10);
  genderText.addImage(genderImg);
  genderText.scale = 2;
  genderText.visible = false;

//gamestate 10 elements.....
agText = createSprite(displayWidth + 390, displayHeight - 800, 400,10);
agText.addImage(agTextImg)
agText.scale = 1.8;
agText.visible = false;

age = createSprite(displayWidth + 180, displayHeight - 800, 400, 100)
age.visible = false;
age.scale = 1.5
age.addImage(agImg)

ag2 = createSprite(displayWidth + 180, displayHeight - 600, 400,100)
ag2.visible = false;
ag2.addImage(ag2Img);
ag2.scale = 1.5;

ag3 = createSprite(displayWidth + 180, displayHeight - 400, 400,100)
ag3.visible = false;
ag3.addImage(ag3Img);
ag3.scale = 1.5;

ag4 = createSprite(displayWidth + 180, displayHeight - 200, 400,100)
ag4.visible = false;
ag4.addImage(ag4Img);
ag4.scale = 1.5;

ag5 = createSprite(displayWidth + 180, displayHeight , 400,100)
ag5.visible = false;
ag5.addImage(ag5Img);
ag5.scale = 1.5;

ag6 = createSprite(displayWidth + 180, displayHeight + 200, 400,100)
ag6.visible = false;
ag6.addImage(ag6Img);
ag6.scale = 1.5;

ag7 = createSprite(displayWidth + 180, displayHeight + 400, 400,100)
ag7.visible = false;
ag7.addImage(ag7Img);
ag7.scale = 1.5;

ag8 = createSprite(displayWidth + 180, displayHeight + 600, 400,100)
ag8.visible = false;
ag8.addImage(ag8Img);
ag8.scale = 1.5;

////////gamestate 20 elements.....

fagText = createSprite(displayWidth + 390, displayHeight - 800, 400,10);
fagText.addImage(agTextImg)
fagText.scale = 1.8;
fagText.visible = false;

fage = createSprite(displayWidth + 180, displayHeight - 800, 400, 100)
fage.visible = false;
fage.scale = 1.5
fage.addImage(agImg)

fag2 = createSprite(displayWidth + 180, displayHeight - 600, 400,100)
fag2.visible = false;
fag2.addImage(ag2Img);
fag2.scale = 1.5;

fag3 = createSprite(displayWidth + 180, displayHeight - 400, 400,100)
fag3.visible = false;
fag3.addImage(ag3Img);
fag3.scale = 1.5;

fag4 = createSprite(displayWidth + 180, displayHeight - 200, 400,100)
fag4.visible = false;
fag4.addImage(ag4Img);
fag4.scale = 1.5;

fag5 = createSprite(displayWidth + 180, displayHeight , 400,100)
fag5.visible = false;
fag5.addImage(ag5Img);
fag5.scale = 1.5;

fag6 = createSprite(displayWidth + 180, displayHeight + 200, 400,100)
fag6.visible = false;
fag6.addImage(ag6Img);
fag6.scale = 1.5;

fag7 = createSprite(displayWidth + 180, displayHeight + 400, 400,100)
fag7.visible = false;
fag7.addImage(ag7Img);
fag7.scale = 1.5;

fag8 = createSprite(displayWidth + 180, displayHeight + 600, 400,100)
fag8.visible = false;
fag8.addImage(ag8Img);
fag8.scale = 1.5;

}

function draw(){
  background(90, 248, 169);

if(mouseX > 1685 && mouseX < 2168 && mouseY > 1730 && mouseY < 1886 && mousePressedOver(getstarted)){
   //console.log("hey")
   gameState = 2
}

console.log(gameState)

if(mouseX > 1762 && mouseX < 2085 && mouseY > 1830 && mouseY < 1937 && gameState === 10 && mousePressedOver(back1)){
  gameState = 2
}

if(mouseX > 1762 && mouseX < 2085 && mouseY > 1830 && mouseY < 1937 && gameState === 20 && mousePressedOver(back1)){
  gameState = 2
}

  if(gameState === 2){
  Text.remove();
  getstarted.remove();
  box.remove();

  male.visible = true;
  female.visible = true;
  genderText.visible = true;

  camera.position.x = male.x;
  camera.position.y = displayHeight;
  }

if(mouseY > 806 && mouseY < 961 && mouseX > 1678 && mouseY < 2173 && gameState ===2 && mousePressedOver(male)){
    gameState = 10
    console.log("no")
    console.log(gameState)
  }


if(mouseX > 1677 && mouseX < 2168 && mouseY > 1105 && mouseY < 1265 && gameState ===2 && mousePressedOver(female)){
    gameState = 20
    console.log(gameState)
  }

if(gameState === 10){
  male.visible = false;
  female.visible = false;
  genderText.visible = false;
  console.log("I am 10")

  back1.visible = true;

  agText.visible = true;
  age.visible = true;
  ag2.visible = true;
  ag3.visible = true;
  ag4.visible = true;
  ag5.visible = true;
  ag6.visible = true;
  ag7.visible = true;
  ag8.visible = true;
}

if(gameState !== 10 && gameState!== 20){
  back1.visible = false;

  agText.visible = false;
  age.visible = false;
  ag2.visible = false;
  ag3.visible = false;
  ag4.visible = false;
  ag5.visible = false;
  ag6.visible = false;
  ag7.visible = false;
  ag8.visible = false;
}

if(gameState === 20){
  male.visible = false;
  female.visible = false;
  genderText.visible = false;

  back1.visible = true;

  fagText.visible = true;
  fage.visible = true;
  fag2.visible = true;
  fag3.visible = true;
  fag4.visible = true;
  fag5.visible = true;
  fag6.visible = true;
  fag7.visible = true;
  fag8.visible = true;
}

if(gameState !== 20 && gameState !== 10){
  back1.visible = false;

  fagText.visible = false;
  fage.visible = false;
  fag2.visible = false;
  fag3.visible = false;
  fag4.visible = false;
  fag5.visible = false;
  fag6.visible = false;
  fag7.visible = false;
  fag8.visible = false;
}



  drawSprites();
}