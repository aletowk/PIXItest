PIXI.settings.SPRITE_MAX_TEXTURES = Math.min(PIXI.settings.SPRITE_MAX_TEXTURES , 16);

/* Create and instantiate the renderer */
var renderer = new PIXI.autoDetectRenderer(
    window.innerWidth,
    window.innerHeight,
    {
        "antialias": true,
        "autoResize": true,
        "transparent": false,
        "resolution": 2
    }
);
document.body.appendChild(renderer.view);
 
/* Global variables */
let stage = new PIXI.Container();
let scene = new PIXI.Container();
let player = new Player("Jack",scene);
let circle = new PIXI.Graphics();
let road = new PIXI.Sprite();

/* Setup graphics objects */
PIXI.loader.add("./ressources/sprites/ship.png")
           .add("./ressources/sprites/RoadTile1.png")
           .on("progress",loadImagesProgress)
           .load(setupScene);




 



/* --------------------- */
/* Functions definitions */
/* --------------------- */
function updateScene() 
{
    requestAnimationFrame(updateScene);

    player.update()

    renderer.render(stage);
}

function setupScene()
{
    circle.beginFill(0,0);
    circle.lineStyle(2,0x00AA00,1);
    circle.drawCircle(100,100,20);
    circle.endFill;

    player.setTexture(PIXI.loader.resources["./ressources/sprites/ship.png"].texture);

    road.texture = PIXI.loader.resources["./ressources/sprites/RoadTile1.png"].texture;
    road.interactive = true;
    road.on('click',function(e)
    {
        let form = new PIXI.Graphics();
        form.name = "FormeForRoad"
        road.addChild(form);
        form.beginFill(0x0000FF);
        form.lineStyle(0);
        form.drawCircle(0,0,100);
        form.endFill;
        form.localTransform.tx = road.texture.orig.width/2;
        form.localTransform.ty = road.texture.orig.height/2;
        console.log(road.texture.orig)
    });

    scene.addChild(circle);
    scene.addChild(player);
    scene.addChild(road);
    
    stage.addChild(scene);

    updateScene();
}
function loadImagesProgress(loader)
{
    console.log("Load images : " + loader.progress + "%")
}