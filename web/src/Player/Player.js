

class Player extends PIXI.Sprite
{
	constructor(name,parent,uiLayer,map)
	{
		super();
		this.uiLayer = uiLayer;
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
		this.uiLayer.addChild(this.selectionCircle);
		this.uiLayer.addChild(this.targetCircle);

		this.aStarObject = new AStar(map.tileArray);
	}
	init(texture,map)
	{
		this.texture = texture;
		/* Selection Circle */
		this.selectionCircle.beginFill(0,0);
		this.selectionCircle.lineStyle(2,0xAA0000,1);
		this.selectionCircle.drawCircle(0,0,this.texture.width);
		this.selectionCircle.endFill();
		this.selectionCircle.visible = false;
		/* Target Position Circle */
		this.targetCircle.beginFill(0xFF0000,1);
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

		this.map = map;
		this.position.x = this.map.tilesize/2;
		this.position.y = this.map.tilesize/2;
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
		// Old
		// if(this.movingFlag)
		// {
		// 	let mapTile_X = Math.floor(event.clientX / this.map.tilesize);
		// 	let mapTile_Y = Math.floor(event.clientY / this.map.tilesize);
		// 	console.log("Tile ID : "+mapTile_X+" | "+mapTile_Y);
		// 	/* Make Target Circle Visible */
		// 	this.targetCircle.x = (mapTile_X * this.map.tilesize) + (this.map.tilesize/2);
		// 	this.targetCircle.y = (mapTile_Y * this.map.tilesize) + (this.map.tilesize/2);
		// 	this.targetCircle.visible = true;
		// 	this.selected = true;
		// 	this.movingFlag = false;
		// 	this.movingFlag_Go = true;
		// }
		// 
		
		// New implementation, using A* algo
		if(this.movingFlag)
		{
			let mapTile_X = Math.floor(event.clientX / this.map.tilesize);
			let mapTile_Y = Math.floor(event.clientY / this.map.tilesize);
			console.log("Target Tile ID : "+mapTile_X+" | "+mapTile_Y);
			// this.map.tileArray[mapTile_X][mapTile_Y].inPathGraphics.visible = true;
			var playerPosInIndex = [Math.floor(this.position.x/this.map.size),
									Math.floor(this.position.y/this.map.size)];
			var pathToFollow = this.aStarObject.search(this.map.tileArray,playerPosInIndex,[mapTile_X,mapTile_Y]);
			console.log(pathToFollow);
		}
	}
}
