function createCanvas()
{
	// Create the canvas
	this.canvas = document.createElement("canvas");
	this.ctx = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	document.getElementById("wrapper").appendChild(canvas);
		
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



