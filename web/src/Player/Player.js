

class Player extends PIXI.Sprite
{
	constructor(name)
	{
		super();
		this.name = name;
		this.interactive = true;
		this.setClick();
	}
	setTexture(texture)
	{
		this.texture = texture;
	}
	setClick()
	{
		this.on('click',function(e){
			console.log("Clicked");
		});
	}
}
