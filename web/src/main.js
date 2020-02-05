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
let player = new Player("Jack",stage);
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

    renderer.render(stage);
}
function setupScene()
{
    /* Setup graphics objects */
    PIXI.loader.add("./ressources/sprites/ship.png")
               .on("progress",loadImagesProgress)
               .load(setupAfterLoad);
}
function setupAfterLoad()
{
    player.init(PIXI.loader.resources["./ressources/sprites/ship.png"].texture);



    /* Setup object in scene (append child, set positions...) */
    stage.addChild(player);
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