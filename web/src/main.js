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
let uiLayer = new PIXI.Container();
let map = new Tilemap(100,64,stage);

let player = new Player("Jack",stage,uiLayer,map);

let updatableList = [];


setupScene();


updateScene();
 



/* --------------------- */
/* Functions definitions */
/* --------------------- */
function updateScene() 
{
    requestAnimationFrame(updateScene);
    
    for(var elem in updatableList)
    {
        updatableList[elem].update();
    }
    // stage.position.set(renderer.screen.width/2,renderer.screen.height/2);

    renderer.render(stage);
}





function setupScene()
{
    /* Setup graphics objects */
    PIXI.loader.add("./ressources/sprites/ship.png")
               .add("./ressources/sprites/Assets/Units/Sword_60x60.png")
               .add("./ressources/sprites/Tiles/GroundTile_64x64.png")
               .add("./ressources/sprites/Tiles/GrassTile_64x64.png")
               .add("./ressources/sprites/Tiles/GridTile_Grey_64x64.png")
               .add("./ressources/sprites/Assets/Trees/Tree1_60x60.png")
               .on("progress",loadImagesProgress)
               .load(setupAfterLoad);
}
function setupAfterLoad()
{
    

    map.init(["./ressources/sprites/Tiles/GroundTile_64x64.png",
              "./ressources/sprites/Tiles/GrassTile_64x64.png" ]);
    // map.printArray();

    player.init(PIXI.loader.resources["./ressources/sprites/Assets/Units/Sword_60x60.png"].texture,map);

    /* Setup object in scene (append child, set positions...) */
    stage.addChild(map);
    stage.addChild(player);
    stage.addChild(uiLayer);

    updatableList.push(player);

    document.addEventListener("click", function()
    {
        player.move(event);
    });
}
function loadImagesProgress(loader)
{
    console.log("Load images : " + loader.progress + "%")
}