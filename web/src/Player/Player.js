

class Player extends PIXI.Sprite
{
	constructor(name,parent)
	{
		super();
		this.name = name;
		this.interactive = true;
		this.selected = false;
		this.selectionCircle = new PIXI.Graphics();
		this.selectionCircle.name = "SelectionCircleID";
		this.targetCircle = new PIXI.Graphics();
		this.targetCircle.name = "TargetCircleID";
		this.targetCircle.player = this;
		this.movingFlag = false;

		this.anchor.x = 0.5;
		this.anchor.y = 0.5;

		this.setClickFunction();
		this.setParent(parent);
		this.parent.addChild(this.selectionCircle);
		this.parent.addChild(this.targetCircle);
	}
	init(texture)
	{
		this.texture = texture;
		/* Selection Circle */
		this.selectionCircle.beginFill(0,0);
		this.selectionCircle.lineStyle(2,0xAA0000,1);
		this.selectionCircle.drawCircle(0,0,this.texture.width);
		this.selectionCircle.endFill();
		this.selectionCircle.visible = false;
		/* Target Position Circle */
		this.targetCircle.beginFill(0xAAFF00,0.1);
		this.targetCircle.lineStyle(0);
		this.targetCircle.drawCircle(0,0,20);
		this.targetCircle.endFill();
		this.targetCircle.interactive = true;

		this.targetCircle.on('click',function(e)
							{
								if(this.player.movingFlag_Go)
								{
									this.player.x = this.x;
									this.player.y = this.y;
									this.player.targetCircle.visible = false;
									this.player.movingFlag = false;
									this.player.movingFlag_Go = false;
									this.player.selected = false;
								}	
							})
		this.targetCircle.visible = false;
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
			this.selectionCircle.x = this.x;
			this.selectionCircle.y = this.y;
	 		this.selectionCircle.visible = true;
	 		this.movingFlag = true;
			// Movement possibility

			// show informations
		}
		else
		{
			if(this.selectionCircle.visible)
			{
				this.selectionCircle.visible = false;
			}
		}
	}
	move(event)
	{
		if(this.movingFlag)
		{
			/* Make Target Circle Visible */
			this.targetCircle.x = event.clientX;
			this.targetCircle.y = event.clientY;
			this.targetCircle.visible = true;
			this.selected = true;
			this.movingFlag = false;
			this.movingFlag_Go = true;
		}
	}
}
