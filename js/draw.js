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
			tile = new Unit(imagesrc,centerx-j*tilewidth-tilewidth,centery-i*tileheight-tileheight,32,32,"tile");
			units.push(tile);
			
		}
		
	}
	
}

function Unit(filepath,posX,posY,width,height,type)
{
	var _unitReady = false;
	var _unitImage = new Image();
	var _posX = posX;
	var _posY = posY;
	var _width = width;
	var _height = height;
	var _imageCropCoordinates = [];
	var _direction = "center";
	
	var _type = type;
	
	_unitImage.onload = function () 
	{
		_imageCropCoordinates=[0,0,_width,_height];
		_unitReady = true;
	};
	_unitImage.src = filepath;
	
	this.isReady=function()
	{
		return _unitReady;
		
	}
	
	this.getPosX=function()
	{
		return _posX;
		
	}
	
	this.getPosY=function()
	{
		return _posY;
		
	}
	
	this.getImage=function()
	{
		return _unitImage;
		
	}
	
	this.getImageCropCoordinates=function()
	{
		return _imageCropCoordinates;
		
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
		switch(direction)
		{
			case "up":
				_imageCropCoordinates=[_width,0,_width,_height];
				break;
			case "right":
				_imageCropCoordinates=[_width,_height,_width,_height];
				break;
			case "down":
				_imageCropCoordinates=[_width,_height*2,_width,_height];
				break;
			case "left":
				_imageCropCoordinates=[_width,_height*3,_width,_height];
				break;

		};
	}
	
	this.inMove=function()
	{
		switch(Math.floor(gameframe/10))
		{
			case 1:
				_imageCropCoordinates[0]=0;
				break;
			case 2:
				_imageCropCoordinates[0]=_width;
				break;
			case 3:
				_imageCropCoordinates[0]=_width*2;
				break;
			case 4: 
				_imageCropCoordinates[0]=_width;
				break;
			
		};

	}
	
}

// Draw everything
function render() 
{	
	for (var i=0; i<units.length; i++)
	{
		var unit=units[i];
		if (unit.isReady())
		{
			var sx = unit.getImageCropCoordinates()[0]; // cropping coordinates for Image
			var sy = unit.getImageCropCoordinates()[1]; // sx, sy: x,y coordinates of Image cropping start
			var sw = unit.getImageCropCoordinates()[2]; // sw, sh: width and height of cropped Image
			var sh = unit.getImageCropCoordinates()[3];
			ctx.drawImage(unit.getImage(),sx,sy,sw,sh,centerx+unit.getPosX(),centery+unit.getPosY(),sw,sh);

		}
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText(debuginfo, 32, 32);
};



