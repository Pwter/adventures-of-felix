function createCanvas()
{
	// Create the canvas
	this.canvas = document.createElement("canvas");
	this.ctx = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	document.getElementById("wrapper").appendChild(canvas);
		
}

function createBackground()
{
	for (var i=0; i<height/tileheight; i++)
	{
		for (var j=0; j<width/tilewidth; j++)
		{
			var imagesrc;
			if (i==0 || i==height/tileheight-1 || j==0 || j==width/tilewidth-1) 
				imagesrc="img/chipset/wall.png";
			else
				imagesrc="img/chipset/grass.png";
			tile = new Unit(imagesrc,centerx-j*tilewidth-tilewidth,centery-i*tileheight-tileheight,"tile");
			units.push(tile);
			
		}
		
	}
	
}

function Unit(filepath,posX,posY,type)
{
	// Unit image
	var _unitReady = false;
	var _unitImage = new Image();
	var _posX = posX;
	var _posY = posY;
	var _type = type;
	var _direction = "center";
	_unitImage.onload = function () {
		_unitReady = true;
	};
	_unitImage.src = filepath;
	
	this.isReady=function()
	{
		return _unitReady;
		
	}
	
	this.getImage=function()
	{
		return _unitImage;
		
	}
	
	this.getPosX=function()
	{
		return _posX;
		
	}
	
	this.getPosY=function()
	{
		return _posY;
		
	}
	
	this.isType=function(type)
	{
		return _type==type;
	}
	
	this.changePos=function(posX, posY)
	{
		_posX+=posX;
		_posY+=posY;
		
	}
	
	this.setDirection=function(direction)
	{
		_direction=direction;
		
	}
	
}

// Draw everything
function render() 
{	
	for (var i=0; i<units.length; i++)
	{
		var unit=units[i];
		if (unit.isReady())
			ctx.drawImage(unit.getImage(),centerx+unit.getPosX(),centery+unit.getPosY());
		
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	//ctx.fillText("Goblins caught: ", 32, 32);
};



