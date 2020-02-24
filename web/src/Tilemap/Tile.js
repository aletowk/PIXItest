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
		this.inPathGraphics = new PIXI.Graphics();
		
		var rand = Math.random();
		if(rand > 0.1)
			this.assetSprite.texture = null;
		else
			this.assetSprite.texture = PIXI.loader.resources["./ressources/sprites/Assets/Trees/Tree1_60x60.png"].texture;



		this.inPathGraphics.beginFill(0,0);
		this.inPathGraphics.lineStyle(2,0xFFCE5D,1);
		this.inPathGraphics.drawCircle(this.texture.width/2,this.texture.width/2,this.texture.width/4);
		this.inPathGraphics.endFill();

		this.inPathGraphics.visible = false;

		this.addChild(this.inPathGraphics);
		this.addChild(this.assetSprite);
		this.addChild(this.gridSprite);
	}
}