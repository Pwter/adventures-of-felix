
/*// Map format:
Parameters:
1: number of tiles horizontally
2: number of tiles vertically
3: tilewidth
4: tileheight
5: array of tile types: [[z-index,src,type] ..]

after: n. type from array of file types

*/
var map=[20,11,32,32,
		
		[[0,"img/chipset/wall.png","wall"],
		[0,"img/chipset/grass.png","tile"]],
		
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
		0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
		0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
		0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
		0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
		0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
		0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
		0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
		0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		
		]

function addMap()
{
	var k=5;
	var tilewidth=map[2];
	var tileheight=map[3];
	var centerx=tilewidth/2*map[0];
	var centery=tileheight/2*map[1];
	for (var i=0; i < map[1]; i++)
	{
		for (var j=0; j < map[0]; j++)
		{
			var zindex = map[4][map[k]][0];
			var imagesrc = map[4][map[k]][1];
			var imagetype = map[4][map[k]][2];
			tile = new Unit(imagesrc,centerx-j*tilewidth-tilewidth/2,centery-i*tileheight-tileheight/2,zindex,tilewidth,tileheight,imagetype);
			units.push(tile);
			k++;
			
		}
		
	}
	
}		
	/*	
function addMap()
{
	for (var i=0; i<height/tileheight; i++)
	{
		for (var j=0; j<width/tilewidth; j++)
		{
			var imagesrc;
			var imagetype;
			if (i==0 || i==height/tileheight-1 || j==0 || j==width/tilewidth-1) 
			{
				imagesrc="img/chipset/wall.png";
				imagetype="wall";
			}
			else
			{
				imagesrc="img/chipset/grass.png";
				imagetype="tile";
			}
			tile = new Unit(imagesrc,centerx-j*tilewidth-tilewidth/2,centery-i*tileheight-tileheight/2,0,32,32,imagetype);
			units.push(tile);
			
		}
		
	}
	
	
}

*/