PIXI.settings.SPRITE_MAX_TEXTURES = Math.min(PIXI.settings.SPRITE_MAX_TEXTURES , 16);

let app = new PIXI.Application({ 
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  }
);


document.body.appendChild(app.view);


PIXI.loader.add("./ressources/sprites/ship.png")
		   .on("progress",loadImagesProgress)
		   .load(setup)

function loadImagesProgress(loader)
{
	console.log("Load images : " + loader.progress + "%")
}

function setup()
{
	let ship_sprite = new PIXI.Sprite(PIXI.loader.resources["./ressources/sprites/ship.png"].texture);
	app.stage.addChild(ship_sprite);
}




