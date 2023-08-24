var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["286d3b44-f185-4eff-8a84-469417f6f8c0","b7b75bb2-0bea-4040-8752-055623914a3f","191857bf-9cb9-432b-91c3-f1d88e660276","d5efa458-b646-416d-9eae-d322da1d951f"],"propsByKey":{"286d3b44-f185-4eff-8a84-469417f6f8c0":{"name":"bird1.png","sourceUrl":null,"frameSize":{"x":294,"y":286},"frameCount":3,"looping":true,"frameDelay":12,"version":"eCAlAy2O2oT2MEoY78ZXcuI1Ancve1Mi","loadedFromSource":true,"saved":true,"sourceSize":{"x":588,"y":572},"rootRelativePath":"assets/286d3b44-f185-4eff-8a84-469417f6f8c0.png"},"b7b75bb2-0bea-4040-8752-055623914a3f":{"name":"tree-removebg-preview.png_1","sourceUrl":null,"frameSize":{"x":298,"y":222},"frameCount":1,"looping":true,"frameDelay":12,"version":"KYm52fG9fLBlQ03wTICqFUH5wh54dixk","loadedFromSource":true,"saved":true,"sourceSize":{"x":298,"y":222},"rootRelativePath":"assets/b7b75bb2-0bea-4040-8752-055623914a3f.png"},"191857bf-9cb9-432b-91c3-f1d88e660276":{"name":"bird2.png_1","sourceUrl":null,"frameSize":{"x":578,"y":505},"frameCount":2,"looping":true,"frameDelay":12,"version":"1cxaCeldSO0NY.N8KSYLcL3L9hCcOZRe","loadedFromSource":true,"saved":true,"sourceSize":{"x":578,"y":1010},"rootRelativePath":"assets/191857bf-9cb9-432b-91c3-f1d88e660276.png"},"d5efa458-b646-416d-9eae-d322da1d951f":{"name":"tree-removebg-preview.png_2","sourceUrl":null,"frameSize":{"x":100,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"dMUN2CNeePYH4nZ0vhl6BVbur4dUJVQh","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/d5efa458-b646-416d-9eae-d322da1d951f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var maze1 = createSprite(72, 0, 10, 100);
var maze2 = createSprite(0, 72, 100,10);
var maze3 = createSprite(118, 0, 10, 210);
var maze4 = createSprite(77, 110, 95, 10);
var maze5 = createSprite(0, 145,400,10);
var maze6 = createSprite(159, 0, 10, 210);
var maze7 = createSprite(249, 110, 190,10);
var maze8 = createSprite(295, 145,100,10 );
var maze9 = createSprite(200, 200,10,100);
var maze10 = createSprite(125, 256,160,10 );
var maze11 = createSprite(250, 200,10,100);
var maze12 = createSprite(305, 250,118,10);
var maze13 = createSprite(347, 0,10,100);
var maze14 = createSprite(279, 50,142,10);
var maze15= createSprite(250, 254,10,80);
var maze16 = createSprite(155, 294,200,10);
var maze17= createSprite(50, 345,12,112);
var maze18 = createSprite(50,215 ,10,75);
var maze19 = createSprite(355, 366,10,70);
var maze20 = createSprite(350, 179,10,77);
var maze21 = createSprite(242, 338,230,11);
var maze22 = createSprite(359, 271,10,40);
var trophy = createSprite(300, 380,50,50);


var sofia = createSprite(10, 10,11,11);

sofia.shapeColor = (rgb(255,155,10));






function draw() {
background(rgb(223,223,180));
sofia.setAnimation("bird1.png");
sofia.scale = 0.05;
trophy.setAnimation("tree-removebg-preview.png_2");
trophy.scale = 0.3;
drawSprites();     
createEdgeSprites();
sofia.bounceOff(edges);

// maze1.shapeColor = "white";
// sofia.x = World.mouseX;
// sofia.y  = World.mouseY;

if (keyDown("up")) {
sofia.velocityX = 0
  sofia.velocityY = -1
}
if (keyDown(DOWN_ARROW)) {
  sofia.velocityX = 0
  sofia.velocityY = 1
  
}
if (keyDown("left")) {
  sofia.velocityX = -1
  sofiavelocityY = 0
  
  }
if (keyDown("right")) {
  sofia.velocityX = 1 
  sofia.velocityY = 0
}
if (maze1.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}

if (maze2.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}
if (maze3.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  
if (maze3.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  
  
if (maze4.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  
if (maze5.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
} 
if (maze6.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  

if (maze7.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
} 
  
if (maze8.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  
if (maze9.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
} 
if (maze10.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  
if (maze11.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
} 
if (maze12.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}

if (maze13.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}
if (maze14.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  
if (maze15.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  
  
if (maze16.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  
if (maze17.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
} 
if (maze18.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  

if (maze19.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
} 
  
if (maze20.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
}  
if (maze21.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = (rgb(255,155,10))
} 
if (maze22.displace(sofia)) {
sofia.destroy();
sofia = createSprite(10, 10, 10, 10);

sofia.shapeColor = rgb(255,155,10)}
  
if (trophy.displace(sofia)) { 
sofia.destroy();
var youWon = createSprite(200,200,400,400);
youWon.shapeColor = "white"
var TreeWon = createSprite(200, 250, 20, 20);
TreeWon.setAnimation("tree-removebg-preview.png_1");
TreeWon.scale = 1.5;
var Bird = createSprite(200,80, 50,50);
Bird.setAnimation("bird2.png_1");
Bird.scale = 0.5

}
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
