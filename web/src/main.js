PIXI.settings.SPRITE_MAX_TEXTURES = Math.min(PIXI.settings.SPRITE_MAX_TEXTURES , 16);
function loadImagesProgress(loader)
{
    console.log("Load images : " + loader.progress + "%")
}
function setupTextures()
{
	player.setTexture(PIXI.loader.resources["./ressources/sprites/ship.png"].texture);
}

let app = new PIXI.Application({ 
    width: 800,         // default: 800
    height: 600,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  }
);

let player = new Player("Jack");

PIXI.loader.add("./ressources/sprites/ship.png")
           .on("progress",loadImagesProgress)
           .load(setupTextures)

let updatable_elements = [];

updatable_elements.push(player);

app.stage.addChild(player);



document.body.appendChild(app.view);