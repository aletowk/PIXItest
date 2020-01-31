

PIXI.settings.SPRITE_MAX_TEXTURES = Math.min(PIXI.settings.SPRITE_MAX_TEXTURES , 16);
function loadImagesProgress(loader)
{
    console.log("Load images : " + loader.progress + "%")
}



let app = new PIXI.Application({ 
    width: 800,         // default: 800
    height: 600,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  }
);


PIXI.loader.add("./ressources/sprites/ship.png")
           .on("progress",loadImagesProgress)
           


let player = new Player("Jack");
player.setTexture(PIXI.loader.resources["./ressources/sprites/ship.png"].texture);
console.log(player)


app.stage.addChild(player);

// function setup()
// {
//     // ship_sprite.texture = PIXI.loader.resources["./ressources/sprites/ship.png"].texture;
//     // ship_sprite.interactive = true;
//     // ship_sprite.on('click',function(e){
//     //   console.log('Clicked')
//     // });
//     // 
//     player.setTexture(PIXI.loader.resources["./ressources/sprites/ship.png"].texture)
//     app.stage.addChild(player);

//     console.log(player)
// }





document.body.appendChild(app.view);