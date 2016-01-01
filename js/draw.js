function createCanvas()
{
	// Create the canvas
	this.canvas = document.createElement("canvas");
	this.ctx = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	document.getElementById("wrapper").appendChild(canvas);
		
}

function Unit(filepath,posX,posY,posZ,width,height,type)
{
	var _unitReady = false;
	var _unitImage = new Image();
	var _posX = posX;
	var _posY = posY;
	var _posZ = posZ;
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
	
	this.getWidth=function()
	{
		return _width;
		
	}
	
	this.getHeight=function()
	{
		return _height;
		
	}
	
	this.getPosX=function()
	{
		return _posX;
		
	}
	
	this.getPosY=function()
	{
		return _posY;
		
	}
	
	this.getPosZ=function()
	{
		return _posZ;
		
	}
	
	this.setPosZ=function(posZ)
	{
		_posZ=posZ;
		
	}
	
	this.getImage=function()
	{
		return _unitImage;
		
	}
	
	this.getImageCropCoordinates=function()
	{
		return _imageCropCoordinates;
		
	}
	
	this.getType=function()
	{
		return _type;
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
	
	this.draw=function()
	{
		if (_type=="hero" && 
			!( (38 in keysDown || 87 in keysDown)
			|| (40 in keysDown || 83 in keysDown)
			|| (37 in keysDown || 65 in keysDown)
			|| (39 in keysDown || 68 in keysDown)))
			_imageCropCoordinates[0]=_width;
		
		var sx = _imageCropCoordinates[0]; // cropping coordinates for Image
		var sy = _imageCropCoordinates[1]; // sx, sy: x,y coordinates of Image cropping start
		var sw = _imageCropCoordinates[2]; // sw, sh: width and height of cropped Image
		var sh = _imageCropCoordinates[3];
		ctx.drawImage(_unitImage,sx,sy,sw,sh,centerx+_posX-_width/2,centery+_posY-height/2,sw,sh);
		
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
			if (unit.isType("background"))
			{
				ctx.drawImage(unit.getImage(),0,0);
			}			
			else
				unit.draw();
				

		}
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText(debuginfo, 32, 32);
};



