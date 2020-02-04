

class Player extends PIXI.Sprite
{
	constructor(name)
	{
		super();
		this.name = name;
		this.interactive = true;
		this.setClickFunction();
		this.selected = false
	}
	setTexture(texture)
	{
		this.texture = texture;
	}
	setClickFunction(fctArg)
	{
		this.on('click',function(e)
			{
				this.selected = !this.selected
				console.log("Clicked on Player : selected = "+this.selected);
			});
	}

	update()
	{
		if(this.selected)
		{
			// Add circle around sprite
			
			// Movement possibility

			// show informations
		}

	}
}
