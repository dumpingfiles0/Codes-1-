var screen;
var screenout1, screenout1_img ;
var screenout2, screenout2_img ;

var toolbar
var toolheader;

var useObj, useObjheader, objHeadImg;

var object, object2;
var boder1, boder2, boder3, boder4;
var text;
var obj_close, obj_closeImg;
var size, sizeImg;
var size_plus, size_plusImg;

function preload() {
  screenout1_img = loadImage("images/untitled.png")
  screenout2_img = loadImage("images/untitled2.png")
  objHeadImg = loadImage("images/objHeader.png")
  obj_closeImg = loadImage("images/obj_delete.png")
  sizeImg = loadImage("images/size.png")
  size_plusImg = loadImage("images/size_plus.png")
}

function setup() { 
canvas = createCanvas(displayWidth + displayWidth/2 , displayHeight + displayHeight/2); 


 screen = createSprite(displayWidth-300,displayHeight-200,360,550) 
 screen.shapeColor = color(195,195,195);


 screenout1 = createSprite(screen.x, screen.y +300, 360,40)
 screenout1.addImage(screenout1_img) 

 screenout2 = createSprite(screen.x, screen.y -300, 360,40)
 screenout2.addImage(screenout2_img) 

 toolbar = createSprite(displayWidth - displayWidth + 300,displayHeight - displayHeight/2 , 600, displayHeight+ displayHeight)
 toolbar.shapeColor = color(20,200,100)

 toolheader = createSprite(displayWidth - displayWidth + 300,displayHeight - displayHeight, 600, 80)

 object = createSprite(100, 200, 200, 200)
 object.shapeColor = color(20,200,250)

 object2 = createSprite(screen.x, 500 ,200,200)
 object2.visible = true;

boder = createSprite(screen.x, 265, 362, 10)
boder.visible = false;

boder3 = createSprite(displayWidth - 480, displayHeight - 200, 10, 550);
boder3.visible = false;

boder4 = createSprite(displayWidth - 120, displayHeight - 200, 10, 550);
boder4.visible = false;

boder2 = createSprite( screen.x, screen.y + 245, 360, 10 )
boder2.visible = false;
 
useObj = createSprite(displayWidth + 400,displayHeight - displayHeight/2 , 480, displayHeight+ displayHeight)
useObj.shapeColor = color(20,200,100)  
useObj.visible = false;    
useObjheader = createSprite(displayWidth + 135 + 300,25, 500, 80);
useObjheader.addImage(objHeadImg);
useObjheader.visible = false;
obj_close = createSprite(displayWidth + 275, screen.y + 245, 100, 60);
obj_close.addImage(obj_closeImg);
obj_close.visible = false;
size = createSprite(displayWidth + 275, screen.y - 245, 100, 60);
size.visible = false;
size.addImage(sizeImg);

size_plus = createSprite(displayWidth + 225, screen.y - 245, 100, 60);
size_plus.visible = true;
size_plus.addImage(size_plusImg);


}

function draw(){
  background(255)

  if(mousePressedOver(obj_close) && obj_close.visible === true){
           object2.x = 100
           object2.y = 200
           object.x = object2.x 
           object.y = object2.y
           useObj.visible = false;
           useObjheader.visible = false;
           obj_close.visible = false;
           console.log("delete");
    }
if(mousePressedOver(object2)){
  object2.x = World.mouseX
  object2.y = World.mouseY
if(object2.y > boder.y && object2.y < boder2.y){
        if(mousePressedOver(object2)){
            object2.x = World.mouseX
          object2.y = World.mouseY
          object.x = object2.x
            object.y = object2.y
          }

    if(object2.isTouching(boder)){
      console.log("no")
      object2.y = boder.y + 100
      object.y = boder.y + 100
    }     

    
if(object2.isTouching(boder2)){
  console.log("no")
      object2.y = boder2.y - 100
      object.y = boder2.y - 100     
}

if (object2.isTouching(boder3)){
    
      object2.x = boder3.x + 100
      object.x = boder3.x + 100 
}

if (object2.isTouching(boder4)){
    
      object2.x = boder4.x - 100
      object.x = boder4.x - 100 
}
//I am talking to 
}
}

   if(mousePressedOver(object)){
     object.x = World.mouseX
     object.y = World.mouseY
     
     
      if(object.x >= displayWidth - displayWidth + 500){
        object.destroy();
        object2.shapeColor = color(20,250,250)
        object2.visible = true;
        object.x = object2.x
        object.y = object2.y
        useObj.visible = true;
        useObjheader.visible = true;
        obj_close.visible = true;
        size.visible = true;
       }
      }
      

  drawSprites();

  fill(0)
  textSize(40)
  text("Toolbar", 35, 35);
  text("Object", object.x - 50,object.y)

}