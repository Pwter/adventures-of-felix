function createCanvas()
{
	// Create the canvas
	this.canvas = document.createElement("canvas");
	this.ctx = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	canvas.addEventListener('mousemove', mouseMove, false);
	canvas.addEventListener('click', mouseClick, false);
	canvas.addEventListener('mouseout', mouseOut, false);
	document.getElementById("wrapper").appendChild(canvas);
		
}

var mousePosX=-1;
var mousePosY=-1;

function mouseMove(ev) 
{
	mousePosX = ev.clientX - canvas.offsetLeft;
	mousePosY = ev.clientY - canvas.offsetTop;
	
}

function mouseClick(ev)
{
	//
	
}

function mouseOut(ev)
{
	mousePosX = -1;
	mousePosY = -1;
	
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
	
	//ctx.drawImage(tilelayer,0,0);
	
	debuginfo=mousePosX+","+mousePosY;
	
	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText(debuginfo, 32, 32);
	
};



