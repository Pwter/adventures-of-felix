
/*/////////////////////////
My map format:
	Parameters:
	1: number of tiles horizontally
	2: number of tiles vertically
	3: tilewidth
	4: tileheight
	5: array of tile types: [[z-index,src,type] ..]

	after: n. type from array of file types
*/
var maps=[];
maps.push([20,11,32,32,
		
		[[0,"img/chipset/wall.png","wall"],
		[0,"img/chipset/grass.png","tile"],
		],
		
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
		
		]);

maps.push([20,11,32,32,
		
		[[1500,"img/chipset/tree1.png","tile"],
		[1500,"img/chipset/tree2.png","tile"],
		[1500,"img/chipset/tree3.png","tile"],
		[1500,"img/chipset/tree4.png","tile"],
		[100,"img/chipset/tree5.png","wall"],
		[100,"img/chipset/tree6.png","wall"],
		],
		
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,-1,-1,-1,-1,
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,-1,-1,-1,-1,
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,5,-1,-1,-1,-1,
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
		-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
		
		]);

function addMap(layer)
{
	var map=maps[layer];
	var k=5;
	var tilewidth=map[2];
	var tileheight=map[3];
	var centerx=-tilewidth/2*map[0];
	var centery=-tileheight/2*map[1];
	for (var i=0; i < map[1]; i++)
	{
		for (var j=0; j < map[0]; j++)
		{
			if (map[k]!=-1)
			{
				var zindex = map[4][map[k]][0];
				var imagesrc = map[4][map[k]][1];
				var imagetype = map[4][map[k]][2];
				tile = new Unit(imagesrc,centerx+j*tilewidth+tilewidth/2,centery+i*tileheight+tileheight/2,zindex,tilewidth,tileheight,imagetype);
				units.push(tile);
			}
			k++;
			
		}
		
	}
	
}		
