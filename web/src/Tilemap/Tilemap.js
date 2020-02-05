class Tilemap extends PIXI.Container
{
	constructor(mapsize,tilesize,parent)
	{
		super();
		this.textureArray = [];
		this.tileArray = [];
		this.size = mapsize;
		this.tilesize = tilesize;
		this.parent = parent
	}
	init(textureArray)
	{
		var x = 0;
		var y = 0;
		var id = 0;
		let str = '';

		console.log("TileMap init...")
		for(var text in textureArray)
		{
			this.textureArray.push(textureArray[text]);
		}
		noise.seed(1234)
		for(var i = 0 ; i  < this.size ; i++)
		{
			let line = [];
			for(var j = 0 ; j < this.size ; j++)
			{
				x = i*this.tilesize;
				y = j*this.tilesize;
				var value = Math.abs(noise.perlin2(x / 200, y / 200))*256;
				str = str.concat(' ',value)
				if(value > 256/4)
					id = 0
				else
					id = 1
				let tmp = new Tile(id,PIXI.loader.resources[textureArray[id]].texture);
				tmp.position.x = x;
				tmp.position.y = y;
				line.push(tmp);
				this.addChild(tmp);
			}
			// console.log(str)
			str = '';
			this.tileArray.push(line);
		}
	}
	printArray()
	{
		var str = ' ';
		for(var i = 0 ; i < this.size ; i++)
		{
			for(var j = 0 ; j < this.size;j++)
			{
				str = str.concat('(',this.tileArray[i][j].position.x,',',this.tileArray[i][j].position.y,') ');
			}
			console.log(str);
			str = "";
		}
	}
}