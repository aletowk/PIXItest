class Tile extends PIXI.Sprite
{
	constructor(id,texture)
	{
		super();
		this.id = id;
		this.texture = texture;
		this.gridSprite = new PIXI.Sprite();
		this.gridSprite.texture = PIXI.loader.resources["./ressources/sprites/Tiles/GridTile_Grey_64x64.png"].texture;
		this.assetSprite = new PIXI.Sprite();
		
		
		var rand = Math.random();
		if(rand > 0.1)
			this.assetSprite.texture = null;
		else
			this.assetSprite.texture = PIXI.loader.resources["./ressources/sprites/Trees/Tree1_60x60.png"].texture;

		this.addChild(this.assetSprite);
		this.addChild(this.gridSprite);
		// this.interactive = true;
		// this.on("click",function(e)
		// {
		// 	console.log("Tile position : "+ this.position.x + "," + this.position.y);
		// });
	}
}