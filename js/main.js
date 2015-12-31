//GLOBAL
var width=640+320;
var height=480+160;
var tilewidth=32;
var tileheight=32;

var centerx=width/2;
var centery=height/2;

var herospeed=3;

// wrapper set up
document.getElementById("wrapper").style.width=width;
document.getElementById("wrapper").style.height=height;

// Heroes, monsters, tiles
var units=[];

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) 
{
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) 
{
	delete keysDown[e.keyCode];
}, false);

// Move function
function move(direction)
{
	modifierx=0;
	modifiery=0;
	switch (direction)
		{
			case "left":
				modifierx=1;
				break;
			case "right":
				modifierx=-1;
				break;
			case "up":
				modifiery=1;
				break;
			case "down":
				modifiery=-1;
				break;
			
		};
	
	document.title=modifierx+ " "+modifiery;
	
	for (var i=0; i<units.length; i++)
	{
		if (!units[i].isType("hero"))
		{
			units[i].changePos(modifierx*herospeed,modifiery*herospeed);
			
		}
		else
		{
			units[i].setDirection(direction);
			
		}
		
	}
	
}

// Update game objects
var update = function (modifier) 
{
	if (38 in keysDown || 87 in keysDown) { // Player holding up or w
		move("up");
	}
	if (40 in keysDown || 83 in keysDown) { // Player holding down or s
		move("down");
	}
	if (37 in keysDown || 65 in keysDown) { // Player holding left or a
		move("left");
	}
	if (39 in keysDown || 68 in keysDown) { // Player holding right or d
		move("right");
	}


};

// The main game loop
var main = function () 
{
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();

function game_init()
{
	createCanvas();
	createBackground();
	hero = new Unit("img/charset/felix1.png",0-24,0-32,"hero");
	units.push(hero);
	
	main();
}