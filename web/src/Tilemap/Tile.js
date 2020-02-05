class Tile extends PIXI.Sprite
{
	constructor(id,texture)
	{
		super();
		this.id = id;
		this.texture = texture;
		// this.interactive = true;
		// this.on("click",function(e)
		// {
		// 	console.log("Tile position : "+ this.position.x + "," + this.position.y);
		// });
	}
}